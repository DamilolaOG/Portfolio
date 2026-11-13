import { useRef, useState, useEffect } from 'react';

export const VIDEO_FILE = '/Monte-Studio-Showreel.mp4';

export default function Showreel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);
  const [playing,    setPlaying]    = useState(false);
  const [muted,      setMuted]      = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const handler = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    document.addEventListener('webkitfullscreenchange', handler);
    return () => {
      document.removeEventListener('fullscreenchange', handler);
      document.removeEventListener('webkitfullscreenchange', handler);
    };
  }, []);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else          { v.pause(); setPlaying(false); }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    const c = containerRef.current;
    if (!v || !c) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if ((v as any).webkitEnterFullscreen) {
      // iOS Safari — must fullscreen the video element directly
      (v as any).webkitEnterFullscreen();
    } else {
      c.requestFullscreen();
    }
  };

  return (
    <div
      className="w-full mx-auto px-6 md:px-12 pb-16 max-w-[1440px]"
      style={{ animation: 'fadeIn 1.2s ease 0.5s both' }}
    >
      <div
        ref={containerRef}
        className="relative overflow-hidden bg-black group cursor-pointer"
        style={{ borderRadius: '12px', aspectRatio: '16/9' }}
        onClick={!playing ? handlePlay : undefined}
        aria-label="Monte Studio showreel — experience across healthcare, banking and entertainment."
        role="region"
      >
        <video
          ref={videoRef}
          src={VIDEO_FILE}
          poster="/showreel-poster.png"
          preload="none"
          playsInline
          loop
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Big play button — shown before first play */}
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
            <div
              className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl transition-transform duration-200 group-hover:scale-110"
              aria-hidden="true"
            >
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" aria-hidden="true">
                <path d="M2 2l20 12L2 26V2z" fill="#0a0a0a"/>
              </svg>
            </div>
          </div>
        )}

        {/* Controls — always visible on touch, hover-revealed on pointer devices */}
        {playing && (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={togglePlay}
              aria-label={playing ? 'Pause' : 'Play'}
              className="w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black transition-colors"
            >
              <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
                <rect x="0" y="0" width="4" height="14" rx="1"/>
                <rect x="8" y="0" width="4" height="14" rx="1"/>
              </svg>
            </button>
            <button
              onClick={toggleMute}
              aria-label="Toggle sound"
              className="w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black transition-colors"
            >
              {muted ? (
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M1 4.5H4l4-3.5v12L4 9.5H1z"/>
                  <line x1="11" y1="4" x2="15" y2="10"/>
                  <line x1="15" y1="4" x2="11" y2="10"/>
                </svg>
              ) : (
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M1 4.5H4l4-3.5v12L4 9.5H1z"/>
                  <path d="M11 4.5a4 4 0 010 5"/>
                  <path d="M13 2.5a7 7 0 010 9"/>
                </svg>
              )}
            </button>
            <button
              onClick={toggleFullscreen}
              aria-label={fullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              className="w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black transition-colors"
            >
              {fullscreen ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 1H1v4M9 1h4v4M5 13H1V9M9 13h4V9"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 5V1h4M9 1h4v4M13 9v4H9M5 13H1V9"/>
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
