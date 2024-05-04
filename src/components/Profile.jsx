import { GrUserManager } from "react-icons/gr";
const Profile = () => {
    return (
        <>
            <div className="flex mt-10 w-[50%] gap-14  ">
                <div className="flex flex-col items-center"> 
                    <div className="border-4 rounded-full border-solid border-red-500 p-2">
                        <GrUserManager className="text-4xl "/>
                    </div>
                    <p className="font-semibold text-xl text-red-500">Profile</p>
                </div>
                <div className="flex flex-col items-start">
                    <p className="text-4xl font-semibold">Aditya</p>
                    <p className="text-4xl font-semibold">Shendkar</p>
                    <p className="text-2xl font-extralight">Frontend Dev.</p>
                </div>
                <div className="flex flex-col w-[90%] text-justify gap-4 ">
                    <p className="text-l">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste necessitatibus nostrum laborum sed reprehenderit debitis error praesentium itaque consectetur? Dolorum?
                    </p>
                    <div className="flex flex-col">
                        <p className="font-semibold text-sm">Email: <span className="font-regular">aditya.shendkar03@gmail.com</span></p>
                        <p className="font-semibold text-sm">Website: <span className="font-regular">www.abc.com</span></p>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Profile;