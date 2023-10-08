import { useState } from "react";

function Navigation() {
  let navList = [
    { name: "Home" },
    { name: "Resources", icon: true },
    { name: "Downloads", icon: true },
    { name: "Pricing" },
  ];
  const [selectedNavLink, setSelectedNavLink] = useState(0);
  return (
    <div className="nav overflow-hidden py-4 pl-12 pr-[18px] mt-12 flex justify-between items-center">
      <img src="/logo.png" alt="logo" />
      <ul className="lg:flex hidden gap-12">
        {navList.map((item, id) => {
          return (
            <li
              onClick={() => {
                setSelectedNavLink(id);
              }}
              key={id}
              className={`${selectedNavLink === id && "font-bold"} ${
                item.icon && "flex items-center"
              } relative lg:text-lg text-white cursor-pointer`}
            >
              {item.name}
              {item.icon && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_847)">
                    <path
                      d="M6.99988 10L11.9999 15L16.9999 10H6.99988Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_847">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
              {selectedNavLink === id && (
                <span className="w-full nav-item-selected h-[6px] bg-white absolute -bottom-8 left-0"></span>
              )}
            </li>
          );
        })}
      </ul>
      <div className="lg:min-w-[236px] lg:max-w-[236px] text-right">
        <button className="px-8 py-[18px] rounded-full text-white bg-[#007BFF]">
          Register Now
        </button>
      </div>
    </div>
  );
}

export default Navigation;
