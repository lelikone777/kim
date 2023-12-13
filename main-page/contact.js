export const contact = document.createElement('section')
contact.classList.add('contact', 'section')

contact.innerHTML = `
<div class='contact__wrapper relative max-w-screen-2xl m-auto'>

  <div class='contact__image absolute left-0 right-0 xl:right-auto z-10 top-3 md:top-5 2xl:top-1/2 2xl:translate-y-[-50%] h-[55vw] md:h-[46.878vw] xl:h-[422px] 2xl:h-[458px] 2xl:w-[936px] overflow-hidden'>
    <img src='/img/images/contact-image-2xl.jpg' alt='contact image' class='relative bottom-[3%] md:bottom-[6%] xl:bottom-[3%]'>
  </div>
  
  <div class='contact__box relative border border-semi-grey mx-5 md:mx-10 xl:mx-20 px-5 sm:px-10 md:px-20 py-5 sm:py-10 md:py-20 xl:flex 2xl:gap-x-20 2xl:mx-[120px]'>
  
    <div class='flop h-[55vw] md:h-[46.878vw] xl:h-full relative  md:top-5 xl:flex-1'></div>
    
    <div class='contact__info flex flex-col gap-y-5 pt-2 md:gap-y-10 2xl:gap-y-16 xl:flex-1'>
      <div class='contact__text flex flex-col gap-y-3 items-start text-left'>
        <p class='text-[24px] 2xl:text-[36px] leading-[125%] tracking-[0.5px] 2xl:tracking-[0.72px]'>
          <span class='text-light-grey'>Вы дизайнер?</span> 
          присоединяйтесь к нашему закрытому телеграм каналу
        </p>
        <p class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>
          Напишите ваши контактные данные, чтобы мы связались с вами. Мы храним их под защитой и никогда не передаём третьим лицам. 
        </p>
      </div>
      
      <form class='contact__form flex flex-col gap-y-3 md:gap-y-5'>
        <div class='contact__form-inputs flex flex-col gap-y-3 sm:flex-row sm:gap-x-5'>
          <div class='flex relative flex-1 '>
            <label for='name-contact' class='absolute hidden'>Имя</label>
            <input type='text' id='name-contact' placeholder='имя' class='contact__form-name flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase hover:hover-input'>
          </div>
          <div class='flex relative flex-1 '>
            <label for='phone-contact' class='absolute hidden'>телефон</label>
            <input type='text' id='phone-contact' placeholder='телефон' class='contact__form-phone flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase hover:hover-input'>
          </div>
        </div>
        <div class='contact__bottom flex flex-col gap-y-3 sm:flex-row sm:justify-between sm:gap-x-5'>
          <div class='contact__form-check flex items-center gap-x-3'>
            <input checked id='primary-checkbox' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light checked:hover:hover-bg cursor-pointer'>
            <label for='primary-checkbox' class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px] 2xl:tracking-[0.42px] sm:max-w-[330px] 2xl:max-w-[450px]'>Даю своё согласие на обработку своей персональной информации на условиях, определенных Политикой в отношении обработки персональных данных.
            </label>
            <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'>
          </div>
          <button class='contact__form-button w-full px-4 2xl:px-10 py-[15px] 2xl:py-[22px] text-light text-[14px] 2xl:text-[16px] tracking-[2.1px] 2xl:tracking-[2.4px] uppercase bg-primary sm:px-6 sm:w-fit hover:hover-bg'>
            Отправить
          </button>
        </div>
      </form>
    </div>
    
  </div>
  
  
</div>
  
`
