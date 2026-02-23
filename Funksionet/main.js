// CAROUSEL / ARROW NAVIGATION
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

        // Check if there are still items to slide to
        if (items - (4 + clickCounter) + (4 - ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${currentX - 300}px)`;
        } else {
            // Reset to beginning if end is reached
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});

// RESET CAROUSELS ON RESIZE
window.addEventListener("resize", () => {
    movieLists.forEach((list) => {
        list.style.transform = "translateX(0)";
    });
});

// SEARCH FUNCTIONALITY
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
            desc: "LCIA agent JJ teams up with his protégé Sophie to stop a nuclear plot targeting the Vatican.",
            img: "../img/my spy.jpeg",
            link: "../HTML/my spy.html"
        },
        "clifford": {
            title: "Clifford",
            desc: "Emily Elizabeth's life turns interesting when a magical animal rescuer gifts her a cute red puppy.",
            img: "../img/clifordi.jpg",
            link: "../HTML/her.html"
        },
        "mrs doubtfire": {
            title: "Mrs Doubtfire",
            desc: "Daniel, an actor, disguises himself as Mrs Doubtfire in order to spend time with his children.",
            img: "../img/ms dbh",
            link: "../HTML/mrs doub.html"
        },
        "mr bean": {
            title: "Mr Bean",
            desc: "The childish Mr Bean uses his unusual wit to fulfil everyday tasks.",
            img: "../img/mrbean",
            link: "../HTML/mrbean.html"
        },
        "family switch": {
            title: "Family Switch",
            desc: "When family members switch bodies, their hilarious journey to find their way back home begins.",
            img: "../img/fam",
            link: "../HTML/fam.html"
        },
        "yes day": {
            title: "Yes Day",
            desc: "Allison and Carlos give their three kids a 'Yes Day,' where the kids make the rules.",
            img: "../img/yes",
            link: "../HTML/yesday.html"
        },
        "trouble": {
            title: "Trouble",
            desc: "Wrongfully convicted of murder, an electronics salesman fights police corruption.",
            img: "../img/trouble.jpeg",
            link: "../HTML/trouble.html"
        },
        "lift": {
            title: "Lift",
            desc: "A master thief is recruited by his ex and the FBI to lead an impossible heist.",
            img: "../img/lift.jpeg",
            link: "../HTML/lift.html"
        },
        "fall guy": {
            title: "Fall Guy",
            desc: "Retired stuntman Colt Seavers returns to action when a movie star vanishes.",
            img: "../img/fall guy.jpeg",
            link: "../HTML/fallguy.html"
        },
        "rebel redge": {
            title: "Rebel Redge",
            desc: "A former Marine battles small-town corruption after local police seize his cash.",
            img: "../img/rebel redge.jpeg",
            link: "../HTML/rebel.html"
        },
        "children's train": {
            title: "Children's Train",
            desc: "In late 1940s Italy, a mother sends her son to the north for a better life.",
            img: "../img/the children train.jpeg",
            link: "../HTML/thechildren.html"
        },
        "carry-on": {
            title: "Carry-On",
            desc: "A young airline guard is blackmailed by a passenger on a Christmas Eve flight.",
            img: "../img/carry on.jpeg",
            link: "../HTML/carry.html"
        },
        "stranger things": {
            title: "Stranger Things",
            desc: "A group of kids uncovers a parallel world and faces supernatural threats.",
            img: "../img/telas-stranger-things.jpg",
            link: "../HTML/strangerthing.html"
        },
        "gladiator": {
            title: "Gladiator",
            desc: "Lucius must enter the Colosseum after the powerful emperors of Rome conquer his home.",
            img: "../img/gladiator.jpeg",
            link: "../HTML/gladi.html"
        },
        "extraction 2": {
            title: "Extraction 2",
            desc: "Back from the brink of death, commando Tyler Rake embarks on a dangerous mission.",
            img: "../img/e2.jpeg",
            link: "../HTML/extration.html"
        }
    };

    if (movies[query]) {
        const movie = movies[query];
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie-list-item");
        movieElement.innerHTML = `
            <img class="movie-list-item-img" src="${movie.img}" alt="${movie.title}">
            <span class="movie-list-item-title">${movie.title}</span>
            <p class="movie-list-item-desc">${movie.desc}</p>
            <button class="movie-list-item-button" onclick="location.href='${movie.link}';">WATCH THE TRAILER</button>
        `;
        moviesContainer.appendChild(movieElement);
    } else {
        moviesContainer.innerHTML = "<p style='color:white; padding:20px;'>No results found.</p>";
    }
});