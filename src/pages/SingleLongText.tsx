import { ArrowCircleLeft } from "phosphor-react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { supabase } from "../lib/supabase"
import type { LongText } from "../types/supabadeTypes"
import Lottie from "lottie-react";
import loadingFile from '../../public/img/loadingLottieFile.json'

export function SingleLongText() {
    const { id } = useParams()
    const [longText, setLongText] = useState<LongText | null>(null)

    useEffect(() => {
        const fetchLongText = async () => {
            if (!id) return

            const { data, error } = await supabase
                .from('long_texts')
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                console.error('Erro ao buscar texto:', error.message)
            } else {
                setLongText(data)
            }
        }

        fetchLongText()
    }, [id])

    if (!longText) {
        return (
            <div className="min-h-[100vh] bg-primary flex justify-center items-center h-screen">
                <Lottie
                    animationData={loadingFile}
                    loop={true}
                    style={{ width: 200, height: 200 }}
                />
            </div>
        )
    }

    return (
        <section className="min-h-[100vh] bg-primary text-secondary p-8 text-center">
            <Link to={'/long-texts-page'}>
                <ArrowCircleLeft size={24} />
            </Link>
            <h2 className="text-4xl font-bold mb-8">{longText.title}</h2>

            <div className="flex flex-col items-center justify-center w-full">
                <p className="flex-1 text-lg font-light text-justify whitespace-pre-wrap md:max-w-[80%]">
                    {longText.content}
                </p>
            </div>
        </section>
    )
}
