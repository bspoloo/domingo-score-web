import { redirect } from "next/navigation"
import Paragraph from "../atoms/paragraph"
import { FaPhone } from "react-icons/fa"
import { FaMailBulk } from "react-icons/fa"

export default function Phone() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3 items-center" onClick={()=>{redirect('https://wa.me/59172886424?text=%C2%A1Hola%21%20Estoy%20interesado%20en%20tus%20servicios.')}}>
                <FaPhone className="text-[#f18729] hover:text-[#364bb5] " size={20} />
                <Paragraph className="font-bold" textContent="+591 728864624" />
            </div>
            <div className="flex flex-row gap-3 items-center" onClick={()=>{redirect('mailto:animetx098@gmail.com.com?subject=Consulta&body=%C2%A1Hola%21%20Tengo%20una%20consulta%20sobre%20los%20servicios."')}}>
                <FaMailBulk className="text-[#f18729] hover:text-[#364bb5] " size={20} />
                <Paragraph className="font-bold" textContent="animetx098@gmail.com" />
            </div>
        </div>
    )
}