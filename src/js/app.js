import '/src/css/fonts.css'
import '/src/css/global.css'
import { mainHeader } from '/src/components/header.js'
import { main } from '/src/components/main.js'
import { mainFooter } from '/src/components/footer.js'

const app = document.querySelector('#app')

app.append(mainHeader)
app.append(main)
app.append(mainFooter)
