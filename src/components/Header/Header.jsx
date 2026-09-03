import { NavLink } from "react-router-dom";
function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Internships", path: "/Internships" },
    { name: "Programs", path: "/Programs" },
    { name: "Service", path: "/Service" },
    { name: "Campus Programs", path: "/CampusPrograms" },
    { name: "About-Us", path: "/About" },
    { name: "Resources", path: "/Resources" },
    { name: "Contact-Us", path: "/Contact" },
  ];

  return (
    <header
      className="
        flex
        place-content-between
        items-center
        px-[5%]

        w-full
        min-h-16
        sm:min-h-[72px]
        md:min-h-[76px]
        lg:min-h-20
        xl:min-h-24
        bg-white
      
       
        
        "
    >
      <div className="branding flex ">
        <div className="logo">
          <img
            src="src/assets/Logo.webp"
            alt="img"
            className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-48"
          />
        </div>

        {/* <span className="ml-2 font-bold">Learntricks</span> */}
      </div>

      <div className="nav-links">
        <ul
          className="
        flex
        gap-3
        sm:gap-4
        md:gap-5
        lg:gap-6
        xl:gap-8
        "
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `text-sm sm:text-sm md:text-base lg:text-base xl:text-lg font-medium ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="apply-btn">
        <button
          className="
        
        px-5
        py-2
        rounded-lg
        text-olive-50
        bg-blue-600
        shadow-md
        shadow-blue-900/80
        ring-3
        ring-blue-700
        "
        >
          Apply Now
        </button>
      </div>
    </header>
  );
}
export default Header;
