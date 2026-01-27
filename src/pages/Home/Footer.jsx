import { FaTruck } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-5 md:mb-20 p-10 md:p-6 bg-gray-200 gap-3 grid grid-cols-2 md:grid-cols-3">
      <div className="flex gap-3 items-center sm:justify-center">
        <FaTruck className="text-2xl sm:text-3xl md:text-4xl" />
        <div className="flex flex-col">
          <p className="font-bold text-xs lg:text-base">FREE SHIPPING</p>
          <p className="text-xs lg:text-base">On Orders Over $100</p>
        </div>
      </div>
      <div className="flex gap-3 items-center sm:justify-center border-l pl-3 md:border-0 md:p-0">
        <FaShoppingBag className="text-2xl sm:text-3xl md:text-4xl" />
        <div className="flex flex-col">
          <p className="font-bold text-xs lg:text-base">EASY RETURNS</p>
          <p className="text-xs lg:text-base">30-Day Guarantee</p>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center col-span-2 md:col-span-1">
        <FaHeadset className="text-2xl sm:text-3xl md:text-4xl" />
        <div className="flex flex-col">
          <p className="font-bold text-xs lg:text-base">
            24/7 CUSTOMER SUPPORT
          </p>
          <p className="text-xs lg:text-base">Always Here to Help</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
