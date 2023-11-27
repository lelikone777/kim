import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { catalog } from './catalog.js'
import { othersCollections } from './othersCollections.js'
import { exclusiveProjects } from './exclusiveProjects.js'

const circulationsPage = document.querySelector('#circulation')

circulationsPage.append(headerPrimary)
circulationsPage.append(catalog)
circulationsPage.append(othersCollections)
circulationsPage.append(exclusiveProjects)
circulationsPage.append(mainFooter)
