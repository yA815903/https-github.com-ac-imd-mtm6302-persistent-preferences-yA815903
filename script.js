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
function applyPreferences(theme, listStyle) {
    // Apply theme
    document.body.className = theme;

    // Apply list style
    const itemList = document.getElementById('itemList');
    itemList.className = listStyle;
}
document.addEventListener('DOMContentLoaded', function() {
    // Get the theme selection dropdown
    var themeSelect = document.getElementById('themeSelect');

    // Function to change the background color based on the selected theme
    function changeBackgroundColor() {
        var selectedTheme = themeSelect.value;
        switch(selectedTheme) {
            case 'dark':
                document.body.style.backgroundColor = '#006400'; // Dark background color
                break;
            case 'sepia':
                document.body.style.backgroundColor = '#704214'; // Sepia background color
                break;
            default:
                document.body.style.backgroundColor = '#fff'; // Default background color (light)
        }
    }

    // Attach an event listener to the theme selection dropdown
    themeSelect.addEventListener('change', changeBackgroundColor);

    // Call the function initially to set the background color based on the default selected theme
    changeBackgroundColor();
});


document.addEventListener('DOMContentLoaded', function() {
    const themeSelect = document.getElementById('themeSelect');
    const listStyleSelect = document.getElementById('listStyleSelect');
    const itemList = document.getElementById('itemList');

    function updateListStyle() {
        // Remove all existing list style classes
        itemList.classList.remove('list-group-striped', 'list-group-bordered', 'dark-theme', 'sepia-theme');

        // Add theme-specific classes
        const theme = themeSelect.value;
        if (theme === 'dark') {
            itemList.classList.add('dark-theme');
        } else if (theme === 'sepia') {
            itemList.classList.add('sepia-theme');
        }

        // Add list style class
        const listStyle = listStyleSelect.value;
        if (listStyle === 'striped') {
            itemList.classList.add('list-group-striped');
        } else if (listStyle === 'bordered') {
            itemList.classList.add('list-group-bordered');
        }
    }

    // Listen for changes to the theme and list style selectors
    themeSelect.addEventListener('change', updateListStyle);
    listStyleSelect.addEventListener('change', updateListStyle);

    // Initialize the list style on page load
    updateListStyle();
});


