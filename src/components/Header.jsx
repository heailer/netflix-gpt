import { netfixLogo } from "../utils/constants/images";

const Header = () => {
  return (
    <div className="w-1/7 m-4 absolute z-10">
      <img src={netfixLogo} alt="Netflix Logo" />
    </div>
  );
};

export default Header;
