"use client";

type ProjectGraphicProps = {
  id: string;
  className?: string;
};

export default function ProjectGraphic({ id, className = "" }: ProjectGraphicProps) {
  switch (id) {
    case "1": // Learning Center
      return (
        <svg
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className} w-full h-full`}
        >
          {/* Base Teal background */}
          <rect width="400" height="300" fill="#4D6D65" stroke="#42383F" strokeWidth="6" />
          
          {/* Top Panel bar */}
          <rect x="10" y="10" width="380" height="40" fill="#53464C" stroke="#42383F" strokeWidth="3" />
          
          {/* Tech monitor frame header text */}
          <rect x="25" y="24" width="8" height="12" fill="#C49354" />
          <rect x="40" y="27" width="80" height="6" fill="#8EAB9E" />
          
          {/* Side panel blocks */}
          <rect x="25" y="70" width="60" height="180" fill="#53464C" stroke="#42383F" strokeWidth="3" />
          <rect x="35" y="85" width="40" height="10" fill="#C67C55" />
          <rect x="35" y="115" width="40" height="10" fill="#8EAB9E" />
          <rect x="35" y="145" width="40" height="10" fill="#8EAB9E" />
          
          {/* Stair-step pixel line chart */}
          <rect x="105" y="70" width="270" height="180" fill="#42383F" stroke="#42383F" strokeWidth="3" />
          
          {/* Grid lines inside console chart */}
          <path d="M105 115 H375 M105 160 H375 M105 205 H375" stroke="#53464C" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M172 70 V250 M240 70 V250 M308 70 V250" stroke="#53464C" strokeWidth="2" strokeDasharray="4 4" />
          
          {/* Stair line graph path (No curves, straight pixel steps!) */}
          <path
            d="M115 220 H160 V180 H220 V140 H280 V190 H325 V100 H365"
            stroke="#C49354"
            strokeWidth="5"
            strokeLinecap="square"
            fill="none"
          />
          {/* Node marker points (Square pixel markers!) */}
          <rect x="156" y="176" width="8" height="8" fill="#C67C55" />
          <rect x="216" y="136" width="8" height="8" fill="#C67C55" />
          <rect x="276" y="186" width="8" height="8" fill="#C67C55" />
          <rect x="321" y="96" width="8" height="8" fill="#C67C55" />
        </svg>
      );
    case "2": // Memories Gallery
      return (
        <svg
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className} w-full h-full`}
        >
          {/* Sand background */}
          <rect width="400" height="300" fill="#D5BA93" stroke="#42383F" strokeWidth="6" />
          
          {/* Retro double bordered Photo frame */}
          <rect x="110" y="30" width="180" height="230" fill="#D3CAAC" stroke="#42383F" strokeWidth="4" />
          
          {/* Polaroid photo display area */}
          <rect x="122" y="42" width="156" height="150" fill="#42383F" stroke="#42383F" strokeWidth="2" />
          
          {/* Stair-step pixel art mountains */}
          <polygon points="122,192 165,130 190,160 230,110 278,192" fill="#C67C55" />
          <polygon points="150,192 190,150 215,175 278,192" fill="#744146" />
          
          {/* Pixel gold sun (Circle made with step edges) */}
          <rect x="220" y="60" width="24" height="24" fill="#C49354" />
          <rect x="224" y="56" width="16" height="32" fill="#C49354" />
          <rect x="216" y="64" width="32" height="16" fill="#C49354" />

          {/* Social Pixel Heart indicator */}
          <path
            d="M320 40 H324 V44 H320 Z M328 40 H332 V44 H328 Z M316 44 H336 V48 H316 Z M316 48 H336 V52 H316 Z M320 52 H332 V56 H320 Z M324 56 H328 V60 H324 Z"
            fill="#744146"
          />
          <path
            d="M321 41 H323 V43 H321 Z M329 41 H331 V43 H329 Z M317 45 H335 V47 H317 Z M317 47 H335 V51 H317 Z M321 51 H333 V55 H321 Z M325 55 H327 V57 H325 Z"
            fill="#C67C55"
          />

          {/* Photo label lines */}
          <rect x="140" y="210" width="80" height="8" fill="#42383F" />
          <rect x="140" y="226" width="120" height="6" fill="#A85438" />
        </svg>
      );
    case "3": // Snake Game
      return (
        <svg
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className} w-full h-full`}
        >
          {/* Charcoal Background */}
          <rect width="400" height="300" fill="#1a1c2c" stroke="#333c57" strokeWidth="6" />
          {/* Game grid box */}
          <rect x="20" y="62" width="360" height="218" fill="#11121d" stroke="#1a1c2c" strokeWidth="4" />
          
          {/* Arcade Score bar */}
          <rect x="20" y="12" width="360" height="42" fill="#333c57" stroke="#1a1c2c" strokeWidth="3" />
          <text x="30" y="40" fill="#ffcd75" fontFamily="var(--font-retro), monospace" fontSize="24" fontWeight="bold">
            SCORE: 01420
          </text>
          <text x="225" y="40" fill="#a7f070" fontFamily="var(--font-retro), monospace" fontSize="24" fontWeight="bold">
            HI-SCORE: 08950
          </text>
          
          {/* Snake segments (Classic blocky squares) */}
          <rect x="180" y="160" width="18" height="18" fill="#8EAB9E" stroke="#1C1518" strokeWidth="2" />
          <rect x="180" y="142" width="18" height="18" fill="#8EAB9E" stroke="#1C1518" strokeWidth="2" />
          <rect x="180" y="124" width="18" height="18" fill="#8EAB9E" stroke="#1C1518" strokeWidth="2" />
          <rect x="198" y="124" width="18" height="18" fill="#8EAB9E" stroke="#1C1518" strokeWidth="2" />
          <rect x="216" y="124" width="18" height="18" fill="#8EAB9E" stroke="#1C1518" strokeWidth="2" />
          
          {/* Snake head (Gold color block with pixel eyes) */}
          <rect x="216" y="106" width="18" height="18" fill="#C49354" stroke="#1C1518" strokeWidth="2" />
          <rect x="220" y="110" width="4" height="4" fill="#000" />
          <rect x="228" y="110" width="4" height="4" fill="#000" />

          {/* Target Apple Food block (Terracotta square) */}
          <rect x="270" y="142" width="18" height="18" fill="#C67C55" stroke="#1C1518" strokeWidth="2" />
          <rect x="278" y="136" width="4" height="6" fill="#6F6840" />
        </svg>
      );
    case "4": // Invoice System
      return (
        <svg
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className} w-full h-full`}
        >
          {/* Base Rust background */}
          <rect width="400" height="300" fill="#A85438" stroke="#42383F" strokeWidth="6" />
          
          {/* Invoice Document Box with double borders */}
          <rect x="100" y="20" width="200" height="260" fill="#D3CAAC" stroke="#42383F" strokeWidth="4" />
          
          {/* Invoice Header Title block */}
          <rect x="120" y="45" width="70" height="16" fill="#744146" />
          <rect x="124" y="49" width="30" height="8" fill="#D3CAAC" />
          
          {/* Wax verification Stamp (Retro Octagonal pixel star) */}
          <rect x="240" y="40" width="24" height="24" fill="#C49354" />
          <rect x="244" y="36" width="16" height="32" fill="#C49354" />
          <rect x="236" y="44" width="32" height="16" fill="#C49354" />
          <rect x="248" y="48" width="8" height="8" fill="#744146" />

          {/* Invoice item blocks */}
          <line x1="120" y1="85" x2="280" y2="85" stroke="#42383F" strokeWidth="2" />
          
          <rect x="120" y="100" width="50" height="10" fill="#6F6840" />
          <rect x="230" y="100" width="50" height="10" fill="#42383F" />

          <rect x="120" y="125" width="70" height="10" fill="#6F6840" />
          <rect x="210" y="125" width="70" height="10" fill="#42383F" />

          <rect x="120" y="150" width="40" height="10" fill="#6F6840" />
          <rect x="240" y="150" width="40" height="10" fill="#42383F" />
          
          <line x1="120" y1="180" x2="280" y2="180" stroke="#42383F" strokeWidth="2" />

          {/* Price highlight box */}
          <rect x="120" y="195" width="60" height="20" fill="#744146" />
          <rect x="200" y="195" width="80" height="20" fill="#C49354" />
          <rect x="210" y="201" width="60" height="8" fill="#42383F" />

          {/* Signatures stamp block */}
          <rect x="235" y="235" width="30" height="18" fill="#C67C55" stroke="#42383F" strokeWidth="2" />
        </svg>
      );
    case "5": // Reader App (Swift/iOS)
      return (
        <svg
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className} w-full h-full`}
        >
          {/* Sage background */}
          <rect width="400" height="300" fill="#8EAB9E" stroke="#42383F" strokeWidth="6" />

          {/* iPhone Frame (Thick solid pixel outline) */}
          <rect x="135" y="20" width="130" height="260" fill="#53464C" stroke="#42383F" strokeWidth="4" />
          {/* Phone Screen */}
          <rect x="143" y="28" width="114" height="244" fill="#D3CAAC" />
          
          {/* Phone Notch */}
          <rect x="180" y="28" width="40" height="10" fill="#42383F" />

          {/* Pages block */}
          <rect x="151" y="55" width="46" height="175" fill="#faf8f1" stroke="#42383F" strokeWidth="2" />
          <rect x="203" y="55" width="46" height="175" fill="#faf8f1" stroke="#42383F" strokeWidth="2" />
          
          {/* Book text mock lines */}
          <line x1="156" y1="70" x2="190" y2="70" stroke="#53464C" strokeWidth="2" />
          <line x1="156" y1="85" x2="182" y2="85" stroke="#53464C" strokeWidth="2" />
          <line x1="156" y1="100" x2="192" y2="100" stroke="#53464C" strokeWidth="2" />
          <line x1="156" y1="115" x2="175" y2="115" stroke="#53464C" strokeWidth="2" />

          <line x1="208" y1="70" x2="242" y2="70" stroke="#53464C" strokeWidth="2" />
          <line x1="208" y1="85" x2="234" y2="85" stroke="#53464C" strokeWidth="2" />
          <line x1="208" y1="100" x2="244" y2="100" stroke="#53464C" strokeWidth="2" />
          <line x1="208" y1="115" x2="227" y2="115" stroke="#53464C" strokeWidth="2" />

          {/* Swift Logo Floating Icon (Pixelated Orange Bird badge) */}
          <rect x="270" y="50" width="30" height="30" fill="#C67C55" stroke="#42383F" strokeWidth="2" />
          <rect x="276" y="56" width="18" height="18" fill="#faf8f1" />
          <path d="M280 68 L284 64 L290 66 L286 60 L292 58 L284 58 Z" fill="#C67C55" />
        </svg>
      );
    default:
      return null;
  }
}
