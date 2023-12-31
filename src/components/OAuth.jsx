import { FcGoogle } from "react-icons/fc";

export const OAuth = () => {
  return (
    <button className="flex justify-center w-full items-center bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out"><FcGoogle className="text-2xl bg-white rounded-full mr-2" /> Continue with Google</button>
  )
}
