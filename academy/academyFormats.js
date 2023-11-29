export const academyFormats = document.createElement('section')
academyFormats.classList.add('newHobby-formats', 'section')

academyFormats.innerHTML = `
  
  
  <div class='academy-formats__wrapper flex flex-col m-auto gap-y-5 2xl:gap-y-10 xl:gap-x-[42px] 2xl:gap-x-[48px] px-5 md:px10 xl:px-20 2xl:px-[120px] max-w-screen-2xl'>
   
    <div class='section-title flex flex-col gap-y-2'>
      <h2 class='text-26-300 uppercase'>Мы работаем в 3 форматах обучения </h2>    
    </div>
    
    <div class='academy-formats__cards flex flex-col xl:flex-row gap-y-5 gap-x-[42px] 2xl:gap-x-12 [&>div]:bg-lighter-grey'>
    
      <div class='academy-formats__card xl:flex-1 flex flex-col justify-between'>
      
        <div class='img relative'>
          <img src='/img/images/academy/formats-2xl-1.jpg' alt='img1'>
           <span
            class='absolute bottom-0 left-[30px] flex bg-accent py-1 px-2.5 2xl:py-2 text-light text-14-400 before:absolute before:content-[&quot;&quot;] before:w-0 before:h-0 before:border-t-[22px] before:border-r-0 before:border-b-0 before:border-l-[5px] before:border-l-transparent before:border-solid before:border-accent before:top-0 before:left-[-4px] after:absolute after:content-[&quot;&quot;] after:w-0 after:h-0 after:border-b-[22px] after:border-r-0 after:border-t-0 after:border-l-[5px] after:border-l-transparent after:border-solid after:border-accent after:bottom-0 after:left-[-4px]'>Ежедневно
            </span>
        </div>
        
        <div class='info flex flex-col justify-between gap-y-4 p-4 md:p-10 bg-lighter-grey h-full'>
          <h3 class='text-24-300'>Обучение в студии в Москве</h3>
          
          <p class='text-14-300 text-black'>Групповое обучение в творческой атмосфере - самом сердце студии Леонида Кима. С наставником, экскурсией и фуршетом.</p>
          
          <div class='flex flex-col gap-y-3'> 
            <div class='flex justify-between items-center gap-y-3 gap-x-5 md:gap-x-10'>
              <div class='flex flex-col flex-1 text-left'>
                <span class='text-10-350-header text-light-grey'>Количество:</span>
                <span class='text-14-400'>12 курсов</span>
              </div>
              <div class='flex flex-col flex-1 text-left'>
                <span class='text-10-350-header text-light-grey'>Длительность:</span>
                <span class='text-14-400'>от 1 до 4 дней</span>
              </div>
            </div>
            
            <div class='flex justify-between items-center gap-y-3 gap-x-5 md:gap-x-10'>
              <div class='flex flex-col flex-1 text-left'>     
                <span class='text-10-350-header text-light-grey'>Количество:</span>
                <span class='text-14-400'>12 курсов</span>
              </div>
                <div class='flex flex-col flex-1 text-left'>
                  <span class='text-10-350-header text-light-grey'>Длительность:</span>
                  <span class='text-14-400'>от 1 до 4 дней</span>
              </div>
            </div>
          </div>
          
          <button class='shop__button flex justify-start items-center pr-6 2xl:py-[18px]'>
            <span class='mr-2 text-button-primary text-primary uppercase'>подробнее</span>
            <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
              <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
            </svg>
          </button>
          
        </div>
      </div>
      <div class='academy-formats__card xl:flex-1 flex flex-col justify-between'>
      
        <div class='img relative'>
          <img src='/img/images/academy/formats-2xl-2.jpg' alt='img2'>
           <span
            class='absolute bottom-0 left-[30px] flex bg-accent py-1 px-2.5 2xl:py-2 text-light text-14-400 before:absolute before:content-[&quot;&quot;] before:w-0 before:h-0 before:border-t-[22px] before:border-r-0 before:border-b-0 before:border-l-[5px] before:border-l-transparent before:border-solid before:border-accent before:top-0 before:left-[-4px] after:absolute after:content-[&quot;&quot;] after:w-0 after:h-0 after:border-b-[22px] after:border-r-0 after:border-t-0 after:border-l-[5px] after:border-l-transparent after:border-solid after:border-accent after:bottom-0 after:left-[-4px]'>Онлайн
            </span>
        </div>
        
        <div class='info flex flex-col justify-between gap-y-4 p-4 md:p-10 bg-lighter-grey h-full'>
          <h3 class='text-24-300'>Видеокурсы</h3>
          
          <p class='text-14-300 text-black'>Обучение по видео-урокам, где вы повторите все этапы создания арт-объекта вместе с Леонидом Кимом.</p>
          
          <div class='flex flex-col gap-y-3'> 
            <div class='flex justify-between items-center gap-y-3 gap-x-5 md:gap-x-10'>
              <div class='flex flex-col flex-1 text-left'>
                <span class='text-10-350-header text-light-grey'>Количество:</span>
                <span class='text-14-400'>12 курсов</span>
              </div>
              <div class='flex flex-col flex-1 text-left'>
                <span class='text-10-350-header text-light-grey'>Состав:</span>
                <span class='text-14-400'>по 3 урока</span>
              </div>
            </div>
            
            <div class='flex justify-between items-center gap-y-3 gap-x-5 md:gap-x-10'>
              <div class='flex flex-col flex-1 text-left'>     
                <span class='text-10-350-header text-light-grey'>Количество:</span>
                <span class='text-14-400'>12 курсов</span>
              </div>
                <div class='flex flex-col flex-1 text-left'>
                  <span class='text-10-350-header text-light-grey'>Длительность:</span>
                  <span class='text-14-400'>от 1 до 4 дней</span>
              </div>
            </div>
          </div>
          
          <button class='shop__button flex justify-start items-center pr-6 2xl:py-[18px]'>
            <span class='mr-2 text-button-primary text-primary uppercase'>подробнее</span>
            <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
              <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
            </svg>
          </button>
          
        </div>
      </div>
      <div class='academy-formats__card xl:flex-1 flex flex-col justify-between'  >
      
        <div class='img relative'>
          <img src='/img/images/academy/formats-2xl-3.jpg' alt='img3'>
           <span
            class='absolute bottom-0 left-[30px] flex bg-accent py-1 px-2.5 2xl:py-2 text-light text-14-400 before:absolute before:content-[&quot;&quot;] before:w-0 before:h-0 before:border-t-[22px] before:border-r-0 before:border-b-0 before:border-l-[5px] before:border-l-transparent before:border-solid before:border-accent before:top-0 before:left-[-4px] after:absolute after:content-[&quot;&quot;] after:w-0 after:h-0 after:border-b-[22px] after:border-r-0 after:border-t-0 after:border-l-[5px] after:border-l-transparent after:border-solid after:border-accent after:bottom-0 after:left-[-4px]'>Индивидульно
            </span>
        </div>
        
        <div class='info flex flex-col justify-between gap-y-4 p-4 md:p-10 bg-lighter-grey h-full'>
          <h3 class='text-24-300'>Личное наставничество</h3>
          
          <p class='text-14-300 text-black'>Для тех, кто привык получать все внимание. Индивидуальное обучение под руководством Леонида Кима. Ускоренный прогресс и максимальный комфорт.</p>
          
          <div class='flex flex-col gap-y-3'> 
            <div class='flex justify-between items-center gap-y-3 gap-x-5 md:gap-x-10'>
              <div class='flex flex-col flex-1 text-left'>
                <span class='text-10-350-header text-light-grey'>Количество:</span>
                <span class='text-14-400'>12 курсов</span>
              </div>
              <div class='flex flex-col flex-1 text-left'>
                <span class='text-10-350-header text-light-grey'>Длительность:</span>
                <span class='text-14-400'>от 1 до 4 дней</span>
              </div>
            </div>
            
            <div class='flex justify-between items-center gap-y-3 gap-x-5 md:gap-x-10'>
              <div class='flex flex-col flex-1 text-left'>     
                <span class='text-10-350-header text-light-grey'>Количество:</span>
                <span class='text-14-400'>12 курсов</span>
              </div>
                <div class='flex flex-col flex-1 text-left'>
                  <span class='text-10-350-header text-light-grey'>Длительность:</span>
                  <span class='text-14-400'>от 1 до 4 дней</span>
              </div>
            </div>
          </div>
          
          <button class='shop__button flex justify-start items-center pr-6 2xl:py-[18px]'>
            <span class='mr-2 text-button-primary text-primary uppercase'>подробнее</span>
            <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
              <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
            </svg>
          </button>
          
        </div>
      </div>
      
    </div>
    
    
    
   </div> 
`
