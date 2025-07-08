import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const miraclesList = ['lanciano', 'guadalupe', 'fatima'];

export function MiraclesPage() {
    const { t } = useTranslation('miracles');


    return (

        <section className="h-full bg-primary text-secondary p-8">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-8">{t('title')}</h2>
                <p className="text-lg font-light text-center">
                    {t('description')}
                </p>
            </div>

            <div>

                <div className="mt-8 flex flex-col gap-4">
                    {miraclesList.map((key) => (
                        <Link
                            to={`/single-miracle/${key}`}
                            key={`list.${key}.title`}
                            className="flex items-center justify-items-center transform hover:scale-102 transition duration-300 shadow-md hover:shadow-xl rounded-xl overflow-hidden bg-light-gray"
                        >
                            <img
                                src={t(`list.${key}.image`)}
                                alt={t(`list.${key}.title`)}
                                className="h-36 object-center"
                            />
                            <div className="p-4 border-l-2 border-l-primary">
                                <h3 className="text-xl font-semibold mb-2">
                                    {t(`list.${key}.title`)}
                                </h3>
                                <p className="text-base text-gray-700">
                                    {t(`list.${key}.description`)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
            <div className="mt-8 flex justify-center">
                <button
                    className="px-6 py-3 bg-dusty-orange text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition cursor-pointer"

                >
                    {t('seeMore')}
                </button>
            </div>
        </section>

    )
}
