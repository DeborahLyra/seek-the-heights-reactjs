import { useTranslation } from "react-i18next";


export function AboutTheSite() {
    const { t } = useTranslation('aboutTheSite');
    return (
        <div className="bg-light-gray text-secondary p-8">
            <h2 className="text-3xl font-bold mb-8">{t('aboutTheSite.title')}</h2>
            <p
                className="text-lg font-light">{t('aboutTheSite.description')}</p>
        </div>
    )
}
