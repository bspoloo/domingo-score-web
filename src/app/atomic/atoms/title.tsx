import { TitleProps } from "@/app/props/props"

export default function Title({ className, textContent} : TitleProps){
    return(
        <h1 className={className}>{textContent}</h1>
    )
}