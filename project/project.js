import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/sections/header/headerPrimary.js'
import { mainFooter } from '../src/sections/footer/footer.js'
import { projectProfile } from './projectProfile.js'

const project = document.querySelector('#project')

project.append(headerPrimary)
project.append(projectProfile)

project.append(mainFooter)
