import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { mkOnlineTitle } from './mkOnlineTitle.js'
import { mkOnlineProfile } from './mkOnlineProfile.js'
import { mkOnlineWhom } from './mkOnlineWhom.js'
import { mkOnlineHow } from './mkOnlineHow.js'
import { mkOnlineTrain } from './mkOnlineTrain.js'
import { mkOnlineNeeds } from './mkOnlineNeeds.js'
import { mkOnlineStart } from './mkOnlineStart.js'
import { mkOnlineAfter } from './mkOnlineAfter.js'
import { mkOnlineReviews } from './mkOnlineReviews.js'
import { mkOnlineFAQ } from './mkOnlineFAQ.js'
import { mkOnlineRecommend } from './mkOnlineRecommend.js'
import { mkOnlineContact } from './mkOnlineContact.js'
import { mkOnlineContacts2 } from './mkOnlineContacts2.js'

const mkOnline = document.querySelector('#mk-online')

mkOnline.append(headerPrimary)
mkOnline.append(mkOnlineTitle)
mkOnline.append(mkOnlineProfile)
mkOnline.append(mkOnlineWhom)
mkOnline.append(mkOnlineHow)
mkOnline.append(mkOnlineTrain)
mkOnline.append(mkOnlineNeeds)
mkOnline.append(mkOnlineStart)
mkOnline.append(mkOnlineAfter)
mkOnline.append(mkOnlineReviews)
mkOnline.append(mkOnlineFAQ)
mkOnline.append(mkOnlineRecommend)
mkOnline.append(mkOnlineContacts2)
// mkOnline.append(mkOnlineContact)
mkOnline.append(mainFooter)
