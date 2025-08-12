import { useTranslation } from 'react-i18next';
import bgImage from '../../../public/img/imagemBanner.jpeg';

export function Banner() {
    const { t } = useTranslation('header');

    return (
        <section
            id='banner'
            className="h-[20rem] md:h-[40rem] bg-cover bg-bottom text-light-gray p-4 md:p-8 flex flex-col gap-8 justify-center md:justify-start"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="text-center md:text-left">
                <h1 className="md:mt-24 text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
                    {t("banner.title")}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 font-medium">
                    {t("banner.subtitle")}
                </p>
            </div>
        </section>
    );
}