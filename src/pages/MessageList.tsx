import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import type { Message } from "../types/supabadeTypes"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { ArrowCircleLeft } from "phosphor-react"


export function MessageList() {

    const { t } = useTranslation('modal')
    const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Erro ao buscar mensagens:', error.message)
      } else {
        setMessages(data as Message[])
      }
    }

    fetchMessages()
  }, [])
    
  return (
    <section className="h-[100vh] bg-primary text-secondary p-8">
        <Link to={'/'}><ArrowCircleLeft size={24} /></Link>
    <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-8">{t('messagePage.title')}</h2>
        <p className="text-lg font-light text-center">
            {t('messagePage.subtitle')}
        </p>
    </div>

    <div>

        <div className="mt-8 flex flex-col gap-4">
            {messages.map((message) => (
                <div
                    key={message.title}
                    className="flex items-center justify-items-center transform hover:scale-102 transition duration-300 shadow-md hover:shadow-xl rounded-xl overflow-hidden bg-light-gray"
                >
                    <div className="p-4 border-l-2 border-l-primary">
                        <h3 className="text-xl font-semibold mb-2">
                            {message.title}
                        </h3>
                        <p className="text-base text-gray-700">
                            {message.content}
                        </p>
                    </div>
                </div>
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
