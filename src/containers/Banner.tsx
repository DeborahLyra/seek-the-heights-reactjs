import imgBanner from '../../public/img/imagemBanner.jpeg'

export function Banner() {
    return (
        <div
            id='banner'
            className="bg-primary text-secondary p-4 md:p-8 flex items-center justify-between flex-col gap-8 md:flex-row"
        >
            <div className=''>
                <h1 className='text-5xl font-bold text-center md:text-left mb-4'>Buscar o Alto</h1>
                <p className='text-lg text-center md:text-left'>Um convite para elevar o coração e caminhar na fé, descobrindo a paz em Deus.</p>
            </div>

            <img src={imgBanner} alt="" className='h-fit md:h-80 lg:h-96 rounded-4xl'/>

        </div>
    )
}
