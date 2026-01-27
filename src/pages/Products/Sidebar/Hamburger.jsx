import { useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Hamburger = ({ sidebarInvisible, setSidebarInvisible }) => {
  const handleClick = () => {
    setSidebarInvisible(false);
  };

  useEffect(() => {
    const media = window.matchMedia("(max-width: 718px)");

    const handler = () => {
      if (media.matches) {
        setSidebarInvisible(true);
        return;
      } else {
        setSidebarInvisible(false);
        return;
      }
    };
    handler();
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(min-width: 718px)").matches) return;
    if (sidebarInvisible) return;

    const handleClickOutside = (e) => {
      if (e.target.closest(".hamburger") || e.target.closest(".sidebar"))
        return;

      setSidebarInvisible(true);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sidebarInvisible]);

  return (
    <nav
      onClick={handleClick}
      className={`hamburger shadow bg-gray-100 shadow-gray-400 p-2 rounded-xl min-[718px]:hidden cursor-pointer text-2xl ${sidebarInvisible ? "block ml-5" : "hidden"}`}
    >
      <RxHamburgerMenu />
    </nav>
  );
};

export default Hamburger;
