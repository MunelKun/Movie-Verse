// ============================================
// MOVIEVERSE - LANDING PAGE FILM
// Siap deploy ke Vercel | Tanpa API Key (Aman)
// ============================================

// ==================== DATABASE FILM LOKAL ====================
const MOVIES_DATABASE = [
    { 
        id: 1, 
        title: "Joker", 
        year: "2019", 
        rating: 8.4, 
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        trailer_key: "zAGVQLHvwOY",
        description: "Arthur Fleck, seorang komedian gagal, menjalani hidup yang sulit di kota Gotham yang kacau."
    },
    { 
        id: 2, 
        title: "Joker: Folie à Deux", 
        year: "2024", 
        rating: 7.2, 
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/tjkDaDPnZtiHAsZtg3YpfBfLSBj.jpg",
        trailer_key: "zAGVQLHvwOY",
        description: "Sekuel Joker dengan sentuhan musikal yang gelap."
    },
    { 
        id: 3, 
        title: "Dune: Part Two", 
        year: "2024", 
        rating: 8.7, 
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/uOYAbN3F5n3ne8TzWjzVEvQ7XGX.jpg",
        trailer_key: "Way9Dexny3w",
        description: "Petualangan epik Paul Atreides di planet Arrakis."
    },
    { 
        id: 4, 
        title: "Deadpool 3", 
        year: "2024", 
        rating: 8.3, 
        poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        trailer_key: "id2liK64O-Q",
        description: "Deadpool bertemu Wolverine dalam petualangan gila!"
    },
    { 
        id: 5, 
        title: "Oppenheimer", 
        year: "2023", 
        rating: 8.9, 
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        trailer_key: "uYPbbksJxIg",
        description: "Kisah pencipta bom atom, J. Robert Oppenheimer."
    },
    { 
        id: 6, 
        title: "Spider-Man: Across the Spider-Verse", 
        year: "2023", 
        rating: 8.6, 
        poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        trailer_key: "shW9i6k8cB0",
        description: "Miles Morales berpetualang melintasi multiverse."
    },
    { 
        id: 7, 
        title: "John Wick: Chapter 4", 
        year: "2023", 
        rating: 8.2, 
        poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        trailer_key: "qEVUtrk8_B4",
        description: "John Wick melawan High Table untuk kebebasannya."
    },
    { 
        id: 8, 
        title: "The Batman", 
        year: "2022", 
        rating: 8.1, 
        poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        trailer_key: "mqqft2x_Aa4",
        description: "Batman versi gelap dengan misteri pembunuhan."
    },
    { 
        id: 9, 
        title: "Avatar: The Way of Water", 
        year: "2022", 
        rating: 7.8, 
        poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        trailer_key: "d9MyW72ELq0",
        description: "Petualangan baru suku Na'vi di lautan Pandora."
    },
    { 
        id: 10, 
        title: "Barbie", 
        year: "2023", 
        rating: 7.9, 
        poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        trailer_key: "pBk4NYhWNMM",
        description: "Barbie dan Ken menjelajahi dunia nyata."
    },
    { 
        id: 11, 
        title: "Interstellar", 
        year: "2014", 
        rating: 8.6, 
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        trailer_key: "zSWdZVtXT7E",
        description: "Misi luar angkasa mencari planet baru untuk manusia."
    },
    { 
        id: 12, 
        title: "Inception", 
        year: "2010", 
        rating: 8.8, 
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        trailer_key: "YoHD9XEInc0",
        description: "Pencuri mimpi melakukan misi terakhirnya."
    },
    { 
        id: 13, 
        title: "The Dark Knight", 
        year: "2008", 
        rating: 9.0, 
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        trailer_key: "EXeTwQWrcwY",
        description: "Batman melawan Joker yang kacau."
    },
    { 
        id: 14, 
        title: "Gladiator", 
        year: "2000", 
        rating: 8.5, 
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg",
        trailer_key: "P5ieIbInFpg",
        description: "Jenderal Romawi menjadi gladiator untuk balas dendam."
    },
    { 
        id: 15, 
        title: "Titanic", 
        year: "1997", 
        rating: 8.2, 
        poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGARJE.jpg",
        trailer_key: "kVrqfYjkTdQ",
        description: "Kisah cinta di atas kapal legendaris Titanic."
    },
    { 
        id: 16, 
        title: "Parasite", 
        year: "2019", 
        rating: 8.6, 
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        trailer_key: "5xH0HfJHsaY",
        description: "Keluarga miskin menyusup ke rumah keluarga kaya."
    },
    { 
        id: 17, 
        title: "Top Gun: Maverick", 
        year: "2022", 
        rating: 8.4, 
        poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        trailer_key: "giXco2jaZ_4",
        description: "Maverick kembali melatih pilot muda untuk misi berbahaya."
    },
    { 
        id: 18, 
        title: "The Godfather", 
        year: "1972", 
        rating: 9.2, 
        poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        trailer_key: "sY1S34973zA",
        description: "Saga keluarga mafia Corleone di New York."
    },
    { 
        id: 19, 
        title: "Avengers: Endgame ", 
        year: "2019", 
        rating: 8.4, 
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        trailer_key: "TcMBFSGVi1c",
        description: "Para Avengers mengalahkan Thanos dalam pertempuran epik."
    },
    {
    id: 20,
    title: "Mortal Kombat II",
    year: "2026",
    rating: 8.1,
    poster: "https://image.tmdb.org/t/p/w500/3W7Rk8qKkE0qNqPzFfLwLkLkLkL.jpg",
    trailer_key: "b24oG7qCwp4",  // <--- GANTI DENGAN KODE INI
    description: "Cole Young kembali dengan pertarungan brutal antar alam. Sub-Zero, Scorpion, Liu Kang, dan petarung baru bertarung untuk menentukan nasib dunia."
    },
];

