export const modalAuthorCopy = document.createElement('div')
modalAuthorCopy.classList.add('modal__author-copy')

modalAuthorCopy.innerHTML = `


<div class='overlay grid place-content-center h-screen w-screen bg-lighter-grey'>
  <div class='modal__author-copy bg-light flex items-center w-fit h-fit m-auto'>
  
    <div class='image hidden xl:block'>
      <img src='/img/images/modalAuthorCopy.jpg' alt='modal-info'>
    </div>

    <div class='flex flex-col gap-y-5 info p-5 md:p-10 xl:p-20 max-w-[728px]'>
      <div class='info-top flex flex-col gap-y-2'>
        <div class='modal__author-copy-title text-26-300 2xl:!text-[26px]'>Заказ авторской копии барельефа «BUG»</div>
        <p class='text-16-400 2xl:!text-[16px]'>
          Напишите ваши контактные данные, чтобы мы связались с вами. Мы храним их под защитой и никогда не передаём третьим лицам. 
        </p>
      </div>
      
      <form class='price__form flex flex-col gap-y-5 md:gap-y-5'>
        <div class='price__form-inputs gap-y-3 md:gap-x-5 grid grid-cols-1 md:grid-cols-2'>
          <input type='text' placeholder='имя' class='price__form-name col-span-1 px-4 py-[15px] w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] placeholder:tracking-[2.1px] placeholder:uppercase max-h-12'/>
          <input type='text' placeholder='телефон' class='price__form-phone col-span-1 px-4 py-[15px] w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] placeholder:tracking-[2.1px] placeholder:uppercase max-h-12'/>
          <textarea type='text' placeholder='Ваши пожелания' rows='4' class='price__form-phone col-span-1 md:col-span-2 px-4 py-[15px] w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] placeholder:tracking-[2.1px] placeholder:uppercase'></textarea>
        </div>
        
        <div class='price__bottom flex flex-col gap-y-5 md:flex-row md:justify-between gap-x-5'>
            <div class='price__form-check flex items-center gap-x-3'>
              <input checked id='primary-checkbox' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'/>
              <label for='primary-checkbox' class='text-light-grey text-[10px] 2xl:text-[10px] leading-[140%] tracking-[0.3px] 2xl:tracking-[0.42px] sm:max-w-[330px] 2xl:max-w-[450px]'
                >Даю своё согласие на обработку своей персональной информации
                на условиях, определенных Политикой в отношении обработки
                персональных данных.
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'/>
            </div>
            
            <button class='price__form-button w-full px-4 2xl:px-10 py-[15px] 2xl:py-[22px] text-light text-button-primary uppercase bg-primary md:px-6 md:w-fit'>
              Отправить
            </button>
        </div>
      </form>
    </div>
     
  </div>
</div>

  
`
