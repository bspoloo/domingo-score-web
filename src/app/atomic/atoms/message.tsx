

export default function Message() {
    return (
        <div className="flex items-center flex-wrap justify-around bg-[#2a2b30] rounded-full py-2">
            <input
                type="email"
                placeholder="Enter your e-mail"
                className="flex flex-row bg-transparent text-white placeholder-[#8b8f8c] outline-none px-2"
                required
            />
            <button className="bg-orange-500 text-white font-bold px-4 py-2 rounded-full hover:bg-orange-600 transition">
                Send
            </button>
        </div>
    )
}