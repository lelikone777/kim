export const academyReviews = document.createElement('section')
academyReviews.classList.add('academy-reviews', 'section')

academyReviews.innerHTML = `
  
  
  <div class='wrapper px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl m-auto '>
  
    <div class='principles__title text-26-300 text-left '>
      <div class='m-auto md:px-0'>
        <h2 class='uppercase'>ОТзывы наших учеников</h2>
      </div>
    </div> 
  </div>
  
  
  
  <div class='shop__box m-auto flex flex-col gap-y-5 2xl:pr-0 max-w-screen-2xl'>
    <div class='shop__slider'>
      <div class='shop__slider-wrapper flex flex-col gap-y-5 overflow-hidden'>
      
        <div class='shop__slider-slides py-5 md:pl-10 xl:pl-20 2xl:pl-[120px] pl-5 flex gap-x-4 md:gap-x-[42px]'>
        
          <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='shop__slide-image w-[300px] md:w-[511px] xl:w-[894px] 2xl:w-[1245px]'>
           
              <div class='content flex flex-col p-5  xl:p-20 bg-lighter-grey gap-y-4 relative'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none" class='absolute left-[-8px] top-[-8px] 2xl:left-[-16px] 2xl:top-[-16x] 2xl:w-[48px] 2xl:h-[42px] w-max'>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3184 27.4272L31.8934 27.4272L32 12.9518L22.4747 12.9518C22.5156 8.30052 23.773 6.76682 24.6773 6.15018C25.8515 5.34943 27.4687 5.2745 29.6926 5.2745L29.6926 0.000102795L29.5556 0.000108505C29.1024 0.000129446 27.6929 0.000192266 27.63 0.000102615L27.6173 0.000102614C26.5808 7.20055e-05 24.4003 8.87236e-06 21.8171 1.76162C18.8691 3.77194 17.3174 7.47169 17.3174 13.1861L17.3184 13.1861L17.3184 27.4272Z" fill="#033260"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.00106907 27.4272L14.3594 27.4272L14.3594 12.9518L5.15523 12.9518C5.19605 8.30042 6.4535 6.7667 7.35776 6.15006C8.532 5.3493 10.1492 5.27438 12.373 5.27438L12.373 -2.30618e-05L12.236 -1.73518e-05C11.7829 3.58945e-06 10.3734 6.45014e-05 10.3105 -2.32421e-05L10.2978 -2.32433e-05C9.26128 -5.38515e-05 7.08081 -0.000116985 4.49755 1.76149C1.54957 3.77182 -0.0021116 7.47156 -0.0021121 13.186L-0.00106973 13.186L-0.00106907 27.4272Z" fill="#033260"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none" class='absolute right-[-8px] bottom-[-8px] 2xl:w-[48px] 2xl:h-[42px] w-max'>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6816 0.573364L0.106597 0.573368L0 15.0488L9.52465 15.0488C9.48363 19.6993 8.22631 21.2328 7.32212 21.8494C6.14788 22.6501 4.5307 22.7251 2.30683 22.7251L2.30683 27.9995L2.44383 27.9995C2.897 27.9994 4.3065 27.9994 4.36936 27.9995H4.38212C5.4186 27.9995 7.59907 27.9996 10.1823 26.238C13.0896 24.2554 14.6389 20.6296 14.6811 15.0488H14.6816V14.9672C14.6819 14.9161 14.682 14.8649 14.682 14.8135H14.6816L14.6816 0.573364Z" fill="#033260"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M32.0011 0.572815L17.6406 0.572815V15.0482L26.8429 15.0482C26.8016 19.6973 25.5445 21.2304 24.6404 21.847C23.4662 22.6477 21.849 22.7226 19.6251 22.7226V27.997L19.7621 27.997C20.2153 27.997 21.6248 27.997 21.6877 27.997H21.7004C22.7369 27.9971 24.9174 27.9971 27.5006 26.2355C30.4076 24.2532 31.9569 20.628 31.9994 15.0482H32.0011L32.0011 0.572815Z" fill="#033260"/>
                </svg>
              
                <div class='top'>
                  <div class='profile flex gap-x-5 items-center'>
                    <div class='avatar w-[72px] h-[72px]'>
                      <img src='/img/images/project-page/avatar.jpg' alt='avatar'>
                    </div>
                    <div class='info flex flex-col'>
                      <span class='name text-24-300'>Анна</span>
  
                      <div class='flex flex-col md:flex-row md:gap-x-2'>
                        <span class='text-14-400 text-light-grey'>28 лет</span>
                        <span class='text-14-400 text-light-grey'>Архитектор</span>
                        <span class='city text-14-400 text-light-grey'>г. Москва</span>
                      </div>
                    </div>
                  </div>
                </div>   
                <div class='bottom'>
                  <p>
                    А также многие известные личности своевременно верифицированы! В рамках спецификации современных стандартов, элементы политического процесса и по сей день остаются уделом либералов, которые жаждут быть объективно рассмотрены соответствующими инстанциями!
                  </p>
                </div> 
              </div>
            </div>
            
            <div class='shop__slide-info flex flex-col'>
              <button class='shop__button flex justify-start items-center pr-6 2xl:py-[18px]'>
                <span class='mr-2 text-button-primary text-primary uppercase'>результат обучения</span>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                </svg>
              </button>
            </div>
            
          </div>
  
          <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='shop__slide-image w-[300px] md:w-[511px] xl:w-[894px] 2xl:w-[1245px]'>
           
              <div class='content flex flex-col p-5  xl:p-20 bg-lighter-grey gap-y-4 relative'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none" class='absolute left-[-8px] top-[-8px] 2xl:left-[-16px] 2xl:top-[-16x] 2xl:w-[48px] 2xl:h-[42px] w-max'>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3184 27.4272L31.8934 27.4272L32 12.9518L22.4747 12.9518C22.5156 8.30052 23.773 6.76682 24.6773 6.15018C25.8515 5.34943 27.4687 5.2745 29.6926 5.2745L29.6926 0.000102795L29.5556 0.000108505C29.1024 0.000129446 27.6929 0.000192266 27.63 0.000102615L27.6173 0.000102614C26.5808 7.20055e-05 24.4003 8.87236e-06 21.8171 1.76162C18.8691 3.77194 17.3174 7.47169 17.3174 13.1861L17.3184 13.1861L17.3184 27.4272Z" fill="#033260"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.00106907 27.4272L14.3594 27.4272L14.3594 12.9518L5.15523 12.9518C5.19605 8.30042 6.4535 6.7667 7.35776 6.15006C8.532 5.3493 10.1492 5.27438 12.373 5.27438L12.373 -2.30618e-05L12.236 -1.73518e-05C11.7829 3.58945e-06 10.3734 6.45014e-05 10.3105 -2.32421e-05L10.2978 -2.32433e-05C9.26128 -5.38515e-05 7.08081 -0.000116985 4.49755 1.76149C1.54957 3.77182 -0.0021116 7.47156 -0.0021121 13.186L-0.00106973 13.186L-0.00106907 27.4272Z" fill="#033260"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none" class='absolute right-[-8px] bottom-[-8px] 2xl:w-[48px] 2xl:h-[42px] w-max'>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6816 0.573364L0.106597 0.573368L0 15.0488L9.52465 15.0488C9.48363 19.6993 8.22631 21.2328 7.32212 21.8494C6.14788 22.6501 4.5307 22.7251 2.30683 22.7251L2.30683 27.9995L2.44383 27.9995C2.897 27.9994 4.3065 27.9994 4.36936 27.9995H4.38212C5.4186 27.9995 7.59907 27.9996 10.1823 26.238C13.0896 24.2554 14.6389 20.6296 14.6811 15.0488H14.6816V14.9672C14.6819 14.9161 14.682 14.8649 14.682 14.8135H14.6816L14.6816 0.573364Z" fill="#033260"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M32.0011 0.572815L17.6406 0.572815V15.0482L26.8429 15.0482C26.8016 19.6973 25.5445 21.2304 24.6404 21.847C23.4662 22.6477 21.849 22.7226 19.6251 22.7226V27.997L19.7621 27.997C20.2153 27.997 21.6248 27.997 21.6877 27.997H21.7004C22.7369 27.9971 24.9174 27.9971 27.5006 26.2355C30.4076 24.2532 31.9569 20.628 31.9994 15.0482H32.0011L32.0011 0.572815Z" fill="#033260"/>
                </svg>
              
                <div class='top'>
                  <div class='profile flex gap-x-5 items-center'>
                    <div class='avatar w-[72px] h-[72px]'>
                      <img src='/img/images/project-page/avatar.jpg' alt='avatar'>
                    </div>
                    <div class='info flex flex-col'>
                      <span class='name text-24-300'>Анна</span>
  
                      <div class='flex flex-col md:flex-row md:gap-x-2'>
                        <span class='text-14-400 text-light-grey'>28 лет</span>
                        <span class='text-14-400 text-light-grey'>Архитектор</span>
                        <span class='city text-14-400 text-light-grey'>г. Москва</span>
                      </div>
                    </div>
                  </div>
                </div>   
                <div class='bottom'>
                  <p>
                    А также многие известные личности своевременно верифицированы! В рамках спецификации современных стандартов, элементы политического процесса и по сей день остаются уделом либералов, которые жаждут быть объективно рассмотрены соответствующими инстанциями!
                  </p>
                </div> 
              </div>
            </div>
            
            <div class='shop__slide-info flex flex-col'>
              <button class='shop__button flex justify-start items-center pr-6 2xl:py-[18px]'>
                <span class='mr-2 text-button-primary text-primary uppercase'>результат обучения</span>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                </svg>
              </button>
            </div>
            
          </div>
  
          <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <div class='shop__slide-image w-[300px] md:w-[511px] xl:w-[894px] 2xl:w-[1245px]'>
           
              <div class='content flex flex-col p-5  xl:p-20 bg-lighter-grey gap-y-4 relative'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none" class='absolute left-[-8px] top-[-8px] 2xl:left-[-16px] 2xl:top-[-16x] 2xl:w-[48px] 2xl:h-[42px] w-max'>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3184 27.4272L31.8934 27.4272L32 12.9518L22.4747 12.9518C22.5156 8.30052 23.773 6.76682 24.6773 6.15018C25.8515 5.34943 27.4687 5.2745 29.6926 5.2745L29.6926 0.000102795L29.5556 0.000108505C29.1024 0.000129446 27.6929 0.000192266 27.63 0.000102615L27.6173 0.000102614C26.5808 7.20055e-05 24.4003 8.87236e-06 21.8171 1.76162C18.8691 3.77194 17.3174 7.47169 17.3174 13.1861L17.3184 13.1861L17.3184 27.4272Z" fill="#033260"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.00106907 27.4272L14.3594 27.4272L14.3594 12.9518L5.15523 12.9518C5.19605 8.30042 6.4535 6.7667 7.35776 6.15006C8.532 5.3493 10.1492 5.27438 12.373 5.27438L12.373 -2.30618e-05L12.236 -1.73518e-05C11.7829 3.58945e-06 10.3734 6.45014e-05 10.3105 -2.32421e-05L10.2978 -2.32433e-05C9.26128 -5.38515e-05 7.08081 -0.000116985 4.49755 1.76149C1.54957 3.77182 -0.0021116 7.47156 -0.0021121 13.186L-0.00106973 13.186L-0.00106907 27.4272Z" fill="#033260"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none" class='absolute right-[-8px] bottom-[-8px] 2xl:w-[48px] 2xl:h-[42px] w-max'>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6816 0.573364L0.106597 0.573368L0 15.0488L9.52465 15.0488C9.48363 19.6993 8.22631 21.2328 7.32212 21.8494C6.14788 22.6501 4.5307 22.7251 2.30683 22.7251L2.30683 27.9995L2.44383 27.9995C2.897 27.9994 4.3065 27.9994 4.36936 27.9995H4.38212C5.4186 27.9995 7.59907 27.9996 10.1823 26.238C13.0896 24.2554 14.6389 20.6296 14.6811 15.0488H14.6816V14.9672C14.6819 14.9161 14.682 14.8649 14.682 14.8135H14.6816L14.6816 0.573364Z" fill="#033260"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M32.0011 0.572815L17.6406 0.572815V15.0482L26.8429 15.0482C26.8016 19.6973 25.5445 21.2304 24.6404 21.847C23.4662 22.6477 21.849 22.7226 19.6251 22.7226V27.997L19.7621 27.997C20.2153 27.997 21.6248 27.997 21.6877 27.997H21.7004C22.7369 27.9971 24.9174 27.9971 27.5006 26.2355C30.4076 24.2532 31.9569 20.628 31.9994 15.0482H32.0011L32.0011 0.572815Z" fill="#033260"/>
                </svg>
              
                <div class='top'>
                  <div class='profile flex gap-x-5 items-center'>
                    <div class='avatar w-[72px] h-[72px]'>
                      <img src='/img/images/project-page/avatar.jpg' alt='avatar'>
                    </div>
                    <div class='info flex flex-col'>
                      <span class='name text-24-300'>Анна</span>
  
                      <div class='flex flex-col md:flex-row md:gap-x-2'>
                        <span class='text-14-400 text-light-grey'>28 лет</span>
                        <span class='text-14-400 text-light-grey'>Архитектор</span>
                        <span class='city text-14-400 text-light-grey'>г. Москва</span>
                      </div>
                    </div>
                  </div>
                </div>   
                <div class='bottom'>
                  <p>
                    А также многие известные личности своевременно верифицированы! В рамках спецификации современных стандартов, элементы политического процесса и по сей день остаются уделом либералов, которые жаждут быть объективно рассмотрены соответствующими инстанциями!
                  </p>
                </div> 
              </div>
            </div>
            
            <div class='shop__slide-info flex flex-col'>
              <button class='shop__button flex justify-start items-center pr-6 2xl:py-[18px]'>
                <span class='mr-2 text-button-primary text-primary uppercase'>результат обучения</span>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                </svg>
              </button>
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
