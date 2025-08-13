import { ArrowCircleLeft } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";


export function SingleMiracle() {
    const { t } = useTranslation('miracles');
    const { id } = useParams()
    const videoId = t(`list.${id}.videoId`);

    return (
        <section className="min-h-screen bg-primary text-secondary p-8 text-center">
            <Link to={'/miracles-page'}><ArrowCircleLeft size={24} /></Link>
            <h2 className="text-4xl font-bold mb-8">{t(`list.${id}.title`)}</h2>

            <div className="flex flex-col items-center justify-around">
              
                <p className="mb-8 flex-1 text-lg font-light text-justify">
                    {t(`list.${id}.content`)}
                </p>
                 {/* Container do Vídeo */}
                 {videoId && videoId !== "sem video" && (
                    <div className="w-full md:w-1/3 aspect-video bg-black">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={t(`list.${id}.title`)}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                )}

            </div>
            
        </section>
    )
}
