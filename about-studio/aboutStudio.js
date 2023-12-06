import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { aboutStudioTitle } from './aboutStudioTitle.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { aboutStudioHistory } from './aboutStudioHistory.js'
import { aboutStudioPhilosophy } from './aboutStudioPhilosophy.js'
import { aboutStudioContacts } from './aboutStudioContacts.js'

const aboutStudio = document.querySelector('#about-studio')

aboutStudio.append(headerPrimary)
aboutStudio.append(aboutStudioTitle)
aboutStudio.append(aboutStudioHistory)
aboutStudio.append(aboutStudioPhilosophy)
aboutStudio.append(aboutStudioContacts)
aboutStudio.append(mainFooter)
