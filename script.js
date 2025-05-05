
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("surveyForm");

  // Sonuçların listeleneceği HTML elemanını seçiyoruz
  const resultsList = document.getElementById("results");

  // localStorage'dan daha önce kaydedilmiş cevapları alıyoruz. - boş dizi oluşturuluyor -
  let answers = JSON.parse(localStorage.getItem("surveyAnswers")) || [];

  // sonuç listesini ekrana yazdırır
  function renderResults() {
      // Önceki içerikleri temizleriz
      resultsList.innerHTML = "";

     
      answers.forEach((entry, index) => {
          const li = document.createElement("li"); 
          li.className = "list-group-item"; 
          li.textContent = `${entry.name} --> Adlı Kullanıcının Cevabı --> ${entry.car}`; 
          resultsList.appendChild(li); 
      });
  }

  
  form.addEventListener("submit", function (e) {
      e.preventDefault(); // Sayfanın yeniden yüklenmesini engeller

      
      const name = document.getElementById("name").value.trim();
      const car = document.getElementById("car").value;

      // Eğer herhangi bir değer boşsa işlemi durdur
      if (!name || !car) return;

      // Yeni bir cevap nesnesi oluştur
      const newAnswer = { name, car };

      // Yeni cevabı cevaplara ekler
      answers.push(newAnswer);

      // Güncellenmiş cevapları localStorage’a kaydet
      localStorage.setItem("surveyAnswers", JSON.stringify(answers));

      // Formu sıfırla 
      form.reset();

      // Yeni sonucu ekranda göster
      const newNote = alert("Anket Başarıyla Gönderildi:")
      renderResults();
  });

  // Sayfa yüklenince mevcut kayıtları listele
  renderResults();
});
