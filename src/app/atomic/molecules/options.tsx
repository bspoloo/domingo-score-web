import Redirection from "../atoms/redirection"

export default function Options() {
    const className = 'w-40 h-11 border-2 rounded-lg hover:bg-white hover:text-[#364bb5] hover:transition-colors'
    return (
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-4 mx-auto max-w-screen-lg px-4 py-8 ">
            <Redirection className={className} text="Option 1" URI="/option" />
            <Redirection className={className} text="Option 2" URI="/option" />
            <Redirection className={className} text="Option 3" URI="/option" />
            <Redirection className={className} text="Option 4" URI="/option" />
            <Redirection className={className} text="Option 5" URI="/option" />
            <Redirection className={className} text="Option 6" URI="/option" />
            <Redirection className={className} text="Option 7" URI="/option" />
        </div>

    )
}