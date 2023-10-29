
function openContainer() {
    var container = document.querySelector('.container');
    container.style.width = '580px'; // Set width to 580px
    container.style.height = '370px'; // Set height to 370px
    container.style.display = 'flex';
    container.style.justifyContent = 'center'; // Center the container horizontally
    container.style.alignItems = 'center'; // Center the container vertically
}

function makeFullScreen() {
    var container = document.querySelector('.container');
    var navbar = document.querySelector('.navbar');

    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.boxSizing = 'border-box'; // Set box-sizing property

    navbar.style.width = '100%';
    navbar.style.height = '30px';
    navbar.style.display = 'flex';
    navbar.style.justifyContent = 'space-between';
    navbar.style.alignItems = 'center';
    navbar.style.padding = '10px';
    navbar.style.boxSizing = 'border-box'; // Set box-sizing property

    // Adjust other child elements' styles here if needed
}



function restoreSize() {
    var container = document.querySelector('.container');
    container.style.width = '580px'; // Set width to 580px
    container.style.height = '370px'; // Set height to 370px
    container.style.display = 'flex';
    container.style.justifyContent = 'center'; // Center the container horizontally
    container.style.alignItems = 'center'; // Center the container vertically

}

function hideContainer() {
    var container = document.querySelector('.container');
    container.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    var greenButton = document.querySelector('.circle.green');
    var yellowButton = document.querySelector('.circle.yellow');
    var redButton = document.querySelector('.circle.red');

    greenButton.addEventListener('click', makeFullScreen);
    yellowButton.addEventListener('click', restoreSize);
    redButton.addEventListener('click', hideContainer);
});
