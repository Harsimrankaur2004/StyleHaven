import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import CartCount from "./CartCount";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ mobileSearchOpen, setMobileSearchOpen }) => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    const isDisplay = window.matchMedia("(min-width: 768px)").matches;

    // If search UI is not visible (mobile)
    if (!isDisplay) {
      setMobileSearchOpen(true);
    }

    const value = inputValue.trim();
    if (!value) return;

    navigate(`/products?search=${encodeURIComponent(value)}`);
    setInputValue("");
  };

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const handler = (e) => {
      if (e.matches) {
        setMobileSearchOpen(false);
        return;
      }
    };

    media.addEventListener("change", handler);
    
    return () => {
      media.removeEventListener("change", handler);
    };
  }, [setMobileSearchOpen]);

  useEffect(() => {
    if (!mobileSearchOpen) return;

    const handleClickOutside = (e) => {
      if (!e.target.closest("header div")) {
        setMobileSearchOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileSearchOpen, setMobileSearchOpen]);

  return (
    <div className="flex gap-3">
      <div
        className={`${
          mobileSearchOpen ? "w-full border-2 border-gray-300" : ""
        } md:border-2 md:shadow-lg md:w-100 rounded-4xl flex justify-between px-4  border-gray-300 `}
      >
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className={`p-3 md:p-4 md:w-100 outline-0 md:block ${
            mobileSearchOpen ? "block" : "hidden"
          } `}
          type="text"
          placeholder="Search Products..."
        />
        <button onClick={handleSearch}>
          <CiSearch fontSize={25} className="cursor-pointer text-gray-6" />
        </button>
      </div>
      <CartCount />
    </div>
  );
};

export default SearchBar;
