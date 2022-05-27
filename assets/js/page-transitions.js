barba.init({
	transitions: [{
		name: 'opacity-transition',
		once(data) {
			return gsap.from(data.current.container, {
				translate: '0 -100%',
				opacity: 0,
				duration: .35
			});
		},
		leave(data) {
			return gsap.to(data.current.container, {
				translate: '-100%',
				opacity: 0,
				duration: .35
			});
		},
		afterLeave(data) {
			gsap.to(window, {duration: .35, scrollTo: 0});
			return gsap.to(data.current.container, {
				display: 'none'
			});
		},
		enter(data) {
			build();
			return gsap.from(data.next.container, {
				translate: '100%',
				opacity: 0,
				duration: .35
			});
		}
	}]
});