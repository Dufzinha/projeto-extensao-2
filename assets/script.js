document.addEventListener("DOMContentLoaded", () => {
    const animals = document.querySelectorAll(".animal");
    const searchInput = document.getElementById("search");

    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.toLowerCase();
        animals.forEach(animal => {
            const name = animal.querySelector("h2").textContent.toLowerCase();
            if (name.includes(searchText)) {
                animal.style.display = "block";
            } else {
                animal.style.display = "none";
            }
        });
    });
});
