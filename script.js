document.addEventListener('DOMContentLoaded', () => {
    // Lista de páginas
    const pages = document.querySelectorAll(".page");
    let currentPageIndex = 0;

    // Letras y tiempos
    let lyrics = [
        "Tell me what you really like",
        "Baby, I can take my time",
        "We don't ever have to fight",
        "Just take it step-by-step",
        "I can see it in your eyes",
        "Cause they never tell me lies",
        "I can feel that body shake",
        "And the heat between your legs",
        "You've been scared of love and what it did to you",
        "You don't have to run, I know what you've been through",
        "Just a simple touch and it can set you free",
        "We don't have to rush when you're alone with me",
        "I feel it coming, I feel it coming, babe",
        "I feel it coming, I feel it coming, babe",
        "I feel it coming, I feel it coming, babe",
        "I feel it coming, I feel it coming, babe",
        "You are not the single type",
        "So baby, this the perfect time",
        "I'm just trying to get you high",
        "And faded off this touch",
        "You don't need a lonely night",
        "So baby, I can make it right",
        "You just got to let me try",
        "To give you what you want",
        "You've been scared of love and what it did to you",
        "You don't have to run, I know what you've been through",
        "Just a simple touch and it can set you free",
        "We don't have to rush when you're alone with me",
        "I feel it coming, I feel it coming, babe",
        "I feel it coming, I feel it coming, babe",
        "I feel it coming, I feel it coming, babe",
        "I feel it coming, I feel it coming, babe",
        "I feel it coming, I feel it coming, babe",
        "I feel it coming, I feel it coming, babe",
        "I feel it coming, I feel it coming, babe",
        "You've been scared of love and what it did to you",
        "You don't have to run, I know what you've been through",
        "Just a simple touch and it can set you free",
        "We don't have to rush when you're alone with me",
        "I feel it coming, I feel it coming, babe",
        "I feel it coming, I feel it coming, babe(i know waht you feel right now)",
        "I feel it coming, I feel it coming, babe",
        "I feel it coming, I feel it coming, babe(i know waht you feel right now)",
        "I feel it coming, I feel it coming, babe",
        "I feel it coming, I feel it coming, babe(i know waht you feel right now)",
        "I feel it coming, I feel it coming, babe",
        "I feel it coming, I feel it coming, babe",
        "I feel it coming"
    ];
    let timings = [3000, 3000, 2400, 2800, 2500, 2500, 2500, 2800, 4500, 4800, 4800, 5000, 6000, 6000, 5000, 4000, 2800, 2800, 2000, 2700, 3000, 2500, 2000, 3000, 4800, 5900, 5800, 5000, 6000, 6000, 5000, 6000, 6000, 6000, 6000, 5500, 4000, 6400, 5000, 9900, 2500, 8000, 2500, 8000, 2500, 8000, 8000, 4000];
    let initialDelay = 19800;

    // Elementos del DOM
    let lyricsContainer = document.getElementById("lyrics");
    const nextButtons = document.querySelectorAll(".nextButton");
    const prevButtons = document.querySelectorAll(".prevButton");

    // Función para mostrar la letra de la canción
    function displayLyrics() {
        let totalTime = 0;

        lyrics.forEach((line, index) => {
            setTimeout(() => {
                lyricsContainer.innerText = line;
            }, totalTime);

            totalTime += timings[index];
        });
    }

    // Función para mostrar una página específica
    function showPage(index) {
        pages.forEach((page, i) => {
            page.classList.toggle("hidden", i !== index);
        });
        currentPageIndex = index;
    }

    // Configurar botones de navegación (next y prev)
    nextButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (currentPageIndex < pages.length - 1) {
                showPage(currentPageIndex + 1);
            }
        });
    });

    prevButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (currentPageIndex > 0) {
                showPage(currentPageIndex - 1);
            }
        });
    });

    // Configuración para botones con data-target
    const buttons = document.querySelectorAll('button[data-target]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            if (targetId) {
                pages.forEach(page => page.classList.add('hidden'));
                document.querySelector(targetId).classList.remove('hidden');
            }
        });
    });

    // Iniciar letras después del retraso inicial
    setTimeout(displayLyrics, initialDelay);

    // Mostrar la primera página al cargar
    showPage(currentPageIndex);
});


