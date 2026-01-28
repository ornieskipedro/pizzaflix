// ===========================
// Data & Config
// ===========================
const CONFIG = {
    pizzeriaName: 'Pizzaria Bella Napoli',
    pizzeriaPhone: '5541985131604',
    siteName: 'Filme + Pizza',
    hapticEnabled: true,
    raffleDuration: 1200 // ms
};

const movieDatabase = {
    'Ação': [
        { title: 'Mad Max: Estrada da Fúria', mood: 'intenso • adrenalina', rating: '8.1', pizzaSuggestion: 'Bacon Cheddar', streaming: 'Max', synopsis: 'Um herói relutante se une a uma guerreira em uma fuga alucinante pelo deserto.', posterUrl: 'https://image.tmdb.org/t/p/original/hAnov99vYvYy9S0709oU7By6v6P.jpg' },
        { title: 'John Wick 4', mood: 'ação • estético', rating: '7.7', pizzaSuggestion: 'Calabresa', streaming: 'Prime Video', synopsis: 'John Wick descobre um caminho para derrotar a Alta Cúpula enquanto enfrenta novos inimigos.', posterUrl: 'https://image.tmdb.org/t/p/original/ghBa6rtwtMUnCGoVAsAbS7pSp9B.jpg' }
    ],
    'Comédia': [
        { title: 'Superbad', mood: 'nostálgico • hilário', rating: '7.6', pizzaSuggestion: 'Americana', streaming: 'Netflix', synopsis: 'Dois amigos co-dependentes enfrentam a ansiedade da separação no fim do ensino médio.', posterUrl: 'https://image.tmdb.org/t/p/original/ek87YfCstM9Iq9p2yI9fI3TzFzB.jpg' },
        { title: 'O Lobo de Wall Street', mood: 'caótico • brilhante', rating: '8.2', pizzaSuggestion: 'Portuguesa', streaming: 'Max', synopsis: 'A ascensão e queda de Jordan Belfort, um corretor de Nova York que ganha uma fortuna.', posterUrl: 'https://image.tmdb.org/t/p/original/p99uWp6hGisNis7S2zO2x20k9sV.jpg' }
    ],
    'Drama': [
        { title: 'Duna: Parte Dois', mood: 'épico • visual • tenso', rating: '8.6', pizzaSuggestion: 'Quatro Queijos', streaming: 'Max', synopsis: 'Paul Atreides se une a Chani e aos Fremen em busca de vingança contra os conspiradores.', posterUrl: 'https://image.tmdb.org/t/p/original/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg' },
        { title: 'Oppenheimer', mood: 'denso • biográfico', rating: '8.4', pizzaSuggestion: 'Frango Catupiry', streaming: 'Prime Video', synopsis: 'A história do físico J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica.', posterUrl: 'https://image.tmdb.org/t/p/original/8Gxv8S7IlBoj19mYaCDU0UbsasN.jpg' }
    ],
    'Suspense': [
        { title: 'Parasita', mood: 'genial • tenso', rating: '8.5', pizzaSuggestion: 'Portuguesa', streaming: 'Max', synopsis: 'Uma família pobre se infiltra na vida de uma família rica, levando a consequências brutais.', posterUrl: 'https://image.tmdb.org/t/p/original/7S99Xp90xlyqX74sB000P5O8yit.jpg' },
        { title: 'Corra!', mood: 'perturbador • social', rating: '7.8', pizzaSuggestion: 'Calabresa', streaming: 'Prime Video', synopsis: 'Um jovem negro visita a família de sua namorada branca e descobre uma verdade sinistra.', posterUrl: 'https://image.tmdb.org/t/p/original/8mX6pS66OaEn2Yg7mE7Biv96pB.jpg' }
    ],
    'Romance': [
        { title: 'La La Land', mood: 'mágico • agridoce', rating: '8.0', pizzaSuggestion: 'Frango Catupiry', streaming: 'Netflix', synopsis: 'Um pianista de jazz e uma aspirante a atriz se apaixonam enquanto perseguem seus sonhos em LA.', posterUrl: 'https://image.tmdb.org/t/p/original/76TInl81XfAs3C872h1L8jP9yF5.jpg' },
        { title: 'Questão de Tempo', mood: 'sensível • leve', rating: '7.8', pizzaSuggestion: 'Quatro Queijos', streaming: 'Prime Video', synopsis: 'Aos 21 anos, Tim descobre que pode viajar no tempo e tenta mudar sua vida amorosa.', posterUrl: 'https://image.tmdb.org/t/p/original/vI3nAtY7cM12W8N3U7U5Yshb58u.jpg' }
    ],
    'Terror': [
        { title: 'Hereditário', mood: 'perturbador • visceral', rating: '7.3', pizzaSuggestion: 'Bacon Cheddar', streaming: 'Max', synopsis: 'Após a morte da matriarca, uma família começa a desvendar segredos aterrorizantes sobre sua ancestralidade.', posterUrl: 'https://image.tmdb.org/t/p/original/79ia7A7Y7I47p79YfG2D4uY7yM.jpg' },
        { title: 'O Telefone Preto', mood: 'tenso • sobrenatural', rating: '7.0', pizzaSuggestion: 'Bacon', streaming: 'Prime Video', synopsis: 'Um garoto sequestrado recebe ligações de vítimas anteriores do seu captor através de um telefone desligado.', posterUrl: 'https://image.tmdb.org/t/p/original/6S6P8m9f9M5Q7u9V5QY6v7iP5u.jpg' }
    ]
};

