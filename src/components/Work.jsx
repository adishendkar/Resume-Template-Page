import { FaBriefcase } from "react-icons/fa";
const Work = () => {
    return (
        <>
        <div className="flex mt-10 w-[50%] gap-14 items-center ">
            <div className="flex flex-col items-center"> 
                <div className="border-4 rounded-full border-solid border-red-500 p-2">
                    <FaBriefcase className="text-4xl text-red-500"/>
                </div>
                <p className="font-semibold text-xl text-red-500">Work</p>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex gap-20 items-center justify-between">
                    <p className="text-xl font-semibold">Present</p>
                    <div className="flex flex-col">
                        <p className="font-semibold ">Student</p>
                        <p className="font-regular text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, tempore!</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Work;