import AboutUS from "../molecules/aboutUs"
import Phrases from "../molecules/phrases"
import Social from "../molecules/social"

export default function Description(){
    return(
        <div className="flex flex-row justify-around items-center flex-wrap mr-7 ml-7 mt-20 mb-20 w-full">
            <AboutUS/>
            <Phrases/>
            <Social/>
        </div>
    )
}