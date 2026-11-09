/**
 * Ultra-smooth fluid scrolling utility
 * Provides a gentle, physics-eased glide curve for anchor navigation.
 * Prevents native CSS scroll-behavior conflicts and ensures 60fps animation.
 */
export const smoothScrollTo = (targetId: string, duration = 750) => {
  if (typeof window === 'undefined') return;

  const target = document.querySelector(targetId);
  if (!target) return;

  // Respect user preference for reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    target.scrollIntoView({ behavior: 'auto' });
    return;
  }

  // Prevent CSS scroll-behavior: smooth from conflicting with RAF micro-steps
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';

  const startPosition = window.pageYOffset || document.documentElement.scrollTop;
  const navbar = document.querySelector('header');
  const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 76;
  const navbarOffset = navbarHeight + 16; // Navbar height + breathing room
  const targetPosition = target.getBoundingClientRect().top + startPosition - navbarOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  // Quintic / Cubic Ease-in-out for an ultra-luxurious, buttery glide
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, Math.round(startPosition + distance * easedProgress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      root.style.scrollBehavior = previousScrollBehavior;
    }
  };

  requestAnimationFrame(animation);
};
