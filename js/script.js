const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
	menuButton.addEventListener('click', () => {
		const isOpen = navigation.classList.toggle('is-open');
		menuButton.setAttribute('aria-expanded', String(isOpen));
	});
}
document.querySelectorAll('.current-year').forEach((year) => {
	year.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

if (contactForm && formStatus) {
	contactForm.addEventListener('submit', (event) => {
		event.preventDefault();
		formStatus.textContent = 'Mensagem pronta! Em breve entrarei em contato.';
		formStatus.style.color = '#bf4d31';
		contactForm.reset();
	});
}
