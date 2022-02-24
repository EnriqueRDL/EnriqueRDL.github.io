const darkModeToggle = document.getElementById('darkModeToggle');
const reverseToggle = document.getElementById('reverseToggle');
const animationToggle = document.getElementById('animationToggle');
const collapseToggle = document.getElementById('collapseToggle');
const expandToggle = document.getElementById('expandToggle');

const body = document.body;

let darkMode = localStorage.getItem('darkMode');
let reversed = localStorage.getItem('reversed');
let animations = localStorage.getItem('animations');
let collapse = localStorage.getItem('collapse');

const enableDarkMode = () => {
	body.classList.add('DARKMODE');
	localStorage.setItem('darkMode', 'enabled');
}
const disableDarkMode = () => {
	body.classList.remove('DARKMODE');
	localStorage.setItem('darkMode', null);
}

const enableReversed = () => {
	body.classList.add('REVERSED');
	localStorage.setItem('reversed', 'enabled');
}
const disableReversed = () => {
	body.classList.remove('REVERSED');
	localStorage.setItem('reversed', null);
}

const enableAnimations = () => {
	body.classList.add('ANIMATE');
	localStorage.setItem('animations', 'enabled');
}
const disableAnimations = () => {
	body.classList.remove('ANIMATE');
	localStorage.setItem('animations', null);
}

const enableCollapse = () => {
	body.classList.add('COLLAPSED');
	localStorage.setItem('collapse', 'enabled');
}
const disableCollapse = () => {
	body.classList.remove('COLLAPSED');
	localStorage.setItem('collapse', null);
}


if (darkMode === 'enabled') {
	enableDarkMode();
}
if (reversed === 'enabled') {
	enableReversed();
}
if (animations !== 'enabled') {
	disableAnimations();
}
if (collapse === 'enabled') {
	enableCollapse();
}

darkModeToggle.addEventListener('click', function(e) {
	darkMode = localStorage.getItem('darkMode');
	if (darkMode !== 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
	e.preventDefault();
});

reverseToggle.addEventListener('click', function(e) {
	reversed = localStorage.getItem('reversed');
	if (reversed !== 'enabled') {
		enableReversed();
	} else {
		disableReversed();
	}
	e.preventDefault();
});

animationToggle.addEventListener('click', function(e) {
	animations = localStorage.getItem('animations');
	if (animations !== 'enabled') {
		enableAnimations();
	} else {
		disableAnimations();
	}
	e.preventDefault();
});

collapseToggle.addEventListener('click', function(e) {
	cT();
	e.preventDefault();
});
expandToggle.addEventListener('click', function(e) {
	cT();
	e.preventDefault();
});

function cT() {
	collapse = localStorage.getItem('collapse');
	if (collapse !== 'enabled') {
		enableCollapse();
	} else {
		disableCollapse();
	}
}