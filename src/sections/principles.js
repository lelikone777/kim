export const principles = document.createElement('section')
principles.classList.add('principles', 'section')

principles.innerHTML = `
 <div class="principles__wrapper flex flex-col gap-y-5 pl-0 pr-0 pb-5 md:pb-10 xl:p-20 w-full m-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl">
  <div class="principles__title text-26-300 text-left ">
    <div class="m-auto px-5 md:px-0">
      <h2 class="uppercase">Принципы работы</h2>
    </div>
  </div>

  <div class="principles__list flex flex-col lg:flex-row gap-y-5 lg:gap-y-10 lg:gap-x-[42px] xl:gap-x-[48px] pr-5 md:pr-0 lg:pr-0">
    <div class="principles__card flex lg:flex-col flex-1 gap-x-5 md:gap-x-10 pr-3 lg:pr-0 relative">
      <div class="principles__card-line absolute right-0 lg:left-0 lg:bottom-0 w-[1px] lg:w-auto lg:h-[1px] h-full bg-semi-grey"></div>
      <div class="principles__card-number absolute top-1 sm:top-[20px] lg:top-auto lg:bottom-0 lg:right-6 right-0 text-semi-grey">
        <div class="relative text-secondary text-[32px] 2xl:text-[48px] leading-[140%] tracking-[1.6px] uppercase left-1/2 lg:left-auto lg:top-5 2xl:top-8">
          <span class="bg-light py-1 px-3">1</span>
        </div>
      </div>

      <div class="principles__card-image">
        <div class="sm:hidden w-[80px] overflow-hidden">
          <img src="/src/img/images/principles-image-sm-1.jpg" alt="principles image" />
        </div>
        <div class="hidden sm:flex w-[197px] lg:w-full">
          <img src="/src/img/images/principles-image-1.jpg" alt="principles image" />
        </div>
      </div>
      <div class="principles__card-info flex flex-col gap-y-3 py-3 md:py-7 lg:pb-12">
        <h4 class="principles__card-title text-20-300">Прозрачность</h4>
        <div class="principles__card-text">
          <p class="text-14-300 text-deep-grey max-w-[96%]">
            Вы всегда можете заглянуть за ширму работы над вашим проектом.
            Приехать к нам в студию лично или запросить визуальный материал
            по этапам производства - мы любим открыто делиться творческим
            процессом и оставаться на связи.
          </p>
        </div>
      </div>
    </div>

    <div class="principles__card flex lg:flex-col flex-1 gap-x-5 md:gap-x-10 pr-3 lg:pr-0 relative">
      <div class="principles__card-line absolute right-0 lg:left-0 lg:bottom-0 w-[1px] lg:w-auto lg:h-[1px] h-full bg-semi-grey"></div>

      <div class="principles__card-number absolute top-1 sm:top-[20px] lg:top-auto lg:bottom-0 lg:right-6 right-0 text-semi-grey">
        <div class="relative text-secondary text-[32px] 2xl:text-[48px] leading-[140%] tracking-[1.6px] uppercase left-1/2 lg:left-auto lg:top-5 2xl:top-8">
          <span class="bg-light py-1 px-3">2</span>
        </div>
      </div>

      <div class="principles__card-image">
        <div class="sm:hidden w-[80px] overflow-hidden">
          <img src="/src/img/images/principles-image-sm-2.jpg" alt="principles image" />
        </div>
        <div class="hidden sm:flex w-[197px] lg:w-full">
          <img src="/src/img/images/principles-image-2.jpg" alt="principles image" />
        </div>
      </div>
      <div class="principles__card-info flex flex-col gap-y-3 py-3 md:py-7">
        <h4 class="principles__card-title text-20-300">Партнёрство</h4>
        <div class="principles__card-text">
          <p class="text-14-300 text-deep-grey max-w-[96%]">
            Мы собрали свою команду профессионалов от художников и скульпторов до опытных менеджеров и специалистов по монтажу, благодаря чему вам не придется заботиться ни о чем, кроме получения готового произведения искусства. А еще мы устанавливаем дружеские отношения с десятками дизайнеров и архитекторов, начиная работать над совместными проектами.
          </p>
        </div>
      </div>
    </div>

    <div class="principles__card flex lg:flex-col flex-1 gap-x-5 md:gap-x-10 pr-3 lg:pr-0 relative">
      <div class="principles__card-line absolute right-0 lg:left-0 lg:bottom-0 w-[1px] lg:w-auto lg:h-[1px] h-full bg-semi-grey"></div>
      <div class="principles__card-number absolute top-1 sm:top-[20px] lg:top-auto lg:bottom-0 lg:right-6 right-0 text-semi-grey">
        <div class="relative text-secondary text-[32px] 2xl:text-[48px] leading-[140%] tracking-[1.6px] uppercase left-1/2 lg:left-auto lg:top-5 2xl:top-8">
          <span class="bg-light py-1 px-3">3</span>
        </div>
      </div>

      <div class="principles__card-image">
        <div class="sm:hidden w-[80px] overflow-hidden">
          <img src="/src/img/images/principles-image-sm-3.jpg" alt="principles image" />
        </div>
        <div class="hidden sm:flex w-[197px] lg:w-full">
          <img src="/src/img/images/principles-image-3.jpg" alt="principles image" />
        </div>
      </div>
      <div class="principles__card-info flex flex-col gap-y-3 py-3 md:py-7">
        <h4 class="principles__card-title text-20-300">Качество</h4>
        <div class="principles__card-text">
          <p class="text-14-300 text-deep-grey max-w-[96%]">
            Перфекционизм и внимание к мельчайшим деталям - синонимы барельефов нашей студии. Каждый проект находится под личным контролем Леонида Кима и доводится до совершенства. А после - у вас есть техническая гарантия 1 год, за время которого объект пройдет испытание всеми сезонами.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
`
