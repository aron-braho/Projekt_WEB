// Movie List Scrolling
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const items = movieLists[i].querySelectorAll(".movie-list-item").length;
    let clickCounter = 0;

    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;

        let currentTransform = getComputedStyle(movieLists[i]).transform;
        let currentX = currentTransform !== "none" ? parseFloat(currentTransform.split(",")[4]) : 0;

        if (items - (4 + clickCounter) + (4 - ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${currentX - 300}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});

window.addEventListener("resize", () => {
    movieLists.forEach((list) => {
        list.style.transform = "translateX(0)";
    });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle, .search-container,#search-movies"
);

ball.addEventListener("click", () => {
    items.forEach((item) => item.classList.toggle("active"));
    ball.classList.toggle("active");

    const searchContainer = document.querySelector(".search-container");
    searchContainer.classList.toggle("light-mode");
    const searchMovies = document.querySelector("#search-movies");
    searchMovies.classList.toggle("light-mode");

    // Heqim inline styles nese ka
    searchContainer.style.backgroundColor = "";
    searchContainer.style.color = "";
    searchContainer.querySelector("input").style.backgroundColor = "";
    searchContainer.querySelector("input").style.color = "";

    // Persist light/dark mode using localStorage
    if (ball.classList.contains('active')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Apply saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
    ball.classList.add('active');
    items.forEach((item) => {
        item.classList.add('active');
    });
}

document.getElementById('search-btn').addEventListener('click', function () {
    const query = document.getElementById('search-bar').value.trim().toLowerCase();
    const moviesContainer = document.getElementById('search-movies');
    moviesContainer.innerHTML = ''; // Clear previous results
    moviesContainer.style.display = 'block';
    
    const movies = {
        "glass onion": {
            title: "Glass Onion",
            desc: "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island.",
            img: "../img/g.jpg",
            link: "Glass_Onion.html"
        },
        "midnight club": {
            title: "Midnight Club",
            desc: "At a manor with a mysterious history, eight members of the Midnight Club meet each night at midnight.",
            img: "../img/d.jpg",
            link: "the midnight.html"
        },
        // ... (rest of your movies data)
    };

    if (movies[query]) {
        const movie = movies[query];
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie-list-item"); // Add the movie-list-item class for styling
        movieElement.innerHTML = `
            <img class="movie-list-item-img" src="${movie.img}" alt="${movie.title}">
            <span class="movie-list-item-title">${movie.title}</span>
            <p class="movie-list-item-desc">${movie.desc}</p>
            <button class="movie-list-item-button" onclick="location.href='${movie.link}';">WATCH THE TRAILER</button>
        `;
        moviesContainer.appendChild(movieElement);
    } else {
        moviesContainer.innerHTML = "<p>No results found.</p>";
    }
});