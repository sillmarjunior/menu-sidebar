function closebar() {

    const sidebar = document.getElementById('sidebar');
    const button = document.getElementById('btn');

    button.addEventListener('click', function () {
        sidebar.classList.toggle('fechar');
    });

}