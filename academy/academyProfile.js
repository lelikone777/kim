export const academyProfile = document.createElement('section')
academyProfile.classList.add('academy-profile')

academyProfile.innerHTML = `

<div class="academy-profile__wrapper flex flex-col gap-y-1 my-5 ml-auto mr-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl">
  <div class="academy-profile__pagination text-14-400 text-primary mb-1">
    <ul class="flex flex-wrap gap-x-3 gap-y-1">
      <li>
        <a href="#">
          <span>Главная</span>
        </a>
      </li>
      <li>
        <a href="#" class='text-light-grey'>
          <span>Академия</span>
        </a>
      </li>
     
    </ul>
  </div>

  <div class="academy-profile__title flex mb-3">
    <h2 class=" text-32-300 uppercase">Академия</h2>
  </div>
</div>


<div class='academy-profile__slider max-w-screen-2xl m-auto'>
  <div class='academy-profile__slider-wrapper flex flex-col gap-y-5 2xl:gap-y-10'>
    <div class='academy-profile__slider-image flex'> 

      <div class='academy-profile__slider-left relative flex-1 overflow-hidden'>
        <img src='/img/images/academy/academy-slider-left-2xl.jpg' alt='left' class='left'>
      </div>
      <div class='academy-profile__slider-left flex-1 hidden xl:block overflow-hidden'>
        <img src='/img/images/academy/academy-slider-right-2xl.jpg' alt='left' class='right'>
      </div>

    </div> 
    
    <div class='shop__slider-bottom flex justify-center xl:justify-between items-center w-full px-5 md:px-10 xl:px-20 2xl:px-[120px]'>
    
      <div class='shop__slide-buttons flex justify-center gap-x-5 lg:gap-x-10 lg:order-2 [&>button]:w-4 [&>button]:shrink-0'>
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
    
      <div class='shop__nav-buttons gap-x-2 hidden xl:flex xl:ml-20 lg:order-3'>
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
</div>

`
