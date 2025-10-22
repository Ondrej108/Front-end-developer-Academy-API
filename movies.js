// API MOVIES

const movieSelect = document.getElementById("movieOption");

movieSelect.addEventListener("change", () => {
  const selectedValue = movieSelect.value;
  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
    selectedValue
  )}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const movContainer = document.getElementById("movieContainer");
      movContainer.innerHTML = "";

      data.forEach((item) => {
        if (item.show.image && item.show.image.medium) {
          movContainer.innerHTML += `<img src="${item.show.image.medium}" alt="${item.show.name}">`;
        }
      });
    })
    .catch((error) => {
      alert("Omlouváme se, došlo k chybě při načítání dat.");
    });
});

// BUTTON BACK TO MAIN

const movButton = document.getElementById("movBtn");

movButton.addEventListener("click", () => {
  window.location.href = "main.html";
});
