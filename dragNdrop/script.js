let selectedElement = null;
let offsetX, offsetY;

document.addEventListener('DOMContentLoaded', () => {
    const desktop = document.getElementById('desktop');
    const taskbar = document.getElementById('taskbar');
    const contextMenu = document.getElementById('context-menu');

    desktop.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('draggable')) {
            selectedElement = e.target;
            offsetX = e.clientX - selectedElement.getBoundingClientRect().left;
            offsetY = e.clientY - selectedElement.getBoundingClientRect().top;
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (selectedElement) {
            e.preventDefault();
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;

            const desktopRect = desktop.getBoundingClientRect();
            const maxX = desktopRect.width - selectedElement.clientWidth;
            const maxY = desktopRect.height - selectedElement.clientHeight;

            selectedElement.style.left = Math.min(maxX, Math.max(0, x - desktopRect.left)) + 'px';
            selectedElement.style.top = Math.min(maxY, Math.max(0, y - desktopRect.top)) + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        selectedElement = null;
    });

    desktop.addEventListener('contextmenu', (e) => {
        e.preventDefault();

        contextMenu.style.display = 'block';
        contextMenu.style.left = e.clientX + 'px';
        contextMenu.style.top = e.clientY + 'px';

        function hideContextMenu() {
            contextMenu.style.display = 'none';
        }

        document.querySelectorAll('.context-menu div').forEach(option => {
            option.addEventListener('click', hideContextMenu);
        });

        document.addEventListener('click', hideContextMenu);
    });

    // Handle context menu options here
    document.getElementById('pin-taskbar').addEventListener('click', () => {
        // Logic for pinning the image to taskbar
        selectedElement.style.position = 'absolute';
        
        const taskbarRect = taskbar.getBoundingClientRect();
        const desktopRect = desktop.getBoundingClientRect();
    
        // Calculate the correct position relative to the desktop
        const leftPosition = taskbarRect.left - desktopRect.left;
        const topPosition = taskbarRect.top - desktopRect.top;
    
        selectedElement.style.left = leftPosition + 'px';
        selectedElement.style.top = topPosition + 'px';
        
        taskbar.appendChild(selectedElement);
    });
    

    document.getElementById('open-location').addEventListener('click', () => {
        // Logic for opening file location
        alert('Opening file location...');
    });

    document.getElementById('launch').addEventListener('click', () => {
        // Logic for launching the image
        alert('Launching image...');
    });
});
