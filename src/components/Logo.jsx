import { useNavigate } from "react-router-dom";

const Logo = ({mobileSearchOpen}) => {
  const navigate = useNavigate();
  return (
    <h1
      onClick={() => navigate("/")}
      className={`logo text-5xl ${
        mobileSearchOpen ? "hidden" : "block"
      } md:block cursor-pointer hover:scale-110 duration-100`}
    >
      StyleHaven
    </h1>
  );
};

export default Logo;
