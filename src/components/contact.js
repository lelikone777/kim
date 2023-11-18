export const contact = document.createElement('contact')
contact.classList.add('contact')

contact.innerHTML = `
<div class="contact__wrapper relative my-14 md:my-20">

  <div class='contact__image absolute left-0 right-0 xl:right-auto z-10 top-3 md:top-5 h-[55vw] md:h-[46.878vw] xl:h-[422px] overflow-hidden'>
    <img src='/src/img/images/contact-image-2xl.jpg' alt='contact image' class='relative bottom-[3%] md:bottom-[6%] xl:bottom-[3%]'>
  </div>
  
  <div class='contact__box relative border border-semi-grey mx-5 md:mx-10 xl:mx-20 px-5 sm:px-10 md:px-20 py-5 sm:py-10 md:py-20 xl:flex'>
    <div class='flop h-[55vw] md:h-[46.878vw] xl:h-full relative top-3 md:top-5 xl:w-1/2'></div>
    
    <div class='contact__info flex flex-col gap-y-5 md:gap-y-10 xl:w-1/2'>
      <div class='contact__text flex flex-col gap-y-3 items-start text-left'>
        <p class='text-[24px] leading-[125%] tracking-[0.5px]'>
          <span class='text-light-grey'>Вы дизайнер?</span> 
          присоединяйтесь к нашему закрытому телеграм каналу
        </p>
        <p class='text-[14px] leading-[160%] tracking-[0.4px]'>
          Напишите ваши контактные данные, чтобы мы связались с вами. Мы храним их под защитой и никогда не передаём третьим лицам. 
        </p>
      </div>
      
      <form class='contact__form flex flex-col gap-y-3 md:gap-y-5'>
        <div class='contact__form-inputs flex flex-col gap-y-3 sm:flex-row sm:gap-x-5'>
          <input type='text' placeholder='имя' class='contact__form-name flex px-4 py-[15px] w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] placeholder:tracking-[2.1px] placeholder:uppercase'>
          <input type='text' placeholder='телефон' class='contact__form-phone flex px-4 py-[15px] w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] placeholder:tracking-[2.1px] placeholder:uppercase'>
        </div>
        <div class='contact__bottom flex flex-col gap-y-3 sm:flex-row sm:justify-between sm:gap-x-5'>
          <div class='contact__form-check flex items-center gap-x-3'>
            <input checked id="primary-checkbox" type="checkbox" value="" class="relative peer shrink-0 appearance-none w-5 h-5 border border-primary rounded-none bg-light">
            <label for="primary-checkbox" class="text-[10px] leading-[140%] tracking-[0.3px] sm:max-w-[330px]">Даю своё согласие на обработку своей персональной информации на условиях, определенных Политикой в отношении обработки персональных данных.
            </label>
            <img src='/src/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 hidden peer-checked:block pointer-events-none'>
          </div>
          <button class='contact__form-button w-full px-4 py-[15px] text-light text-[14px] tracking-[2.1px] uppercase bg-primary sm:px-6 sm:w-fit'>
            Отправить
          </button>
        </div>
      </form>
    </div>
    
  </div>
  
  
</div>
  
`
