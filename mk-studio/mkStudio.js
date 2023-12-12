import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { mkStudioTitle } from './mkStudioTitle.js'
import { mkStudioProfile } from './mkStudioProfile.js'
import { mkStudioWhom } from './mkStudioWhom.js'
import { mkStudioTrain } from './mkStudioTrain.js'
import { mkStudioStartTraining } from './mkStudioStartTraining.js'
import { mkStudioTrainSupport } from './mkStudioTrainSupport.js'
import { mkStudioAdvantages } from './mkStudioAdvantages.js'
import { mkStudioAfterTraining } from './mkStudioAfterTraining.js'
import { mkStudioReviews } from './mkStudioReviews.js'
import { mkStudioFAQ } from './mkStudioFAQ.js'
// import { mkStudioQuestions } from './mkStudioQuestions.js'
import { mkStudioRecommend } from './mkStudioRecommend.js'
import { mkStudioPrice } from './mkStudioPrice.js'

const mkStudio = document.querySelector('#mk-studio')

mkStudio.append(headerPrimary)
mkStudio.append(mkStudioTitle)
mkStudio.append(mkStudioProfile)
mkStudio.append(mkStudioWhom)
mkStudio.append(mkStudioTrain)
mkStudio.append(mkStudioStartTraining)
mkStudio.append(mkStudioTrainSupport)
mkStudio.append(mkStudioAdvantages)
mkStudio.append(mkStudioAfterTraining)
mkStudio.append(mkStudioReviews)
mkStudio.append(mkStudioFAQ)
mkStudio.append(mkStudioRecommend)
// mkStudio.append(mkStudioQuestions)
mkStudio.append(mkStudioPrice)
mkStudio.append(mainFooter)
