import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from '@/locals/en/common.json'
import gr from '@/locals/gr/common.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        gr: {
            translation: gr,
        },
    },
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },

});

export default i18n;
