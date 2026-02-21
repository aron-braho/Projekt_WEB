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
            clickCounter = 0;
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
                    link: "../HTML/Glass_Onion.html"
                },
                "midnight club": {
                    title: "Midnight Club",
                    desc: "At a manor with a mysterious history, eight members of the Midnight Club meet each night at midnight.",
                    img: "../img/d.jpg",
                    link: "../HTML/the-midnight.html"
                },
                "knives out": {
                    title: "Knives Out",
                    desc: "Harlan Thrombey, a reputable crime novelist, is found dead after his 85th birthday celebrations.",
                    img: "../img/kinvs.jpeg",
                    link: "../HTML/knives-out.html"
                },
                "fractured": {
                    title: "Fractured",
                    desc: "Ray and Joanne take their daughter to the hospital after she fractures her hand, but when they vanish, Ray searches for them.",
                    img: "../img/fractured.jpeg",
                    link: "../HTML/fractured.html"
                },
                "the weekend away": {
                    title: "The Weekend Away",
                    desc: "When her best friend vanishes during a girls trip to Croatia, a woman races to figure out what happened.",
                    img: "../img/wa.jpeg",
                    link: "../HTML/the-weekend-away.html"
                },
                "the guilty": {
                    title: "The Guilty",
                    desc: "A demoted police detective working as a 911 operator races to save a distressed caller amid shocking revelations.",
                    img: "../img/the-guilty.jpeg",
                    link: "../HTML/the-guilty.html"
                },
                "the little things": {
                    title: "The Little Things",
                    desc: "A local sheriff is sent to LA for evidence-gathering but ends up hunting a psychotic killer with a former detective.",
                    img: "../img/the-little-things.jpeg",
                    link: "../HTML/the-little-things.html"
                },
                "home alone": {
                    title: "Home Alone",
                    desc: "Kevin ends up in New York, separated from his family, and faces two old enemies plotting to rob a toy store.",
                    img: "../img/home-alone.jpeg",
                    link: "../HTML/home-alone.html"
                },
                "enchanted": {
                    title: "Enchanted",
                    desc: "A princess from a fairy tale world ends up in New York, finding love and facing an evil stepmother.",
                    img: "../img/enchant.jpg",
                    link: "../HTML/enchant.html"
                },
                "inside out 2": {
                    title: "Inside Out 2",
                    desc: "Joy, Sadness, Anger, Fear, and Disgust manage things well until Anxiety arrives, leaving them uncertain how to react.",
                    img: "../img/io 2.jpeg",
                    link: "../HTML/indside.html"
                },
                "if": {
                    title: "IF",
                    desc: "A girl who can see imaginary friends sets off on a magical journey to reunite them with their kids.",
                    img: "../img/if.jpeg",
                    link: "../HTML/if.html"
                },
                "mery poppins": {
                    title: "Mery Poppins",
                    desc: "Mary Poppins returns to the Banks family, guiding them through magical adventures to escape danger.",
                    img: "../img/meripop.jpeg",
                    link: "../HTML/mery popp.html"
                },
                "my spy": {
                    title: "My Spy",
                    desc: "LCIA agent JJ teams up with his protégé Sophie to stop a nuclear plot targeting the Vatican, disrupting a high school choir trip to Italy. ",
                    img: "../img/my spy.jpeg",
                    link: "../HTML/my spy.html"
                },
                "clifford": {
                    title: "Clifford",
                    desc: "Emily Elizabeth's life turns interesting when a magical animal rescuer gifts her a cute red puppy,",
                    img: "../img/clifordi.jpg",
                    link: "../HTML/her.html"
                },
                "mrs doubtfire": {
                    title: "Mrs Doubtfire",
                    desc: "Daniel, an actor, disguises himself as Mrs Doubtfire, in order to spend time with his children, who are in his former wife's custody.",
                    img: "../img/ms dbh",
                    link: "../HTML/mrs doub.html"
                },
                "mr bean": {
                    title: "Mr Bean",
                    desc: "The childish Mr Bean uses his unusual wit to fulfil everyday tasks. But, more often than not, he creates trouble for himself.",
                    img: "../img/mrbean",
                    link: "../HTML/mrbean.html"
                },
                "family switch": {
                    title: "Family Switch",
                    desc: "When family members switch bodies, their hilarious journey to find their way back to normal will bring them closer together.",
                    img: "../img/fam",
                    link: "../HTML/fam.html"
                },
                "yes day": {
                    title: "Yes Day",
                    desc: "Allison and Carlos give their three kids a 'Yes Day,' where the kids make the rules for 24 hours.",
                    img: "../img/yes",
                    link: "../HTML/yesday.html"
                },
                "trouble": {
                    title: "Trouble",
                    desc: "Wrongfully convicted of murder, an electronics salesman fights police corruption and conspiracies to prove his innocence.",
                    img: "../img/trouble.jpeg",
                    link: "../HTML/trouble.html"
                },
                "lift": {
                    title: "Lift",
                    desc: "A master thief is recruited by his ex and the FBI to lead an impossible heist on a 777 flight from London to Zurich.",
                    img: "../img/lift.jpeg",
                    link: "../HTML/lift.html"
                },
                "fall guy": {
                    title: "Fall Guy",
                    desc: "Retired stuntman Colt Seavers returns to action when a movie star vanishes, only to uncover a deadly plot.",
                    img: "../img/fall guy.jpeg",
                    link: "../HTML/fallguy.html"
                },
                "rebel redge": {
                    title: "Rebel Redge",
                    desc: "A former Marine battles small-town corruption after local police seize the cash he needs to bail out his cousin.",
                    img: "../img/rebel redge.jpeg",
                    link: "../HTML/rebel.html"
                },
                "children's train": {
                    title: "Children's Train",
                    desc: "In late 1940s Italy,a mother makes a decision to send her son to the north, where he catches glimpses of a new life away from poverty.",
                    img: "../img/the children train.jpeg",
                    link: "../HTML/thechildren.html"
                },
                "carry-on": {
                    title: "Carry-On",
                    desc: "A young airline guard is blackmailed by a passenger threatening to smuggle a dangerous package on a Christmas Eve flight.",
                    img: "../img/carry on.jpeg",
                    link: "../HTML/carry.html"
                },
                "stranger things": {
                    title: "Stranger Things",
                    desc: "A group of kids uncovers a parallel world, faces supernatural threats, and tries to save their missing friend.",
                    img: "../img/telas-stranger-things.jpg",
                    link: "../HTML/strangerthing.html"
                },
                "gladiator": {
                    title: "Gladiator",
                    desc: "After the death of Maximus,Lucius must enter the Colosseum after the powerful emperors of Rome conquer his home. ",
                    img: "../img/gladiator.jpeg",
                    link: "../HTML/gladi.html"
                },
                "extraction 2": {
                    title: "Extraction 2",
                    desc: "Back from the brink of death, commando Tyler Rake embarks on a dangerous mission ",
                    img: "../img/e2.jpeg",
                    link: "../HTML/extration.html"
                }
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