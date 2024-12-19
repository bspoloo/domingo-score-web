'use client'
import Redirection from "../atoms/redirection"
import Contacts from "../molecules/contacts"
import Description from "../organisms/description"
import { FaGithub } from "react-icons/fa"

export default function Footer() {


    return (
        <div className="footer flex flex-col bg-[#202126] w-full justify-center items-center">
            <Description />
            <div className="line"></div>
            <br />
            <div className="flex flex-row w-full justify-between ">
                <Contacts />
                <FaGithub className="mr-3" size={50}/>
            </div>
            <br />
        </div>
    )
}