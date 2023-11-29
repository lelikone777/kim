export const mkStudioRecommend = document.createElement('section')
mkStudioRecommend.classList.add('mk-studio__recommend', 'section')

mkStudioRecommend.innerHTML = `
  
  <div class='projects__wrapper relative flex flex-col gap-y-5 xl:gap-y-10 mb-14 md:mb-20 xl:mb-[104px] 2xl:mb-[160px] max-w-screen-2xl m-auto'>
  <div class='projects__title flex flex-col gap-y-3 px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-[714px] 2xl:max-w-[1150px] items-start text-left w-full'>
    <h2 class='inline-block text-24-300 uppercase'>Рекомендуем обратить внимание на эти мастер-классы</h2>
  </div>

  <div class='projects__box flex flex-col gap-y-5 pl-5 md:pl-10 xl:pl-20 2xl:pl-[120px] 2xl:pr-0 max-w-screen-2xl'>
    <div class='projects__slider'>
      <div
        class='projects__slider-wrapper flex flex-col gap-y-5 overflow-hidden'>
        <div class='projects__slider-slides flex gap-x-5 md:gap-x-10'>
        
          <!--   1-->
          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='projects__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/mk-online/recommend-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
                <div
                  class='projects__slide-title flex items-center justify-center w-fit'>
                  <h5
                    class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                    <span>Мастер-класс "Крыло"</span>
                  </h5>
                  <button class='flex justify-between items-center ml-2'>
                    <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                      <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                    </svg>
                  </button>
                </div>
               <div class='slide-data grid grid-cols-2 gap-x-4 gap-y-3'>
            
              <div class='slide-size flex flex-col col-span-1'>
              <p class='text-light-grey text-10-400'>Ближайший старт:</p>
              <span class='text-14-300'>30 июля 2023</span>
              </div>
              
              <div class='slide-color flex flex-col col-span-1 place-self-end'>
                <p class='text-light-grey text-10-400'>
                  Длительность:
                </p>
                <span class='text-14-300'>2 дня по 6-7 часов</span>
              </div>
              
              <div class='slide-delivery col-span-1'>
              <p class='text-light-grey text-10-400'>Размер барельефа:</p>
              <span class='text-14-300'>56 см.</span>
              </div>
              
              <div class='badge col-span-1 place-self-end w-min'>
                <div class='slide-badge flex items-center justify-center w-fit gap-x-2 bg-lighter-grey py-1 px-[15px] 2xl:py-3 2xl:px-3'>
                  <span class='flex-1 text-10-350-header text-right'><nobr>Можно подарить</nobr> <nobr>как сертификат</nobr></span >
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none">
                    <path d="M17.5 22.5H0.5V0.5H28.5V22.5H25.5H24.5" stroke="#033260"/>
                    <path d="M17.5 20.5H2.5V2.5H26.5V20.5H24.5" stroke="#033260"/>
                    <path d="M6.5 6.5H18.5" stroke="#033260"/>
                    <path d="M6.5 9.5H22.5" stroke="#033260"/>
                    <path d="M6.5 12.5H12.5" stroke="#033260"/>
                    <circle cx="21" cy="15" r="2.5" stroke="#033260"/>
                    <path d="M19.5 17V23.5L21 22.5L22.5 23.5V17" stroke="#033260"/>
                  </svg>
                </div>
              </div>
              
            </div>
            <div class='slide-price text-16-400 !font-bold'>
              <div><span>31 280</span>руб.</div>
            </div>
            </div>
          </div>
          
          <!--   2-->
          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='projects__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/mk-online/recommend-2xl.jpg' alt='project 1' class='' />
            </div>
            <div class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5' >
              <div class='projects__slide-title flex items-center justify-center w-fit'>
                <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мастер-класс "Крыло"</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
                 <div class='slide-data grid grid-cols-2 gap-x-4 gap-y-3'>
            
              <div class='slide-size flex flex-col col-span-1'>
              <p class='text-light-grey text-10-400'>Ближайший старт:</p>
              <span class='text-14-300'>30 июля 2023</span>
              </div>
              
              <div class='slide-color flex flex-col col-span-1 place-self-end'>
                <p class='text-light-grey text-10-400'>
                  Длительность:
                </p>
                <span class='text-14-300'>2 дня по 6-7 часов</span>
              </div>
              
              <div class='slide-delivery col-span-1'>
              <p class='text-light-grey text-10-400'>Размер барельефа:</p>
              <span class='text-14-300'>56 см.</span>
              </div>
              
              <div class='badge col-span-1 place-self-end w-min'>
                <div class='slide-badge flex items-center justify-center w-fit gap-x-2 bg-lighter-grey py-1 px-[15px] 2xl:py-3 2xl:px-3'>
                  <span class='flex-1 text-10-350-header text-right'><nobr>Можно подарить</nobr> <nobr>как сертификат</nobr></span >
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none">
                    <path d="M17.5 22.5H0.5V0.5H28.5V22.5H25.5H24.5" stroke="#033260"/>
                    <path d="M17.5 20.5H2.5V2.5H26.5V20.5H24.5" stroke="#033260"/>
                    <path d="M6.5 6.5H18.5" stroke="#033260"/>
                    <path d="M6.5 9.5H22.5" stroke="#033260"/>
                    <path d="M6.5 12.5H12.5" stroke="#033260"/>
                    <circle cx="21" cy="15" r="2.5" stroke="#033260"/>
                    <path d="M19.5 17V23.5L21 22.5L22.5 23.5V17" stroke="#033260"/>
                  </svg>
                </div>
              </div>
              
            </div>
            </div>
          </div>
              
          <!--    3-->
          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='projects__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
            <img src='/img/images/mk-online/recommend-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div
              class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div
                class='projects__slide-title flex items-center justify-center w-fit' >
                <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мастер-класс "Крыло"</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
               <div class='slide-data grid grid-cols-2 gap-x-4 gap-y-3'>
            
              <div class='slide-size flex flex-col col-span-1'>
              <p class='text-light-grey text-10-400'>Ближайший старт:</p>
              <span class='text-14-300'>30 июля 2023</span>
              </div>
              
              <div class='slide-color flex flex-col col-span-1 place-self-end'>
                <p class='text-light-grey text-10-400'>
                  Длительность:
                </p>
                <span class='text-14-300'>2 дня по 6-7 часов</span>
              </div>
              
              <div class='slide-delivery col-span-1'>
              <p class='text-light-grey text-10-400'>Размер барельефа:</p>
              <span class='text-14-300'>56 см.</span>
              </div>
              
              <div class='badge col-span-1 place-self-end w-min'>
                <div class='slide-badge flex items-center justify-center w-fit gap-x-2 bg-lighter-grey py-1 px-[15px] 2xl:py-3 2xl:px-3'>
                  <span class='flex-1 text-10-350-header text-right'><nobr>Можно подарить</nobr> <nobr>как сертификат</nobr></span >
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none">
                    <path d="M17.5 22.5H0.5V0.5H28.5V22.5H25.5H24.5" stroke="#033260"/>
                    <path d="M17.5 20.5H2.5V2.5H26.5V20.5H24.5" stroke="#033260"/>
                    <path d="M6.5 6.5H18.5" stroke="#033260"/>
                    <path d="M6.5 9.5H22.5" stroke="#033260"/>
                    <path d="M6.5 12.5H12.5" stroke="#033260"/>
                    <circle cx="21" cy="15" r="2.5" stroke="#033260"/>
                    <path d="M19.5 17V23.5L21 22.5L22.5 23.5V17" stroke="#033260"/>
                  </svg>
                </div>
              </div>
              
            </div>
            </div>
          </div>

          <!--    4-->
          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='projects__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/mk-online/recommend-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div class='projects__slide-title flex items-center justify-center w-fit'>
                <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мастер-класс "Крыло"</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
                <div class='slide-data grid grid-cols-2 gap-x-4 gap-y-3'>
            
              <div class='slide-size flex flex-col col-span-1'>
              <p class='text-light-grey text-10-400'>Ближайший старт:</p>
              <span class='text-14-300'>30 июля 2023</span>
              </div>
              
              <div class='slide-color flex flex-col col-span-1 place-self-end'>
                <p class='text-light-grey text-10-400'>
                  Длительность:
                </p>
                <span class='text-14-300'>2 дня по 6-7 часов</span>
              </div>
              
              <div class='slide-delivery col-span-1'>
              <p class='text-light-grey text-10-400'>Размер барельефа:</p>
              <span class='text-14-300'>56 см.</span>
              </div>
              
              <div class='badge col-span-1 place-self-end w-min'>
                <div class='slide-badge flex items-center justify-center w-fit gap-x-2 bg-lighter-grey py-1 px-[15px] 2xl:py-3 2xl:px-3'>
                  <span class='flex-1 text-10-350-header text-right'><nobr>Можно подарить</nobr> <nobr>как сертификат</nobr></span >
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none">
                    <path d="M17.5 22.5H0.5V0.5H28.5V22.5H25.5H24.5" stroke="#033260"/>
                    <path d="M17.5 20.5H2.5V2.5H26.5V20.5H24.5" stroke="#033260"/>
                    <path d="M6.5 6.5H18.5" stroke="#033260"/>
                    <path d="M6.5 9.5H22.5" stroke="#033260"/>
                    <path d="M6.5 12.5H12.5" stroke="#033260"/>
                    <circle cx="21" cy="15" r="2.5" stroke="#033260"/>
                    <path d="M19.5 17V23.5L21 22.5L22.5 23.5V17" stroke="#033260"/>
                  </svg>
                </div>
              </div>
              
            </div>
            </div>
          </div>
    
          <!--    5-->
          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='projects__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/mk-online/recommend-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div class='projects__slide-title flex items-center justify-center w-fit'>
                <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мастер-класс "Крыло"</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
               <div class='slide-data grid grid-cols-2 gap-x-4 gap-y-3'>
            
              <div class='slide-size flex flex-col col-span-1'>
              <p class='text-light-grey text-10-400'>Ближайший старт:</p>
              <span class='text-14-300'>30 июля 2023</span>
              </div>
              
              <div class='slide-color flex flex-col col-span-1 place-self-end'>
                <p class='text-light-grey text-10-400'>
                  Длительность:
                </p>
                <span class='text-14-300'>2 дня по 6-7 часов</span>
              </div>
              
              <div class='slide-delivery col-span-1'>
              <p class='text-light-grey text-10-400'>Размер барельефа:</p>
              <span class='text-14-300'>56 см.</span>
              </div>
              
              <div class='badge col-span-1 place-self-end w-min'>
                <div class='slide-badge flex items-center justify-center w-fit gap-x-2 bg-lighter-grey py-1 px-[15px] 2xl:py-3 2xl:px-3'>
                  <span class='flex-1 text-10-350-header text-right'><nobr>Можно подарить</nobr> <nobr>как сертификат</nobr></span >
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none">
                    <path d="M17.5 22.5H0.5V0.5H28.5V22.5H25.5H24.5" stroke="#033260"/>
                    <path d="M17.5 20.5H2.5V2.5H26.5V20.5H24.5" stroke="#033260"/>
                    <path d="M6.5 6.5H18.5" stroke="#033260"/>
                    <path d="M6.5 9.5H22.5" stroke="#033260"/>
                    <path d="M6.5 12.5H12.5" stroke="#033260"/>
                    <circle cx="21" cy="15" r="2.5" stroke="#033260"/>
                    <path d="M19.5 17V23.5L21 22.5L22.5 23.5V17" stroke="#033260"/>
                  </svg>
                </div>
              </div>
              
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class='projects__slide-bottom flex flex-col lg:flex-row gap-y-5 lg:justify-between lg:items-center lg:order-2 mx-5 md:mx-10 xl:mx-20 2xl:mx-[120px] max-w-screen-2xl'>
    <div class='projects__slide-buttons flex justify-center gap-x-5 lg:gap-x-10 lg:order-2'>
      <button class='projects-slide-button flex-center w-3 h-3 2xl:w-4 2xl:h-4'>
        <span class='w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-secondary'></span>
      </button>
      <button class='projects-slide-button flex-center w-3 h-3 2xl:w-4 2xl:h-4 slider-button-outer-active'>
        <span class='w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-secondary slider-button-inner-active'></span>
      </button>
      <button class='projects-slide-button flex-center w-3 h-3 2xl:w-4 2xl:h-4'>
        <span class='w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-secondary'></span>
      </button>
      <button class='projects-slide-button flex-center w-3 h-3 2xl:w-4 2xl:h-4'>
        <span class='w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-secondary'></span>
      </button>
      <button class='projects-slide-button flex-center w-3 h-3 2xl:w-4 2xl:h-4'>
        <span class='w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-secondary'></span>
      </button>
    </div>

    <button class='projects__button flex justify-center items-center px-6 py-[18px] 2xl:py-[18px] border border-primary lg:order-1'>
      <span class='mr-2 text-[14px] 2xl:text-[16px] tracking-[2.1px] 2xl:tracking-[2.4px] font-bold uppercase'>смотреть все (17)</span>
      <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
        <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
      </svg>
    </button>

    <div class='projects__nav-buttons gap-x-2 hidden lg:flex lg:order-3'>
      <button
        class='projects__nav-button flex justify-center items-center px-[13px] py-[19px] 2xl:px-[21px] 2xl:py-[27px] border border-primary'>
        <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class='rotate-180 scale-y-[-1]'>
          <path class='stroke-primary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
        </svg>
      </button>
      <button
        class='projects__nav-button flex justify-center items-center px-[13px] py-[19px] 2xl:px-[21px] 2xl:py-[27px] border border-primary'>
        <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
          <path class='stroke-primary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
        </svg>
      </button>
    </div>
  </div>
</div>
  
  
`
