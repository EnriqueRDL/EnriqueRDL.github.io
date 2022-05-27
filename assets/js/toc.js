let tocBuild = () => {
	if (document.querySelector('.toc-container') && document.querySelector('.toc-toggler')) {
		const tocContainer = document.querySelector('.toc-container');
		const tocToggler = document.querySelector('.toc-toggler');
	
		tocToggler.addEventListener('click', () => {
			tocContainer.classList.toggle('OPEN-TOC');
			tocToggler.blur();
		});
	}
};
tocBuild();