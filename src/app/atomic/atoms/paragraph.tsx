import { TitleProps } from "@/app/props/props"

export default function Paragraph({ className, textContent}: TitleProps){
    return(
        <p className={className}>
            {textContent}
        </p>
    )
}