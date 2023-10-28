function toggleContainer() {
    var container = document.querySelector('.container');
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'flex';
    } else {
        container.style.display = 'none';
    }
}
