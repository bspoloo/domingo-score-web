import Redirection from "../atoms/redirection"

export default function Contacts() {
    const className = " p-2 hover:bg-white hover:text-[#202126] hover:border-2 hover:rounded-full hover:transition-colors hover:font-bold";
    return (
        <div className="flex flex-row w-1/3 justify-around">
            <Redirection className={className} text="Home" URI="#" />
            <Redirection className={className} text="About" URI="#" />
            <Redirection className={className} text="Our works" URI="#" />
            <Redirection className={className} text="Blog" URI="#" />
            <Redirection className={className} text="Constacts" URI="#" />
        </div>
    )
}