import '/src/css/fonts.css'
import '/src/css/global.css'
import { mainFooter } from '../src/sections/footer/footer.js'
import { headerPrimary } from '../src/sections/header/headerPrimary.js'
import { academyProfile } from './academyProfile.js'
import { academyYoutube } from './academyYoutube.js'
import { academyFormats } from './academyFormats.js'
import { academyPrinciples } from './academyPrinciples.js'
import { academyWhy } from './academyWhy.js'
import { academyLearn } from './academyLearn.js'
import { academyReviews } from './academyReviews.js'
import { academyNeeds } from './academyNeeds.js'
import { productPrice } from '../product/productPrice.js'
import { academyFaq } from './academyFaq.js'

const academyPage = document.querySelector('#academy')

academyPage.append(headerPrimary)
academyPage.append(academyProfile)
academyPage.append(academyYoutube)
academyPage.append(academyFormats)
academyPage.append(academyPrinciples)
academyPage.append(academyWhy)
academyPage.append(academyLearn)
academyPage.append(academyReviews)
academyPage.append(academyNeeds)
academyPage.append(academyFaq)

academyPage.append(productPrice)
academyPage.append(mainFooter)
