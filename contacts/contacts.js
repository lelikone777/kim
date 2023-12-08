import '/src/css/fonts.css'
import '/src/css/global.css'
import { headerPrimary } from '../src/components/header/headerPrimary.js'
import { mainFooter } from '../src/components/footer/footer.js'
import { contactsTitle } from './contactsTitle.js'
import { contactsData } from './contactsData.js'
import { contactsContacts } from './contactsContacts.js'

const contacts = document.querySelector('#contacts')

contacts.append(headerPrimary)
contacts.append(contactsTitle)
contacts.append(contactsData)
contacts.append(contactsContacts)
contacts.append(mainFooter)
