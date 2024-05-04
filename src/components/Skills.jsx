import { FaRegClipboard } from "react-icons/fa";
const Skills = () => {
  return (
    <>
      <div className="flex mt-10 w-[50%] gap-14 ">
        <div className="flex flex-col items-center">
          <div className="border-4 rounded-full border-solid border-red-500 p-2 ">
            <FaRegClipboard className="text-4xl text-red-500 " />
          </div>
          <p className="font-semibold text-xl text-red-500">Skills </p>
        </div>
        <div className="w-[30%] flex flex-col gap-2 font-semibold">
          <div className="flex w-full gap-10 items-center  justify-between">
            <p>Problem sol.</p>
            <div className="flex items-center gap-3">
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
            </div>
          </div>
          <div className="flex w-full gap-10 items-center  justify-between">
            <p>Frontend</p>
            <div className="flex items-center gap-3">
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
            </div>
          </div>
          <div className="flex w-full gap-10 items-center  justify-between">
            <p>Design</p>
            <div className="flex items-center gap-3">
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
            </div>
          </div>
          
          <div className="flex w-full gap-10 items-center  justify-between">
            <p>SEO</p>
            <div className="flex items-center gap-3">
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
            </div>
          </div>
          <div className="flex w-full gap-10 items-center  justify-between">
            <p>Backend</p>
            <div className="flex items-center gap-3">
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
              <p className="rounded-full bg-red-500 w-2 h-2"></p>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center">
            <p className="font-semibold">Spoke</p>
            <p className="text-sm">
              Is 40 Hours a week too much? Heres what history and science say
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="font-semibold">Zapier</p>
            <p className="text-sm">
              Organise your health with the Agile Method
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="font-semibold">nDash</p>
            <p className="text-sm">
              Why generalist Writers lead to Lost profits in B2B tech
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
