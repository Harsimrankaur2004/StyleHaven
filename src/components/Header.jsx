import { useState } from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

const Header = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-20 max-w-400 m-auto">
      <div className="flex h-20 justify-around items-center p-4 max-w-400 m-auto
                      bg-white/40 backdrop-blur-md shadow-lg">
        {/* Logo */}
        <Logo mobileSearchOpen={mobileSearchOpen} />

        {/* Search Bar */}
        <SearchBar
          mobileSearchOpen={mobileSearchOpen}
          setMobileSearchOpen={setMobileSearchOpen}
        />
      </div>
    </header>
  );
};

export default Header;