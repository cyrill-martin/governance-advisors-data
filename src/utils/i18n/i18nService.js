import { createI18n } from "vue-i18n"
import messagesEn from "@/i18n/en.json"

export const i18n = createI18n({
  locale: "en", // Set the default locale
  legacy: false,
  messages: {
    en: messagesEn,
  },
})
