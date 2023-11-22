export const price = document.createElement('section')
price.classList.add('price', 'section')

price.innerHTML = `
<div class='price__wrapper relative max-w-screen-2xl m-auto'>
  <div
    class='price__image absolute left-0 right-0 xl:right-auto z-10 top-3 md:top-5 2xl:top-1/2 2xl:translate-y-[-50%] h-[55vw] md:h-[46.878vw] xl:h-[619px] xl:w-[662px] xl:top-1/2 xl:translate-y-[-50%] 2xl:h-[741px] 2xl:w-[936px] overflow-hidden'
  >
    <img
      src='/img/images/principles-image-3-big.jpg'
      alt='contact image'
      class='relative bottom-[44%] xl:bottom-auto xl:max-w-none xl:w-[118%] xl:left-[-10%] 2xl:w-full 2xl:left-auto'
    />
  </div>

  <div
    class='price__box relative border border-semi-grey mx-5 md:mx-10 xl:mx-20 px-5 sm:px-10 md:px-20 py-5 sm:py-10 md:py-20 xl:flex 2xl:gap-x-20 2xl:mx-[120px]'
  >
    <div
      class='flop h-[55vw] md:h-[46.878vw] xl:h-full relative top-3 md:top-5 xl:flex-1'
    ></div>

    <div
      class='price__info flex flex-col gap-y-5 pt-2 md:gap-y-10 2xl:gap-y-16 xl:flex-1'
    >
      <div class='price__text flex flex-col gap-y-3 items-start text-left'>
        <p
          class='inline-block text-[26px] 2xl:text-[40px] leading-[140%] tracking-[0.5px] 2xl:tracking-[0.8px] uppercase'
        >
          Узнайте, сколько будет стоить
          <span class='text-light-grey'
            >ваш уникальный<wbr /> <nobr>арт-объект</nobr></span
          >
          <span class='mr-1'>на заказ</span>
          <span
            class='relative ml-2 min-w-[122px] 2xl:min-w-[160px] inline-block bg-accent py-[2px] 2xl:py-[4px] px-2.5 text-light text-[10px] 2xl:text-[14px] leading-[140%] 2xl:leading-[160%] tracking-[0.3px] 2xl:tracking-[0.42px] normal-case before:absolute before:content-[&quot;&quot;] before:w-0 before:h-0 before:border-t-[22px] before:border-r-0 before:border-b-0 before:border-l-[5px] before:border-l-transparent before:border-solid before:border-accent before:top-0 before:left-[-4px] after:absolute after:content-[&quot;&quot;] after:w-0 after:h-0 after:border-b-[22px] after:border-r-0 after:border-t-0 after:border-l-[5px] after:border-l-transparent after:border-solid after:border-accent after:bottom-0 after:left-[-4px]'>Перезвоним вам <br /> в течение 10 минут
            </span>
        </p>
        <p class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>
          Напишите ваши контактные данные, чтобы мы связались с вами. Мы
          храним их под защитой и никогда не передаём третьим лицам.
        </p>
      </div>

      <form class='price__form flex flex-col gap-y-3 md:gap-y-5'>
        <div class='price__form-inputs flex flex-col gap-y-3 sm:flex-row sm:gap-x-5'>
          <input type='text' placeholder='имя' class='price__form-name flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase'/>
          <input type='text' placeholder='телефон' class='price__form-phone flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase'/>
        </div>
        <div class='price__bottom flex flex-col gap-y-3 sm:flex-row sm:justify-between sm:gap-x-5'>
          <div class='price__form-check flex items-center gap-x-3'>
            <input checked id='primary-checkbox' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'/>
            <label for='primary-checkbox' class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px] 2xl:tracking-[0.42px] sm:max-w-[330px] 2xl:max-w-[450px]'
              >Даю своё согласие на обработку своей персональной информации
              на условиях, определенных Политикой в отношении обработки
              персональных данных.
            </label>
            <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'/>
          </div>
          <button class='price__form-button w-full px-4 2xl:px-10 py-[15px] 2xl:py-[22px] text-light text-[14px] 2xl:text-[16px] tracking-[2.1px] 2xl:tracking-[2.4px] uppercase bg-primary sm:px-6 sm:w-fit'>
            Отправить
          </button>
        </div>
      </form>

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
  </div>
</div>
  
`
