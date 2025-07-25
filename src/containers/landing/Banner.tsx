import { useTranslation } from 'react-i18next';
import bgImage from '../../../public/img/imagemBanner.jpeg'

export function Banner() {

    const { t } = useTranslation('header');

    return (
        <section
            id='banner'
            className="h-[40rem] bg-cover bg-bottom text-white p-4 md:p-8 flex items-center  flex-col gap-8 md:flex-row"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className=''>
                <h1 className='text-5xl font-bold text-center md:text-left mb-4'>{t("banner.title")}</h1>
                <p className='text-center text-xl md:text-left'>{t("banner.subtitle")}</p>
            </div>

         
        </section>
    )
}
