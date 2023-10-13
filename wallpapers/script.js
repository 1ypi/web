document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const loadMoreButton = document.getElementById('load-more-button');
    const wallpapersContainer = document.getElementById('wallpapers');
    let currentPage = 1;

    searchButton.addEventListener('click', async () => {
        currentPage = 1;
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
        const accessKey = 'EHualhreJQ9vX6WRcIFMMBwKmnvBmpbHmSsexhpxMmE';
        const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&page=${page}`;

        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: `Client-ID ${accessKey}`,
                }
            });

            const data = await response.json();
            return data.results;
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
            img.src = image.urls.regular;
            img.alt = image.user.username;

            const downloadLink = document.createElement('a');
            downloadLink.href = image.links.download;
            downloadLink.download = true;
            downloadLink.textContent = 'Descargar';

            wallpaper.appendChild(img);
            wallpaper.appendChild(downloadLink);

            wallpapersContainer.appendChild(wallpaper);
        });

        if (images.length === 0) {
            loadMoreButton.style.display = 'none';
        } else {
            loadMoreButton.style.display = 'block';
        }
    }
});
