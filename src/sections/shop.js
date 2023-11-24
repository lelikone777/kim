export const shop = document.createElement('section')
shop.classList.add('shop', 'section')

shop.innerHTML = `

<div class='shop__wrapper relative flex flex-col gap-y-5 xl:gap-y-10 max-w-screen-2xl m-auto'>

  <div class='shop__title flex flex-col gap-y-3 px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-[714px] 2xl:max-w-[1150px] items-start text-left'>
    <p class='inline-block text-[26px] 2xl:text-[40px] leading-[140%] tracking-[0.5px] 2xl:tracking-[0.8px] uppercase'>
      <span>Магазин</span>
        <span
          class='relative ml-2 min-w-[122px] 2xl:min-w-[160px] inline-block bg-accent py-[2px] 2xl:py-[4px] px-2.5 text-light text-[10px] 2xl:text-[14px] leading-[140%] 2xl:leading-[160%] tracking-[0.3px] 2xl:tracking-[0.42px] normal-case before:absolute before:content-[&quot;&quot;] before:w-0 before:h-0 before:border-t-[22px] before:border-r-0 before:border-b-0 before:border-l-[5px] before:border-l-transparent before:border-solid before:border-accent before:top-0 before:left-[-4px] after:absolute after:content-[&quot;&quot;] after:w-0 after:h-0 after:border-b-[22px] after:border-r-0 after:border-t-0 after:border-l-[5px] after:border-l-transparent after:border-solid after:border-accent after:bottom-0 after:left-[-4px]'>
          Готовые барельефы <br> на продажу
      </span>
    </p>
  </div>

  <div class='shop__box flex flex-col gap-y-5 pl-5 md:pl-10 xl:pl-20 2xl:pl-[120px] 2xl:pr-0 max-w-screen-2xl'>
    <div class='shop__slider'>
      <div class='shop__slider-wrapper flex flex-col gap-y-5 overflow-hidden'>
        <div class='shop__slider-slides flex gap-x-5 md:gap-x-10'>
          <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='shop__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/shop/shop-image-2xl-1.jpg' alt='project 1' class='' />
            </div>
            <div class='shop__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div class='shop__slide-title flex items-center justify-center w-fit'>
                <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px] uppercase font-bold'>
                  <span>L’AQUARIUM</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
              <div class='shop__slide-data flex justify-start items-center gap-x-4'>
                <div class='shop__slide-size flex flex-col'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Диаметр:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>56 см.</span>
                </div>
                <div class='shop__slide-color'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Цвет:
                  </p>
                  <span
                    class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Белый</span>
                </div>
                 <div class='shop__slide-delivery'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Доставка:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Бесплатно</span>
                </div>
              </div>
              <div class='shop__slide-price text-[16px] leading-[150%] tracking-[0.5px] font-bold'>
                <span>59 900 руб.</span>
              </div>
            </div>
          </div>

          <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='shop__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/shop/shop-image-2xl-2.jpg' alt='project 1' class=''/>
            </div>
            <div class='shop__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div class='shop__slide-title flex items-center justify-center w-fit'>
                <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px] uppercase font-bold'>
                  <span>Будда Шакьямуни</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
              <div class='shop__slide-data flex justify-start items-center gap-x-4'>
                <div class='shop__slide-size flex flex-col'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Диаметр:
                  </p>
                  <span
                    class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>56 см.</span>
                </div>
                <div class='shop__slide-color'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Цвет:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Белый</span>
                </div>
                 <div class='shop__slide-delivery'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Доставка:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Бесплатно</span>
                </div>
              </div>
              <div class='shop__slide-price text-[16px] leading-[150%] tracking-[0.5px] font-bold'>
                <span>59 900 руб.</span>
              </div>
            </div>
          </div>

          <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='shop__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/shop/shop-image-2xl-3.jpg' alt='project 1' class=''/>
            </div>
            <div class='shop__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div
                class='shop__slide-title flex items-center justify-center w-fit'>
                <h5
                  class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px] uppercase font-bold'>
                  <span>Каллы триптих</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
              <div class='shop__slide-data flex justify-start items-center gap-x-4'>
                <div class='shop__slide-size flex flex-col'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Диаметр:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>56 см.</span>
                </div>
                <div class='shop__slide-color'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Цвет:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Белый</span>
                </div>
                 <div class='shop__slide-delivery'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Доставка:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Бесплатно</span>
                </div>
              </div>
              <div class='shop__slide-price text-[16px] leading-[150%] tracking-[0.5px] font-bold'>
                <span>59 900 руб.</span>
              </div>
            </div>
          </div>

          <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='shop__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden' >
              <img src='/img/images/shop/shop-image-2xl-1.jpg' alt='project 1' />
            </div>
            <div class='shop__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div class='shop__slide-title flex items-center justify-center w-fit' >
                <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px] uppercase font-bold'>
                  <span>L’AQUARIUM</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                  </svg>
                </button>
              </div>
              <div class='shop__slide-data flex justify-start items-center gap-x-4'>
                <div class='shop__slide-size flex flex-col'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Диаметр:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>56 см.</span>
                </div>
                <div class='shop__slide-color'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Цвет:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Белый</span>
                </div>
                 <div class='shop__slide-delivery'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Доставка:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Бесплатно</span>
                </div>
              </div>
              <div class='shop__slide-price text-[16px] leading-[150%] tracking-[0.5px] font-bold'>
                <span>59 900 руб.</span>
              </div>
            </div>
          </div>

          <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='shop__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/shop/shop-image-2xl-2.jpg' alt='project 1' class=''/>
            </div>
            <div class='shop__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
              <div class='shop__slide-title flex items-center justify-center w-fit'>
                <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px] uppercase font-bold'>
                  <span>Будда Шакьямуни</span>
                </h5>
                <button class='flex justify-between items-center ml-2'>
                  <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=' >
                    <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                  </svg>
                </button>
              </div>
              <div class='shop__slide-data flex justify-start items-center gap-x-4'>
                <div class='shop__slide-size flex flex-col'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Диаметр:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>56 см.</span>
                </div>
                <div class='shop__slide-color'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Цвет:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Белый</span>
                </div>
                 <div class='shop__slide-delivery'>
                  <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                    Доставка:
                  </p>
                  <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Бесплатно</span>
                </div>
              </div>
              <div class='shop__slide-price text-[16px] leading-[150%] tracking-[0.5px] font-bold'>
                <span>59 900 руб.</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>

  <div class='shop__slider-bottom flex flex-col lg:flex-row gap-y-5 lg:justify-between lg:items-center lg:order-2 mx-5 md:mx-10 xl:mx-20 2xl:mx-[120px] max-w-screen-2xl'>
    <div class='shop__slide-buttons flex justify-center gap-x-5 lg:gap-x-10 lg:order-2'>
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

    <button class='shop__button flex justify-center items-center px-6 py-[18px] 2xl:py-[18px] border border-primary lg:order-1'>
      <span class='mr-2 text-button-primary font-bold uppercase'>Перейти в магазин</span>
      <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
        <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
      </svg>
    </button>

    <div class='shop__nav-buttons gap-x-2 hidden lg:flex lg:order-3'>
      <button class='shop__nav-button flex justify-center items-center px-[13px] py-[19px] 2xl:px-[21px] 2xl:py-[27px] border border-primary'>
        <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class='rotate-180 scale-y-[-1]'>
          <path class='stroke-primary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
        </svg>
      </button>
      <button
        class='shop__nav-button flex justify-center items-center px-[13px] py-[19px] 2xl:px-[21px] 2xl:py-[27px] border border-primary'>
        <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
          <path class='stroke-primary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
        </svg>
      </button>
    </div>
  </div>
  
</div>
  
`
