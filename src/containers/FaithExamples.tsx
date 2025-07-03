import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import JesusImage from '../../public/img/people/jesusImage.jpeg';
import MaryImage from '../../public/img/people/maryImage.jpeg';
import FrancisImage from '../../public/img/people/stFrancisImage.jpeg';

const listPeople = [
  {
    key: 'jesus',
    img: JesusImage
  },
  {
    key: 'mary',
    img: MaryImage
  },
  {
    key: 'francis',
    img: FrancisImage
  }
];

export function FaithExamples() {
  const { t } = useTranslation('faithExamples');

  return (
    <div id="faithExamples" className="bg-light-gray text-secondary p-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-3xl font-bold mb-8">{t('title')}</h2>
        <p className="text-lg font-light md:w-[700px] text-justify">
          {t('description')}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {listPeople.map((person) => (
          <Link
            to={`/pessoas/${person.key}`}
            key={person.key}
            className="transform hover:scale-105 transition duration-300 shadow-md hover:shadow-xl rounded-xl overflow-hidden bg-white"
          >
            <img
              src={person.img}
              alt={t(`people.${person.key}.name`)}
              className="w-full h-64 object-cover"
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

      <div className="mt-8 flex justify-center">
        <button
          className="px-6 py-3 bg-dusty-orange text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition cursor-pointer"
          onClick={() => alert("Ver mais clicado!")}
        >
          {t('seeMore')}
        </button>
      </div>
    </div>
  );
}
