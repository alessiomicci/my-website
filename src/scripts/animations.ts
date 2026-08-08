import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = gsap.utils.toArray<HTMLElement>('[data-animate-item]');

items.forEach((el) => {
	gsap.fromTo(
		el,
		{ opacity: 0, y: 16 },
		{
			opacity: 1,
			y: 0,
			duration: 0.5,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: el,
				start: 'top 85%',
				once: true,
			},
		}
	);
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
	gsap.set(items, { opacity: 1, y: 0 });
	ScrollTrigger.getAll().forEach((st) => st.kill());
}
