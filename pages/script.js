
let words = [];

// Fetch and load the word list
fetch('words.json')
    .then(response => response.json())
    .then(data => {
        words = Object.keys(data); // Extract keys as word list
    })
    .catch(error => console.error("Error loading words:", error));

function handleKeyPress(event) {
    if (event.key === "Enter") {
        searchWord();
    }
}

function searchWord() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    if (query) {
        localStorage.setItem("searchQuery", query); // Store query in localStorage
        window.location.href = "results.html"; // Navigate to results page
    }
}
