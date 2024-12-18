import { TitleProps } from "@/app/Props/props"

export default function Paragraph({ className, textContent}: TitleProps){
    return(
        <p className={className}>
            {textContent}
        </p>
    )
}