import { RedirectionProps } from "@/app/props/props";
import { redirect } from "next/navigation";


export default function Redirection({ className, text, URI}: RedirectionProps){
    return <button className={className} onClick={()=>{redirect(URI)}}>{text}</button>
}