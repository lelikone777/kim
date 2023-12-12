import '/src/css/fonts.css'
import '/src/css/global.css'
import { studyStudioTitle } from './studyStudioTitle.js'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { studyStudioPrinciples } from './studyStudioPrinciples.js'
import { studyStudioMk } from './studyStudioMk.js'
import { studyStudioList } from './studyStudioList.js'
import { studyStudioContact } from './studyStudioContact.js'
import { studyStudioPrice } from './studyStudioPrice.js'

const studyStudio = document.querySelector('#study-studio')

studyStudio.append(headerPrimary)
studyStudio.append(studyStudioTitle)
studyStudio.append(studyStudioPrinciples)
studyStudio.append(studyStudioMk)
studyStudio.append(studyStudioList)
studyStudio.append(studyStudioPrice)
// studyStudio.append(studyStudioContact)

studyStudio.append(mainFooter)
