import '/src/css/fonts.css'
import '/src/css/global.css'
import { teamHeader } from './teamHeader.js'
import { teamLeonid } from './teamLeonid.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { teamList } from './teamList.js'
import { teamAbout } from './teamAbout.js'

const team = document.querySelector('#team')

team.append(teamHeader)
team.append(teamLeonid)
team.append(teamList)
team.append(teamAbout)
team.append(mainFooter)
