import '/src/css/fonts.css'
import '/src/css/global.css'
import { signature } from './signature.js'
import { projects } from './projects.js'
import { principles } from './principles.js'
import { price } from './price.js'
import { shop } from './shop.js'
import { academy } from './academy.js'
import { contact } from './contact.js'

export const main = document.createElement('main')

main.append(signature)
main.append(projects)
main.append(principles)
main.append(price)
main.append(shop)
main.append(academy)
main.append(contact)
