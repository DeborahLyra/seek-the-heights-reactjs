import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import type { LongText } from "../../types/supabadeTypes";

export function TextComponent() {
  const { t } = useTranslation('textComponent');
  const [longText, setLongText] = useState<LongText[]>([])

  useEffect(() => {
      const fetchMessages = async () => {
          const { data, error } = await supabase
              .from('long_texts')
              .select('*')
              .order('created_at', { ascending: false })
              .limit(3)

          if (error) {
              console.error('Erro ao buscar textos:', error.message)
          } else {
              setLongText(data as LongText[])
          }
      }

      fetchMessages()
  }, [])

  return (
    <section id="linesAndSky" className="bg-light-gray text-secondary p-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-3xl font-bold mb-8">{t('title')}</h2>
        <p className="text-lg font-light text-justify md:w-[700px]">
          {t('description')}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-2">
        {longText.map((text) => (
          <Link
            to={`/long-text/${text.id}`}
            key={text.title}
            className="block bg-white text-secondary p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-102 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{text.title}</h3>
            <p className="text-base text-gray-700">{text.description}</p>
          </Link>
        ))}
      </div>

      <Link to={'/long-texts-page'} className="mt-8 flex justify-center">
        <button
          className="px-6 py-3 bg-dusty-orange text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition cursor-pointer"
        >
          {t('seeMore')}
        </button>
      </Link>
    </section>
  );
}
