import { signature } from './signature.js'
import { principles } from './principles.js'
import { contact } from './contact.js'

export const main = document.createElement('main')

main.append(signature)
main.append(principles)
main.append(contact)
