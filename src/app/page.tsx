import IntroHero from "@/component/IntroHero";

export default function Home() {
  return (
    <main className="bg-[#fffaf2] text-[#161616]">
      <IntroHero />

      <section
        id="about"
        className="flex min-h-screen items-center justify-center px-6"
      >
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-black/45">
            About
          </p>

          <h2 className="text-4xl font-black tracking-tighter md:text-6xl">
            A developer who loves soft, clean, and meaningful digital
            experiences.
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/60">
            I enjoy building web applications with React, Next.js, TypeScript,
            NestJS, Spring Boot, MongoDB, and PostgreSQL.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="flex min-h-screen items-center justify-center px-6"
      >
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-black/45">
            Projects
          </p>

          <h2 className="text-4xl font-black tracking-tighter md:text-6xl">
            Selected works coming soon.
          </h2>
        </div>
      </section>
    </main>
  );
}
