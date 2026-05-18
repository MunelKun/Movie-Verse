// Konfigurasi TMDB API
const TMDB_BEARER = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjI0YzE1YzQ3Y2JjYjE0YjFhNzliZDNjZjI2ODU4ZCIsInN1YiI6IjY2MjE2ZmIxYTRhYzRkMDE2MzU3ZjI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cgBQGvIfIMFTZQrwbpwhcKRsx2zks7S-qUIBRcGyCJA';
const API_BASE = 'https://api.themoviedb.org/3';

let currentMovies = [];

// Mapping trailer YouTube berdasarkan judul film (real trailer)
const TRAILER_MAP = {
    "joker": "zAGVQLHvwOY",
    "dune": "Way9Dexny3w",
    "deadpool": "id2liK64O-Q",
    "oppenheimer": "uYPbbksJxIg",
    "spider-man": "shW9i6k8cB0",
    "spider man": "shW9i6k8cB0",
    "spiderman": "shW9i6k8cB0",
    "john wick": "qEVUtrk8_B4",
    "the batman": "mqqft2x_Aa4",
    "batman": "mqqft2x_Aa4",
    "avatar": "d9MyW72ELq0",
    "barbie": "pBk4NYhWNMM",
    "interstellar": "zSWdZVtXT7E",
    "inception": "YoHD9XEInc0",
    "the dark knight": "EXeTwQWrcwY",
    "gladiator": "P5ieIbInFpg",
    "titanic": "kVrqfYjkTdQ",
    "avengers": "eOrNdBpGMv8",
    "iron man": "8ugaeA-nMTc",
    "black panther": "xjDjIWPwcPU",
    "thor": "v7MGUNV8Mxw",
    "the matrix": "vKQi3bBA1y8",
    "fight club": "qtRKdVHc-cE",
    "pulp fiction": "s7EdQ4FqbhY",
    "forrest gump": "bLvqoHBptjg",
    "the godfather": "sY1S34973zA",
    "parasite": "5xH0HfJHsaY",
    "top gun maverick": "giXco2jaZ_4",
    "jurassic park": "lc0UehYemQA",
    "lion king": "4sj1MT05lAA",
    "frozen": "TbQm5doF_Uc"
};

