import { Link } from "@nextui-org/link";
export const TopBar = () => {
  return (
    <nav className="flex justify-between items-center px-2 md:px-56 lg:px-96 py-8 font-bold ">
      <Link className="text-black text-lg" href="/">
        about me
      </Link>
      <Link className="text-black text-lg" href="/projects">
        projects
      </Link>
      <Link className="text-black text-lg">hire me</Link>
      <Link className="text-black text-lg">socials</Link>
    </nav>
  );
};
