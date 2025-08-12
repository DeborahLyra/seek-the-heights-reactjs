import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowCircleLeft } from "phosphor-react";

export function FaithExamplesPage() {
    const { t } = useTranslation('faithExamples');
    
    // Pega todas as chaves do objeto 'people' do JSON 
    const allPeopleKeys = Object.keys(t('people', { returnObjects: true }));

    return (
        <section className="h-full bg-primary text-secondary p-8">
            <Link to={'/'}><ArrowCircleLeft size={24} /></Link>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-8">{t('title')}</h2>
                <p className="text-lg font-light md:w-[700px] text-center">
                    {t('description')}
                </p>
            </div>

            <div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {allPeopleKeys.map((personKey) => (
                        <Link
                            to={`/single-faith-example/${personKey}`}
                            key={personKey}
                            className="transform hover:scale-102 transition duration-300 shadow-md hover:shadow-xl rounded-xl overflow-hidden bg-white"
                        >
                            <img
                                src={t(`people.${personKey}.image`)}
                                alt={t(`people.${personKey}.name`)}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    {t(`people.${personKey}.name`)}
                                </h3>
                                <p className="text-base text-gray-700">
                                    {t(`people.${personKey}.description`)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}