export const mkStudioAdvantages = document.createElement('section')
mkStudioAdvantages.classList.add('mk-studio__advantages', 'section')

mkStudioAdvantages.innerHTML = `

<div class='principles__wrapper flex flex-col gap-y-5 pl-0 pr-0 pb-5 md:pb-10 xl:p-20 w-full m-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl'>
    <div class='principles__title text-26-300 text-left '>
      <div class='m-auto px-5 md:px-0'>
        <h2 class='uppercase'>кому подойдёт этот мастер класс</h2>
      </div>
    </div>
    
    <div class='principles__list flex flex-col lg:flex-row gap-y-5 lg:gap-y-10 lg:gap-x-[42px] xl:gap-x-[48px] pr-5 md:pr-0 lg:pr-0 lg:grid lg:grid-cols-3 lg:grid-flow-row-dense lg:gap-y-20'>
    
      <!--      1-->
      <div class='principles__card flex lg:flex-col flex-1 gap-x-5 md:gap-x-10 pr-3 lg:pr-0 relative lg:col-span-1'>
        <div class='principles__card-line absolute right-0 lg:left-0 lg:bottom-0 w-[1px] lg:w-auto lg:h-[1px] h-full bg-semi-grey'></div>
        <div class='principles__card-number absolute top-1 sm:top-[20px] lg:top-auto lg:bottom-0 lg:right-6 right-0 text-semi-grey'>
          <div class='relative text-secondary text-[32px] 2xl:text-[48px] leading-[140%] tracking-[1.6px] uppercase left-1/2 lg:left-auto lg:top-5 2xl:top-8'>
            <span class='bg-light py-1 px-3'>1</span>
          </div>
        </div>
    
        <div class='principles__card-image'>
          <div class='sm:hidden w-[80px] overflow-hidden'>
            <img src='/img/images/mk-studio/advantages-sm-1.jpg' alt='principles image' />
          </div>
          <div class='hidden sm:flex w-[197px] lg:w-full'>
            <img src='/img/images/mk-studio/advantages-2xl-1.jpg' alt='principles image' />
          </div>
        </div>
        <div class='principles__card-info flex flex-col justify-center gap-y-3 py-3 md:py-7 lg:pb-12'>
          <div class='principles__card-text'>
            <p class='text-14-300 text-deep-grey max-w-[96%]'>
              Свет. Обучение будет проходить под профессиональным светильником, который мы приобрели для создания большего количества теней.
            </p>
          </div>
        </div>
      </div>
    
      <!--      2-->
      <div class='principles__card flex lg:flex-col flex-1 gap-x-5 md:gap-x-10 pr-3 lg:pr-0 relative lg:col-span-1'>
        <div class='principles__card-line absolute right-0 lg:left-0 lg:bottom-0 w-[1px] lg:w-auto lg:h-[1px] h-full bg-semi-grey'></div>
    
        <div class='principles__card-number absolute top-1 sm:top-[20px] lg:top-auto lg:bottom-0 lg:right-6 right-0 text-semi-grey'>
          <div class='relative text-secondary text-[32px] 2xl:text-[48px] leading-[140%] tracking-[1.6px] uppercase left-1/2 lg:left-auto lg:top-5 2xl:top-8'>
            <span class='bg-light py-1 px-3'>2</span>
          </div>
        </div>
    
        <div class='principles__card-image'>
          <div class='sm:hidden w-[80px] overflow-hidden'>
            <img src='/img/images/mk-studio/advantages-sm-2.jpg' alt='principles image' />
          </div>
          <div class='hidden sm:flex w-[197px] lg:w-full'>
            <img src='/img/images/mk-studio/advantages-2xl-2.jpg' alt='principles image' />
          </div>
        </div>
        <div class='principles__card-info flex flex-col justify-center gap-y-3 py-3 md:py-7'>
          <div class='principles__card-text'>
            <p class='text-14-300 text-deep-grey max-w-[96%]'>
              Личный фартук. Каждому ученику на занятия будет предоставлен брендированный фартук.
            </p>
          </div>
        </div>
      </div>
    
      <!--      3-->
      <div class='principles__card flex lg:flex-col flex-1 gap-x-5 md:gap-x-10 pr-3 lg:pr-0 relative lg:col-span-1'>
        <div class='principles__card-line absolute right-0 lg:left-0 lg:bottom-0 w-[1px] lg:w-auto lg:h-[1px] h-full bg-semi-grey'></div>
        <div class='principles__card-number absolute top-1 sm:top-[20px] lg:top-auto lg:bottom-0 lg:right-6 right-0 text-semi-grey'>
          <div class='relative text-secondary text-[32px] 2xl:text-[48px] leading-[140%] tracking-[1.6px] uppercase left-1/2 lg:left-auto lg:top-5 2xl:top-8'>
            <span class='bg-light py-1 px-3'>3</span>
          </div>
        </div>
    
        <div class='principles__card-image'>
          <div class='sm:hidden w-[80px] overflow-hidden'>
            <img src='/img/images/mk-studio/advantages-sm-3.jpg' alt='principles image' />
          </div>
          <div class='hidden sm:flex w-[197px] lg:w-full'>
            <img src='/img/images/mk-studio/advantages-2xl-3.jpg' alt='principles image' />
          </div>
        </div>
        <div class='principles__card-info flex flex-col justify-center gap-y-3 py-3 md:py-7'>
          <div class='principles__card-text'>
            <p class='text-14-300 text-deep-grey max-w-[96%]'>
              Удобная мебель. Мы позаботились о вашем комфорте и оборудовали академию удобными стульями для работы над рельефом.
            </p>
          </div>
        </div>
      </div>
    
    
    
          <!--      4-->
      <div class='principles__card flex lg:flex-col flex-1 gap-x-5 md:gap-x-10 pr-3 lg:pr-0 relative lg:col-span-1'>
        <div class='principles__card-line absolute right-0 lg:left-0 lg:bottom-0 w-[1px] lg:w-auto lg:h-[1px] h-full bg-semi-grey'></div>
        <div class='principles__card-number absolute top-1 sm:top-[20px] lg:top-auto lg:bottom-0 lg:right-6 right-0 text-semi-grey'>
          <div class='relative text-secondary text-[32px] 2xl:text-[48px] leading-[140%] tracking-[1.6px] uppercase left-1/2 lg:left-auto lg:top-5 2xl:top-8'>
            <span class='bg-light py-1 px-3'>4</span>
          </div>
        </div>
    
        <div class='principles__card-image'>
          <div class='sm:hidden w-[80px] overflow-hidden'>
            <img src='/img/images/mk-studio/advantages-sm-4.jpg' alt='principles image' />
          </div>
          <div class='hidden sm:flex w-[197px] lg:w-full'>
            <img src='/img/images/mk-studio/advantages-2xl-4.jpg' alt='principles image' />
          </div>
        </div>
        <div class='principles__card-info flex flex-col justify-center gap-y-3 py-3 md:py-7'>
          <div class='principles__card-text'>
            <p class='text-14-300 text-deep-grey max-w-[96%]'>
              Перекус. Чай, кофе и пицца для всех учеников.
            </p>
          </div>
        </div>
      </div>
      
                <!--      5-->
      <div class='principles__card flex lg:flex-col flex-1 gap-x-5 md:gap-x-10 pr-3 lg:pr-0 relative lg:col-span-1'>
        <div class='principles__card-line absolute right-0 lg:left-0 lg:bottom-0 w-[1px] lg:w-auto lg:h-[1px] h-full bg-semi-grey'></div>
        <div class='principles__card-number absolute top-1 sm:top-[20px] lg:top-auto lg:bottom-0 lg:right-6 right-0 text-semi-grey'>
          <div class='relative text-secondary text-[32px] 2xl:text-[48px] leading-[140%] tracking-[1.6px] uppercase left-1/2 lg:left-auto lg:top-5 2xl:top-8'6
            <span class='bg-light py-1 px-3'>5</span>
          </div>
        </div>
    
        <div class='principles__card-image'>
          <div class='sm:hidden w-[80px] overflow-hidden'>
            <img src='/img/images/mk-studio/advantages-sm-5.jpg' alt='principles image' />
          </div>
          <div class='hidden sm:flex w-[197px] lg:w-full'>
            <img src='/img/images/mk-studio/advantages-2xl-5.jpg' alt='principles image' />
          </div>
        </div>
        <div class='principles__card-info flex flex-col justify-center gap-y-3 py-3 md:py-7'>
          <div class='principles__card-text'>
            <p class='text-14-300 text-deep-grey max-w-[96%]'>
              PDF учебник. Брошюра с информацией по созданию рельефа в формате PDF, чтобы полученные на классах знания всегда были с вами
            </p>
          </div>
        </div>
      </div>
      
                <!--      6-->
      <div class='principles__card flex lg:flex-col flex-1 gap-x-5 md:gap-x-10 pr-3 lg:pr-0 relative lg:col-span-1'>
        <div class='principles__card-line absolute right-0 lg:left-0 lg:bottom-0 w-[1px] lg:w-auto lg:h-[1px] h-full bg-semi-grey'></div>
        <div class='principles__card-number absolute top-1 sm:top-[20px] lg:top-auto lg:bottom-0 lg:right-6 right-0 text-semi-grey'>
          <div class='relative text-secondary text-[32px] 2xl:text-[48px] leading-[140%] tracking-[1.6px] uppercase left-1/2 lg:left-auto lg:top-5 2xl:top-8'>
            <span class='bg-light py-1 px-3'>6</span>
          </div>
        </div>
    
        <div class='principles__card-image'>
          <div class='sm:hidden w-[80px] overflow-hidden'>
            <img src='/img/images/mk-studio/advantages-sm-6.jpg' alt='principles image' />
          </div>
          <div class='hidden sm:flex w-[197px] lg:w-full'>
            <img src='/img/images/mk-studio/advantages-2xl-6.jpg' alt='principles image' />
          </div>
        </div>
        <div class='principles__card-info flex flex-col justify-center gap-y-3 py-3 md:py-7'>
          <div class='principles__card-text'>
            <p class='text-14-300 text-deep-grey max-w-[96%]'>
              Подарок. Каждый ученик будет получать от нас полезный подарок для дальнейшего развития навыка - мастихины.
            </p>
          </div>
        </div>
      </div>
      
      
  </div>
</div>

`
