import { useTranslation } from "react-i18next";
import ChurchImage from '../../public/img/aboutChurch.webp'



export function AboutChurch() {
    const { t } = useTranslation('aboutTheSite');
    return (
        <div className="bg-primary text-secondary p-8">
            <h2 className="text-3xl font-bold mb-8">Sobre a Igreja Católica</h2>
            <div className="flex flex-col-reverse md:flex-row items-center justify-around gap-8">
                <p
                    className="text-lg font-light text-justify md:w-[700px]">A Igreja Católica é mais do que uma instituição — é uma família espiritual, viva e universal, fundada por Jesus Cristo e guiada pelo Espírito Santo há mais de dois mil anos. Presente em todos os cantos do mundo, ela anuncia o Evangelho, celebra os sacramentos e acolhe a todos que desejam viver uma fé concreta, profunda e transformadora.
                    É na Igreja que encontramos o alimento da Palavra, a força da Eucaristia, o testemunho dos santos e a beleza de uma tradição que une fé e razão, coração e história.
                </p>

                <img 
                src={ChurchImage} 
                alt="Altar de igreja católica" 
                className="h-60 md:h-96 rounded-lg"
                />
            </div>
        </div>
    )
}