// ===========================
// State & Logic
// ===========================
let current = {
    genre: 'Drama',
    idx: 0,
    pizza: null,
    isRaffling: false
};

const Actions = {
    show(id) {
        document.getElementById('genreQuestion').hidden = (id !== 'genre');
        document.getElementById('movieRoulette').hidden = (id !== 'decide');
    },

    updateUI() {
        const movie = movieDatabase[current.genre][current.idx];
        const card = document.getElementById('movieCard');

        document.getElementById('moviePoster').src = movie.posterUrl;
        document.getElementById('movieTitle').textContent = movie.title;
        document.getElementById('movieRating').textContent = `★ ${movie.rating}`;
        document.getElementById('movieMood').textContent = movie.mood;
        document.getElementById('moviePizzaSuggestion').textContent = `Sugestão de sabor de pizza: ${movie.pizzaSuggestion}`;
        document.getElementById('movieSynopsis').textContent = movie.synopsis;
        document.getElementById('streamingService').textContent = `Disponível no ${movie.streaming}`;

        // New: Fill the mini-card specific label
        const miniPlatform = document.getElementById('miniPlatform');
        if (miniPlatform) miniPlatform.textContent = movie.streaming;

        // Pass streaming handle for CSS pseudo-element (fallback)
        card.setAttribute('data-streaming', movie.streaming);
    },

    raffleSequence() {
        if (current.isRaffling) return;
        current.isRaffling = true;

        const overlay = document.getElementById('shufflerOverlay');
        overlay.hidden = false;

        // Rapid shuffle effect
        let shuffleCount = 0;
        const interval = setInterval(() => {
            current.idx = Math.floor(Math.random() * movieDatabase[current.genre].length);
            this.updateUI();
            shuffleCount++;
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            overlay.hidden = true;
            current.isRaffling = false;
            this.haptic(100);
        }, CONFIG.raffleDuration);
    },

    randomize() {
        const list = movieDatabase[current.genre];
        let n;
        do { n = Math.floor(Math.random() * list.length); } while (n === current.idx && list.length > 1);
        current.idx = n;
        this.updateUI();
    },

    morph() {
        document.getElementById('movieCard').dataset.state = 'mini';
        document.getElementById('thumbControls').style.opacity = '0';
        document.getElementById('rerollBtn').hidden = false;

        setTimeout(() => {
            document.getElementById('thumbControls').hidden = true;
            document.getElementById('pizzaMenu').dataset.state = 'visible';
            document.getElementById('harmonyGenre').textContent = current.genre;
            this.haptic([40, 80]);
        }, 200);
    },

    back() {
        document.getElementById('movieCard').dataset.state = 'full';
        document.getElementById('pizzaMenu').dataset.state = 'hidden';
        document.getElementById('rerollBtn').hidden = true;

        this.randomize();

        setTimeout(() => {
            const tc = document.getElementById('thumbControls');
            tc.hidden = false;
            tc.style.opacity = '1';
        }, 300);
    },

    haptic(p = 30) {
        if (CONFIG.hapticEnabled && navigator.vibrate) navigator.vibrate(p);
    },

    toast(m) {
        const t = document.getElementById('toast');
        t.textContent = m;
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 2000);
    }
};

// ===========================
// Init
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Genres
    document.querySelectorAll('.p-genre-btn').forEach(b => {
        b.addEventListener('click', () => {
            current.genre = b.dataset.genre;
            Actions.show('decide');
            Actions.raffleSequence();
            Actions.haptic();
        });
    });

    // Choices
    document.getElementById('confirmChoiceBtn')?.addEventListener('click', () => {
        Actions.morph();
    });

    document.getElementById('choiceRerollBtn')?.addEventListener('click', () => {
        Actions.raffleSequence();
        Actions.haptic();
    });

    document.getElementById('rerollBtn')?.addEventListener('click', () => {
        Actions.back();
    });

    // Pizza Select
    document.querySelectorAll('.p-card').forEach(c => {
        c.addEventListener('click', () => {
            document.querySelectorAll('.p-card').forEach(x => x.classList.remove('selected'));
            c.classList.add('selected');
            current.pizza = c.dataset.flavor;

            const btn = document.getElementById('orderButton');
            btn.disabled = false;
            document.getElementById('orderBtnText').textContent = `Pedir ${current.pizza} agora`;

            Actions.haptic();
            Actions.toast(`${current.pizza} selecionada!`);
        });
    });

    // WhatsApp
    document.getElementById('orderButton')?.addEventListener('click', () => {
        const mTitle = movieDatabase[current.genre][current.idx].title;
        const text = encodeURIComponent(
            `Oi! 🍕 Vim pelo Filme + Pizza\nQuero uma *${current.pizza}*\nVou assistir: ${mTitle}`
        );
        window.open(`https://wa.me/${CONFIG.pizzeriaPhone}?text=${text}`, '_blank');
        Actions.haptic([50, 50]);
    });

    Actions.show('genre');
});
