// ICON

const icon = document.getElementById("icon");

window.addEventListener("scroll", () => {
  icon.style.display = window.scrollY >= 100 ? "block" : "none";
});

icon.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// BUTTON > REGISTRATION

document.getElementById("headBtn").addEventListener("click", () => {
  window.location.href = "registrace.html";
});

// BUTTON > MOVIES

document.getElementById("subSecBtn").addEventListener("click", () => {
  window.location.href = "movies.html";
});
