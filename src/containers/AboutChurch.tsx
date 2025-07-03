import { useTranslation } from "react-i18next";
import ChurchImage from '../../public/img/aboutChurch.webp';

export function AboutChurch() {
    const { t } = useTranslation('aboutTheSite');

    return (
        <section className="bg-primary text-secondary p-8">
            <h2 className="text-3xl font-bold mb-8">{t('aboutChurch.aboutChurchTitle')}</h2>
            <div className="flex flex-col-reverse md:flex-row items-center justify-around gap-8">
                <p className="text-lg font-light text-justify md:w-[700px]">
                    {t('aboutChurch.aboutChurchText')}
                </p>
                <img 
                    src={ChurchImage} 
                    alt={t('aboutChurch.churchImageAlt')} 
                    className="h-60 md:h-96 rounded-lg"
                />
            </div>
        </section>
    );
}
