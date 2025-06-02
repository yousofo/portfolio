export default function HomeSlide() {
  return (
    <div className="name overflow-hidden sm:me-2 text-foreground transition-colors tracking-wide text-center">
      <h2 className="font-bold text-5xl whitespace-nowrap">
        Hello! <span className="text-4xl">I&apos;m Yousef</span>
      </h2>
      <p className="offers text   mt-1 text  text-yellow-600 font-bold dark:text-yellow-300/80">
        {/* I&apos;m a <span>web developer</span> and I love building{" "}
        <span>web apps</span>! */}
        A Full Stack Web Developer
      </p>
      <p className="offers text   mt-4 text-xl text-foreground/70">
        {/* I&apos;m a <span>web developer</span> and I love building{" "}
        <span>web apps</span>! */}
        You can check out my work and get in touch with me.
      </p>
    </div>
  );
}


