document.addEventListener("DOMContentLoaded", function () {
  const qrText = document.getElementById("qr-text");
  const generateBtn = document.getElementById("generate-btn");
  const qrCodeContainer = document.getElementById("qr-code");
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  generateBtn.addEventListener("click", function () {
    const text = qrText.value.trim();

    if (text) {
      // Видалити попередній QR-код, якщо він є
      qrCodeContainer.innerHTML = "";

      // Створити новий QR-код
      const qrCode = new QRCode(qrCodeContainer, {
        text: text,
        width: 128,
        height: 128,
      });
    } else {
      alert("Please enter text or URL.");
    }
  });

  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  });
});
