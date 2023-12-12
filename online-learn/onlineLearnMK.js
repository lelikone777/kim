export const onlineLearnMK = document.createElement('section')
onlineLearnMK.classList.add('online-learn__mk', 'section')

onlineLearnMK.innerHTML = `


  <div class='flex flex-col xl:flex-row max-w-screen-2xl m-auto mb-5 xl:mb-[60px]'>
    <div class='principles__wrapper flex flex-col gap-y-5 pl-0 pr-0  w-full m-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl'>
    
      <div class='principles__title text-26-300 text-left mt-5 xl:mt-0'>
        <div class='m-auto px-5 md:px-0'>
          <h2 class='uppercase'>Мастер классы</h2>
        </div>
      </div>
      
    </div>  
    
    
    <div class='study-studio__tabs flex flex-col items-center w-full m-auto border-b border-primary max-w-screen-2xl pl-5 pr-5  md:pl-10 md:pr-10 xl:min-w-[684px] 2xl:min-w-[1101px] xl:px-0 xl:mr-20 2xl:mr-[120px] mt-5 xl:mt-0'>
      <div class='w-full'>
        <div class='tabs-buttons flex w-full min-h-[40px] md:min-h-[48px]'>
          <button
            class='tabs-button flex-1 tabs-button-active px-3 xl:px-0 py-2'>Для начинающих</button>
          <button
            class='tabs-button flex-1 px-3 xl:px-0 py-2 hover:bg-lighter-grey'>Для продвинутых</button>
        </div>
      </div>
      
    </div>   
  
  </div>
  
  
   <div class='wrapper container-padding grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-[42px] xl:gap-x-[42px] xl:gap-y-20 2xl:gap-x-[48px] 2xl:gap-y-[120px]'>
    <!--    1-->
    <div class='study-studio__list-item flex flex-col gap-y-4 col-span-1'>
      <div class='slide flex flex-col gap-y-5 2xl:gap-y-8'>
        <a href='#' class='slide-image w-full h-[100vw] md:h-[52vw] xl:h-[35.14vw] 2xl:h-[720px] relative overflow-hidden'>
          <img src='/img/images/study-studio/list-2xl-1.jpg' alt='studio 1' class='absolute-center'/>
        </a>
        <div class='slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
        
        <div class='slide-title flex items-center justify-center w-fit' >
          <button class='flex items-center gap-x-2 hover:hover-text'>
            <span class='text-button-primary text-primary hover:text-primary-dark uppercase font-bold'>
              <span class='hover:hover-text'>Мастер-класс "Крыло"</span>
            </span>
            <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
            </svg>
          </button>
        </div>
        
        <div class='slide-data grid grid-cols-2 gap-x-4 gap-y-3'>
        
          <div class='slide-size flex flex-col col-span-1'>
            <p class='text-light-grey text-10-400'>Длительность:</p>
            <span class='text-14-300'>3 урока по 2 часа</span>
          </div>
          
          <div class='slide-color flex flex-col col-span-1 place-self-start'>
            <p class='text-light-grey text-10-400'>
              Размер барельефа:
            </p>
            <span class='text-14-300'>56 см.</span>
          </div>
          
          <div class='badge col-span-1 place-self-end w-min'></div>
          
        </div>
        
        <div class='slide-price text-16-400 !font-bold'>
          <div><span>31 280</span>руб.</div>
        </div>
      </div>
      </div>
      <button class='button flex gap-x-2 justify-center items-center min-h-[48px] px-6 py-[12px] 2xl:py-[18px] border border-primary hover:border-primary-dark text-button-primary uppercase text-primary hover:text-primary-dark !font-bold hover:hover-text hover:hover-border'>
        <span>Добавить в корзину</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
        <path d="M16.3331 19.1269C16.3331 19.8973 16.9385 20.4998 17.6585 20.4998C18.3784 20.4998 18.9839 19.8973 18.9839 19.1269C18.9839 18.3564 18.3784 17.7539 17.6585 17.7539C16.9385 17.7539 16.3331 18.3564 16.3331 19.1269Z" stroke="#78848F"/>
        <path d="M8.17489 19.1269C8.17489 19.8973 8.78034 20.4998 9.50029 20.4998C10.2202 20.4998 10.8257 19.8973 10.8257 19.1269C10.8257 18.3564 10.2202 17.7539 9.50029 17.7539C8.78034 17.7539 8.17489 18.3564 8.17489 19.1269Z" stroke="#78848F"/>
        <path d="M21.8333 14.6808H6.27778L5.88095 3.73615H7.38889H9.83333H14.7222H24.5L23.1667 9.20845L22.5 11.9446M4.5 1H0.5" stroke="#78848F"/>
        </svg>
        </button>
    </div>
    <!--    2-->
    <div class='study-studio__list-item flex flex-col gap-y-4 col-span-1'>
        <div class='slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <a href='#' class='slide-image w-full h-[100vw] md:h-[52vw] xl:h-[35.14vw] 2xl:h-[720px] relative overflow-hidden'>
            <img src='/img/images/study-studio/list-2xl-3.jpg' alt='studio 1' class='absolute-center'/>
          </a>
          <div class='slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
          
            <div class='slide-title flex items-center justify-center w-fit' >
              <button class='flex items-center gap-x-2 hover:hover-text'>
                <span class='text-button-primary text-primary hover:text-primary-dark uppercase font-bold'>
                  <span class='hover:hover-text'>Мастер-класс "Фламинго"</span>
                </span>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
                
               <div class='slide-data grid grid-cols-2 gap-x-4 gap-y-3'>
            
              <div class='slide-size flex flex-col col-span-1'>
                <p class='text-light-grey text-10-400'>Длительность:</p>
                <span class='text-14-300'>3 урока по 2 часа</span>
              </div>
              
              <div class='slide-color flex flex-col col-span-1 place-self-start'>
                <p class='text-light-grey text-10-400'>
                  Размер барельефа:
                </p>
                <span class='text-14-300'>56 см.</span>
              </div>
              
              <div class='badge col-span-1 place-self-end w-min'></div>
              
            </div>
            <div class='slide-price text-16-400 !font-bold'>
              <div><span>31 280</span>руб.</div>
            </div>
          </div>
        </div>
        <button class='button flex gap-x-2 justify-center items-center min-h-[48px] px-6 py-[12px] 2xl:py-[18px] border border-primary hover:border-primary-dark text-button-primary font-bold uppercase text-primary hover:text-primary-dark !font-bold hover:hover-text hover:hover-border'>
          <span class='hover:hover-text'>Добавить в корзину</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
            <path d="M16.3331 19.1269C16.3331 19.8973 16.9385 20.4998 17.6585 20.4998C18.3784 20.4998 18.9839 19.8973 18.9839 19.1269C18.9839 18.3564 18.3784 17.7539 17.6585 17.7539C16.9385 17.7539 16.3331 18.3564 16.3331 19.1269Z" stroke="#78848F"/>
            <path d="M8.17489 19.1269C8.17489 19.8973 8.78034 20.4998 9.50029 20.4998C10.2202 20.4998 10.8257 19.8973 10.8257 19.1269C10.8257 18.3564 10.2202 17.7539 9.50029 17.7539C8.78034 17.7539 8.17489 18.3564 8.17489 19.1269Z" stroke="#78848F"/>
            <path d="M21.8333 14.6808H6.27778L5.88095 3.73615H7.38889H9.83333H14.7222H24.5L23.1667 9.20845L22.5 11.9446M4.5 1H0.5" stroke="#78848F"/>
          </svg>
        </button>
      </div>
    <!--    3-->
    <div class='study-studio__list-item flex flex-col gap-y-4 col-span-1'>
        <div class='slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <a href='#' class='slide-image w-full h-[100vw] md:h-[52vw] xl:h-[35.14vw] 2xl:h-[720px] relative overflow-hidden'>
            <img src='/img/images/study-studio/list-2xl-2.jpg' alt='studio 1' class='absolute-center'/>
          </a>
          <div class='slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
          
            <div class='slide-title flex items-center justify-center w-fit' >
              <button class='flex items-center gap-x-2 hover:hover-text hover:hover-border'>
                <span class='text-button-primary text-primary hover:text-primary-dark uppercase font-bold'>
                  <span class='hover:hover-text'>Мастер-класс "Орхидея"</span>
                </span>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            
            <div class='slide-data grid grid-cols-2 gap-x-4 gap-y-3'>
        
          <div class='slide-size flex flex-col col-span-1'>
            <p class='text-light-grey text-10-400'>Длительность:</p>
            <span class='text-14-300'>3 урока по 2 часа</span>
          </div>
          
          <div class='slide-color flex flex-col col-span-1 place-self-start'>
            <p class='text-light-grey text-10-400'>
              Размер барельефа:
            </p>
            <span class='text-14-300'>56 см.</span>
          </div>
          
          <div class='badge col-span-1 place-self-end w-min'></div>
          
        </div>
            <div class='slide-price text-16-400 !font-bold'>
              <div><span>31 280</span>руб.</div>
            </div>
          </div>
        </div>
        <button class='button flex gap-x-2 justify-center items-center min-h-[48px] px-6 py-[12px] 2xl:py-[18px] border border-primary hover:border-primary-dark text-button-primary font-bold uppercase text-primary hover:text-primary-dark !font-bold hover:hover-border hover:hover-text'>
          <span class='hover:hover-text'>Добавить в корзину</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
            <path d="M16.3331 19.1269C16.3331 19.8973 16.9385 20.4998 17.6585 20.4998C18.3784 20.4998 18.9839 19.8973 18.9839 19.1269C18.9839 18.3564 18.3784 17.7539 17.6585 17.7539C16.9385 17.7539 16.3331 18.3564 16.3331 19.1269Z" stroke="#78848F"/>
            <path d="M8.17489 19.1269C8.17489 19.8973 8.78034 20.4998 9.50029 20.4998C10.2202 20.4998 10.8257 19.8973 10.8257 19.1269C10.8257 18.3564 10.2202 17.7539 9.50029 17.7539C8.78034 17.7539 8.17489 18.3564 8.17489 19.1269Z" stroke="#78848F"/>
            <path d="M21.8333 14.6808H6.27778L5.88095 3.73615H7.38889H9.83333H14.7222H24.5L23.1667 9.20845L22.5 11.9446M4.5 1H0.5" stroke="#78848F"/>
          </svg>
        </button>
      </div>
    <!--    4-->
    <div class='study-studio__list-item flex flex-col gap-y-4 col-span-1'>
        <div class='slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <a href='#' class='slide-image w-full h-[100vw] md:h-[52vw] xl:h-[35.14vw] 2xl:h-[720px] relative overflow-hidden'>
            <img src='/img/images/study-studio/list-2xl-4.jpg' alt='studio 1' class='absolute-center'/>
          </a>
          <div class='slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
          
            <div class='slide-title flex items-center justify-center w-fit' >
              <button class='flex items-center gap-x-2'>
                <span class='text-button-primary text-primary hover:text-primary-dark uppercase font-bold hover:hover-text'>
                  <span class='hover:hover-text'>Мастер-класс "Носорог"</span>
                </span>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            
           <div class='slide-data grid grid-cols-2 gap-x-4 gap-y-3'>
        
          <div class='slide-size flex flex-col col-span-1'>
            <p class='text-light-grey text-10-400'>Длительность:</p>
            <span class='text-14-300'>3 урока по 2 часа</span>
          </div>
          
          <div class='slide-color flex flex-col col-span-1 place-self-start'>
            <p class='text-light-grey text-10-400'>
              Размер барельефа:
            </p>
            <span class='text-14-300'>56 см.</span>
          </div>
          
          <div class='badge col-span-1 place-self-end w-min'></div>
          
        </div>
            <div class='slide-price text-16-400 !font-bold'>
              <div><span>31 280</span>руб.</div>
            </div>
          </div>
        </div>
        <button class='button flex gap-x-2 justify-center items-center min-h-[48px] px-6 py-[12px] 2xl:py-[18px] border border-primary hover:border-primary-dark text-button-primary font-bold uppercase text-primary hover:text-primary-dark !font-bold hover:hover-text hover:hover-border'>
          <span>Добавить в корзину</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
            <path d="M16.3331 19.1269C16.3331 19.8973 16.9385 20.4998 17.6585 20.4998C18.3784 20.4998 18.9839 19.8973 18.9839 19.1269C18.9839 18.3564 18.3784 17.7539 17.6585 17.7539C16.9385 17.7539 16.3331 18.3564 16.3331 19.1269Z" stroke="#78848F"/>
            <path d="M8.17489 19.1269C8.17489 19.8973 8.78034 20.4998 9.50029 20.4998C10.2202 20.4998 10.8257 19.8973 10.8257 19.1269C10.8257 18.3564 10.2202 17.7539 9.50029 17.7539C8.78034 17.7539 8.17489 18.3564 8.17489 19.1269Z" stroke="#78848F"/>
            <path d="M21.8333 14.6808H6.27778L5.88095 3.73615H7.38889H9.83333H14.7222H24.5L23.1667 9.20845L22.5 11.9446M4.5 1H0.5" stroke="#78848F"/>
          </svg>
        </button>
      </div>
    <!--    5-->
    <div class='study-studio__list-item flex flex-col gap-y-4 col-span-1'>
        <div class='slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <a href='#' class='slide-image w-full h-[100vw] md:h-[52vw] xl:h-[35.14vw] 2xl:h-[720px] relative overflow-hidden'>
            <img src='/img/images/study-studio/list-2xl-5.jpg' alt='studio 1' class='absolute-center'/>
          </a>
          <div class='slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
          
            <div class='slide-title flex items-center justify-center w-fit' >
              <button class='flex items-center gap-x-2 hover:hover-text'>
                <span class='text-button-primary text-primary hover:text-primary-dark uppercase font-bold'>
                  <span class='hover:hover-text'>Мастер-класс "Вертолетики"</span>
                </span>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            
           <div class='slide-data grid grid-cols-2 gap-x-4 gap-y-3'>
        
          <div class='slide-size flex flex-col col-span-1'>
            <p class='text-light-grey text-10-400'>Длительность:</p>
            <span class='text-14-300'>3 урока по 2 часа</span>
          </div>
          
          <div class='slide-color flex flex-col col-span-1 place-self-start'>
            <p class='text-light-grey text-10-400'>
              Размер барельефа:
            </p>
            <span class='text-14-300'>56 см.</span>
          </div>
          
          <div class='badge col-span-1 place-self-end w-min'></div>
          
        </div>
            <div class='slide-price text-16-400 !font-bold'>
              <div><span>31 280</span>руб.</div>
            </div>
          </div>
        </div>
        <button class='button flex gap-x-2 justify-center items-center min-h-[48px] px-6 py-[12px] 2xl:py-[18px] border border-primary hover:border-primary-dark text-button-primary font-bold uppercase text-primary hover:text-primary-dark !font-bold hover:hover-text hover:hover-border'>
          <span>Добавить в корзину</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
            <path d="M16.3331 19.1269C16.3331 19.8973 16.9385 20.4998 17.6585 20.4998C18.3784 20.4998 18.9839 19.8973 18.9839 19.1269C18.9839 18.3564 18.3784 17.7539 17.6585 17.7539C16.9385 17.7539 16.3331 18.3564 16.3331 19.1269Z" stroke="#78848F"/>
            <path d="M8.17489 19.1269C8.17489 19.8973 8.78034 20.4998 9.50029 20.4998C10.2202 20.4998 10.8257 19.8973 10.8257 19.1269C10.8257 18.3564 10.2202 17.7539 9.50029 17.7539C8.78034 17.7539 8.17489 18.3564 8.17489 19.1269Z" stroke="#78848F"/>
            <path d="M21.8333 14.6808H6.27778L5.88095 3.73615H7.38889H9.83333H14.7222H24.5L23.1667 9.20845L22.5 11.9446M4.5 1H0.5" stroke="#78848F"/>
          </svg>
        </button>
      </div>
      
    <!--    6-->
    <div class='study-studio__list-item md:flex flex-col gap-y-4 col-span-1 hidden'>
        <div class='slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <a href='#' class='slide-image w-full h-[100vw] md:h-[52vw] xl:h-[35.14vw] 2xl:h-[720px] relative overflow-hidden'>
            <img src='/img/images/study-studio/list-2xl-1.jpg' alt='studio 1' class='absolute-center'/>
          </a>
          <div class='slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
          
            <div class='slide-title flex items-center justify-center w-fit' >
              <button class='flex items-center gap-x-2 hover:hover-text'>
                <span class='text-button-primary text-primary hover:text-primary-dark uppercase font-bold hover:hover-text'>
                  <span class='hover:hover-text'>Мастер-класс "Крыло"</span>
                </span>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            
           <div class='slide-data grid grid-cols-2 gap-x-4 gap-y-3'>
        
          <div class='slide-size flex flex-col col-span-1'>
            <p class='text-light-grey text-10-400'>Длительность:</p>
            <span class='text-14-300'>3 урока по 2 часа</span>
          </div>
          
          <div class='slide-color flex flex-col col-span-1 place-self-start'>
            <p class='text-light-grey text-10-400'>
              Размер барельефа:
            </p>
            <span class='text-14-300'>56 см.</span>
          </div>
          
          <div class='badge col-span-1 place-self-end w-min'></div>
          
        </div>
            <div class='slide-price text-16-400 !font-bold'>
              <div><span>31 280</span>руб.</div>
            </div>
          </div>
        </div>
        <button class='button flex gap-x-2 justify-center items-center min-h-[48px] px-6 py-[12px] 2xl:py-[18px] border border-primary hover:border-primary-dark text-button-primary font-bold uppercase text-primary hover:text-primary-dark !font-bold hover:hover-text hover:hover-border'>
          <span>Добавить в корзину</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
            <path d="M16.3331 19.1269C16.3331 19.8973 16.9385 20.4998 17.6585 20.4998C18.3784 20.4998 18.9839 19.8973 18.9839 19.1269C18.9839 18.3564 18.3784 17.7539 17.6585 17.7539C16.9385 17.7539 16.3331 18.3564 16.3331 19.1269Z" stroke="#78848F"/>
            <path d="M8.17489 19.1269C8.17489 19.8973 8.78034 20.4998 9.50029 20.4998C10.2202 20.4998 10.8257 19.8973 10.8257 19.1269C10.8257 18.3564 10.2202 17.7539 9.50029 17.7539C8.78034 17.7539 8.17489 18.3564 8.17489 19.1269Z" stroke="#78848F"/>
            <path d="M21.8333 14.6808H6.27778L5.88095 3.73615H7.38889H9.83333H14.7222H24.5L23.1667 9.20845L22.5 11.9446M4.5 1H0.5" stroke="#78848F"/>
          </svg>
        </button>
      </div>
    <!--    7-->
    <div class='study-studio__list-item xl:flex flex-col gap-y-4 col-span-1 hidden'>
        <div class='slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <a href='#' class='slide-image w-full h-[100vw] md:h-[52vw] xl:h-[35.14vw] 2xl:h-[720px] relative overflow-hidden'>
            <img src='/img/images/study-studio/list-2xl-3.jpg' alt='studio 1' class='absolute-center'/>
          </a>
          <div class='slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
          
            <div class='slide-title flex items-center justify-center w-fit' >
              <button class='flex items-center gap-x-2 hover:hover-text'>
                <span class='text-button-primary text-primary hover:text-primary-dark uppercase font-bold'>
                  <span class='hover:hover-text'>Мастер-класс "Фламинго"</span>
                </span>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            
            <div class='slide-data grid grid-cols-2 gap-x-4 gap-y-3'>
        
          <div class='slide-size flex flex-col col-span-1'>
            <p class='text-light-grey text-10-400'>Длительность:</p>
            <span class='text-14-300'>3 урока по 2 часа</span>
          </div>
          
          <div class='slide-color flex flex-col col-span-1 place-self-start'>
            <p class='text-light-grey text-10-400'>
              Размер барельефа:
            </p>
            <span class='text-14-300'>56 см.</span>
          </div>
          
          <div class='badge col-span-1 place-self-end w-min'></div>
          
        </div>
            <div class='slide-price text-16-400 !font-bold'>
              <div><span>31 280</span>руб.</div>
            </div>
          </div>
        </div>
        <button class='button flex gap-x-2 justify-center items-center min-h-[48px] px-6 py-[12px] 2xl:py-[18px] border border-primary hover:border-primary-dark text-button-primary font-bold uppercase text-primary hover:text-primary-dark !font-bold hover:hover-text hover:hover-border'>
          <span>Добавить в корзину</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
            <path d="M16.3331 19.1269C16.3331 19.8973 16.9385 20.4998 17.6585 20.4998C18.3784 20.4998 18.9839 19.8973 18.9839 19.1269C18.9839 18.3564 18.3784 17.7539 17.6585 17.7539C16.9385 17.7539 16.3331 18.3564 16.3331 19.1269Z" stroke="#78848F"/>
            <path d="M8.17489 19.1269C8.17489 19.8973 8.78034 20.4998 9.50029 20.4998C10.2202 20.4998 10.8257 19.8973 10.8257 19.1269C10.8257 18.3564 10.2202 17.7539 9.50029 17.7539C8.78034 17.7539 8.17489 18.3564 8.17489 19.1269Z" stroke="#78848F"/>
            <path d="M21.8333 14.6808H6.27778L5.88095 3.73615H7.38889H9.83333H14.7222H24.5L23.1667 9.20845L22.5 11.9446M4.5 1H0.5" stroke="#78848F"/>
          </svg>
        </button>
      </div>
    <!--    8-->
    <div class='study-studio__list-item xl:flex flex-col gap-y-4 col-span-1 hidden'>
        <div class='slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <a href='#' class='slide-image w-full h-[100vw] md:h-[52vw] xl:h-[35.14vw] 2xl:h-[720px] relative overflow-hidden'>
            <img src='/img/images/study-studio/list-2xl-2.jpg' alt='studio 1' class='absolute-center'/>
          </a>
          <div class='slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
          
            <div class='slide-title flex items-center justify-center w-fit' >
              <button class='flex items-center gap-x-2 hover:hover-text'>
                <span class='text-button-primary text-primary hover:text-primary-dark uppercase font-bold'>
                  <span class='hover:hover-text'>Мастер-класс "Орхидея"</span>
                </span>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            
            <div class='slide-data grid grid-cols-2 gap-x-4 gap-y-3'>
        
          <div class='slide-size flex flex-col col-span-1'>
            <p class='text-light-grey text-10-400'>Длительность:</p>
            <span class='text-14-300'>3 урока по 2 часа</span>
          </div>
          
          <div class='slide-color flex flex-col col-span-1 place-self-start'>
            <p class='text-light-grey text-10-400'>
              Размер барельефа:
            </p>
            <span class='text-14-300'>56 см.</span>
          </div>
          
          <div class='badge col-span-1 place-self-end w-min'></div>
          
        </div>
            <div class='slide-price text-16-400 !font-bold'>
              <div><span>31 280</span>руб.</div>
            </div>
          </div>
        </div>
        <button class='button flex gap-x-2 justify-center items-center min-h-[48px] px-6 py-[12px] 2xl:py-[18px] border border-primary hover:border-primary-dark text-button-primary font-bold uppercase text-primary hover:text-primary-dark !font-bold hover:hover-text hover:hover-border'>
          <span>Добавить в корзину</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
            <path d="M16.3331 19.1269C16.3331 19.8973 16.9385 20.4998 17.6585 20.4998C18.3784 20.4998 18.9839 19.8973 18.9839 19.1269C18.9839 18.3564 18.3784 17.7539 17.6585 17.7539C16.9385 17.7539 16.3331 18.3564 16.3331 19.1269Z" stroke="#78848F"/>
            <path d="M8.17489 19.1269C8.17489 19.8973 8.78034 20.4998 9.50029 20.4998C10.2202 20.4998 10.8257 19.8973 10.8257 19.1269C10.8257 18.3564 10.2202 17.7539 9.50029 17.7539C8.78034 17.7539 8.17489 18.3564 8.17489 19.1269Z" stroke="#78848F"/>
            <path d="M21.8333 14.6808H6.27778L5.88095 3.73615H7.38889H9.83333H14.7222H24.5L23.1667 9.20845L22.5 11.9446M4.5 1H0.5" stroke="#78848F"/>
          </svg>
        </button>
      </div>
    <!--    9-->
    <div class='study-studio__list-item xl:flex flex-col gap-y-4 col-span-1 hidden'>
        <div class='slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <a href='#' class='slide-image w-full h-[100vw] md:h-[52vw] xl:h-[35.14vw] 2xl:h-[720px] relative overflow-hidden'>
            <img src='/img/images/study-studio/list-2xl-4.jpg' alt='studio 1' class='absolute-center'/>
          </a>
          <div class='slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
          
            <div class='slide-title flex items-center justify-center w-fit' >
              <button class='flex items-center gap-x-2 hover:hover-text'>
                <span class='text-button-primary text-primary hover:text-primary-dark uppercase font-bold'>
                  <span class='hover:hover-text'>Мастер-класс "Носорог"</span>
                </span>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            
           <div class='slide-data grid grid-cols-2 gap-x-4 gap-y-3'>
        
          <div class='slide-size flex flex-col col-span-1'>
            <p class='text-light-grey text-10-400'>Длительность:</p>
            <span class='text-14-300'>3 урока по 2 часа</span>
          </div>
          
          <div class='slide-color flex flex-col col-span-1 place-self-start'>
            <p class='text-light-grey text-10-400'>
              Размер барельефа:
            </p>
            <span class='text-14-300'>56 см.</span>
          </div>
          
          <div class='badge col-span-1 place-self-end w-min'></div>
          
        </div>
            <div class='slide-price text-16-400 !font-bold'>
              <div><span>31 280</span>руб.</div>
            </div>
          </div>
        </div>
        <button class='button flex gap-x-2 justify-center items-center min-h-[48px] px-6 py-[12px] 2xl:py-[18px] border border-primary hover:border-primary-dark text-button-primary uppercase text-primary hover:text-primary-dark !font-bold hover:hover-text hover:hover-border'>
          <span>Добавить в корзину</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
            <path d="M16.3331 19.1269C16.3331 19.8973 16.9385 20.4998 17.6585 20.4998C18.3784 20.4998 18.9839 19.8973 18.9839 19.1269C18.9839 18.3564 18.3784 17.7539 17.6585 17.7539C16.9385 17.7539 16.3331 18.3564 16.3331 19.1269Z" stroke="#78848F"/>
            <path d="M8.17489 19.1269C8.17489 19.8973 8.78034 20.4998 9.50029 20.4998C10.2202 20.4998 10.8257 19.8973 10.8257 19.1269C10.8257 18.3564 10.2202 17.7539 9.50029 17.7539C8.78034 17.7539 8.17489 18.3564 8.17489 19.1269Z" stroke="#78848F"/>
            <path d="M21.8333 14.6808H6.27778L5.88095 3.73615H7.38889H9.83333H14.7222H24.5L23.1667 9.20845L22.5 11.9446M4.5 1H0.5" stroke="#78848F"/>
          </svg>
        </button>
      </div>

  </div>

  
`
