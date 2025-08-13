import bgImg from "../assets/more/15.jpg";
import logo from "../assets/more/logo1.png";

const Header = () => {
  return (
    <header
      className="bg-cover bg-center py-6"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex items-center justify-center space-x-3">
        <img src={logo} alt="Espresso Emporium Logo" className="w-10 h-10" />
        <h1 className="text-3xl md:text-6xl font-bold md:font-normal text-white">
          Espresso Emporium
        </h1>
      </div>
    </header>
  );
};

export default Header;
