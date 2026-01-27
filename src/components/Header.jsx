import { useState } from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";


const Header = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);


  return (
    <header className="flex h-20 justify-around items-center p-4 shadow-xl max-w-400 m-auto fixed top-0 right-0 left-0 bg-white z-10">
      <Logo mobileSearchOpen={mobileSearchOpen} />
      <SearchBar
        mobileSearchOpen={mobileSearchOpen}
        setMobileSearchOpen={setMobileSearchOpen}
      />
    </header>
  );
};

export default Header;
