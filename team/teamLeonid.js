export const teamLeonid = document.createElement('section')
teamLeonid.classList.add('team__leonid')

teamLeonid.innerHTML = `
  
  <div class='wrapper relative grid grid-cols-1 grid-flow-row-dense md:grid-cols-2 my-5 ml-auto mr-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl gap-y-[14px] md:gap-y-5 md:gap-x-10 xl:gap-x-[146px] mt-10 md:mt-20 xl:mt-[106px] 2xl:mt-[160px]'>
 
    <div class='frame absolute hidden xl:block border border-semi-grey right-20 top-10 bottom-10 w-2/3 -z-10 xl:bottom-[103px] xl:top-[40px] 2xl:top-[72px] 2xl:bottom-[181px] 2xl:right-[120px]'></div>
    
    <div class='poster flex flex-col gap-y-[14px] col-span-1 order-1 md:row-start-1 md:row-end-2'>
      <div class='img '>
        <img src='/img/images/mk-studio/train-2xl.jpg' alt='train'>
      </div>
    </div>
    
    <div class='info col-span-1 order-3 md:col-start-2 md:row-start-1 xl:text-left xl:mr-auto md:place-self-center'>
      <h2 class='title'>
        <span class='text-24-300'>Леонид Ким</span>
      </h2>
      <p class='text-14-300 text-light-grey md:hidden'>Основатель студии</p>
      <p class='text-14-300 text-light-grey hidden md:block md:max-w-[400px] 2xl:mt-3'>Основатель студии современного барельефа, художник, архитектор.</p>

      <button class='projects__slide-title flex items-center justify-center w-fit mt-3 md:mt-5 2xl:mt-10'>
        <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px]'>
          <span class='uppercase'>Подробнее о леониде</span>
        </h5>
        <div class='flex justify-between items-center ml-2'>
          <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
            <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
          </svg>
        </div>
      </button>
      
    </div>
    
    
    
 </div> 
  
`
