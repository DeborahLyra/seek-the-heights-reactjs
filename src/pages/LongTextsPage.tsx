import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import { useTranslation } from "react-i18next"
import type { LongText } from "../types/supabadeTypes"
import { Link } from "react-router-dom"
import { ArrowCircleLeft } from "phosphor-react"


export default function LongTextsPage() {

    const { t } = useTranslation('textComponent')
    const [longText, setLongText] = useState<LongText[]>([])

    useEffect(() => {
        const fetchMessages = async () => {
            const { data, error } = await supabase
                .from('long_texts')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) {
                console.error('Erro ao buscar textos:', error.message)
            } else {
                setLongText(data as LongText[])
            }
        }

        fetchMessages()
    }, [])
    return (
        <section className="h-[100vh] bg-primary text-secondary p-8">
            <Link to={'/'}><ArrowCircleLeft size={24} /></Link>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-8">{t('title')}</h2>
                <p className="text-lg font-light text-center">
                    {t('description')}
                </p>
            </div>
            <div>

                <div className="mt-8 flex flex-col gap-4">
                    {longText.map((text) => (
                        <Link
                            to={`/long-text/${text.id}`}
                            key={text.title}
                            className="flex items-center justify-items-center transform hover:scale-102 transition duration-300 shadow-md hover:shadow-xl rounded-xl overflow-hidden bg-light-gray cursor-pointer"
                        >
                            <div className="p-4 border-l-2 border-l-primary">
                                <h3 className="text-xl font-semibold mb-2">
                                    {text.title}
                                </h3>
                                <p className="text-base text-gray-700">
                                    {text.description}
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
