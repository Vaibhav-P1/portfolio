'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Journey waypoints along scroll progress (0.0 = Hero, 1.0 = Contact/Footer)
interface Waypoint {
  progress: number;
  xPctDesktop: number; // 0.0 to 1.0 fraction of viewport width
  yPctDesktop: number; // 0.0 to 1.0 fraction of viewport height
  scaleDesktop: number;
  opacityDesktop: number;
  rotDesktop: number;

  xPctMobile: number;
  yPctMobile: number;
  scaleMobile: number;
  opacityMobile: number;
  rotMobile: number;
}

const WAYPOINTS: Waypoint[] = [
  // 1. HERO — Prominent, greeting the user in the top-right
  {
    progress: 0.0,
    xPctDesktop: 0.72,
    yPctDesktop: 0.16,
    scaleDesktop: 1.05,
    opacityDesktop: 0.32,
    rotDesktop: 0,
    xPctMobile: 0.62,
    yPctMobile: 0.14,
    scaleMobile: 0.72,
    opacityMobile: 0.20,
    rotMobile: 0,
  },
  // 2. ABOUT — Drifts gracefully alongside about narrative & stats
  {
    progress: 0.16,
    xPctDesktop: 0.80,
    yPctDesktop: 0.28,
    scaleDesktop: 0.88,
    opacityDesktop: 0.26,
    rotDesktop: -3,
    xPctMobile: 0.68,
    yPctMobile: 0.25,
    scaleMobile: 0.68,
    opacityMobile: 0.18,
    rotMobile: -2,
  },
  // 3. SKILLS — Shifts to left-center gutter, peering into technical stack
  {
    progress: 0.32,
    xPctDesktop: 0.16,
    yPctDesktop: 0.34,
    scaleDesktop: 0.84,
    opacityDesktop: 0.24,
    rotDesktop: 4,
    xPctMobile: 0.60,
    yPctMobile: 0.30,
    scaleMobile: 0.66,
    opacityMobile: 0.16,
    rotMobile: 2,
  },
  // 4. PROJECTS — Weaves to the right side of the project cards
  {
    progress: 0.48,
    xPctDesktop: 0.82,
    yPctDesktop: 0.38,
    scaleDesktop: 0.88,
    opacityDesktop: 0.28,
    rotDesktop: -4,
    xPctMobile: 0.68,
    yPctMobile: 0.36,
    scaleMobile: 0.68,
    opacityMobile: 0.18,
    rotMobile: -3,
  },
  // 5. SOUNDTRACK / MUSIC — Center-right presence alongside the music stage
  {
    progress: 0.62,
    xPctDesktop: 0.78,
    yPctDesktop: 0.32,
    scaleDesktop: 0.92,
    opacityDesktop: 0.28,
    rotDesktop: 3,
    xPctMobile: 0.64,
    yPctMobile: 0.32,
    scaleMobile: 0.70,
    opacityMobile: 0.18,
    rotMobile: 2,
  },
  // 6. EXPERIENCE — Right side, complementing the left-aligned timeline
  {
    progress: 0.76,
    xPctDesktop: 0.82,
    yPctDesktop: 0.36,
    scaleDesktop: 0.88,
    opacityDesktop: 0.26,
    rotDesktop: -3,
    xPctMobile: 0.68,
    yPctMobile: 0.35,
    scaleMobile: 0.66,
    opacityMobile: 0.16,
    rotMobile: -2,
  },
  // 7. EDUCATION — Subtle balance across academic milestones
  {
    progress: 0.88,
    xPctDesktop: 0.76,
    yPctDesktop: 0.38,
    scaleDesktop: 0.88,
    opacityDesktop: 0.26,
    rotDesktop: 3,
    xPctMobile: 0.64,
    yPctMobile: 0.38,
    scaleMobile: 0.66,
    opacityMobile: 0.16,
    rotMobile: 2,
  },
  // 8. CONTACT — Triumphant end of journey, prominent again
  {
    progress: 1.0,
    xPctDesktop: 0.72,
    yPctDesktop: 0.22,
    scaleDesktop: 1.02,
    opacityDesktop: 0.32,
    rotDesktop: 0,
    xPctMobile: 0.62,
    yPctMobile: 0.20,
    scaleMobile: 0.72,
    opacityMobile: 0.20,
    rotMobile: 0,
  },
];

