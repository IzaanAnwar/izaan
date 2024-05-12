import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
export default function Home() {
  return (
    <main className="px-2 md:px-56 lg:px-96 space-y-24 py-24 scroll-smooth">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-6 font-medium text-xl">
          <h5 className="text-6xl font-black">Izaan</h5>
          <p>
            I&apos;m a creative <strong className="">engineer</strong> who
            builds delightful web experiences. I work with web agencies,
            companies, startups and individuals to create a blueprint for the
            digital business.
          </p>
          <p></p>
        </div>
        <div className="w-full h-full overflow-clip">
          <Image
            isZoomed
            width={300}
            height={200}
            alt="NextUI Fruit Image with Zoom"
            src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
            fallbackSrc="https://via.placeholder.com/300x200"
          />
        </div>
      </div>
      <div className="font-medium text-xl">
        <p>
          Originally immersed in commerce and business studies, I took a leap
          into the world of engineering two years ago, and I haven&apos;t looked
          back since. You can read a bit more about me and my past work. Most of
          my personal code is on{" "}
          <strong className="text-[#e9ce2c]">GitHub</strong>. I am available for
          freelance work as your tech collaborator and product builder.If you
          would like to get in touch with me about working with you,{" "}
          <Link
            className="text-xl text-[#e9ce2c] underline hover:cursor-pointer"
            href="mailto:mdizaan67@gmail.com"
          >
            email
          </Link>{" "}
          me and we&apos;ll chat!
        </p>
      </div>
      <div className="space-y-8">
        <h5 className="text-4xl font-bold">projects </h5>
        <Card className="shadow-none">
          <CardHeader className="text-3xl font-bold text-[#e9ce2c]">
            galzzy
          </CardHeader>
          <CardBody className="text-xl font-medium">
            <code>(Work in progress)</code>
            Galzzy is my innovative platform designed for YouTube creators and
            editors alike. By seamlessly linking accounts, creators can invite
            editors to collaborate on video projects. After reviewing and
            approving content, creators can directly upload to YouTube from our
            platform. Simplify your workflow, enhance collaboration, and elevate
            your content with ease.
          </CardBody>
          <CardFooter>
            <Button className="bg-[#e9ce2c]">see the hipe</Button>
          </CardFooter>
        </Card>
        <Card className="shadow-none">
          <CardHeader className="text-3xl font-bold text-[#e9ce2c]">
            mujtama
          </CardHeader>
          <CardBody className="text-xl font-medium">
            This is a basic group chat app and one of the very first project
            that i built and that is the reason for it being on the home page.
          </CardBody>
          <CardFooter>
            <Button
              className="bg-[#e9ce2c]"
              href="https://mujtama.vercel.app"
              target="_blank"
              as="a"
            >
              take a look
            </Button>
          </CardFooter>
        </Card>
        <Card className="shadow-none">
          <CardHeader className="text-3xl font-bold text-[#e9ce2c]">
            garbage
          </CardHeader>
          <CardBody className="text-xl font-medium">
            CLI Garbage Bin for your linux
          </CardBody>
          <CardFooter>
            <Button
              className="bg-[#e9ce2c]"
              href="https://github.com/IzaanAnwar/garbage"
              target="_blank"
              as="a"
            >
              intresting❗ see the code
            </Button>
          </CardFooter>
        </Card>
        <Link className="text-zinc-800" href="/projects">
          i want to see more
        </Link>
      </div>
    </main>
  );
}
