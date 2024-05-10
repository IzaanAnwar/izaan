import { Image } from "@nextui-org/image";
export default function Home() {
  return (
    <main className="px-2 md:px-56 lg:px-96">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-6 font-medium text-xl">
          <h5 className="text-6xl font-black">
            Izaan
          </h5>
          <p>

            I&apos;m a creative <strong>engineer</strong> who builds delightful web experiences. I can advise your company about the web platform, performance, creative user interactions, and usable machine learning
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
    </main>
  );
}
