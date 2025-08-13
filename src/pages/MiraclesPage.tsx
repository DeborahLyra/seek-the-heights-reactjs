import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowCircleLeft } from "phosphor-react";

export function MiraclesPage() {
  const { t } = useTranslation('miracles');
  
  // Pega todas as chaves do objeto 'list' do JSON de tradução
  const allMiracles = Object.keys(t('list', { returnObjects: true }));

  return (
    <section className="min-h-screen bg-primary text-secondary p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4 hover:text-dusty-orange transition">
            <ArrowCircleLeft size={28} />
          </Link>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold">{t('title')}</h1>
          </div>
        </div>

        <p className="text-lg md:text-xl font-light mb-8 text-center max-w-3xl mx-auto">
          {t('description')}
        </p>

        {/* Lista de Milagres */}
        <div className="grid grid-cols-1 gap-6">
          {allMiracles.map((miracleKey) => (
            <Link
              to={`/single-miracle/${miracleKey}`}
              key={miracleKey}
              className="group flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
    
              <div className="w-full p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-primary group-hover:text-dusty-orange transition">
                  {t(`list.${miracleKey}.title`)}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t(`list.${miracleKey}.description`)}
                </p>
                <div className="flex justify-end">
                  <span className="text-dusty-orange font-medium group-hover:underline">
                    Saiba mais →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {allMiracles.length > 3 && (
          <div className="mt-10 text-center">
            <button className="px-8 py-3 bg-dusty-orange text-white rounded-lg text-lg font-medium hover:bg-orange-600 transition shadow-md">
              {t('seeMore')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}