document.addEventListener('DOMContentLoaded', function () {
    // Datos de ejemplo
    const dataList = document.getElementById('data-list');
    const itemsPerPage = 12; // Cambia esto según tus necesidades
    let currentPage = 1;

    // Función para mostrar elementos de la página actual
    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const listItems = Array.from(dataList.getElementsByClassName('lili'));

        listItems.forEach((item, index) => {
            item.style.display = (index >= start && index < end) ? 'block' : 'none';
        });

        document.getElementById('page-num').textContent = `Página ${page}`;
    }

    // Inicializar la página
    showPage(currentPage);

    // Manejar clic en botones de paginación
    document.getElementById('prev-btn').addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.getElementById('next-btn').addEventListener('click', function () {
        const totalItems = dataList.getElementsByClassName('lili').length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });
});
listItems