import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { blogNewsTitle } from './blogNewsTitle.js'
import { blogNewsList } from './blogNewsList.js'

const blogNews = document.querySelector('#blog-news')

blogNews.append(headerPrimary)
blogNews.append(blogNewsTitle)
blogNews.append(blogNewsList)
blogNews.append(mainFooter)
