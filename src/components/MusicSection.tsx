'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaSpotify, FaPlay, FaPause, FaMusic, FaHeadphones } from 'react-icons/fa';

interface SpotifyPlaybackData {
  isPaused: boolean;
  isBuffering: boolean;
  position: number;
  duration: number;
}

interface SpotifyEmbedController {
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  seek: (seconds: number) => void;
  destroy: () => void;
  loadUri: (spotifyUri: string) => void;
  addListener: (
    event: string,
    callback: (e: { data: SpotifyPlaybackData }) => void
  ) => void;
  removeListener: (event: string, callback: (...args: unknown[]) => void) => void;
}

interface SpotifyIFrameAPI {
  createController: (
    element: HTMLElement,
    options: { uri?: string; url?: string; width?: string | number; height?: string | number },
    callback: (controller: SpotifyEmbedController) => void
  ) => void;
}

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (IFrameAPI: SpotifyIFrameAPI) => void;
    SpotifyIFrameAPI?: SpotifyIFrameAPI;
  }
}

export default function MusicSection() {
  const [isGrooving, setIsGrooving] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const embedControllerRef = useRef<SpotifyEmbedController | null>(null);
  const isGroovingRef = useRef(false);

  useEffect(() => {
    isGroovingRef.current = isGrooving;
  }, [isGrooving]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Initialize Spotify IFrame API to synchronize play/pause with mascot groove dance
  useEffect(() => {
    let isMounted = true;

    const setupController = (IFrameAPI: SpotifyIFrameAPI) => {
      if (!isMounted) return;
      const element = document.getElementById('spotify-embed-mount');
      if (!element) return;

      IFrameAPI.createController(
        element,
        {
          uri: 'spotify:playlist:0kh9GFyd6YiuXLCetYJ2r0',
          width: '100%',
          height: 352,
        },
        (EmbedController) => {
          if (!isMounted) return;
          embedControllerRef.current = EmbedController;

          // Bidirectional sync: when user presses play or pause inside Spotify, toggle mascot dance
          EmbedController.addListener('playback_update', (e) => {
            const isPaused = Boolean(e.data?.isPaused);
            const isPlaying = !isPaused;
            setIsGrooving(isPlaying);
            if (typeof window !== 'undefined') {
              window.dispatchEvent(
                new CustomEvent('mascot-dance-toggle', { detail: { isDancing: isPlaying } })
              );
            }
          });

          // If the user already clicked "Groove Mode" while controller was loading, start playback
          if (isGroovingRef.current) {
            EmbedController.play();
          }
        }
      );
    };

    if (typeof window !== 'undefined') {
      if (window.SpotifyIFrameAPI) {
        setupController(window.SpotifyIFrameAPI);
      } else {
        const prevCallback = window.onSpotifyIframeApiReady;
        window.onSpotifyIframeApiReady = (IFrameAPI) => {
          window.SpotifyIFrameAPI = IFrameAPI;
          if (prevCallback) prevCallback(IFrameAPI);
          setupController(IFrameAPI);
        };

        if (!document.getElementById('spotify-iframe-api-script')) {
          const script = document.createElement('script');
          script.id = 'spotify-iframe-api-script';
          script.src = 'https://open.spotify.com/embed/iframe-api/v1';
          script.async = true;
          document.body.appendChild(script);
        }
      }
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const toggleGroove = () => {
    const nextState = !isGrooving;
    setIsGrooving(nextState);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('mascot-dance-toggle', { detail: { isDancing: nextState } })
      );
    }

    // Bidirectional sync: when Groove button is clicked, control Spotify playback
    if (embedControllerRef.current) {
      if (nextState) {
        embedControllerRef.current.play();
      } else {
        embedControllerRef.current.pause();
      }
    }
  };

  return (
    <section id="soundtrack" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background ambient accents */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#137333]/06 via-[#1DB954]/04 to-transparent rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F4EA] border border-[#CEEAD6] text-[#137333] text-xs font-semibold tracking-wider uppercase mb-4 shadow-2xs">
            <FaHeadphones className="text-xs" />
            <span>Developer Soundtrack</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 leading-tight mb-4">
            CODE HAS A <span className="text-[#137333]">SOUNDTRACK.</span>
          </h2>

          <p className="text-lg md:text-xl font-medium text-zinc-700 italic mb-3">
            &ldquo;Some bugs are easier to fix with the right song.&rdquo;
          </p>

          <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
            Behind every clean Jetpack Compose hierarchy, smooth Kotlin coroutine, and late-night architecture sprint
            is a rhythm that locks in focus. Here is the curated tracklist that fuels my daily Android development flow.
          </p>
        </div>

        {/* Content Grid: Mascot Interactive Stage on Left, Spotify Player on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Mascot Interactive Stage (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-white rounded-3xl border border-zinc-200/90 shadow-sm p-6 sm:p-8 flex flex-col items-center relative overflow-hidden">
              
              {/* Subtle tech background circle */}
              <div 
                aria-hidden="true" 
                className={`absolute inset-0 bg-radial from-[#137333]/08 to-transparent transition-opacity duration-700 pointer-events-none ${
                  isGrooving ? 'opacity-100' : 'opacity-40'
                }`}
              />

              {/* Status Pill */}
              <div className="mb-6 flex items-center justify-between w-full relative z-20">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Mascot Status
                </span>
                <span 
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                    isGrooving 
                      ? 'bg-[#1DB954]/15 text-[#137333] border border-[#1DB954]/30'
                      : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
                  }`}
                >
                  <span 
                    className={`w-2 h-2 rounded-full ${
                      isGrooving ? 'bg-[#1DB954] animate-ping' : 'bg-zinc-400'
                    }`} 
                  />
                  {isGrooving ? 'Dancing to the beat' : 'Listening with headphones'}
                </span>
              </div>

              {/* Character Stage */}
              <div 
                onClick={toggleGroove}
                title={isGrooving ? 'Click to pause dance' : 'Click to dance!'}
                className="relative z-20 w-56 h-64 sm:w-64 sm:h-72 flex items-center justify-center my-2 cursor-pointer group"
              >
                {/* Stage rings */}
                <div 
                  aria-hidden="true"
                  className={`absolute inset-0 rounded-full border border-dashed transition-all duration-700 pointer-events-none ${
                    isGrooving 
                      ? 'border-[#137333]/40 scale-105 animate-[spin_20s_linear_infinite]' 
                      : 'border-zinc-200 scale-95 group-hover:scale-100'
                  }`}
                />
                <div 
                  aria-hidden="true"
                  className={`absolute w-44 h-44 rounded-full bg-gradient-to-b from-[#137333]/10 to-transparent transition-transform duration-500 pointer-events-none ${
                    isGrooving ? 'scale-110' : 'scale-90 group-hover:scale-100'
                  }`}
                />

                {/* Android Mascot: Switches between Idle and Dance states */}
                <div 
                  className={`relative z-10 transition-transform duration-300 ${
                    isGrooving ? 'scale-105' : 'scale-100 group-hover:scale-105'
                  }`}
                >
                  {isGrooving ? (
                    <Image
                      src="/mascot-dance.webp"
                      alt="Vaibhav's Android mascot dancing to the playlist"
                      width={220}
                      height={283}
                      className="w-48 sm:w-56 h-auto drop-shadow-md select-none"
                      priority
                      unoptimized
                    />
                  ) : (
                    <Image
                      src="/mascot-idle.webp"
                      alt="Vaibhav's Android mascot in idle listening mode"
                      width={220}
                      height={283}
                      className="w-48 sm:w-56 h-auto drop-shadow-md select-none transition-transform duration-300"
                      priority
                    />
                  )}
                </div>
              </div>

              {/* Dynamic Equalizer Visualizer */}
              <div 
                aria-hidden="true"
                className="relative z-20 flex items-end justify-center gap-1.5 h-10 w-full my-4 px-8"
              >
                {[
                  { id: 1, baseH: 6, maxH: 26, dur: '0.65s', delay: '0.0s' },
                  { id: 2, baseH: 10, maxH: 34, dur: '0.5s', delay: '0.15s' },
                  { id: 3, baseH: 14, maxH: 22, dur: '0.7s', delay: '0.3s' },
                  { id: 4, baseH: 8, maxH: 38, dur: '0.45s', delay: '0.1s' },
                  { id: 5, baseH: 12, maxH: 30, dur: '0.6s', delay: '0.25s' },
                  { id: 6, baseH: 16, maxH: 36, dur: '0.55s', delay: '0.05s' },
                  { id: 7, baseH: 12, maxH: 28, dur: '0.6s', delay: '0.35s' },
                  { id: 8, baseH: 8, maxH: 34, dur: '0.48s', delay: '0.2s' },
                  { id: 9, baseH: 14, maxH: 24, dur: '0.68s', delay: '0.1s' },
                  { id: 10, baseH: 10, maxH: 32, dur: '0.52s', delay: '0.3s' },
                  { id: 11, baseH: 6, maxH: 20, dur: '0.75s', delay: '0.15s' },
                ].map((bar) => (
                  <span
                    key={bar.id}
                    style={{
                      height: isGrooving ? `${bar.maxH}px` : `${bar.baseH}px`,
                      animationDuration: isGrooving && !reducedMotion ? bar.dur : '0s',
                      animationDelay: bar.delay,
                    }}
                    className={`w-1.5 rounded-full transition-all duration-300 ${
                      isGrooving
                        ? 'bg-gradient-to-t from-[#137333] to-[#1DB954] animate-pulse'
                        : 'bg-zinc-200'
                    }`}
                  />
                ))}
              </div>

              {/* Groove Mode Controller Button */}
              <button
                id="btn-groove-toggle"
                onClick={toggleGroove}
                aria-pressed={isGrooving}
                type="button"
                className={`w-full mt-2 py-3.5 px-6 rounded-2xl font-semibold text-sm tracking-wide flex items-center justify-center gap-3 transition-all duration-200 shadow-sm cursor-pointer relative z-20 active:scale-[0.98] ${
                  isGrooving
                    ? 'bg-zinc-900 text-white hover:bg-black ring-2 ring-[#1DB954]/50'
                    : 'bg-[#137333] text-white hover:bg-[#0D652D]'
                }`}
              >
                {isGrooving ? (
                  <>
                    <FaPause className="text-xs" />
                    <span>Pause Mascot Dance</span>
                  </>
                ) : (
                  <>
                    <FaPlay className="text-xs" />
                    <span>Groove Mode · Dance with Mascot</span>
                  </>
                )}
              </button>

              <p className="mt-3 text-[11px] text-zinc-500 text-center relative z-20">
                Toggle to trigger the Androidify dance animation loop!
              </p>
            </div>
          </div>

          {/* Spotify Player & Editorial Information (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <div className="bg-[#121212] text-zinc-100 rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xl relative overflow-hidden">
              {/* Subtle Spotify Glow */}
              <div 
                aria-hidden="true"
                className="absolute top-0 right-0 w-80 h-80 bg-[#1DB954]/10 rounded-full blur-3xl pointer-events-none"
              />

              {/* Player Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1DB954] flex items-center justify-center text-black text-xl shadow-md">
                    <FaSpotify />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base tracking-tight leading-snug">
                      Focus Beats · Android Dev Sessions
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Curated by Vaibhav Pandey · Spotify Playlist
                    </p>
                  </div>
                </div>

                <a
                  id="link-spotify-external"
                  href="https://open.spotify.com/playlist/0kh9GFyd6YiuXLCetYJ2r0"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold tracking-wide transition-colors border border-zinc-700/80 shadow-2xs"
                >
                  <span>Open in Spotify</span>
                  <span className="text-[#1DB954]">↗</span>
                </a>
              </div>

              {/* Controlled Spotify Embed Iframe Container */}
              <div className="my-6 relative z-10 rounded-2xl overflow-hidden shadow-lg bg-zinc-950 min-h-[352px]">
                <div id="spotify-embed-mount" className="w-full">
                  <iframe
                    id="spotify-embed-iframe"
                    style={{ borderRadius: '16px' }}
                    src="https://open.spotify.com/embed/playlist/0kh9GFyd6YiuXLCetYJ2r0?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Vaibhav Pandey's Coding Soundtrack on Spotify"
                    className="w-full shadow-inner"
                  />
                </div>
              </div>

              {/* Microcopy & Tips */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-400 relative z-10">
                <div className="flex items-center gap-2">
                  <FaMusic className="text-[#1DB954] text-xs shrink-0" />
                  <span>
                    Lo-fi, ambient beats, instrumental synth &amp; deep coding rhythms.
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400">
                  Playlist ID: <code className="text-zinc-300 font-mono">0kh9GFyd6YiuXLCetYJ2r0</code>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
