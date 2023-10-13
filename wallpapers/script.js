// Filtrar fondos de pantalla por categoría
document.addEventListener('DOMContentLoaded', function () {
    const filters = document.querySelectorAll('.category-filter');
    const wallpapers = document.querySelectorAll('.wallpaper');

    filters.forEach(filter => {
        filter.addEventListener('click', function () {
            const category = filter.getAttribute('data-category');

            wallpapers.forEach(wallpaper => {
                const wallpaperCategory = wallpaper.getAttribute('data-category');

                if (category === 'todas' || category === wallpaperCategory) {
                    wallpaper.style.display = 'block';
                } else {
                    wallpaper.style.display = 'none';
                }
            });
        });
    });
});
