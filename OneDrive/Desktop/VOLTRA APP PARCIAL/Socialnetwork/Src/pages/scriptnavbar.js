const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

const search = document.getElementById("search");
const results = document.getElementById("results");

const games = [
  "Call of Duty",
  "Candy Crush",
  "CarX Drift",
  "Clash Royale",
  "Cyberpunk",
  "Counter Strike"
];

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  results.innerHTML = "";

  if (value.length >= 2) {
    const filtered = games.filter(game =>
      game.toLowerCase().startsWith(value)
    );

    if (filtered.length === 0) {
      results.style.display = "none";
      return;
    }

    results.style.display = "block";

    filtered.forEach(game => {
      const div = document.createElement("div");
      div.textContent = game;

      div.addEventListener("click", () => {
        search.value = game;
        results.innerHTML = "";
        results.style.display = "none";
      });

      results.appendChild(div);
    });

  } else {
    results.style.display = "none";
  }
});