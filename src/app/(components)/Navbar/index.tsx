import Link from "next/link";

type NavbarProps = {
  toggleSidebar: () => void;
};
export default function Navbar({ toggleSidebar }: NavbarProps) {
  return (
    <header className="bg-darkgreen text-white fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-2">
          <button
            className="text-2xl text-white focus:outline-none mr-3 md:hidden"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <Link href="/" className=" text-4xl font-bold">
            Football
          </Link>
          <div className="text-black text-4xl">⚽︎</div>
        </div>

        <ul className="space-x-6 text-xl text-white hidden md:flex">
          <li>
            <Link
              href="/"
              className="hover:text-gray-300 transition duration-900 ease-in"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/teams"
              className="hover:text-gray-300 transition duration-900 ease-in"
            >
              Teams
            </Link>
          </li>
          <li>
            <Link
              href="/players"
              className=" hover:text-gray-300 transition duration-900 ease-in"
            >
              Players
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className=" hover:text-gray-300 transition duration-900 ease-in"
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className=" hover:text-gray-300 transition duration-900 ease-in"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
