export const articleNewsGallery = document.createElement('section')
articleNewsGallery.classList.add('article-news__gallery', 'section')

articleNewsGallery.innerHTML = `

  <div class='wrapper max-w-screen-2xl m-auto'>
  
    <div class='title mb-5 px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl'>
      <h3 class='text-26-300 uppercase'>галерея фото</h3>
    </div>
    
  </div>
  
  
  <div class='slider 2xl:max-w-screen-2xl m-auto overflow-hidden'>
    <div class='wrapper relative xl:right-[230px] 2xl:right-[310px] flex [&>div]:w-screen xl:gap-x-[42px] 2xl:gap-x-[48px] [&>div]:shrink-0 [&>div]:xl:w-[270px] [&>div]:2xl:w-[384px]'>
    
      <div class='slide'>
        <img src='/img/images/article-news/gallery-1.jpg' alt='1'>
      </div>
      <div class='slide'>
        <img src='/img/images/article-news/gallery-2.jpg' alt='2'>
      </div>
      <div class='slide'>
        <img src='/img/images/article-news/gallery-3.jpg' alt='3'>
      </div>
      <div class='slide'>
        <img src='/img/images/article-news/gallery-4.jpg' alt='4'>
      </div>
      <div class='slide'>
        <img src='/img/images/article-news/gallery-5.jpg' alt='5'>
      </div>
      <div class='slide'>
        <img src='/img/images/article-news/gallery-2.jpg' alt='2'>
      </div>
      <div class='slide'>
        <img src='/img/images/article-news/gallery-3.jpg' alt='3'>
      </div>
      
    </div>
    
    <div class='slider__bottom flex flex-col xl:flex-row gap-y-5 xl:justify-between xl:items-center xl:order-2 mx-5 md:mx-10 xl:mx-20 2xl:mx-[120px] max-w-screen-2xl mt-5 xl:mt-10'>
      <div class='slider__slide-buttons flex justify-center gap-x-5 xl:gap-x-10 xl:order-2'>
        <button class='projects-slide-button flex-center w-3 h-3 2xl:w-4 2xl:h-4'>
          <span class='w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-secondary'></span>
        </button>
        <button class='slider__slide-button flex-center w-3 h-3 2xl:w-4 2xl:h-4 slider-button-outer-active'>
          <span class='w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-secondary slider-button-inner-active'></span>
        </button>
        <button class='slider__slide-button flex-center w-3 h-3 2xl:w-4 2xl:h-4'>
          <span class='w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-secondary'></span>
        </button>
        <button class='slider__slide-button flex-center w-3 h-3 2xl:w-4 2xl:h-4'>
          <span class='w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-secondary'></span>
        </button>
        <button class='slider__slide-button flex-center w-3 h-3 2xl:w-4 2xl:h-4'>
          <span class='w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-secondary'></span>
        </button>
      </div>

      <button class='slider__buttons xl:flex justify-center items-center px-6 py-[18px] 2xl:py-[18px] border border-primary lg:order-1 hidden'>
        <span class='mr-2 text-button-primary !font-bold uppercase'>все работы</span>
        <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
          <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
        </svg>
      </button>

      <div class='slider__nav-buttons gap-x-2 hidden xl:flex xl:order-3'>
        <button
          class='slider__nav-button flex justify-center items-center px-[13px] py-[19px] 2xl:px-[21px] 2xl:py-[27px] border border-primary'>
          <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class='rotate-180 scale-y-[-1]'>
            <path class='stroke-primary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
          </svg>
        </button>
        <button
          class='slider__nav-button flex justify-center items-center px-[13px] py-[19px] 2xl:px-[21px] 2xl:py-[27px] border border-primary'>
          <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
            <path class='stroke-primary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
          </svg>
        </button>
      </div>
      
    </div>
  </div>

`
