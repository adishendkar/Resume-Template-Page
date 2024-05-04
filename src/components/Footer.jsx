import { FaRegLightbulb } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { BiSolidNotepad } from "react-icons/bi";
const Footer = () => {
  return (
    <>
      <div className="flex mt-10 w-[50%] gap-14 items-center justify-between">
        <div className="border-4 rounded-full border-solid border-red-500 p-2">
          <FaRegLightbulb className="text-4xl text-red-500" />
        </div>
        <div className="flex gap-10 w-[90%] justify-between">
          <div className=" rounded-full bg-red-500 p-4">
            <FaBullhorn className="text-4xl text-white" />
          </div>
          <div className=" rounded-full bg-red-500 p-4">
            <FaSuitcase className="text-4xl text-white" />
          </div>
          <div className=" rounded-full bg-red-500 p-4">
            <FaLaptop className="text-4xl text-white" />
          </div>
          <div className=" rounded-full bg-red-500 p-4">
            <BiSolidNotepad className="text-4xl text-white" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
