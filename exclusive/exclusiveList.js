export const exclusiveList = document.createElement('section')
exclusiveList.classList.add('exclusive-list')

exclusiveList.innerHTML = `

  <div class='exclusive-list__wrapper px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl m-auto'>
  
    <div class='exclusive-list__box'>
      <div class='exclusive-list__list gap-x-5 gap-y-10 md:gap-y-[60px] xl:gap-y-[62px] 2xl:gap-y-[82px]  xl:gap-x-[45px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
        
        
          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8 w-full col-span-1'>
            <div
              class='projects__slide-image w-full overflow-hidden'>
              <img src='/img/images/projects-slider/slide-1-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div
              class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div
                class='projects__slide-title flex items-center justify-center w-fit'>
                <h5
                  class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мужское-женское-1</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
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
          
          
          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8 w-full col-span-1'>
            <div
              class='projects__slide-image w-full overflow-hidden'>
              <img src='/img/images/projects-slider/slide-1-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div
              class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div
                class='projects__slide-title flex items-center justify-center w-fit'>
                <h5
                  class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мужское-женское-1</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
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
          
          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8 w-full col-span-1'>
            <div
              class='projects__slide-image w-full overflow-hidden'>
              <img src='/img/images/projects-slider/slide-1-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div
              class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div
                class='projects__slide-title flex items-center justify-center w-fit'>
                <h5
                  class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мужское-женское-1</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
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
          
          
          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8 w-full col-span-1'>
            <div
              class='projects__slide-image w-full overflow-hidden'>
              <img src='/img/images/projects-slider/slide-1-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div
              class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div
                class='projects__slide-title flex items-center justify-center w-fit'>
                <h5
                  class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мужское-женское-1</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
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
          
          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8 w-full col-span-1'>
            <div
              class='projects__slide-image w-full overflow-hidden'>
              <img src='/img/images/projects-slider/slide-1-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div
              class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div
                class='projects__slide-title flex items-center justify-center w-fit'>
                <h5
                  class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мужское-женское-1</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
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
          
          <div class='projects__slide md:flex flex-col gap-y-5 2xl:gap-y-8 w-full col-span-1 hidden'>
            <div
              class='projects__slide-image w-full overflow-hidden'>
              <img src='/img/images/projects-slider/slide-1-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div
              class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div
                class='projects__slide-title flex items-center justify-center w-fit'>
                <h5
                  class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мужское-женское-1</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
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
          
          
          <div class='projects__slide xl:flex flex-col gap-y-5 2xl:gap-y-8 w-full col-span-1 hidden'>
            <div
              class='projects__slide-image w-full overflow-hidden'>
              <img src='/img/images/projects-slider/slide-1-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div
              class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div
                class='projects__slide-title flex items-center justify-center w-fit'>
                <h5
                  class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мужское-женское-1</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
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
          
          
          <div class='projects__slide xl:flex flex-col gap-y-5 2xl:gap-y-8 w-full col-span-1 hidden'>
            <div
              class='projects__slide-image w-full overflow-hidden'>
              <img src='/img/images/projects-slider/slide-1-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div
              class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div
                class='projects__slide-title flex items-center justify-center w-fit'>
                <h5
                  class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мужское-женское-1</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
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
          
          
          <div class='projects__slide xl:flex flex-col gap-y-5 2xl:gap-y-8 w-full col-span-1 hidden'>
            <div
              class='projects__slide-image w-full overflow-hidden'>
              <img src='/img/images/projects-slider/slide-1-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div
              class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div
                class='projects__slide-title flex items-center justify-center w-fit'>
                <h5
                  class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мужское-женское-1</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
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
          
          
          <div class='projects__slide xl:flex flex-col gap-y-5 2xl:gap-y-8 w-full col-span-1 hidden'>
            <div
              class='projects__slide-image w-full overflow-hidden'>
              <img src='/img/images/projects-slider/slide-1-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div
              class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div
                class='projects__slide-title flex items-center justify-center w-fit'>
                <h5
                  class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мужское-женское-1</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
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
          
          
          <div class='projects__slide xl:flex flex-col gap-y-5 2xl:gap-y-8 w-full col-span-1 hidden'>
            <div
              class='projects__slide-image w-full overflow-hidden'>
              <img src='/img/images/projects-slider/slide-1-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div
              class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div
                class='projects__slide-title flex items-center justify-center w-fit'>
                <h5
                  class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мужское-женское-1</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
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
          
          
          <div class='projects__slide xl:flex flex-col gap-y-5 2xl:gap-y-8 w-full col-span-1 hidden'>
            <div
              class='projects__slide-image w-full overflow-hidden'>
              <img src='/img/images/projects-slider/slide-1-2xl.jpg' alt='project 1' class=''/>
            </div>
            <div
              class='projects__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div
                class='projects__slide-title flex items-center justify-center w-fit'>
                <h5
                  class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
                  <span>Мужское-женское-1</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
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
          
          
          
          
          
        
      </div>
      
      
      <div class='w-full flex justify-center'>
        <button class='contact__form-button w-full my-10 px-6 2xl:px-10 py-[15px] 2xl:py-[22px] text-light text-button-primary uppercase bg-primary xl:w-fit self-center 2xl:mt-[64px] mb-0'>
          показать ещё
        </button>
      </div>
    </div>
  </div>
  
  
`