// ==================== VARIABEL GLOBAL ====================
let currentMovies = [...MOVIES_DATABASE];
let currentCategory = "popular";

// ==================== FUNGSI RENDER MOVIE ====================
function renderMovies(movies) {
    const grid = document.getElementById('movieGrid');
    
    if (!movies || movies.length === 0) {
        grid.innerHTML = `
            <div class="loading-spinner">
                <p>😔 Film tidak ditemukan</p>
                <p style="font-size: 0.9rem; margin-top: 10px;">Coba kata kunci lain seperti: Joker, Batman, Dune, dll.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = movies.map(movie => `
        <div class="movie-card" data-id="${movie.id}" data-title="${movie.title}" data-trailer="${movie.trailer_key}">
            <img class="movie-poster" src="${movie.poster}" alt="${movie.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/500x750/1a1a2e/ffffff?text=No+Poster'">
            <div class="movie-info">
                <div class="movie-title">${escapeHtml(movie.title)}</div>
                <span class="movie-year">${movie.year}</span>
                <div class="movie-rating">
                    <span>⭐</span> ${movie.rating}/10
                </div>
            </div>
        </div>
    `).join('');
    
    // Tambah event klik untuk setiap card
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.dataset.title;
            const trailerKey = card.dataset.trailer;
            openTrailerModal(trailerKey, title);
        });
    });
}

// ==================== FUNGSI SEARCH ====================
function searchMovies(query) {
    const searchQuery = query.toLowerCase().trim();
    
    if (!searchQuery) {
        loadMoviesByCategory('popular', '🔥 Film Terpopuler Minggu Ini');
        return;
    }
    
    document.getElementById('dynamicTitle').innerHTML = `🔍 Hasil Pencarian: "${query}"`;
    
    // Filter film berdasarkan judul
    const searchResults = MOVIES_DATABASE.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery)
    );
    
    // Tampilkan loading dulu
    document.getElementById('movieGrid').innerHTML = '<div class="loading-spinner"><div class="spinner"></div><p>Mencari film...</p></div>';
    
    // Simulasi delay biar ada efek loading
    setTimeout(() => {
        renderMovies(searchResults);
        
        if (searchResults.length === 0) {
            document.getElementById('movieGrid').innerHTML = `
                <div class="loading-spinner">
                    <p>😔 Tidak ada film dengan judul "${query}"</p>
                    <p style="font-size: 0.9rem; margin-top: 10px;">Coba kata kunci lain seperti: Joker, Batman, Dune, dll.</p>
                </div>
            `;
        }
    }, 300);
}

// ==================== FUNGSI LOAD BY CATEGORY ====================
function loadMoviesByCategory(category, titleText) {
    currentCategory = category;
    document.getElementById('dynamicTitle').innerHTML = titleText;
    document.getElementById('movieGrid').innerHTML = '<div class="loading-spinner"><div class="spinner"></div><p>Memuat film...</p></div>';
    
    setTimeout(() => {
        let filteredMovies = [...MOVIES_DATABASE];
        
        switch(category) {
            case 'popular':
                // Film dengan rating tinggi
                filteredMovies.sort((a, b) => b.rating - a.rating);
                filteredMovies = filteredMovies.slice(0, 12);
                break;
            case 'trending':
                // Film tahun terbaru
                filteredMovies.sort((a, b) => parseInt(b.year) - parseInt(a.year));
                filteredMovies = filteredMovies.slice(0, 10);
                break;
            case 'now-playing':
                // Film 2023-2024
                filteredMovies = filteredMovies.filter(m => parseInt(m.year) >= 2023);
                break;
            case 'top-rated':
                // Rating tertinggi
                filteredMovies.sort((a, b) => b.rating - a.rating);
                filteredMovies = filteredMovies.slice(0, 10);
                break;
            default:
                filteredMovies = MOVIES_DATABASE.slice(0, 12);
        }
        
        renderMovies(filteredMovies);
    }, 300);
}

// ==================== MODAL TRAILER ====================
function openTrailerModal(trailerKey, movieTitle) {
    const modal = document.getElementById('trailerModal');
    const iframe = document.getElementById('trailerIframe');
    const modalTitle = document.getElementById('modalTitle');
    
    // YouTube embed URL dengan autoplay
    const youtubeUrl = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0&showinfo=0`;
    
    iframe.src = youtubeUrl;
    modalTitle.innerHTML = `🎬 ${movieTitle} - Official Trailer`;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeTrailerModal() {
    const modal = document.getElementById('trailerModal');
    const iframe = document.getElementById('trailerIframe');
    
    modal.style.display = 'none';
    iframe.src = '';
    document.body.style.overflow = 'auto';
}

// ==================== HELPER FUNCTION ====================
function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// ==================== EVENT LISTENERS ====================
// Search
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    searchMovies(query);
});

