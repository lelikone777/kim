export const leonidLearn = document.createElement('section')
leonidLearn.classList.add('leonid__learn', 'section')

leonidLearn.innerHTML = `
  
  
  <div class='academy-formats__wrapper flex flex-col m-auto gap-y-5 2xl:gap-y-10 xl:gap-x-[42px] 2xl:gap-x-[48px] px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl'>
   
    <div class='section-title flex flex-col gap-y-2'>
      <h2 class='text-26-300 uppercase'>учитесь у одного из лучших скульпторов РОссии</h2>    
    </div>
    
    <div class='academy-formats__cards flex flex-col xl:flex-row gap-y-5 gap-x-[42px] 2xl:gap-x-12 [&>div]:bg-lighter-grey'>
    

      <div class='academy-formats__card flex flex-col xl:flex-1 xl:flex-row justify-between xl:gap-x-10'>
      
        <div class='img relative'>
          <img src='/img/images/academy/formats-2xl-3.jpg' alt='img3' class='xl:hidden'>
          <img src='/img/images/leonid/learn-2xl.jpg' alt='img3' class='hidden xl:block'>
           <span
            class='absolute bottom-0 left-[30px] flex bg-accent py-1 px-2.5 2xl:py-2 text-light text-14-400 before:absolute before:content-[&quot;&quot;] before:w-0 before:h-0 before:border-t-[22px] before:border-r-0 before:border-b-0 before:border-l-[5px] before:border-l-transparent before:border-solid before:border-accent before:top-0 before:left-[-4px] after:absolute after:content-[&quot;&quot;] after:w-0 after:h-0 after:border-b-[22px] after:border-r-0 after:border-t-0 after:border-l-[5px] after:border-l-transparent after:border-solid after:border-accent after:bottom-0 after:left-[-4px] xl:hidden'>Индивидульно
            </span>
        </div>
        
        <div class='info flex flex-col justify-center p-5 md:p-10 bg-lighter-grey h-full xl:py-10 2xl:pr-20 gap-y-4 md:gap-y-5  '>
          <h3 class='text-24-300'>Личное наставничество</h3>
          
          <p class='text-14-300 text-black'>
            Для тех, кто привык получать все внимание. Индивидуальное обучение под руководством Леонида Кима. Ускоренный прогресс и максимальный комфорт.
          </p>
          
          <button class='shop__button flex justify-start items-center pr-6'>
            <span class='mr-2 text-button-primary text-primary !font-bold uppercase'>подробнее</span>
            <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
              <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
            </svg>
          </button>
          
        </div>
        
      </div>
      
    </div>
    
    
    
   </div> 
`
