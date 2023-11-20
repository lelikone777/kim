export const academy = document.createElement('section')
academy.classList.add('academy', 'section')

academy.innerHTML = `

<div class='academy__wrapper relative max-w-screen-2xl m-auto'>


  <div class='academy__box flex flex-col md:flex-row md:flex-wrap gap-y-5 md:gap-y-5 md:gap-x-10 md:items-center md:mx-10 xl:mx-20 xl:relative'>
  
    <div class='academy__frame hidden xl:block xl:absolute border border-semi-grey top-[10%] bottom-[10%] right-[10%] left-[10%] z-[-1]'></div>
  
    <div class='projects__title flex flex-col text-left max-w-[714px] md:max-w-none px-5 md:px-0 md:w-full xl:flex-1 xl:bg-light xl:py-[20px] 2xl:py-[36px]' >
      <p class='inline-block text-[26px] 2xl:text-[40px] leading-[140%] tracking-[0.5px] 2xl:tracking-[0.8px] uppercase md:max-w-[70%] xl:max-w-none xl:w-full'>
        Ищите новое <span class='text-light-grey'>хобби</span> или хотите освоить <span class='text-light-grey'>творческую профессию?</span>
      </p>
    </div>    
    
    <div class='academy__image h-[80vw] md:w-[42vw] md:h-[324px] lg:h-[480px] xl:w-[582px] xl:h-[35.2vw] 2xl:max-w-[772px] 2xl:max-h-[640px]  overflow-hidden relative md:flex-1 xl:flex-[2.14]'>
      <img src='/img/images/academy/academy-2xl.jpg' alt='academy image' class='absolute md:relative left-0 md:left-auto right-0 md:right-auto md:w-[121%] md:max-w-none xl:w-full'>
    </div>
    
    <div class='academy__info flex flex-col gap-y-5 px-5 md:px-0 md:flex-1 text-[14px] leading-[160%] tracking-[0.42px] xl:text-[16px] xl:bg-light xl:py-[20px] 2xl:py-[36px]'>
      <p>
        Окунетесь в атмосферу творчества и сделайте арт-объект своими руками в Академии современного барельефа Леонида Кима
      </p>
      <button class='academy__button flex justify-center items-center px-6 2xl:px-10 py-[18px] 2xl:py-[21px] border border-primary lg:order-1 md:w-fit'>
        <span class='mr-2 text-[14px] 2xl:text-[16px] tracking-[2.1px] 2xl:tracking-[2.4px] font-bold uppercase'>
          в академию
        </span>
        <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
          <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
        </svg>
      </button>
    </div>

  </div>
  
</div>  

`
