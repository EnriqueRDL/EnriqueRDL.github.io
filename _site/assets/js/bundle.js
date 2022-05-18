
/* Get archive search */
const archiveSearch = document.querySelector('input.archive-search');

/* When the text changes search though archive posts */
archiveSearch.addEventListener('input', function() {
	let search = this.value.toLowerCase();
	let posts = document.querySelectorAll('.archive-posts li');
	posts.forEach(function(post) {
		let content = post.querySelector('a').innerText.toLowerCase();
		if (content.indexOf(search) > -1) {
			post.style.display = 'block';
		}
		else {
			post.style.display = 'none';
		}
	});
});