const fortunes = [
  "Veverka říká: Dnes ti padne do cesty oříšek štěstí.",
  "Veverka říká: Udrž krok a nezapomeň se podívat nahoru. Tam je něco hezkého.",
  "Veverka říká: Když ti někdo nabídne pomoc, přijmi ji s radostí.",
  "Veverka říká: Tvůj den bude plný malých zázraků.",
  "Veverka říká: Věř svému instinktu a ať je ti světlo průvodcem.",
  "Veverka říká: Hnědý oříšek dnes znamená, že se blíží nový začátek.",
  "Veverka říká: Dech přírody ti dnes přinese klid a nápad.",
  "Veverka říká: Udělej krok vpřed s úsměvem a uvidíš, jak věci splynou.",
  "Veverka říká: Když posloucháš svoje srdce, cesta se rozjasní.",
  "Veverka říká: Dnes je den, kdy můžeš vysadit semínko něčeho krásného."
];

const button = document.getElementById("fortuneButton");
const bubbleText = document.getElementById("bubbleText");

function showFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  bubbleText.textContent = fortunes[randomIndex];
}

button.addEventListener("click", showFortune);
button.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    showFortune();
  }
});