// Smooth Cosine Interpolation between waypoints
function interpolateWaypoints(p: number, isMobile: boolean) {
  const clampedP = Math.min(Math.max(p, 0), 1);

  // Find surrounding waypoints
  let i = 0;
  while (i < WAYPOINTS.length - 1 && WAYPOINTS[i + 1].progress < clampedP) {
    i++;
  }

  if (i >= WAYPOINTS.length - 1) {
    const last = WAYPOINTS[WAYPOINTS.length - 1];
    return {
      xPct: isMobile ? last.xPctMobile : last.xPctDesktop,
      yPct: isMobile ? last.yPctMobile : last.yPctDesktop,
      scale: isMobile ? last.scaleMobile : last.scaleDesktop,
      opacity: isMobile ? last.opacityMobile : last.opacityDesktop,
      rot: isMobile ? last.rotMobile : last.rotDesktop,
    };
  }

  const w1 = WAYPOINTS[i];
  const w2 = WAYPOINTS[i + 1];

  const segRange = w2.progress - w1.progress;
  const rawT = segRange > 0 ? (clampedP - w1.progress) / segRange : 0;
  // Smooth ease curve: 0.5 - 0.5 * cos(pi * t)
  const t = 0.5 - 0.5 * Math.cos(Math.PI * Math.min(Math.max(rawT, 0), 1));

  const x1 = isMobile ? w1.xPctMobile : w1.xPctDesktop;
  const x2 = isMobile ? w2.xPctMobile : w2.xPctDesktop;
  const y1 = isMobile ? w1.yPctMobile : w1.yPctDesktop;
  const y2 = isMobile ? w2.yPctMobile : w2.yPctDesktop;
  const s1 = isMobile ? w1.scaleMobile : w1.scaleDesktop;
  const s2 = isMobile ? w2.scaleMobile : w2.scaleDesktop;
  const o1 = isMobile ? w1.opacityMobile : w1.opacityDesktop;
  const o2 = isMobile ? w2.opacityMobile : w2.opacityDesktop;
  const r1 = isMobile ? w1.rotMobile : w1.rotDesktop;
  const r2 = isMobile ? w2.rotMobile : w2.rotDesktop;

  return {
    xPct: x1 + (x2 - x1) * t,
    yPct: y1 + (y2 - y1) * t,
    scale: s1 + (s2 - s1) * t,
    opacity: o1 + (o2 - o1) * t,
    rot: r1 + (r2 - r1) * t,
  };
}

