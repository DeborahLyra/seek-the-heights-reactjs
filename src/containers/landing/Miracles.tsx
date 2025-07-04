import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const miraclesList = ['lanciano', 'guadalupe', 'fatima'];

export function Miracles() {
  const { t } = useTranslation('miracles'); 

  return (
    <section id="miracles" className="bg-primary text-secondary p-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-3xl font-bold mb-8">{t('title')}</h2>
        <p className="text-lg font-light text-justify md:w-[700px]">
          {t('description')}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {miraclesList.map((key) => (
          <Link
            to={`/milagres/${key}`}
            key={key}
            className="block bg-white text-secondary p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{t(`list.${key}.title`)}</h3>
            <p className="text-base text-gray-700">{t(`list.${key}.description`)}</p>
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
    </section>
  );
}
