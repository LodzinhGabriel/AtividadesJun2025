document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Get the ID of the content pane to show
            const targetTabId = button.dataset.tab; // Using data-tab attribute
            const targetTabPane = document.getElementById(targetTabId);

            // Add 'active' class to the corresponding content pane
            if (targetTabPane) {
                targetTabPane.classList.add('active');
            }
        });
    });

    // Optionally, activate the first tab on page load
    if (tabButtons.length > 0) {
        tabButtons[0].click(); // Simulate a click on the first button
    }
});