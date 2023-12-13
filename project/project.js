import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { projectProfile } from './projectProfile.js'
import { youtube } from './youtube.js'
import { sample } from './sample.js'
import { review } from './review.js'
import { whyProject } from './whyProject.js'
import { scene } from './scene.js'
import { price } from '../main-page/price.js'
import { projectSlider } from './projectSlider.js'
import { process } from './process.js'

const project = document.querySelector('#project')

project.append(headerPrimary)
project.append(projectProfile)
project.append(youtube)
project.append(sample)
project.append(review)
project.append(whyProject)

project.append(scene)
project.append(process)
project.append(projectSlider)

project.append(price)
project.append(mainFooter)
