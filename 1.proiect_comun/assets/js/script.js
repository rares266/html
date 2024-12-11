const searchInput = document.getElementById('searchInput');
const search = document.getElementById('search');

// Când input-ul este focalizat
searchInput.addEventListener('focus', () => {
	searchInput.placeholder = 'Căutare...';
    searchInput.classList.add('active');
    searchInput.classList.remove('remove');

});

// Când input-ul pierde focusul
searchInput.addEventListener('blur', () => {
	searchInput.placeholder = ''; // Revine la placeholder-ul gol
    searchInput.classList.remove('active');
    searchInput.classList.add('remove');
});
