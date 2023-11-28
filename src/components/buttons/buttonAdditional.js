export const buttonAdditional = document.createElement('div')
buttonAdditional.classList.add('button-additional')

buttonAdditional.innerHTML = `
  <button class='flex items-center justify-center gap-x-2 w-fit'>
    <span class='text-button-primary text-primary hover:text-primary-dark uppercase font-bold'>
      <span>Мастер-класс "Крыло"</span>
    </span>
    <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
    </svg>
  </button>
`
