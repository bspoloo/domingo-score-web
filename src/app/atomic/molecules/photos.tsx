import Image from "../atoms/image"

export default function Photos(){
    return(
        <div className=" flex flex-row gap-4 flex-wrap justify-center items-center">
            <Image URI="https://strapi-wasabi-bucket.apyhi.com/anime_pfp_04_82ffa4d2ed.webp" alt="Image 1" size={200}/>
            <Image URI="https://i.etsystatic.com/40195626/r/il/a5d213/5131065943/il_570xN.5131065943_20dy.jpg" alt="Image 2" size={200}/>
            <Image URI="https://static.printler.com/cache/d/5/4/5/7/f/d5457f5fb0156d5ec621a77aaf651e4653c750da.jpg" alt="Image 3" size={200}/>
            <Image URI="https://static.printler.com/cache/5/b/6/c/0/9/5b6c0959124c09116d5421c27030740f35557295.jpg" alt="Image 4" size={200}/>
        </div>
    )
}