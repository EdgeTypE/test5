<script>
  import { onMount } from 'svelte';
  import { currentLanguage, translations } from '../lib/stores/language.js';
  
  export let encryptMessage;
  export let hasKey;
  
  let messages = [];
  let newMessage = "";
  let userRole = "sender";
  let revealedMessages = new Set();
  
  $: t = translations[$currentLanguage];
  
  function sendMessage() {
    if (!newMessage.trim() || !hasKey) return;
    
    const encryptedContent = encryptMessage(newMessage);
    messages = [...messages, {
      id: Date.now().toString(),
      role: userRole,
      original: newMessage,
      encrypted: encryptedContent,
      timestamp: new Date().toISOString()
    }];
    
    newMessage = "";
  }
  
  function toggleRole() {
    userRole = userRole === "sender" ? "receiver" : "sender";
  }

  function toggleMessage(messageId) {
    if (revealedMessages.has(messageId)) {
      revealedMessages.delete(messageId);
    } else {
      revealedMessages.add(messageId);
    }
    revealedMessages = revealedMessages; // Trigger Svelte reactivity
  }
</script>

<div class="card bg-base-100 shadow-xl mt-8">
  <div class="card-body">
    <div class="flex justify-between items-center">
      <h2 class="card-title">{t.chat.title}</h2>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text mr-2">{t.chat.role}:</span>
          <input type="checkbox" class="toggle toggle-primary" on:change={toggleRole} />
          <span class="label-text ml-2">{userRole === "sender" ? t.chat.sender : t.chat.receiver}</span>
        </label>
      </div>
    </div>
    
    <div class="h-96 overflow-y-auto bg-base-200 rounded-lg p-4 mb-4">
      {#if messages.length === 0}
        <div class="text-center text-base-content/60 mt-8">
          {t.chat.noMessages}
        </div>
      {:else}
        {#each messages as message}
          <div class="chat {message.role === 'sender' ? 'chat-end' : 'chat-start'} mb-4">
            <div class="chat-header">
              {message.role === 'sender' ? t.chat.sender : t.chat.receiver}
              <time class="text-xs opacity-50 ml-1">
                {new Date(message.timestamp).toLocaleTimeString()}
              </time>
            </div>
            <div class="chat-bubble {message.role === 'sender' ? 'chat-bubble-primary' : 'chat-bubble-secondary'} cursor-pointer" on:click={() => toggleMessage(message.id)}>
              <span class="break-all">{revealedMessages.has(message.id) ? message.original : message.encrypted}</span>
            </div>
            <div class="chat-footer opacity-50 text-xs">
              {revealedMessages.has(message.id) ? t.chat.clickToHide : t.chat.clickToReveal}
            </div>
          </div>
        {/each}
      {/if}
    </div>
    
    <div class="form-control">
      <div class="input-group">
        <input
          type="text"
          placeholder={t.chat.inputPlaceholder}
          class="input input-bordered flex-1"
          bind:value={newMessage}
          on:keydown={(e) => e.key === 'Enter' && sendMessage()}
          disabled={!hasKey}
          id="messageInput"
        />
        <button
          class="btn btn-primary"
          on:click={sendMessage}
          disabled={!hasKey}
        >
          {t.chat.send}
        </button>
      </div>
      {#if !hasKey}
        <label for="messageInput" class="label">
          <span class="label-text-alt text-error">{t.chat.needKey}</span>
        </label>
      {/if}
    </div>
  </div>
</div>