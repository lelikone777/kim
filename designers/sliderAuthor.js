export const sliderAuthor = document.createElement('section')
sliderAuthor.classList.add('sliderAuthor', 'section')

sliderAuthor.innerHTML = `
  
  <div class='projects__wrapper relative flex flex-col gap-y-5 xl:gap-y-10 mb-14 md:mb-20 xl:mb-[104px] 2xl:mb-[160px] max-w-screen-2xl m-auto'>
  <div class='projects__title flex flex-col gap-y-3 px-5 md:px-10 xl:px-20 2xl:px-[120px] items-start text-left w-full'>
    <h2 class='inline-block text-24-300 uppercase'>У нас крепкая дружба</h2>
  </div>

  <div class='projects__box flex flex-col gap-y-5 pl-5 md:pl-10 xl:pl-20 2xl:pl-[120px] 2xl:pr-0 max-w-screen-2xl'>
    <div class='projects__slider'>
      <div
        class='projects__slider-wrapper flex flex-col gap-y-5 overflow-hidden'>
        <div class='projects__slider-slides flex gap-x-5 md:gap-x-10'>
        
          <!--   1-->
          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='projects__slide-image w-[300px] h-[300px] xl:w-[374px] xl:h-[374px] overflow-hidden'>
              <img src='/img/images/author1.jpg' alt='project 1' class=''/>
            </div>
            <div class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div class=''>
                 <h3 class='text-24-300'>Имя фамилия</h3>
                 <p class='text-14-300 text-light-grey'>Небольшой текст о коллеге</p>
              </div>
             <p class='text-16-400'>Не следует, однако, забывать, что существующая теория играет определяющее значение для новых предложений.</p>
            </div>
          </div>
          
          <!--   2-->
                    <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='projects__slide-image w-[300px] h-[300px] xl:w-[374px] xl:h-[374px] overflow-hidden'>
              <img src='/img/images/author1.jpg' alt='project 1' class=''/>
            </div>
            <div class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div class=''>
                 <h3 class='text-24-300'>Имя фамилия</h3>
                 <p class='text-14-300 text-light-grey'>Небольшой текст о коллеге</p>
              </div>
             <p class='text-16-400'>Не следует, однако, забывать, что существующая теория играет определяющее значение для новых предложений.</p>
            </div>
          </div>
              
          <!--    3-->
                    <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='projects__slide-image w-[300px] h-[300px] xl:w-[374px] xl:h-[374px] overflow-hidden'>
              <img src='/img/images/author1.jpg' alt='project 1' class=''/>
            </div>
            <div class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div class=''>
                 <h3 class='text-24-300'>Имя фамилия</h3>
                 <p class='text-14-300 text-light-grey'>Небольшой текст о коллеге</p>
              </div>
             <p class='text-16-400'>Не следует, однако, забывать, что существующая теория играет определяющее значение для новых предложений.</p>
            </div>
          </div>

          <!--    4-->
                   <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='projects__slide-image w-[300px] h-[300px] xl:w-[374px] xl:h-[374px] overflow-hidden'>
              <img src='/img/images/author1.jpg' alt='project 1' class=''/>
            </div>
            <div class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div class=''>
                 <h3 class='text-24-300'>Имя фамилия</h3>
                 <p class='text-14-300 text-light-grey'>Небольшой текст о коллеге</p>
              </div>
             <p class='text-16-400'>Не следует, однако, забывать, что существующая теория играет определяющее значение для новых предложений.</p>
            </div>
          </div>
    
          <!--    5-->
                    <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='projects__slide-image w-[300px] h-[300px] xl:w-[374px] xl:h-[374px] overflow-hidden'>
              <img src='/img/images/author1.jpg' alt='project 1' class=''/>
            </div>
            <div class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div class=''>
                 <h3 class='text-24-300'>Имя фамилия</h3>
                 <p class='text-14-300 text-light-grey'>Небольшой текст о коллеге</p>
              </div>
             <p class='text-16-400'>Не следует, однако, забывать, что существующая теория играет определяющее значение для новых предложений.</p>
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
