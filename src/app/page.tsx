import { SnakeGame } from "@/components/image-switcher";

export default function Home() {
  return (
    <main className="px-4 md:px-56 lg:px-96 space-y-24 py-24 scroll-smooth">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-6 font-medium text-xl">
          <h5 className="text-6xl font-black">Izaan</h5>
          <p>
            I&apos;m a creative <strong className="">engineer</strong> who
            builds delightful web experiences. I work with web agencies,
            companies, startups, and individuals to create a blueprint for the
            digital business.
          </p>
        </div>
        {/* <div className="snake-game-container"> */}
        <SnakeGame />
        {/* </div> */}
      </div>
      <div className="font-medium text-xl">
        <p>
          Originally immersed in commerce and business studies, I took a leap
          into the world of engineering two years ago, and I haven&apos;t looked
          back since. Most of my personal code is on{" "}
          <a href="https://github.com/IzaanAnwar" target="_blank">
            <strong className="text-[#008081] text-xl">GitHub</strong>
          </a>
          . I am available for freelance work as your tech collaborator and
          product builder. If you would like to get in touch with me about
          working with you,{" "}
          <a
            className="text-xl text-[#008081] underline hover:cursor-pointer"
            href="mailto:mdizaan67@gmail.com"
          >
            email
          </a>{" "}
          me and we&apos;ll chat!
        </p>
      </div>
      <div className="space-y-8">
        <h5 className="text-4xl font-bold">projects </h5>
        <div className="card">
          <div className="card-header">
            <h3 className="text-3xl font-bold text-white">galzzy</h3>
          </div>
          <div className="card-body text-xl font-medium">
            <code>(Being remade)</code>
            Galzzy is my innovative platform designed for YouTube creators and
            editors alike. By seamlessly linking accounts, creators can invite
            editors to collaborate on video projects. After reviewing and
            approving content, creators can directly upload to YouTube from our
            platform. Simplify your workflow, enhance collaboration, and elevate
            your content with ease.
          </div>
          <div className="card-footer">
            <button className="win98-button">see the hype</button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="text-3xl font-bold text-white">mujtama</h3>
          </div>
          <div className="card-body text-xl font-medium">
            This is a basic group chat app and one of the very first project
            that I built and that is the reason for it being on the home page.
          </div>
          <div className="card-footer">
            <a
              className="win98-button"
              href="https://mujtama.vercel.app"
              target="_blank"
            >
              take a look
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="text-3xl font-bold text-white">garbage</h3>
          </div>
          <div className="card-body text-xl font-medium">
            CLI Garbage Bin for your Linux
          </div>
          <div className="card-footer">
            <a
              className="win98-button"
              href="https://github.com/IzaanAnwar/garbage"
              target="_blank"
            >
              interesting❗ see the code
            </a>
          </div>
        </div>
        <a className="text-zinc-800" href="/projects">
          i want to see more
        </a>
      </div>
    </main>
  );
}
