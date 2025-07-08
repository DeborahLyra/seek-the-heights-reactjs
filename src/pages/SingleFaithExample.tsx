import { ArrowCircleLeft } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";


export function SingleFaithExample() {
    const { t } = useTranslation('faithExamples');
    const { id } = useParams()

    return (
        <section className="h-full bg-primary text-secondary p-8 text-center">
            <Link to={'/faith-examples-page'}><ArrowCircleLeft size={24} /></Link>
            <h2 className="text-4xl font-bold mb-8">{t(`people.${id}.name`)}</h2>

            <div className="flex flex-col items-center justify-center">
                <img
                    src={t(`people.${id}.image`)}
                    alt={t(`people.${id}.name`)}
                    className="h-80 object-center rounded-lg mb-8"
                />

                <p className="flex-1 text-lg font-light text-justify">
                    {t(`people.${id}.content`)}
                </p>
            </div>
        </section>
    )
}
