import { Fragment } from "react";
import { menuItems } from "./NavbarData";
import Logo from "../../assets/logookkui.png"

function NavLink({ to, isOpen, children }) {
  return (
    <a
      href={to}
      className={`mx-6 text-xl font-signika ${
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
      <div className="flex items-center w-full filter bg-white h-20">
        {/*logo container*/}
        <a className="text-xl font-semibold" href="/">
          <img class="object-scale-down h-[60px] w-[100px] ml-[12px] sm:w-[120px] " src={Logo} alt="OKK UI"></img>
        </a>
      </div>
      <div className="flex flex-col mt-4 items-center">
        {menuItems.map((menuItem, id) => (
          <NavLink
            key={id}
            className={`text-xl font-normal font-signika my-4`}
            to={menuItem.path}
            isOpen={isOpen}
          >
            {menuItem.label}
          </NavLink>
        ))}

        <button
          type="button"
          className=" text-[#E8D05F] border-[#E8D05F] border-[4px] active:bg-[#E8D05F] active:text-white font-signika font-semibold rounded-[8px] text-xl px-20 md:px-64 py-3 text-center mb-2 mt-4"
          href="/PageKelompok">
          <NavLink to={'/PageKelompok'}>Cari Kelompok</NavLink>
        </button>
      </div>
    </div>
  );
}

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <Fragment>
      <nav className="sticky top-0 z-50 flex filter bg-white py-4 h-[80px] border-b-2 items-center px-5 sm:px-10 md:px-10 lg:px-24 2xl:px-48 3xl:px-64">
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="sm:w-4/12 flex justify-start">
          <a className="text-2xl font-semibold " href="/">
            <img class="object-scale-down h-[60px] w-[100px] md:ml-[-15px] sm:w-[120px] " src={Logo} alt="OKK UI"></img>
          </a>
        </div>
        <div className="w-6/12 flex justify-center">
          <div className="hidden xl:flex justify-center font-signika font-normal">
            {menuItems.map((menuItem, id) => (
              <NavLink key={id} to={menuItem.path}>
                {menuItem.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className={`w-4/12 flex justify-end`}>
          <button
            type="button"
            href="/PageKelompok"
            className="hidden xl:block text-[#E8D05F] font-signika font-semibold border-[#E8D05F] border-[4px] active:bg-[#E8D05F] transition duration-300 ease-in-out hover:bg-[#E8D05F] active:text-white hover:text-white bg-opacity-50 rounded-[20px] text-normal px-4 py-2 text-center mb-2 mt-2"
          >
          <NavLink to={'/PageKelompok'}>Cari Kelompok</NavLink>
            
          </button>
        </div>
        <div
          className="z-50 flex relative w-10 h-8 mr-[20px] sm:mr-[40px] flex-col justify-between items-center xl:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-[#E8D05F] rounded-lg transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-3.5 w-10" : "w-10"
            }`}
          />
          <span
            className={`h-1 w-full bg-[#E8D05F] rounded-lg transition-all duration-300 ease-in-out ${
              isOpen ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-[#E8D05F] rounded-lg transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-3.5 w-10" : "w-10"
            }`}
          />
        </div>
      </nav>
    </Fragment>
  );
}