export default function AndroidBackdrop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mascotWrapperRef = useRef<HTMLDivElement>(null);
  const [isDancing, setIsDancing] = useState(false);
  const isDancingRef = useRef(false);

  useEffect(() => {
    // Listen for groove mode dance toggle
    const handleDanceToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ isDancing: boolean }>;
      const dancing = Boolean(customEvent.detail?.isDancing);
      setIsDancing(dancing);
      isDancingRef.current = dancing;
    };
    window.addEventListener('mascot-dance-toggle', handleDanceToggle);

    // Detect reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion && mascotWrapperRef.current) {
        mascotWrapperRef.current.style.transform = `translate3d(${window.innerWidth * 0.72}px, ${window.innerHeight * 0.2}px, 0) rotate(0deg) scale(1)`;
      }
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    let isMobile = window.innerWidth < 768;
    const handleResize = () => {
      isMobile = window.innerWidth < 768;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Target positions
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    let targetScrollProgress = 0;
    let currentScrollProgress = 0;

    const calculateScrollProgress = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return 0;
      return Math.min(Math.max((window.scrollY || 0) / docHeight, 0), 1);
    };

    targetScrollProgress = calculateScrollProgress();
    currentScrollProgress = targetScrollProgress;

    // Desktop mousemove parallax
    const handlePointerMove = (e: MouseEvent) => {
      if (isMobile || prefersReducedMotion) return;
      const { innerWidth, innerHeight } = window;
      targetMouseX = ((e.clientX / innerWidth) - 0.5) * 2; // -1 to 1
      targetMouseY = ((e.clientY / innerHeight) - 0.5) * 2; // -1 to 1
    };

    // Scroll tracking
    const handleScroll = () => {
      targetScrollProgress = calculateScrollProgress();
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation frame loop for continuous smooth motion
    let rafId: number;
    let startTime = performance.now();

    const animate = (time: number) => {
      if (!prefersReducedMotion) {
        // Butter-smooth lerping
        const lerpFactorMouse = 0.05;
        const lerpFactorScroll = 0.06;

        currentMouseX += (targetMouseX - currentMouseX) * lerpFactorMouse;
        currentMouseY += (targetMouseY - currentMouseY) * lerpFactorMouse;
        currentScrollProgress += (targetScrollProgress - currentScrollProgress) * lerpFactorScroll;

        const elapsed = (time - startTime) * 0.001;

        if (mascotWrapperRef.current) {
          const vw = window.innerWidth;
          const vh = window.innerHeight;

          // Interpolate along the journey through all sections
          const currentWaypoint = interpolateWaypoints(currentScrollProgress, isMobile);

          // Approximate rendered size for boundary clamping
          const baseMascotWidth = isMobile ? 180 : 300;
          const baseMascotHeight = isMobile ? 220 : 380;
          const renderedWidth = baseMascotWidth * currentWaypoint.scale;
          const renderedHeight = baseMascotHeight * currentWaypoint.scale;

          // Compute raw target coordinates
          const rawX = currentWaypoint.xPct * vw;
          const rawY = currentWaypoint.yPct * vh;

          // Add subtle mouse parallax (desktop only)
          const mouseOffsetX = isMobile ? 0 : currentMouseX * 32;
          const mouseOffsetY = isMobile ? 0 : currentMouseY * 16;

          // Playful continuous harmonics (ambient bounce) + lively groove dance
          const danceBounce = isDancingRef.current ? Math.sin(elapsed * 7) * (isMobile ? 8 : 14) : 0;
          const danceTilt = isDancingRef.current ? Math.sin(elapsed * 3.5) * 4 : 0;
          const ambientBounce = (Math.sin(elapsed * 2.2 + currentScrollProgress * 8) * (isMobile ? 5 : 8)) + danceBounce;
          const dynamicTilt = currentWaypoint.rot + (isMobile ? 0 : currentMouseX * 3) + Math.sin(elapsed * 1.5) * 2 + danceTilt;

          // CRITICAL: Strictly clamp coordinates so the mascot NEVER leaves the viewport!
          const minX = 16;
          const maxX = Math.max(vw - renderedWidth - 16, minX);
          const minY = 64; // Below navbar
          const maxY = Math.max(vh - renderedHeight - 24, minY);

          const finalX = Math.min(Math.max(rawX + mouseOffsetX, minX), maxX);
          const finalY = Math.min(Math.max(rawY + mouseOffsetY + ambientBounce, minY), maxY);

          // Apply hardware-accelerated transform directly (0 React re-renders)
          mascotWrapperRef.current.style.transform = `translate3d(${finalX.toFixed(1)}px, ${finalY.toFixed(1)}px, 0) rotate(${dynamicTilt.toFixed(2)}deg) scale(${currentWaypoint.scale.toFixed(3)})`;
          mascotWrapperRef.current.style.opacity = currentWaypoint.opacity.toFixed(3);
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mascot-dance-toggle', handleDanceToggle);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none z-[1] select-none"
    >
      {/* Subtle technical background grid */}
      <div 
        className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />

      {/* Decorative ambient tint glow behind hero */}
      <div 
        className="absolute -top-[15%] right-[5%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#3DDC84]/12 via-[#137333]/05 to-transparent blur-[110px]" 
      />

      {/* Persistent Animated Android Mascot visual (positioned via translate3d from top-left (0,0)) */}
      <div
        ref={mascotWrapperRef}
        className="absolute top-0 left-0 w-[200px] sm:w-[260px] md:w-[300px] lg:w-[340px] will-change-transform"
        style={{
          transform: 'translate3d(70vw, 16vh, 0) scale(1.05)',
          opacity: 0.32,
        }}
      >
        <div className="relative w-full h-auto flex items-center justify-center">
          {/* Subtle tech halo rings behind the character */}
          <svg
            viewBox="0 0 340 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none -z-10"
          >
            <circle cx="170" cy="210" r="150" stroke="#137333" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.25" />
            <circle cx="170" cy="210" r="180" stroke="#34A853" strokeWidth="0.75" strokeOpacity="0.15" />
            <circle cx="170" cy="210" r="115" stroke="#1DB954" strokeWidth="0.5" strokeDasharray="3 4" strokeOpacity="0.18" />
          </svg>

          {/* Vaibhav's Android Mascot (isolated from Androidify video) */}
          <div className="relative z-10 w-full">
            <Image
              src={isDancing ? '/mascot-dance.webp' : '/mascot-idle.webp'}
              alt="Vaibhav's Android Mascot"
              width={320}
              height={412}
              className="w-full h-auto drop-shadow-md select-none pointer-events-none transition-opacity duration-300"
              priority
              unoptimized={isDancing}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
