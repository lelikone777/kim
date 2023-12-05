import '/src/css/fonts.css'
import '/src/css/global.css'
import { individualLearningHeader } from './individualLearningHeader.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { individualLearningSecond } from './individualLearningSecond.js'
import { individualLearningThird } from './individualLearningThird.js'
import { individualLearningFourth } from './individualLearningFourth.js'
import { individualLearningFifth } from './individualLearningFifth.js'
import { individualLearningSixth } from './individualLearningSixth.js'
import { individualLearningSeventh } from './individualLearningSeventh.js'
import { individualLearningEighth } from './individualLearningEighth.js'
import { individualLearningNinth } from './individualLearningNinth.js'
import { individualLearningTenth } from './individualLearningTenth.js'
import { individualLearningEleventh } from './individualLearningEleventh.js'

const academyPage = document.querySelector('#individual-learning')

academyPage.append(individualLearningHeader)
academyPage.append(individualLearningSecond)
academyPage.append(individualLearningThird)
academyPage.append(individualLearningFourth)
academyPage.append(individualLearningFifth)
academyPage.append(individualLearningSixth)
academyPage.append(individualLearningSeventh)
academyPage.append(individualLearningEighth)
academyPage.append(individualLearningNinth)
academyPage.append(individualLearningTenth)
academyPage.append(individualLearningEleventh)
academyPage.append(mainFooter)
