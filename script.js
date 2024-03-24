document.addEventListener('DOMContentLoaded', () => {
    // Load preferences from local storage
    const theme = localStorage.getItem('theme') || 'light';
    const listStyle = localStorage.getItem('listStyle') || 'default';
    applyPreferences(theme, listStyle);

    // Dynamically add items to the list with specific colors
    const itemList = document.getElementById('itemList');
    const colors = ['Red', 'Blue', 'Green', 'Orange', 'Purple'];
    for (let i = 0; i < colors.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = colors[i]; // Set the text content to the color name
        listItem.classList.add('list-group-item');
        itemList.appendChild(listItem);
    }

    // Event listeners for preferences panel
    document.getElementById('themeSelect').addEventListener('change', (event) => {
        const theme = event.target.value;
        localStorage.setItem('theme', theme);
        applyPreferences(theme, listStyle);
    });

    document.getElementById('listStyleSelect').addEventListener('change', (event) => {
        const listStyle = event.target.value;
        localStorage.setItem('listStyle', listStyle);
        applyPreferences(theme, listStyle);
    });
});

function applyPreferences(theme, listStyle) {
    // Apply theme
    document.body.className = theme;

    // Apply list style
    const itemList = document.getElementById('itemList');
    itemList.className = listStyle;
}
