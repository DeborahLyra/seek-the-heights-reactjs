import { ArrowCircleLeft } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";


export function SingleMiracle() {
    const { t } = useTranslation('miracles');
    const { id } = useParams()

    return (
        <section className="h-full bg-primary text-secondary p-8 text-center">
            <Link to={'/miracles-page'}><ArrowCircleLeft size={24} /></Link>
            <h2 className="text-4xl font-bold mb-8">{t(`list.${id}.title`)}</h2>

            <div className="flex flex-col items-center justify-center">
                <img
                    src={t(`list.${id}.image`)}
                    alt={t(`list.${id}.title`)}
                    className="h-80 object-center rounded-lg mb-8"
                />

                <p className="flex-1 text-lg font-light text-justify">
                    {t(`list.${id}.content`)}
                </p>
            </div>
        </section>
    )
}
