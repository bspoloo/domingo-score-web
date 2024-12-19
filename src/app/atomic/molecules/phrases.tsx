import Title from "../atoms/title"
import Paragraph from "../atoms/paragraph"
import { FaTwitter } from "react-icons/fa";

export default function Phrases() {
    const classNameP = "text-sm font-light text-[#68686c] ";
    const classNameT = "flex flex-row gap-4"
    return (
        <div className="flex flex-col w-[500px] p-3">
            <Title
                className="text-2xl font-normal text-#[fdfff6] mb-6 "
                textContent="Pay Basket" />
            <div className={classNameT}>
                <FaTwitter className="text-[#ffffff] hover:text-[#364bb5] " size={60} />
                <Paragraph
                    className={classNameP}
                    textContent="El baloncesto no solo mejora tu condición física al fortalecer músculos, aumentar tu resistencia y desarrollar coordinación, sino que también fomenta habilidades esenciales como el trabajo en equipo, la toma de decisiones rápidas y la resolución de problemas bajo presión, habilidades que son valiosas tanto dentro como fuera de la cancha." />
            </div>
            <br />
            <div className={classNameT}>
                <FaTwitter className="text-[#ffffff] hover:text-[#364bb5] " size={60} />
                <Paragraph
                    className={classNameP}
                    textContent="Practicar baloncesto te ayuda a construir disciplina y compromiso, ya que requiere constancia, esfuerzo y dedicación para mejorar cada día; además, es una excelente manera de liberar estrés y mejorar tu bienestar mental al concentrarte en el juego y disfrutar de la camaradería con tus compañeros." />
            </div>
            <br />
            <div className={classNameT}>
                <FaTwitter className="text-[#ffffff] hover:text-[#364bb5] " size={60} />
                <Paragraph
                    className={classNameP}
                    textContent="El baloncesto es un deporte completo que desafía tanto tu cuerpo como tu mente, promoviendo la salud cardiovascular, el desarrollo de reflejos rápidos y la capacidad de anticipar movimientos, mientras te enseña la importancia de la comunicación efectiva y la confianza mutua para alcanzar metas comunes." />
            </div>
        </div>
    )
}