import React from 'react'
import {Link} from "react-router";

const ResumeBtn = () => {
    return (
        <Link to="#"
              className="font-medium border-2 border-black rounded-4xl hover:bg-[#7F7F7F] hover:text-white hover:border-[#7F7F7F] hover:opacity-40 duration-300 ease-in-out text-black justify-center flex justify-items-center rounded-4xl text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Resume</Link>
    )
}
export default ResumeBtn
