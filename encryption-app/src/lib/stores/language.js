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
    },
    security: {
      title: 'Why One-Time Pad is Unbreakable',
      subtitle: 'The Most Secure Encryption in the Universe',
      facts: [
        'Even with all computers on Earth working together, it would take longer than the age of the universe (13.8 billion years) to try all possible keys.',
        'There are about 10⁸⁰ atoms in the observable universe. For a 256-character message, there are 256⁸ possible keys - vastly more than the number of atoms!',
        'According to quantum mechanics and information theory, one-time pad is the only mathematically proven unbreakable encryption method.',
        'Each possible decryption is equally likely, making it impossible to know which one is correct without the exact key.',
        'Even if you had a computer made from all matter in the universe, running at the maximum speed physics allows, you still couldn\'t break it.'
      ],
      conclusion: 'This is why intelligence agencies and governments have historically used one-time pads for their most sensitive communications.'
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
    },
    security: {
      title: 'One-Time Pad Neden Kırılamaz',
      subtitle: 'Evrendeki En Güvenli Şifreleme',
      facts: [
        'Dünyadaki tüm bilgisayarlar birlikte çalışsa bile, tüm olası anahtarları denemek evrenin yaşından (13.8 milyar yıl) daha uzun sürerdi.',
        'Gözlemlenebilir evrende yaklaşık 10⁸⁰ atom var. 256 karakterlik bir mesaj için 256⁸ olası anahtar var - bu, atom sayısından çok daha fazla!',
        'Kuantum mekaniği ve bilgi teorisine göre, one-time pad matematiksel olarak kanıtlanmış tek kırılamaz şifreleme yöntemidir.',
        'Her olası çözüm eşit derecede olasıdır, bu da doğru anahtara sahip olmadan hangi çözümün doğru olduğunu bilmeyi imkansız kılar.',
        'Evrendeki tüm maddelerden yapılmış, fiziğin izin verdiği maksimum hızda çalışan bir bilgisayarınız olsa bile kıramazsınız.'
      ],
      conclusion: 'Bu nedenle istihbarat teşkilatları ve hükümetler tarih boyunca en hassas iletişimleri için one-time pad kullanmışlardır.'
    }
  }
};