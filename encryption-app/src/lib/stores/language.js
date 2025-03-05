import { writable } from 'svelte/store';

export const currentLanguage = writable('en');

export const translations = {
  en: {
    appTitle: 'Image-Based Encryption',
    hero: {
      title: 'One-Time Pad Encryption',
      description: 'Upload an image to use as your encryption key. The image will be converted to a key for one-time pad encryption. This provides strong encryption security as long as the key (image) is kept secret.'
    },
    keyImage: {
      title: 'Key Image',
      uploadLabel: 'Upload an image to use as encryption key',
      noImage: 'No image selected',
      imageLoaded: 'Image Loaded'
    },
    mode: {
      label: 'Mode',
      encrypt: 'Encrypt',
      decrypt: 'Decrypt'
    },
    chat: {
      title: 'Encrypted Chat Simulation',
      role: 'Role',
      sender: 'Sender',
      receiver: 'Receiver',
      noMessages: 'No messages yet. Start chatting!',
      inputPlaceholder: 'Type your message...',
      send: 'Send',
      needKey: 'Upload an image key first to start chatting',
      clickToReveal: 'Click to reveal original message',
      clickToHide: 'Click to hide original message'
    },
    howItWorks: {
      title: 'How It Works',
      step1: 'Upload an image',
      step2: 'Image is converted to a binary key',
      step3: 'Enter text to encrypt/decrypt',
      step4: 'One-time pad applied using XOR operation',
      step5: 'Result is displayed as Base64 (for encryption)'
    },
    footer: {
      securityNote: {
        title: 'Security Note',
        text: 'This is a client-side encryption tool. Your data never leaves your browser.'
      },
      usage: {
        title: 'Using One-Time Pad',
        text1: 'One-time pad provides perfect secrecy when used correctly.',
        text2: 'The key must be random, as long as the message, used only once, and kept secret.'
      }
    },
    encrypt: {
      title: 'Encrypt Text',
      inputLabel: 'Input Text',
      outputLabel: 'Encrypted Text (Base64)',
      placeholder: 'Enter text to encrypt',
      resultPlaceholder: 'Encrypted output will appear here',
      copy: 'Copy'
    },
    decrypt: {
      title: 'Decrypt Text',
      inputLabel: 'Encrypted Text (Base64)',
      outputLabel: 'Decrypted Text',
      placeholder: 'Enter encrypted text to decrypt',
      resultPlaceholder: 'Decrypted output will appear here',
      error: 'Decryption error: Invalid input'
    }
  },
  tr: {
    appTitle: 'Görüntü Tabanlı Şifreleme',
    hero: {
      title: 'One-Time Pad Şifreleme',
      description: 'Şifreleme anahtarı olarak bir görüntü yükleyin. Görüntü, one-time pad şifreleme için bir anahtara dönüştürülecek. Anahtar (görüntü) gizli tutulduğu sürece güçlü şifreleme güvenliği sağlar.'
    },
    keyImage: {
      title: 'Anahtar Görüntü',
      uploadLabel: 'Şifreleme anahtarı olarak kullanılacak görüntüyü yükleyin',
      noImage: 'Görüntü seçilmedi',
      imageLoaded: 'Görüntü Yüklendi'
    },
    mode: {
      label: 'Mod',
      encrypt: 'Şifrele',
      decrypt: 'Şifre Çöz'
    },
    chat: {
      title: 'Şifreli Sohbet Simülasyonu',
      role: 'Rol',
      sender: 'Gönderen',
      receiver: 'Alıcı',
      noMessages: 'Henüz mesaj yok. Sohbete başlayın!',
      inputPlaceholder: 'Mesajınızı yazın...',
      send: 'Gönder',
      needKey: 'Sohbete başlamak için önce bir görüntü anahtarı yükleyin',
      clickToReveal: 'Orijinal mesajı görmek için tıklayın',
      clickToHide: 'Orijinal mesajı gizlemek için tıklayın'
    },
    howItWorks: {
      title: 'Nasıl Çalışır',
      step1: 'Görüntü yükle',
      step2: 'Görüntü ikili anahtara dönüştürülür',
      step3: 'Şifrelenecek metni gir',
      step4: 'One-time pad XOR işlemi uygulanır',
      step5: 'Sonuç Base64 olarak gösterilir (şifreleme için)'
    },
    footer: {
      securityNote: {
        title: 'Güvenlik Notu',
        text: 'Bu istemci tarafı bir şifreleme aracıdır. Verileriniz asla tarayıcınızdan çıkmaz.'
      },
      usage: {
        title: 'One-Time Pad Kullanımı',
        text1: 'One-time pad doğru kullanıldığında mükemmel gizlilik sağlar.',
        text2: 'Anahtar rastgele, mesaj kadar uzun, bir kez kullanılmalı ve gizli tutulmalıdır.'
      }
    },
    encrypt: {
      title: 'Metni Şifrele',
      inputLabel: 'Giriş Metni',
      outputLabel: 'Şifrelenmiş Metin (Base64)',
      placeholder: 'Şifrelenecek metni girin',
      resultPlaceholder: 'Şifrelenmiş çıktı burada görünecek',
      copy: 'Kopyala'
    },
    decrypt: {
      title: 'Şifreyi Çöz',
      inputLabel: 'Şifrelenmiş Metin (Base64)',
      outputLabel: 'Çözülmüş Metin',
      placeholder: 'Çözülecek şifreli metni girin',
      resultPlaceholder: 'Çözülmüş metin burada görünecek',
      error: 'Şifre çözme hatası: Geçersiz girdi'
    }
  }
};