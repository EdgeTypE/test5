<script>
  import { onMount } from 'svelte';
  import { currentLanguage, translations } from './lib/stores/language.js';
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import ChatInterface from './lib/ChatInterface.svelte'

  // State variables
  let imageData = null;
  let keyData = "";
  let inputText = "";
  let outputText = "";
  let mode = "encrypt"; // or "decrypt"
  let imagePreviewUrl = "";
  let loading = false;
  let theme = "light";

  // Get translations based on current language
  $: t = translations[$currentLanguage];

  function toggleLanguage() {
    $currentLanguage = $currentLanguage === 'en' ? 'tr' : 'en';
  }

  // Convert uploaded image to Base64
  async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    loading = true;
    
    try {
      // Create image preview
      imagePreviewUrl = URL.createObjectURL(file);
      
      // Read file as base64
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target.result;
        imageData = base64String;
        
        // Generate key from image data
        keyData = generateKeyFromImage(base64String);
        
        // Process encryption/decryption if text is present
        if (inputText) {
          processText();
        }
        
        loading = false;
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error processing image:", error);
      loading = false;
    }
  }

  // Generate encryption key from image data
  function generateKeyFromImage(base64Image) {
    // Extract the actual base64 data (remove the data:image/*;base64, prefix)
    const base64Data = base64Image.split(',')[1];
    return base64Data;
  }

  // Process text based on selected mode
  function processText() {
    if (!keyData || !inputText) {
      outputText = "";
      return;
    }

    if (mode === "encrypt") {
      outputText = encryptText(inputText, keyData);
    } else {
      outputText = decryptText(inputText, keyData);
    }
  }

  // One-time pad encryption
  function encryptText(text, key) {
    let result = "";
    const textBytes = textToBytes(text);
    const keyBytes = base64ToBytes(key);
    
    for (let i = 0; i < textBytes.length; i++) {
      // Use modulo to cycle through key bytes
      const keyByte = keyBytes[i % keyBytes.length];
      // XOR operation for one-time pad
      const encryptedByte = textBytes[i] ^ keyByte;
      result += String.fromCharCode(encryptedByte);
    }
    
    return btoa(result); // Convert to base64 for display
  }

  // One-time pad decryption
  function decryptText(ciphertext, key) {
    try {
      let result = "";
      const textBytes = base64ToBytes(ciphertext);
      const keyBytes = base64ToBytes(key);
      
      for (let i = 0; i < textBytes.length; i++) {
        // Use modulo to cycle through key bytes
        const keyByte = keyBytes[i % keyBytes.length];
        // XOR operation for one-time pad (decryption is the same as encryption)
        const decryptedByte = textBytes[i] ^ keyByte;
        result += String.fromCharCode(decryptedByte);
      }
      
      return result;
    } catch (error) {
      console.error("Decryption error:", error);
      return "Decryption error: Invalid input";
    }
  }

  // Helper function to convert text to byte array
  function textToBytes(text) {
    const bytes = new Uint8Array(text.length);
    for (let i = 0; i < text.length; i++) {
      bytes[i] = text.charCodeAt(i);
    }
    return bytes;
  }

  // Helper function to convert base64 to byte array
  function base64ToBytes(base64) {
    try {
      const binaryString = atob(base64);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes;
    } catch (e) {
      console.error("Base64 conversion error:", e);
      return new Uint8Array();
    }
  }

  // Toggle theme
  function toggleTheme() {
    theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }

  // Functions for chat encryption
  function chatEncrypt(text) {
    return encryptText(text, keyData);
  }
  
  function chatDecrypt(text) {
    return decryptText(text, keyData);
  }

  // Watch for input text changes
  $: if (inputText && keyData) {
    processText();
  }

  // Set initial theme
  onMount(() => {
    document.documentElement.setAttribute("data-theme", theme);
  });
</script>

