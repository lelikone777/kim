import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { faqContacts } from './faqContacts.js'
import { faqNewsRecommendSlider } from './faqNewsRecommendSlider.js'
import { faqFaq } from './faqFaq.js'
import { faqCategoryName } from './faqCategoryName.js'

const faq = document.querySelector('#faq')

faq.append(headerPrimary)
faq.append(faqFaq)

// Название категорий
// faq.append(faqCategoryName)

faq.append(faqContacts)
faq.append(faqNewsRecommendSlider)
faq.append(mainFooter)
