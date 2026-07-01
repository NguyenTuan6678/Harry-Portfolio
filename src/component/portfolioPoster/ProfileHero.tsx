import Image from "next/image";
import CurvedLogo from "./CurvedLogo";

export default function ProfileHero() {
  return (
    <div className="relative flex min-h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden px-6">
      <CurvedLogo />

      <p className="absolute left-1/2 top-[45%] z-20 -translate-x-1/2 text-center text-xl font-bold uppercase tracking-[0.2em] text-gold drop-shadow-[2px_2px_0px_#744146] font-retro md:text-2xl">
        Harry Nguyen
      </p>

      <div className="relative z-10 -mt-5 h-105 w-[320px] md:h-140 md:w-107.5 lg:h-155 lg:w-125">
        <Image
          src="/animeavatar.png"
          alt="Harry avatar"
          fill
          priority
          sizes="(min-width: 1024px) 500px, (min-width: 768px) 430px, 320px"
          className="object-contain pointer-events-none"
        />
      </div>
    </div>
  );
}
