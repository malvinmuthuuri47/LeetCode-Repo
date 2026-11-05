let movies_list = [];
let timeoutId;

let currentPage = 1;
const pageSize = 10;
let currentMovies = [];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const pagination = document.getElementById("pagination");


async function loadMovies() {
    try {
        const response = await fetch("movies_titles.json");

        if (!response.ok) {
            throw new Error("Failed to load movies");
        }

        movies_list = await response.json();
        displayMovies(movies_list);
    } catch (error) {
        console.error(error);
    };
};

loadMovies();


function displayMovies(movieList) {
    currentMovies = movieList;
    currentPage = 1;

    renderMoviesPage();
};

function renderMoviesPage() {
    searchResults.innerHTML = "";

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedMovies = currentMovies.slice(startIndex, endIndex);

    paginatedMovies.forEach(function(movie) {
        const movieElement = document.createElement("div");

        movieElement.textContent = movie.title;
        searchResults.appendChild(movieElement);
    });

    renderPagination();
}

function renderPagination() {
    pagination.innerHTML = "";

    const totalPages = Math.ceil(currentMovies.length / pageSize);

    if (totalPages <= 1) {
        return;
    }

    const previousButton = document.createElement("button");
    previousButton.textContent = "Previous";
    previousButton.disabled = currentPage === 1;

    previousButton.addEventListener("click", function() {
        currentPage--;
        renderMoviesPage();
    });

    const pageInfo = document.createElement("span");
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.disabled = currentPage === totalPages;

    nextButton.addEventListener("click", function() {
        currentPage++;
        renderMoviesPage();
    });

    pagination.appendChild(previousButton);
    pagination.appendChild(pageInfo);
    pagination.appendChild(nextButton);
}

// Debouncing
searchInput.addEventListener("input", function() {
    clearTimeout(timeoutId);

    const query = searchInput.value.toLowerCase();
    if (query === "") {
        displayMovies(movies_list);
        return;
    }

    timeoutId = setTimeout(function() {
        
        const filteredMovies = movies_list.filter(function(movie) {
            return movie.title.toLowerCase().includes(query);
        });

        displayMovies(filteredMovies);
    }, 500);

});


// No debouncing
// function searchWithoutDebouncing() {
//     searchInput.addEventListener("input", function() {
//         const query = searchInput.value.toLowerCase().trim();

//         if (query === "") {
//             displayMovies(movies_list);
//             return;
//         }

//         const filteredMovies = movies_list.filter(function(movie) {
//             return movie.title.toLowerCase().includes(query);
//         });

//         displayMovies(filteredMovies);
//     })
// }

// searchWithoutDebouncing();