// Database film lengkap untuk fallback (termasuk JOKER)
const FULL_MOVIES_DATABASE = [
    { id: 1, title: "Joker", release_date: "2019-10-04", vote_average: 8.4, poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", trailer_key: "zAGVQLHvwOY" },
    { id: 2, title: "Joker: Folie à Deux", release_date: "2024-10-04", vote_average: 7.2, poster_path: "/tjkDaDPnZtiHAsZtg3YpfBfLSBj.jpg", trailer_key: "zAGVQLHvwOY" },
    { id: 3, title: "Dune: Part Two", release_date: "2024-03-01", vote_average: 8.7, poster_path: "/uOYAbN3F5n3ne8TzWjzVEvQ7XGX.jpg", trailer_key: "Way9Dexny3w" },
    { id: 4, title: "Deadpool 3", release_date: "2024-07-26", vote_average: 8.3, poster_path: "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", trailer_key: "id2liK64O-Q" },
    { id: 5, title: "Oppenheimer", release_date: "2023-07-21", vote_average: 8.9, poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", trailer_key: "uYPbbksJxIg" },
    { id: 6, title: "Spider-Man: Across the Spider-Verse", release_date: "2023-06-02", vote_average: 8.6, poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", trailer_key: "shW9i6k8cB0" },
    { id: 7, title: "John Wick: Chapter 4", release_date: "2023-03-24", vote_average: 8.2, poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg", trailer_key: "qEVUtrk8_B4" },
    { id: 8, title: "The Batman", release_date: "2022-03-04", vote_average: 8.1, poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg", trailer_key: "mqqft2x_Aa4" },
    { id: 9, title: "Avatar: The Way of Water", release_date: "2022-12-16", vote_average: 7.8, poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", trailer_key: "d9MyW72ELq0" },
    { id: 10, title: "Barbie", release_date: "2023-07-21", vote_average: 7.9, poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg", trailer_key: "pBk4NYhWNMM" },
    { id: 11, title: "Interstellar", release_date: "2014-11-07", vote_average: 8.6, poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", trailer_key: "zSWdZVtXT7E" },
    { id: 12, title: "Inception", release_date: "2010-07-16", vote_average: 8.8, poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", trailer_key: "YoHD9XEInc0" },
    { id: 13, title: "The Dark Knight", release_date: "2008-07-18", vote_average: 9.0, poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg", trailer_key: "EXeTwQWrcwY" },
    { id: 14, title: "Gladiator", release_date: "2000-05-05", vote_average: 8.5, poster_path: "/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg", trailer_key: "P5ieIbInFpg" },
    { id: 15, title: "Titanic", release_date: "1997-12-19", vote_average: 8.2, poster_path: "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", trailer_key: "kVrqfYjkTdQ" }
];

// Fungsi untuk mendapatkan trailer key dari judul film
function getTrailerKey(title) {
    const lowerTitle = title.toLowerCase();
    for (let [key, value] of Object.entries(TRAILER_MAP)) {
        if (lowerTitle.includes(key)) {
            return value;
        }
    }
    return "Way9Dexny3w";
}

// Fetch dari TMDB
async function fetchMovies(endpoint) {
    try {
        const response = await fetch(`${API_BASE}${endpoint}`, {
            headers: {
                'Authorization': `Bearer ${TMDB_BEARER}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error('Fetch error:', error);
        return FULL_MOVIES_DATABASE;
    }
}

function renderMovies(movies) {
    const grid = document.getElementById('movieGrid');
    if (!movies || movies.length === 0) {
        grid.innerHTML = '<div class="loading-spinner"><p>🎬 Film tidak ditemukan. Coba kata kunci lain!</p></div>';
        return;
    }
    
    currentMovies = movies;
    
    grid.innerHTML = movies.map(movie => {
        let poster = movie.poster_path;
        let title = movie.title;
        let year = movie.release_date ? movie.release_date.split('-')[0] : 'TBA';
        let rating = movie.vote_average ? movie.vote_average.toFixed(1) : '?';
        let trailerKey = movie.trailer_key || getTrailerKey(movie.title);
        
        // Handle poster URL
        if (poster && !poster.startsWith('http')) {
            poster = `https://image.tmdb.org/t/p/w500${poster}`;
        } else if (!poster) {
            poster = 'https://via.placeholder.com/500x750/1a1a2e/ffffff?text=No+Poster';
        }
        
        return `
            <div class="movie-card" data-id="${movie.id}" data-title="${title}" data-trailer="${trailerKey}">
                <img class="movie-poster" src="${poster}" alt="${title}" loading="lazy" onerror="this.src='https://via.placeholder.com/500x750/1a1a2e/ffffff?text=No+Poster'">
                <div class="movie-info">
                    <div class="movie-title">${title}</div>
                    <span class="movie-year">${year}</span>
                    <div class="movie-rating">
                        <span>⭐</span> ${rating}/10
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add click event untuk setiap card - LANGSUNG PLAY TRAILER!
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.dataset.title;
            const trailerKey = card.dataset.trailer;
            openTrailerModal(trailerKey, title);
        });
    });
}

// Fungsi untuk membuka modal dan memutar trailer
function openTrailerModal(trailerKey, movieTitle) {
    const modal = document.getElementById('trailerModal');
    const iframe = document.getElementById('trailerIframe');
    const modalTitle = document.getElementById('modalTitle');
    
    const youtubeUrl = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0&showinfo=0`;
    
    iframe.src = youtubeUrl;
    modalTitle.innerHTML = `🎬 ${movieTitle} - Official Trailer`;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Fungsi untuk menutup modal
function closeTrailerModal() {
    const modal = document.getElementById('trailerModal');
    const iframe = document.getElementById('trailerIframe');
    
    modal.style.display = 'none';
    iframe.src = '';
    document.body.style.overflow = 'auto';
}

async function loadMoviesByCategory(category, titleText) {
    document.getElementById('dynamicTitle').innerHTML = titleText;
    document.getElementById('movieGrid').innerHTML = '<div class="loading-spinner"><div class="spinner"></div><p>Memuat film...</p></div>';
    
    let movies = [];
    
    switch(category) {
        case 'popular':
            movies = await fetchMovies('/movie/popular');
            if (!movies.length) movies = FULL_MOVIES_DATABASE;
            break;
        case 'trending':
            movies = await fetchMovies('/trending/movie/week');
            if (!movies.length) movies = FULL_MOVIES_DATABASE.slice(0, 8);
            break;
        case 'now-playing':
            movies = await fetchMovies('/movie/now_playing');
            if (!movies.length) movies = FULL_MOVIES_DATABASE.slice(0, 8);
            break;
        case 'top-rated':
            movies = await fetchMovies('/movie/top_rated');
            if (!movies.length) movies = FULL_MOVIES_DATABASE;
            break;
        default:
            movies = await fetchMovies('/movie/popular');
            if (!movies.length) movies = FULL_MOVIES_DATABASE;
    }
    
    // Tambahkan trailer key ke setiap movie
    movies = movies.map(movie => ({
        ...movie,
        trailer_key: movie.trailer_key || getTrailerKey(movie.title)
    }));
    
    renderMovies(movies);
}

// SEARCH MOVIES - KHUSUS UNTUK JOKER DAN LAINNYA!
async function searchMovies(query) {
    if (!query.trim()) {
        loadMoviesByCategory('popular', '🔥 Film Terpopuler Minggu Ini');
        return;
    }
    
    const searchQuery = query.toLowerCase().trim();
    document.getElementById('dynamicTitle').innerHTML = `🔍 Hasil Pencarian: "${query}"`;
    document.getElementById('movieGrid').innerHTML = '<div class="loading-spinner"><div class="spinner"></div><p>Mencari film...</p></div>';
    
    let searchResults = [];
    
    // Coba cari dari API TMDB dulu
    try {
        const apiResults = await fetchMovies(`/search/movie?query=${encodeURIComponent(query)}`);
        if (apiResults && apiResults.length > 0) {
            searchResults = apiResults;
        }
    } catch (e) {
        console.log('API search gagal, pakai database lokal');
    }
    
    // Jika API tidak mengembalikan hasil, cari dari database lokal FULL_MOVIES_DATABASE
    if (searchResults.length === 0) {
        searchResults = FULL_MOVIES_DATABASE.filter(movie => 
            movie.title.toLowerCase().includes(searchQuery)
        );
    }
    
    // Jika masih kosong, coba cari dengan kata kunci yang mirip
    if (searchResults.length === 0) {
        // Cari kata kunci parsial
        searchResults = FULL_MOVIES_DATABASE.filter(movie => {
            const movieTitle = movie.title.toLowerCase();
            const queryWords = searchQuery.split(' ');
            return queryWords.some(word => movieTitle.includes(word));
        });
    }
    
    // Tambahkan trailer key
    searchResults = searchResults.map(movie => ({
        ...movie,
        trailer_key: movie.trailer_key || getTrailerKey(movie.title)
    }));
    
    renderMovies(searchResults);
    
    // Jika hasil pencarian kosong, tampilkan pesan
    if (searchResults.length === 0) {
        document.getElementById('movieGrid').innerHTML = `
            <div class="loading-spinner">
                <p>😔 Tidak ada film dengan judul "${query}"</p>
                <p style="font-size: 0.9rem; margin-top: 10px;">Coba kata kunci lain seperti: Joker, Batman, Dune, dll.</p>
            </div>
        `;
    }
}

// Event Listeners
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    searchMovies(query);
});

document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchMovies(e.target.value);
    }
});

// Tombol close modal
document.getElementById('closeModalBtn').addEventListener('click', closeTrailerModal);

// Klik di luar modal juga menutup
window.addEventListener('click', (e) => {
    const modal = document.getElementById('trailerModal');
    if (e.target === modal) {
        closeTrailerModal();
    }
});

// Tombol ESC untuk menutup modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeTrailerModal();
    }
});

// Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const nav = link.dataset.nav;
        
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        let title = '';
        switch(nav) {
            case 'home':
            case 'popular':
                title = '🔥 Film Terpopuler Minggu Ini';
                loadMoviesByCategory('popular', title);
                break;
            case 'trending':
                title = '📈 Trending Hari Ini';
                loadMoviesByCategory('trending', title);
                break;
            case 'now-playing':
                title = '🎬 Now Playing di Bioskop';
                loadMoviesByCategory('now-playing', title);
                break;
            case 'top-rated':
                title = '⭐ Top Rated Sepanjang Masa';
                loadMoviesByCategory('top-rated', title);
                break;
        }
    });
});

document.getElementById('exploreBtn').addEventListener('click', () => {
    document.querySelector('.movie-grid').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('trailerBtn').addEventListener('click', () => {
    openTrailerModal("shW9i6k8cB0", "Spider-Man: Across the Spider-Verse");
});

// Initial load
loadMoviesByCategory('popular', '🔥 Film Terpopuler Minggu Ini');