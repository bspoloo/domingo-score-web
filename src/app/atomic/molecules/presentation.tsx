import Paragraph from "../atoms/paragraph"
import Title from "../atoms/title"

export default function Presentation() {
    return (
        <div>
            <Title
                className="text-5xl font-normal text-center text-white mb-4"
                textContent="Únete y observa los partidos"
            />
            <Title
                className="text-5xl font-normal text-center text-white mb-4"
                textContent="Disponibles de BasquetBall"
            />
            <Paragraph className="text-sm font-normal text-center text-gray-200" textContent="inicia sesion para poder empezar en este mundo del basquetball" />
        </div>
    )
}