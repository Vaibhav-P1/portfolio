'use client';
import React, { useEffect, useRef } from 'react';

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
    scaleDesktop: 1.08,
    opacityDesktop: 0.30,
    rotDesktop: 0,
    xPctMobile: 0.62,
    yPctMobile: 0.14,
    scaleMobile: 0.72,
    opacityMobile: 0.18,
    rotMobile: 0,
  },
  // 2. ABOUT — Drifts gracefully alongside about narrative & stats
  {
    progress: 0.18,
    xPctDesktop: 0.80,
    yPctDesktop: 0.30,
    scaleDesktop: 0.88,
    opacityDesktop: 0.25,
    rotDesktop: -4,
    xPctMobile: 0.68,
    yPctMobile: 0.25,
    scaleMobile: 0.68,
    opacityMobile: 0.16,
    rotMobile: -2,
  },
  // 3. SKILLS — Shifts to left-center gutter, peering into technical stack
  {
    progress: 0.36,
    xPctDesktop: 0.16,
    yPctDesktop: 0.36,
    scaleDesktop: 0.84,
    opacityDesktop: 0.23,
    rotDesktop: 5,
    xPctMobile: 0.60,
    yPctMobile: 0.32,
    scaleMobile: 0.66,
    opacityMobile: 0.15,
    rotMobile: 3,
  },
  // 4. PROJECTS START (Zenith/Shop) — Weaves to the right side of the layout
  {
    progress: 0.52,
    xPctDesktop: 0.82,
    yPctDesktop: 0.40,
    scaleDesktop: 0.90,
    opacityDesktop: 0.27,
    rotDesktop: -5,
    xPctMobile: 0.68,
    yPctMobile: 0.38,
    scaleMobile: 0.68,
    opacityMobile: 0.17,
    rotMobile: -3,
  },
  // 5. PROJECTS MID (Rakshak/Weather) — Weaves across to the left
  {
    progress: 0.66,
    xPctDesktop: 0.18,
    yPctDesktop: 0.44,
    scaleDesktop: 0.90,
    opacityDesktop: 0.26,
    rotDesktop: 6,
    xPctMobile: 0.58,
    yPctMobile: 0.42,
    scaleMobile: 0.68,
    opacityMobile: 0.16,
    rotMobile: 4,
  },
  // 6. EXPERIENCE — Right side, complementing the left-aligned timeline
  {
    progress: 0.80,
    xPctDesktop: 0.82,
    yPctDesktop: 0.34,
    scaleDesktop: 0.88,
    opacityDesktop: 0.25,
    rotDesktop: -3,
    xPctMobile: 0.68,
    yPctMobile: 0.35,
    scaleMobile: 0.66,
    opacityMobile: 0.16,
    rotMobile: -2,
  },
  // 7. EDUCATION — Subtle balance across academic milestones
  {
    progress: 0.90,
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
    yPctDesktop: 0.24,
    scaleDesktop: 1.04,
    opacityDesktop: 0.32,
    rotDesktop: 0,
    xPctMobile: 0.62,
    yPctMobile: 0.22,
    scaleMobile: 0.72,
    opacityMobile: 0.19,
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
  const headRef = useRef<SVGGElement>(null);
  const leftArmRef = useRef<SVGGElement>(null);
  const rightArmRef = useRef<SVGGElement>(null);
  const leftLegRef = useRef<SVGGElement>(null);
  const rightLegRef = useRef<SVGGElement>(null);

  useEffect(() => {
    // Detect reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion && mascotWrapperRef.current) {
        mascotWrapperRef.current.style.transform = `translate3d(${window.innerWidth * 0.72}px, ${window.innerHeight * 0.2}px, 0) rotate(0deg) scale(1)`;
        if (leftArmRef.current) leftArmRef.current.style.transform = 'none';
        if (rightArmRef.current) rightArmRef.current.style.transform = 'none';
        if (headRef.current) headRef.current.style.transform = 'none';
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
          const baseMascotWidth = isMobile ? 220 : 360;
          const baseMascotHeight = isMobile ? 260 : 420;
          const renderedWidth = baseMascotWidth * currentWaypoint.scale;
          const renderedHeight = baseMascotHeight * currentWaypoint.scale;

          // Compute raw target coordinates
          const rawX = currentWaypoint.xPct * vw;
          const rawY = currentWaypoint.yPct * vh;

          // Add subtle mouse parallax (desktop only)
          const mouseOffsetX = isMobile ? 0 : currentMouseX * 36;
          const mouseOffsetY = isMobile ? 0 : currentMouseY * 18;

          // Playful continuous harmonics (ambient bounce)
          const ambientBounce = Math.sin(elapsed * 2.2 + currentScrollProgress * 8) * (isMobile ? 5 : 9);
          const dynamicTilt = currentWaypoint.rot + (isMobile ? 0 : currentMouseX * 3.5) + Math.sin(elapsed * 1.6) * 2;

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

          // Limb animations (playful subtle waving and steps)
          if (leftArmRef.current) {
            const leftArmAngle = Math.sin(elapsed * 2.6 + currentScrollProgress * 10) * 11 - 2;
            leftArmRef.current.style.transform = `rotate(${leftArmAngle.toFixed(2)}deg)`;
          }

          if (rightArmRef.current) {
            const rightArmAngle = Math.cos(elapsed * 2.6 + currentScrollProgress * 10) * 15 + 6;
            rightArmRef.current.style.transform = `rotate(${rightArmAngle.toFixed(2)}deg)`;
          }

          if (headRef.current) {
            const headTilt = Math.sin(elapsed * 1.8) * 3;
            headRef.current.style.transform = `rotate(${headTilt.toFixed(2)}deg)`;
          }

          if (leftLegRef.current && rightLegRef.current) {
            const legSway = Math.sin(elapsed * 2.2) * 4;
            leftLegRef.current.style.transform = `rotate(${legSway.toFixed(2)}deg)`;
            rightLegRef.current.style.transform = `rotate(${(-legSway).toFixed(2)}deg)`;
          }
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
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
        className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />

      {/* Decorative ambient tint glow behind hero */}
      <div 
        className="absolute -top-[15%] right-[5%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#3DDC84]/12 via-[#137333]/05 to-transparent blur-[110px]" 
      />

      {/* Persistent Animated Android Mascot visual (positioned via translate3d from top-left (0,0)) */}
      <div
        ref={mascotWrapperRef}
        className="absolute top-0 left-0 w-[240px] sm:w-[320px] md:w-[360px] lg:w-[400px] will-change-transform"
        style={{
          transform: 'translate3d(70vw, 16vh, 0) scale(1.05)',
          opacity: 0.3,
        }}
      >
        <svg
          viewBox="0 0 320 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-sm"
        >
          <defs>
            {/* Soft Android Green Gradient */}
            <linearGradient id="androidGreenGrad" x1="80" y1="40" x2="240" y2="340" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3DDC84" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#34A853" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#137333" stopOpacity="0.9" />
            </linearGradient>

            {/* Subtle inner grid pattern */}
            <pattern id="mascotGrid" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#137333" strokeWidth="0.5" strokeOpacity="0.12" />
            </pattern>
          </defs>

          {/* Decorative halo rings behind mascot */}
          <circle cx="160" cy="180" r="145" stroke="#137333" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.25" />
          <circle cx="160" cy="180" r="170" stroke="#34A853" strokeWidth="0.75" strokeOpacity="0.15" />

          {/* Android mascot elements */}
          <g id="mascot-full">
            {/* HEAD with Antennae and Eyes */}
            <g
              ref={headRef}
              id="mascot-head"
              style={{ transformOrigin: '160px 115px' }}
            >
              {/* Antennae */}
              <line
                x1="112"
                y1="62"
                x2="92"
                y2="24"
                stroke="url(#androidGreenGrad)"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <line
                x1="208"
                y1="62"
                x2="228"
                y2="24"
                stroke="url(#androidGreenGrad)"
                strokeWidth="7"
                strokeLinecap="round"
              />

              {/* Dome */}
              <path
                d="M 80,115 A 80,80 0 0,1 240,115 Z"
                fill="url(#androidGreenGrad)"
                stroke="#137333"
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />
              {/* Head subtle tech grid overlay */}
              <path
                d="M 80,115 A 80,80 0 0,1 240,115 Z"
                fill="url(#mascotGrid)"
              />

              {/* Eyes (authentic light cutout look) */}
              <circle cx="124" cy="78" r="7.5" fill="#FAFAF9" />
              <circle cx="196" cy="78" r="7.5" fill="#FAFAF9" />
            </g>

            {/* BODY */}
            <g id="mascot-body">
              <path
                d="M 80,126 L 240,126 L 240,242 A 22,22 0 0,1 218,264 L 102,264 A 22,22 0 0,1 80,242 Z"
                fill="url(#androidGreenGrad)"
                stroke="#137333"
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />
              <path
                d="M 80,126 L 240,126 L 240,242 A 22,22 0 0,1 218,264 L 102,264 A 22,22 0 0,1 80,242 Z"
                fill="url(#mascotGrid)"
              />

              {/* Decorative circuit line on chest (distinctive developer touch) */}
              <path
                d="M 120,165 L 145,165 L 160,180 L 195,180"
                stroke="#FAFAF9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeOpacity="0.6"
              />
              <circle cx="120" cy="165" r="3" fill="#FAFAF9" fillOpacity="0.9" />
              <circle cx="195" cy="180" r="3" fill="#FAFAF9" fillOpacity="0.9" />
            </g>

            {/* LEFT ARM */}
            <g
              ref={leftArmRef}
              id="mascot-left-arm"
              style={{ transformOrigin: '56px 138px' }}
            >
              <rect
                x="44"
                y="126"
                width="24"
                height="102"
                rx="12"
                fill="url(#androidGreenGrad)"
                stroke="#137333"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />
            </g>

            {/* RIGHT ARM */}
            <g
              ref={rightArmRef}
              id="mascot-right-arm"
              style={{ transformOrigin: '264px 138px' }}
            >
              <rect
                x="252"
                y="126"
                width="24"
                height="102"
                rx="12"
                fill="url(#androidGreenGrad)"
                stroke="#137333"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />
            </g>

            {/* LEFT LEG */}
            <g
              ref={leftLegRef}
              id="mascot-left-leg"
              style={{ transformOrigin: '124px 266px' }}
            >
              <rect
                x="112"
                y="266"
                width="24"
                height="64"
                rx="12"
                fill="url(#androidGreenGrad)"
                stroke="#137333"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />
            </g>

            {/* RIGHT LEG */}
            <g
              ref={rightLegRef}
              id="mascot-right-leg"
              style={{ transformOrigin: '196px 266px' }}
            >
              <rect
                x="184"
                y="266"
                width="24"
                height="64"
                rx="12"
                fill="url(#androidGreenGrad)"
                stroke="#137333"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />
            </g>
          </g>

          {/* Floating Android & Jetpack developer badge accents */}
          <g opacity="0.45">
            {/* Kotlin Diamond Accent */}
            <path
              d="M 40,70 L 60,50 L 60,70 Z"
              fill="#137333"
              opacity="0.3"
            />
            {/* Compose bracket ornament */}
            <text
              x="260"
              y="70"
              fill="#137333"
              fontSize="20"
              fontFamily="monospace"
              fontWeight="bold"
              opacity="0.35"
            >
              &lt;/&gt;
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
