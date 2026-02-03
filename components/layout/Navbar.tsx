"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-auto! min-h-20 flex items-center z-50 justify-end gap-5 py-4 px-5 bg-transparent ">
      {["/", "/about", "/contact", "/youtube"].map((href, index) => {
        const name =
          href === "/"
            ? "Home"
            : href === "/about"
              ? "About"
              : href === "/contact"
                ? "Contact"
                : "Youtube";

        return (
          <div
            key={href}
            className={`text-xl font-medium hover:scale-120 hover:text-secondaryBg  focus:text-secondaryBg transition-all duration-200 overflow-hidden ${loading ? "opacity-100 translate-y-4" : "opacity-0 translate-y-0"} duration-300`}
          >
            <Link href={href} className="">
              <div className="flex flex-col justify-end items-center  ">
                <div className={pathName === href ? "text-secondaryBg" : ""}>
                  {name}
                </div>

                <div
                  className={`w-1.5 h-1.5 bg-white rounded-full mt-1 ${pathName === href ? "visible" : "invisible"}`}
                ></div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

// const Navbar = () => {
//   const pathName = usePathname();

//   return (
//     <div className="w-full h-[5%] flex items-center justify-end gap-5 py-4 px-5  ">
//       <div className="text-xl font-medium hover:scale-120 hover:text-secondaryBg  focus:text-secondaryBg transition-all duration-200 overflow-hidden">
//         <Link href="/" className="">
//           <div className="flex flex-col justify-end items-center  ">
//             <div className={pathName === "/" ? "text-secondaryBg" : ""}>
//               Home
//             </div>

//             <div
//               className={`w-1.5 h-1.5 bg-white rounded-full mt-1 ${pathName === "/" ? "visible" : "invisible"}`}
//             ></div>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

export default Navbar;