<div class="min-h-screen bg-base-200" data-theme={theme}>
  <div class="navbar bg-base-100 shadow-lg">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">{t.appTitle}</a>
    </div>
    <div class="flex-none gap-2">
      <button class="btn btn-ghost btn-circle" on:click={toggleLanguage}>
        {$currentLanguage === 'en' ? '🇬🇧' : '🇹🇷'}
      </button>
      <label class="swap swap-rotate">
        <input type="checkbox" on:change={toggleTheme} />
        <div class="swap-on">🌙</div>
        <div class="swap-off">🔆</div>
      </label>
    </div>
  </div>

  <div class="container mx-auto p-4">
    <div class="hero bg-base-100 rounded-box shadow-xl mb-8">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">{t.hero.title}</h1>
          <p class="py-6">{t.hero.description}</p>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Left Column: Upload and Key Generation -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{t.keyImage.title}</h2>
          
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">{t.keyImage.uploadLabel}</span>
            </label>
            <input 
              type="file" 
              accept="image/*" 
              on:change={handleImageUpload} 
              class="file-input file-input-bordered file-input-primary w-full" 
            />
          </div>
          
          {#if loading}
            <div class="flex justify-center my-4">
              <span class="loading loading-spinner loading-lg text-primary"></span>
            </div>
          {:else if imagePreviewUrl}
            <div class="my-4">
              <div class="badge badge-success mb-2">{t.keyImage.imageLoaded}</div>
              <div class="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img src={imagePreviewUrl} alt="Key Image" class="w-full h-full object-contain" />
              </div>
            </div>
          {:else}
            <div class="my-4 p-8 bg-base-200 rounded-lg flex items-center justify-center">
              <p class="text-base-content/60">{t.keyImage.noImage}</p>
            </div>
          {/if}
          
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">{t.mode.label}</span>
              <div class="tabs tabs-boxed">
                <a 
                  class="tab {mode === 'encrypt' ? 'tab-active' : ''}" 
                  on:click={() => { mode = "encrypt"; processText(); }}
                >
                  {t.mode.encrypt}
                </a>
                <a 
                  class="tab {mode === 'decrypt' ? 'tab-active' : ''}" 
                  on:click={() => { mode = "decrypt"; processText(); }}
                >
                  {t.mode.decrypt}
                </a>
              </div>
            </label>
          </div>
        </div>
      </div>

      <!-- Right Column: Text Input/Output -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{mode === 'encrypt' ? t.encrypt.title : t.decrypt.title}</h2>
          
          <div class="form-control">
            <label class="label">
              <span class="label-text">
                {mode === 'encrypt' ? t.encrypt.inputLabel : t.decrypt.inputLabel}
              </span>
            </label>
            <textarea 
              bind:value={inputText} 
              class="textarea textarea-bordered h-32" 
              placeholder={mode === 'encrypt' ? t.encrypt.placeholder : t.decrypt.placeholder}
            ></textarea>
          </div>
          
          <div class="divider">Result</div>
          
          <div class="form-control">
            <label class="label">
              <span class="label-text">
                {mode === 'encrypt' ? t.encrypt.outputLabel : t.decrypt.outputLabel}
              </span>
              {#if outputText}
                <button 
                  class="btn btn-sm btn-outline"
                  on:click={() => navigator.clipboard.writeText(outputText)}
                >
                  {t.encrypt.copy}
                </button>
              {/if}
            </label>
            <textarea 
              readonly 
              value={outputText} 
              class="textarea textarea-bordered h-32 font-mono"
              placeholder={keyData ? 
                (mode === 'encrypt' ? t.encrypt.resultPlaceholder : t.decrypt.resultPlaceholder) 
                : t.keyImage.uploadLabel}
            ></textarea>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Interface -->
    <ChatInterface 
      encryptMessage={chatEncrypt}
      decryptMessage={chatDecrypt}
      hasKey={!!keyData}
    />

    <div class="mt-8 bg-base-100 p-6 rounded-box shadow-lg">
      <h2 class="text-2xl font-bold mb-4">{t.howItWorks.title}</h2>
      <div class="steps steps-vertical lg:steps-horizontal">
        <div class="step step-primary">{t.howItWorks.step1}</div>
        <div class="step step-primary">{t.howItWorks.step2}</div>
        <div class="step step-primary">{t.howItWorks.step3}</div>
        <div class="step step-primary">{t.howItWorks.step4}</div>
        <div class="step step-primary">{t.howItWorks.step5}</div>
      </div>
      <div class="alert mt-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{t.footer.usage.text2}</span>
      </div>
    </div>
  </div>

  <footer class="footer p-10 bg-base-200 text-base-content mt-10">
    <div>
      <span class="footer-title">{t.footer.securityNote.title}</span>
      <p>{t.footer.securityNote.text}</p>
    </div>
    <div>
      <span class="footer-title">{t.footer.usage.title}</span>
      <p>{t.footer.usage.text1}</p>
      <p>{t.footer.usage.text2}</p>
    </div>
  </footer>
</div>
