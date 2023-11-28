import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { mkStudioTitle } from './mkStudioTitle.js'
import { mkStudioProfile } from './mkStudioProfile.js'
import { mkStudioWhom } from './mkStudioWhom.js'
import { mkStudioTrain } from './mkStudioTrain.js'

const mkStudio = document.querySelector('#mk-studio')

mkStudio.append(headerPrimary)
mkStudio.append(mkStudioTitle)
mkStudio.append(mkStudioProfile)
mkStudio.append(mkStudioWhom)
mkStudio.append(mkStudioTrain)
mkStudio.append(mainFooter)
