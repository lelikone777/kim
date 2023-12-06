import '/src/css/fonts.css'
import '/src/css/global.css'
import { leonidHeader } from './leonidHeader.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { leonidSignature } from './leonidSignature.js'
import { LeonidFoundersText } from './leonidFoundersText.js'
import { leonidAchievments } from './leonidAchievments.js'
import { leonidRecommend } from './leonidRecommend.js'
import { leonidYoutube } from './leonidYoutube.js'
import { leonidLearn } from './leonidLearn.js'

const leonid = document.querySelector('#leonid')

leonid.append(leonidHeader)
leonid.append(leonidSignature)
leonid.append(LeonidFoundersText)
leonid.append(leonidAchievments)
leonid.append(leonidRecommend)
leonid.append(leonidYoutube)
leonid.append(leonidLearn)
leonid.append(mainFooter)
