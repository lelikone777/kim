export const academyLearn = document.createElement('section')
academyLearn.classList.add('academy-learn', 'section')

academyLearn.innerHTML = `
  
<div class='wrapper px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl m-auto '>

  <div class='principles__title text-26-300 text-left xl:pb-10'>
    <div class='m-auto md:px-0'>
      <h2 class='uppercase'>FAQ</h2>
    </div>
  </div> 
</div>
  
<div class='shop__box m-auto flex flex-col gap-y-5 pl-5 md:pl-10 xl:pl-20 2xl:pl-[120px] 2xl:pr-0 max-w-screen-2xl my-5 xl:my-10'>
  <div class='shop__slider'>
    <div class='shop__slider-wrapper flex flex-col gap-y-5 overflow-hidden'>
      <div class='shop__slider-slides flex gap-x-4 md:gap-x-[42px]'>
      
        <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <div class='shop__slide-image w-[300px] h-[300px] md:w-[334px] md:h-[334px] xl:w-[374px] xl:h-[374px] 2xl:w-[528px] 2xl:h-[528px] overflow-hidden'>
            <img src='/img/images/academy/kim-slider.jpg' alt='project 1' class='' />
          </div>
          <div class='shop__slide-info flex flex-col'>
            <div class='shop__slide-title flex items-center justify-center w-fit'>
              <h4 class='text-24-300'>Леонид Ким</h4>
            </div>
            <div class='shop__slide-data flex justify-start items-center gap-x-4'>
              <p class='text-14-300 text-light-grey'>Основатель студии современного барельефа, художник, архитектор.</p>
            </div>
          </div>
        </div>

        <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <div class='shop__slide-image w-[300px] h-[300px] md:w-[334px] md:h-[334px] xl:w-[374px] xl:h-[374px] 2xl:w-[528px] 2xl:h-[528px] overflow-hidden'>
            <img src='/img/images/academy/kim-slider.jpg' alt='project 1' class='' />
          </div>
          <div class='shop__slide-info flex flex-col'>
            <div class='shop__slide-title flex items-center justify-center w-fit'>
              <h4 class='text-24-300'>Леонид Ким</h4>
            </div>
            <div class='shop__slide-data flex justify-start items-center gap-x-4'>
              <p class='text-14-300 text-light-grey'>Основатель студии современного барельефа, художник, архитектор.</p>
            </div>
          </div>
        </div>

        <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <div class='shop__slide-image w-[300px] h-[300px] md:w-[334px] md:h-[334px] xl:w-[374px] xl:h-[374px] 2xl:w-[528px] 2xl:h-[528px] overflow-hidden'>
            <img src='/img/images/academy/kim-slider.jpg' alt='project 1' class='' />
          </div>
          <div class='shop__slide-info flex flex-col'>
            <div class='shop__slide-title flex items-center justify-center w-fit'>
              <h4 class='text-24-300'>Леонид Ким</h4>
            </div>
            <div class='shop__slide-data flex justify-start items-center gap-x-4'>
              <p class='text-14-300 text-light-grey'>Основатель студии современного барельефа, художник, архитектор.</p>
            </div>
          </div>
        </div>

        <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <div class='shop__slide-image w-[300px] h-[300px] md:w-[334px] md:h-[334px] xl:w-[374px] xl:h-[374px] 2xl:w-[528px] 2xl:h-[528px] overflow-hidden'>
            <img src='/img/images/academy/kim-slider.jpg' alt='project 1' class='' />
          </div>
          <div class='shop__slide-info flex flex-col'>
            <div class='shop__slide-title flex items-center justify-center w-fit'>
              <h4 class='text-24-300'>Леонид Ким</h4>
            </div>
            <div class='shop__slide-data flex justify-start items-center gap-x-4'>
              <p class='text-14-300 text-light-grey'>Основатель студии современного барельефа, художник, архитектор.</p>
            </div>
          </div>
        </div>

        <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <div class='shop__slide-image w-[300px] h-[300px] md:w-[334px] md:h-[334px] xl:w-[374px] xl:h-[374px] 2xl:w-[528px] 2xl:h-[528px] overflow-hidden'>
            <img src='/img/images/academy/kim-slider.jpg' alt='project 1' class='' />
          </div>
          <div class='shop__slide-info flex flex-col'>
            <div class='shop__slide-title flex items-center justify-center w-fit'>
              <h4 class='text-24-300'>Леонид Ким</h4>
            </div>
            <div class='shop__slide-data flex justify-start items-center gap-x-4'>
              <p class='text-14-300 text-light-grey'>Основатель студии современного барельефа, художник, архитектор.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>

<div class='shop__slider-bottom flex flex-col lg:flex-row gap-y-5 lg:justify-between lg:items-center m-auto lg:order-2 px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl'>
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
  
`