document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchMovies(e.target.value);
    }
});

// Modal close
document.getElementById('closeModalBtn').addEventListener('click', closeTrailerModal);

window.addEventListener('click', (e) => {
    const modal = document.getElementById('trailerModal');
    if (e.target === modal) {
        closeTrailerModal();
    }
});

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
        
        // Update active class
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Clear search input
        document.getElementById('searchInput').value = '';
        
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

// Hero buttons
document.getElementById('exploreBtn').addEventListener('click', () => {
    document.querySelector('.movie-grid').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('trailerBtn').addEventListener('click', () => {
    openTrailerModal("shW9i6k8cB0", "Spider-Man: Across the Spider-Verse");
});

// ==================== INITIAL LOAD ====================
loadMoviesByCategory('popular', '🔥 Film Terpopuler Minggu Ini');

// ==================== SEO: STRUCTURED DATA ====================
const scriptTag = document.createElement('script');
scriptTag.type = 'application/ld+json';
scriptTag.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MovieVerse",
    "url": "https://movieverse.vercel.app",
    "description": "MovieVerse - Landing page film dengan koleksi film terbaru, trailer eksklusif, dan informasi lengkap.",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://movieverse.vercel.app?search={search_term_string}",
        "query-input": "required name=search_term_string"
    }
});
document.head.appendChild(scriptTag);
