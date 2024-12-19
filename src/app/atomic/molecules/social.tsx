import Title from "../atoms/title"
import Photos from "./photos"

export default function Social() {
    return (
        <div className="flex flex-col w-[500px] p-3">
            <Title
                className="text-2xl font-normal text-#[fdfff6] mb-6 "
                textContent="Social Networks" />
            <Photos />
        </div>
    )
}