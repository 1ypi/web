document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const loadMoreButton = document.getElementById('load-more-button');
    const wallpapersContainer = document.getElementById('wallpapers');
    let currentPage = 1;

    searchButton.addEventListener('click', async () => {
        currentPage = 1; // Reiniciar la página al realizar una nueva búsqueda
        const query = searchInput.value.trim();
        if (query) {
            const images = await fetchImages(query, currentPage);
            displayImages(images);
        }
    });

    loadMoreButton.addEventListener('click', async () => {
        currentPage++;
        const query = searchInput.value.trim();
        const images = await fetchImages(query, currentPage);
        displayImages(images, true);
    });

    async function fetchImages(query, page) {
        const perPage = 12;
        const url = `https://cors-anywhere.herokuapp.com/https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}&page=${page}`;
        const headers = {
            Authorization: 'phzJOx9jNiBK02rsnhQqR9EA60gxJ7HPydxtx5DRMPeg1Mtbpu0QPbyF', // Reemplaza con tu clave de API de Pexels
        };

        try {
            const response = await fetch(url, { headers });
            const data = await response.json();
            return data.photos;
        } catch (error) {
            console.error('Error al buscar imágenes:', error);
            return [];
        }
    }

    function displayImages(images, append = false) {
        if (!append) {
            wallpapersContainer.innerHTML = '';
        }

        images.forEach((image) => {
            const wallpaper = document.createElement('div');
            wallpaper.classList.add('wallpaper');

            const img = document.createElement('img');
            img.src = image.src.medium;
            img.alt = image.photographer;

            const downloadLink = document.createElement('a');
            downloadLink.href = image.src.original;
            downloadLink.download = true;
            downloadLink.textContent = 'Descargar';

            wallpaper.appendChild(img);
            wallpaper.appendChild(downloadLink);

            wallpapersContainer.appendChild(wallpaper);
        });

        if (images.length === 0) {
            loadMoreButton.style.display = 'none'; // Ocultar el botón si no hay más imágenes
        } else {
            loadMoreButton.style.display = 'block'; // Mostrar el botón si hay más imágenes
        }
    }
});
