import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/sections/header/headerPrimary.js'
import { catalog } from './catalog.js'
import { othersCollections } from './othersCollections.js'
import { mainFooter } from '../src/sections/footer/footer.js'
import { exclusiveProjects } from './exclusiveProjects.js'

const circulationsPage = document.querySelector('#circulation')

circulationsPage.append(headerPrimary)
circulationsPage.append(catalog)
circulationsPage.append(othersCollections)
circulationsPage.append(exclusiveProjects)
circulationsPage.append(mainFooter)
