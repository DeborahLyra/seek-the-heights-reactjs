import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { useTranslation } from "react-i18next"
import bgImage from '../../../public/img/imagemBanner.jpeg'

export function AdminDashboard() {
  const { signOut } = useAuth()
  const { t } = useTranslation('adminPages')

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col justify-around items-center h-screen px-4"
    style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-5xl font-bold text-center">{t('dashboard.adminDashboard.title')}</h1>

      <div className="mt-8 flex flex-col gap-4 w-full max-w-3xl">
        <Link 
          to="/admin/messages"
          className="h-18 flex items-center justify-center text-lg font-bold transform hover:scale-105 transition duration-300 shadow-md hover:shadow-xl rounded-xl overflow-hidden bg-light-gray p-4 text-center"
        >
          {t('dashboard.adminDashboard.manageShortMessages')}
        </Link>

        <Link 
          to="/admin/long-texts"
          className="h-18 flex items-center justify-center text-lg font-bold transform hover:scale-105 transition duration-300 shadow-md hover:shadow-xl rounded-xl overflow-hidden bg-light-gray p-4 text-center"
        >
          {t('dashboard.adminDashboard.manageLongTexts')}
        </Link>
      </div>

      <button 
        onClick={signOut} 
        className="w-96 max-w-full mt-8 rounded-lg bg-red-500 text-white py-2 font-semibold hover:bg-red-600 transition"
      >
        {t('dashboard.adminDashboard.logout')}
      </button>
    </div>
  )
}
