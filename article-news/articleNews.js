import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { articleNewsTitle } from './articleNewsTitle.js'
import { articleNewsGallery } from './articleNewsGallery.js'
import { articleNewsRecommendSlider } from './articleNewsRecommendSlider.js'

const articleNews = document.querySelector('#article-news')

articleNews.append(headerPrimary)
articleNews.append(articleNewsTitle)
articleNews.append(articleNewsGallery)
articleNews.append(articleNewsRecommendSlider)
articleNews.append(mainFooter)
