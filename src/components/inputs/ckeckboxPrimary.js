export const checkboxPrimary = document.createElement('div')
checkboxPrimary.classList.add('product-price')

checkboxPrimary.innerHTML = `

<div class='checkbox flex items-center gap-x-3'>
  <input checked id='checkbox-primary' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'/>
  <label for='checkbox-primary' class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px] 2xl:tracking-[0.42px] sm:max-w-[330px] 2xl:max-w-[450px]'
  >Даю своё согласие на обработку своей персональной информации
    на условиях, определенных Политикой в отношении обработки
    персональных данных.
  </label>
  <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'/>
</div>
  
`
