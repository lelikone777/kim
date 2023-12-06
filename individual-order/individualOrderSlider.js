export const individualOrderSlider = document.createElement('section')
individualOrderSlider.classList.add('individual-order__slider', 'section')

individualOrderSlider.innerHTML = `
  
  <div class='projects__wrapper relative flex flex-col gap-y-5 xl:gap-y-10 mb-14 md:mb-20 xl:mb-[104px] 2xl:mb-[160px] max-w-screen-2xl m-auto'>
  <div class='projects__title flex flex-col gap-y-3 px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-[714px] 2xl:max-w-[1150px] items-start text-left w-full'>
    <h2 class='inline-block text-24-300 uppercase'>Работы, которые мы уже сделали</h2>
  </div>

  <div class='projects__box flex flex-col gap-y-5 pl-5 md:pl-10 xl:pl-20 2xl:pl-[120px] 2xl:pr-0 max-w-screen-2xl'>
    <div class='projects__slider'>
      <div
        class='projects__slider-wrapper flex flex-col gap-y-5 overflow-hidden'>
        <div class='projects__slider-slides flex gap-x-5 md:gap-x-10'>
        
          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div
              class='projects__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/projects-slider/slide-1-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div
              class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <button
                class='projects__slide-title flex items-center justify-center w-fit'>
                <h5
                  class='text-button-primary uppercase'>
                  <span>Мужское-женское-1</span>
                </h5>
                <div class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </div>
              </button>
              <div class='projects__slide-data flex justify-start items-center gap-x-4'>
                <div class='projects__slide-size flex flex-col'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Размеры:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>1000 х 800 мм</span>
                </div>
                <div class='projects__slide-price'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Цена:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>500 000 ₽</span>
                </div>
                <div class='projects__slide-badge flex items-center justify-center w-fit gap-x-2 bg-lighter-grey py-1 px-1.5 2xl:py-3 2xl:px-3 ml-auto'>
                  <span class='flex-1 text-[10px] 2xl:text-[14px] font-bold leading-[140%] tracking-[0.3px] text-right'>Есть <br class='2xl:hidden' />
                    отзыв</span >
                  <img src='/img/icons/quotes-cloud-logo.svg' alt='quotes cloud' class='w-[28px] h-[25px]'/>
                </div>
              </div>
            </div>
          </div>

          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='projects__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/projects-slider/slide-2-2xl.jpg' alt='project 1' class='' />
            </div>
            <div class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5' >
              <button class='projects__slide-title flex items-center justify-center w-fit'>
                <h5 class='text-button-primary uppercase'>
                  <span>Мужское-женское-1</span>
                </h5>
                <div class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </div>
              </button>
              <div
                class='projects__slide-data flex justify-start items-center gap-x-4'>
                <div class='projects__slide-size flex flex-col'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Размеры:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>1000 х 800 мм</span>
                </div>
                <div class='projects__slide-price'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Цена:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>500 000 ₽</span>
                </div>
                <div
                  class='projects__slide-badge flex items-center justify-center w-fit gap-x-2 bg-lighter-grey py-1 px-1.5 2xl:py-3 2xl:px-3 ml-auto'>
                  <span class='flex-1 text-[10px] 2xl:text-[14px] font-bold leading-[140%] tracking-[0.3px] text-right'>Есть <br class='2xl:hidden' />
                    отзыв
                  </span>
                  <img src='/img/icons/quotes-cloud-logo.svg' alt='quotes cloud' class='w-[28px] h-[25px]'/>
                </div>
              </div>
            </div>
          </div>

          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='projects__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
            <img src='/img/images/projects-slider/slide-3-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div
              class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <button
                class='projects__slide-title flex items-center justify-center w-fit' >
                <h5 class='text-button-primary uppercase'>
                  <span>Мужское-женское-1</span>
                </h5>
                <div class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </div>
              </button>
              <div class='projects__slide-data flex justify-start items-center gap-x-4'>
                <div class='projects__slide-size flex flex-col'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Размеры:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>1000 х 800 мм</span>
                </div>
                <div class='projects__slide-price'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Цена:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>500 000 ₽</span>
                </div>
                <div class='projects__slide-badge flex items-center justify-center w-fit gap-x-2 bg-lighter-grey py-1 px-1.5 2xl:py-3 2xl:px-3 ml-auto'>
                  <span class='flex-1 text-[10px] 2xl:text-[14px] font-bold leading-[140%] tracking-[0.3px] text-right'>Есть <br class='2xl:hidden'/>
                    отзыв
                  </span>
                  <img src='/img/icons/quotes-cloud-logo.svg' alt='quotes cloud' class='w-[28px] h-[25px]'/>
                </div>
              </div>
            </div>
          </div>

          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='projects__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/projects-slider/slide-1-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <button class='projects__slide-title flex items-center justify-center w-fit'>
                <h5 class='text-button-primary uppercase'>
                  <span>Мужское-женское-1</span>
                </h5>
                <div class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </div>
              </button>
              <div class='projects__slide-data flex justify-start items-center gap-x-4'>
                <div class='projects__slide-size flex flex-col'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Размеры:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>1000 х 800 мм</span>
                </div>
                <div class='projects__slide-price'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Цена:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>500 000 ₽</span>
                </div>
                <div class='projects__slide-badge flex items-center justify-center w-fit gap-x-2 bg-lighter-grey py-1 px-1.5 2xl:py-3 2xl:px-3 ml-auto'>
                  <span
                    class='flex-1 text-[10px] 2xl:text-[14px] font-bold leading-[140%] tracking-[0.3px] text-right'>Есть <br class='2xl:hidden' />
                    отзыв</span>
                  <img src='/img/icons/quotes-cloud-logo.svg' alt='quotes cloud' class='w-[28px] h-[25px]'/>
                </div>
              </div>
            </div>
          </div>

          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='projects__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/projects-slider/slide-2-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <button class='projects__slide-title flex items-center justify-center w-fit'>
                <h5 class='text-button-primary uppercase'>
                  <span>Мужское-женское-1</span>
                </h5>
                <div class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </div>
              </button>
              <div class='projects__slide-data flex justify-start items-center gap-x-4'>
                <div class='projects__slide-size flex flex-col'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Размеры:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>1000 х 800 мм</span>
                </div>
                <div class='projects__slide-price'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Цена:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>500 000 ₽</span >
                </div>
                <div class='projects__slide-badge flex items-center justify-center w-fit gap-x-2 bg-lighter-grey py-1 px-1.5 2xl:py-3 2xl:px-3 ml-auto'>
                  <span class='flex-1 text-[10px] 2xl:text-[14px] font-bold leading-[140%] tracking-[0.3px] text-right'>Есть <br class='2xl:hidden' />
                    отзыв</span>
                  <img src='/img/icons/quotes-cloud-logo.svg' alt='quotes cloud' class='w-[28px] h-[25px]'/>
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
      <span class='mr-2 text-button-primary !font-bold uppercase'>все работы</span>
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
