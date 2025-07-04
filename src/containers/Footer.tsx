import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Footer() {
    const { t } = useTranslation('footer');

    return (
        <footer className="bg-primary text-secondary px-8 py-10 mt-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-lg font-semibold">{t('quote')}</p>
                    <p className="text-sm text-secondary/80 mt-2">
                        © {new Date().getFullYear()} · {t('copyright')}
                    </p>
                </div>

                <nav className="flex flex-wrap gap-4 text-sm font-medium">
                    <a href="#banner" className="hover:underline">{t('links.home')}</a>
                    <a href="#examplesOfFaith" className="hover:underline">{t('links.examples')}</a>
                    <a href="#miracles" className="hover:underline">{t('links.miracles')}</a>
                    <a href="#linesAndSky" className="hover:underline">{t('links.linesAndSky')}</a>
                </nav>
            </div>
        </footer>
    );
}
