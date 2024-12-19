import Title from "../atoms/title"
import Paragraph from "../atoms/paragraph"
import Phone from "./phone";
import Message from "../atoms/message";

export default function AboutUS() {
    const classNameP = "text-sm font-light text-[#68686c] ";

    return (
        <div className="flex flex-col w-[500px] p-3 gap-3">
            <Title
                className="text-2xl font-normal text-#[fdfff6] mb-6 "
                textContent="About Us" />
            <Paragraph
                className={classNameP}
                textContent="Welcome to DomingoScore, where innovation meets creativity. Our mission is to empower individuals and businesses with cutting-edge solutions that inspire growth and transformation." />
            <br />
            <Paragraph
                className={classNameP}
                textContent="We believe in the power of connection and community, which is why we strive to build experiences that bring people closer together. Whether you're here to discover, create, or grow, we're committed to providing you with the tools and support you need to succeed." />
            <br />
            <Paragraph
                className={classNameP}
                textContent="At DomingoScore, our team is driven by a passion for excellence, fueled by curiosity, and guided by a desire to make a positive impact on the world. From our humble beginnings to where we are today, our journey has been shaped by the trust and loyalty of our customers and collaborators." />
            <br />
            <Paragraph
                className={classNameP}
                textContent="Thank you for choosing us to be a part of your story. Together, we can achieve great things." />
            <Phone/>
            <Message/>
        </div>
    )
}