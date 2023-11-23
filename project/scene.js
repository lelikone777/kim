export const scene = document.createElement('section')
scene.classList.add('scene', 'section')

scene.innerHTML = `

<div class='contact__wrapper relative max-w-screen-2xl m-auto'>

  <div class='contact__image absolute left-0 right-0 xl:right-auto z-10 top-3 md:top-5  h-[55vw] md:h-[46.878vw] 2xl:w-[936px] xl:h-auto xl:top-1/2 xl:translate-y-[-50%] overflow-hidden'>
      <img src='/img/images/project-page/3d-sm.jpg' alt='' class='md:hidden'>
      <img src='/img/images/project-page/3d-md.jpg' alt='' class='hidden md:block xl:hidden'>
      <img src='/img/images/project-page/3d-xl.jpg' alt='' class='hidden xl:block 2xl:hidden'>
      <img src='/img/images/project-page/3d-2xl.jpg' alt='' class='hidden 2xl:block'>
  </div>
  
  <div class='contact__box relative border border-semi-grey mx-5 md:mx-10 xl:mx-20 px-5 sm:px-10 md:px-20 py-5 sm:py-10 md:py-20 xl:flex 2xl:gap-x-20 2xl:mx-[120px]'>
  
    <div class='flop h-[55vw] md:h-[46.878vw] xl:h-full relative  md:top-5 xl:flex-1'></div>
    
    <div class='contact__info flex flex-col gap-y-5 pt-2 md:gap-y-10 2xl:gap-y-16 xl:flex-1 xl:pl-20'>
      <div class='contact__text flex flex-col gap-y-3 items-start text-left'>
        <p class='text-26-300 uppercase'>
          Примерьте арт объект в своей 3D сцене
        </p>
        <p class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>
          Напишите ваши контактные данные и отправьте фото вашего помещения. Наши дизайнеры бесплатно подготовят для вас визуализацию.
        </p>
      </div>
      
      <form class='contact__form flex flex-col gap-y-3 md:gap-y-5'>
        <div class='contact__form-inputs flex md:flex-wrap flex-col gap-y-3 md:flex-row md:gap-x-5 md:grid md:grid-cols-2'>
          <input type='text' placeholder='имя' class='contact__form-name flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase md:basis-44 md:col-span-1'>
          
          <input type='text' placeholder='телефон' class='contact__form-phone flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase md:basis-44 md:col-span-1'>
          
          <div class='relative md:col-span-2'>
            <input type='text' placeholder='прикрепите файл' class='contact__form-phone flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase'>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="22" viewBox="0 0 11 22" fill="none" class='absolute right-4 top-1/2 translate-y-[-50%]'>
              <path d="M5.5 0.867123C1.81818 0.867123 1 0.335507 1 6.77432V16.2258C1 19.4883 3.01472 20.8564 5.5 20.8564C7.98528 20.8564 10 19.4883 10 16.2258V6.77432" stroke="#033260"/>
              <path d="M5.50117 0.856445C6.49528 0.856445 7.30117 0.856445 7.30117 3.79415V16.0039C7.30117 17.6263 6.85117 18.3033 5.50117 18.3033C4.15117 18.3033 3.70117 17.6263 3.70117 16.0039V5.24131" stroke="#033260"/>
            </svg>
            
          </div>
          
        </div>
        <div class='contact__bottom flex flex-col gap-y-3 md:flex-row md:justify-between md:gap-x-5'>
          <div class='contact__form-check flex items-center gap-x-3 md:w-full'>
            <input checked id='primary-checkbox' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'>
            <label for='primary-checkbox' class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px] 2xl:tracking-[0.42px] 2xl:max-w-[450px] md:max-w-none'>Даю своё согласие на обработку своей персональной информации на условиях, определенных Политикой в отношении обработки персональных данных.
            </label>
            <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'>
          </div>
          <div class='w-full flex '>
            <button class='contact__form-button w-full px-4 md:w-full 2xl:px-10 py-[15px] 2xl:py-[22px] text-light text-[14px] 2xl:text-[16px] tracking-[2.1px] 2xl:tracking-[2.4px] uppercase bg-primary sm:px-6 '>
            Отправить
          </button>
          </div>
        </div>



      </form>
      
      
      <div class=''>
        <div class='price__phone flex flex-col gap-y-[4px] md:flex-row md:items-center md:justify-between md:gap-x-5'>
          <p class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px] md:flex-1'>
            Если хотите получить ответ сразу позвоните нам по телефону:
          </p>
          <p class='text-[24px] leading-[125%] tracking-[0.5px] md:flex-1 2xl:text-[36px] 2xl:tracking-[0.72px]'>
            +7 495 145-25-98
          </p>
      </div>

        <button
          class='price__whatsapp-button flex flex-center xl:justify-start w-full lg:w-fit border border-primary px-6 py-[14px] 2xl:px-10 2xl:py-[22p] text-primary text-[12px] 2xl:text-[16px] font-bold leading-normal tracking-[0.6px] 2xl:tracking-[2.4px] uppercase'>
          <img src='/img/icons/whatsapp-logo.svg' alt='whatsapp logo' class='w-[20px] h-[20px]'/>
          <span class='ml-2'>или напишите в whatsapp</span>
        </button>
      </div>
      
    </div
    
  </div>
  
  
</div>

  
`
