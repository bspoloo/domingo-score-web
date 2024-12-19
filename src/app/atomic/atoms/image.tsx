import { ImageProps } from "@/app/props/props"

export default function Image({ alt, URI, size}:ImageProps){
    return(
        <div className="hover:text-[#364bb5] hover:transition-colors">
            <img src={URI} alt={alt} width={size} height={size} className="border-2 rounded-lg"/>
        </div>
    )
}