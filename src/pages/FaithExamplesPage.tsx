import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const listPeople = [
    {
        key: 'jesus',
    },
    {
        key: 'mary',
    },
    {
        key: 'francis',
    }
];

export function FaithExamplesPage() {
    const { t } = useTranslation('faithExamples');
    

    return (

        <section className="h-full bg-primary text-secondary p-8">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-8">{t('title')}</h2>
                <p className="text-lg font-light md:w-[700px] text-center">
                    {t('description')}
                </p>
            </div>

            <div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                    {listPeople.map((person) => (
                        <Link
                            to={`/single-faith-example/${person.key}`}
                            key={person.key}
                            className="transform hover:scale-102 transition duration-300 shadow-md hover:shadow-xl rounded-xl overflow-hidden bg-white"
                        >
                            <img
                                src={t(`people.${person.key}.image`)}
                                alt={t(`people.${person.key}.name`)}
                                className="w-full h-64 object-center"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    {t(`people.${person.key}.name`)}
                                </h3>
                                <p className="text-base text-gray-700">
                                    {t(`people.${person.key}.description`)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
            <Link to={'/faith-examples-page'} className="mt-8 flex justify-center">
                <button
                    className="px-6 py-3 bg-dusty-orange text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition cursor-pointer"
                    
                >
                    {t('seeMore')}
                </button>
            </Link>
        </section>

    )
}
