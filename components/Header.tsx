import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="flex space-x-2 md:space-x-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Inicio</li>
          <li className="headerLink">Series</li>
          <li className="headerLink">Peliculas</li>
          <li className="headerLink">Novedades populares</li>
          <li className="headerLink">Mi lista</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Niños</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img src="https://iili.io/4g3Lj2.png" alt="" className="cursor-pointer rounded" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
