'use client';

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <svg viewBox="0 0 200 200" fill="none">
          <defs>
            <linearGradient id="part1">
              <stop offset="0%" stopColor="#09194d00"></stop>
              <stop offset="100%" stopColor="#09194d00"></stop>
            </linearGradient>
            <linearGradient id="part2">
              <stop offset="0%" stopColor="#09194D"></stop>
              <stop offset="100%" stopColor="#09194d00"></stop>
            </linearGradient>
            <linearGradient id="part3" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#062794"></stop>
              <stop offset="100%" stopColor="#09194D"></stop>
            </linearGradient>
            <linearGradient id="part4">
              <stop offset="0%" stopColor="#062794"></stop>
              <stop offset="100%" stopColor="#095AE5"></stop>
            </linearGradient>
            <linearGradient id="part5" gradientTransform="rotate(45)">
              <stop offset="0%" stopColor="#095AE5"></stop>
              <stop offset="100%" stopColor="#0FFFFF"></stop>
            </linearGradient>
            <linearGradient id="part6" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#0FFFFF"></stop>
              <stop offset="100%" stopColor="#FFFFFF"></stop>
            </linearGradient>
            <linearGradient id="part7" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#f77c6f"></stop>
              <stop offset="100%" stopColor="#FFFFFF"></stop>
            </linearGradient>
          </defs>
          <g stroke="currentColor" strokeWidth="16">
            <path stroke="url(#part1)" d="M 184 100 A 84 84 0 0 1 126 180" strokeLinecap="round"></path>
            <path stroke="url(#part2)" d="M 126 180 A 84 84 0 0 1 32 149" strokeDasharray="106" strokeLinecap="round">
              <animate attributeName="strokeDashoffset" keyTimes="0; 0.4; 0.5; 0.6; 1" values="106; 106; 212; 106; 106" dur="2.6s" repeatCount="indefinite"></animate>
            </path>
            <path stroke="url(#part3)" d="M 32 149 A 84 84 0 0 1 32 51" strokeDasharray="105" strokeLinecap="round">
              <animate attributeName="strokeDashoffset" keyTimes="0; 0.3; 0.4; 0.6; 0.7; 1" values="105; 105; 210; 210; 105; 105" dur="2.6s" repeatCount="indefinite"></animate>
            </path>
            <path stroke="url(#part4)" d="M 32 51 A 84 84 0 0 1 126 20" strokeDasharray="106" strokeLinecap="round">
              <animate attributeName="strokeDashoffset" keyTimes="0; 0.2; 0.3; 0.7; 0.8; 1" values="106; 106; 212; 212; 106; 106" dur="2.6s" repeatCount="indefinite"></animate>
            </path>
            <path stroke="url(#part5)" d="M 126 20 A 84 84 0 0 1 180 74" strokeDasharray="80" strokeLinecap="round">
              <animate attributeName="strokeDashoffset" keyTimes="0; 0.1; 0.2; 0.8; 0.9; 1" values="80; 80; 160; 160; 80; 80" dur="2.6s" repeatCount="indefinite"></animate>
            </path>
            <path stroke="url(#part7)" strokeLinecap="round" d="M 184 97 A 84 84 0 0 1 184 99"></path>
            <path stroke="url(#part6)" d="M 180 74 A 84 84 0 0 1 184 100" strokeDasharray="25" strokeLinecap="round">
              <animate attributeName="strokeDashoffset" keyTimes="0; 0.1; 0.9; 1" values="35; 50; 50; 35" dur="2.6s" repeatCount="indefinite"></animate>
            </path>
          </g>
        </svg>
      </div>
    </div>
  );
}
