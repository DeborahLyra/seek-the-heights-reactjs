import { useTranslation } from "react-i18next";


export function MessageButton({ onClick }: { onClick: () => void }) {

  const { t } = useTranslation('header');

  return (
    <div
      onClick={onClick}
      className="fixed bottom-4 right-8 bg-secondary text-white p-2 rounded-xl cursor-pointer"
    >
      {t('message')}
    </div>
  )
}
