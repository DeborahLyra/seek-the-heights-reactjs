import { useTranslation } from 'react-i18next';
import imgBanner from '../../public/img/imagemBanner.jpeg'

export function Banner() {

    const { t } = useTranslation('header');

    return (
        <div
            id='banner'
            className="bg-primary text-secondary p-4 md:p-8 flex items-center justify-between flex-col gap-8 md:flex-row"
        >
            <div className=''>
                <h1 className='text-5xl font-bold text-center md:text-left mb-4'>{t("banner.title")}</h1>
                <p className='text-center text-xl md:text-left'>{t("banner.subtitle")}</p>
            </div>

            <img src={imgBanner} alt="" className='h-fit md:h-80 lg:h-96 rounded-4xl'/>

        </div>
    )
}
