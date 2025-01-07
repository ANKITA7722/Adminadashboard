const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('#toggle-btn');
const closeBtn = document.querySelector('#close-btn');
const mainContent = document.querySelector('.main-content');


toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    mainContent.classList.toggle('shrink');
});


closeBtn.addEventListener('click', () => {
    sidebar.classList.add('hidden');
    mainContent.classList.add('shrink');
});




