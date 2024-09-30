const darkModeCheckbox = document.querySelector('#toggle');
const html = document.querySelector('html');

darkModeCheckbox.addEventListener('click', function () {
    darkModeCheckbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
});