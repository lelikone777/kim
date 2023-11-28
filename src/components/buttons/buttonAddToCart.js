export const buttonAddToCart = document.createElement('div')
buttonAddToCart.className = 'button-add-to-cart'

buttonAddToCart.innerHTML = `
<button class='shop__button flex gap-x-2 justify-center items-center min-h-[48px] px-6 py-[12px] 2xl:py-[18px] border border-primary hover:border-primary-dark text-button-primary font-bold uppercase text-primary hover:text-primary-dark'>
  <span>Добавить в корзину</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
    <path d="M16.3331 19.1269C16.3331 19.8973 16.9385 20.4998 17.6585 20.4998C18.3784 20.4998 18.9839 19.8973 18.9839 19.1269C18.9839 18.3564 18.3784 17.7539 17.6585 17.7539C16.9385 17.7539 16.3331 18.3564 16.3331 19.1269Z" stroke="#78848F"/>
    <path d="M8.17489 19.1269C8.17489 19.8973 8.78034 20.4998 9.50029 20.4998C10.2202 20.4998 10.8257 19.8973 10.8257 19.1269C10.8257 18.3564 10.2202 17.7539 9.50029 17.7539C8.78034 17.7539 8.17489 18.3564 8.17489 19.1269Z" stroke="#78848F"/>
    <path d="M21.8333 14.6808H6.27778L5.88095 3.73615H7.38889H9.83333H14.7222H24.5L23.1667 9.20845L22.5 11.9446M4.5 1H0.5" stroke="#78848F"/>
  </svg>
</button>
`
