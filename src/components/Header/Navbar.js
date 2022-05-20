import { Fragment } from "react";
import { menuItems } from "./NavbarData";

function NavLink({ to, isOpen, children }) {
  return (
    <a
      href={to}
      className={`mx-4 transition duration-200 ease-in-out hover:text-stone-400 ${
        isOpen
          ? `text-xl font-normal my-4 onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }`
          : ""
      } `}
    >
      {children}
    </a>
  );
}

function MobileNav({ isOpen, setIsOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        isOpen ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <a className="text-xl font-semibold" href="/">
          LOGO
        </a>
      </div>
      <div className="flex flex-col ml-4 mt-4 items-center">
        {menuItems.map((menuItem, id) => (
          <NavLink
            key={id}
            className={`text-xl font-normal my-4`}
            to={menuItem.path}
            isOpen={isOpen}
          >
            {menuItem.label}
          </NavLink>
        ))}

        <button
          type="button"
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cari Kelompok
        </button>
      </div>
    </div>
  );
}

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <Fragment>
      <nav className="flex filter drop-shadow-md bg-white px-8 py-4 h-20 items-center">
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-3/12 flex items-center">
          <a className="text-2xl font-semibold" href="/">
            LOGO
          </a>
        </div>
        <div className="w-6/12 flex justify-center items-center">
          <div className="hidden md:flex justify-center">
            {menuItems.map((menuItem, id) => (
              <NavLink key={id} to={menuItem.path}>
                {menuItem.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className={`w-3/12 flex justify-end`}>
          <button
            type="button"
            href="/PageKelompok"
            className="hidden md:block text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          <NavLink to={'/PageKelompok'}>Cari Kelompok</NavLink>
            
          </button>
        </div>
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              isOpen ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>
      </nav>
    </Fragment>
  );
}
