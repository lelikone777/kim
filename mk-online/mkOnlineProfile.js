export const mkOnlineProfile = document.createElement('section')
mkOnlineProfile.classList.add('mk-online__profile')

mkOnlineProfile.innerHTML = `
   <div class='product-info__profile mb-20'>
    <div class='product-info__profile-box gap-y-10 gap-x-5 xl:gap-x-10 grid grid-flow-row-dense md:grid-cols-2 max-w-screen-2xl m-auto xl:auto-rows-min'>
    
      <div class='product-info__image w-full m-auto max-w-[375px] md:max-w-[662px] xl:max-w-[936px] md:col-span-1 col-span-1 md:row-span-2 2xl:row-start-1 2xl:row-end-4'>
        <div class='flex flex-col gap-y-5'>
          <div class='w-full'>
            <img
              src='/img/images/mk-online/profile-2xl.jpg'
              alt='contact image'
              class='relative xl:max-w-none 2xl:w-full 2xl:left-auto '
            />
          </div>
          
          <div class='shop__slider-bottom flex justify-center xl:justify-between items-center w-full '>
          
            <div class='shop__slide-buttons flex justify-center gap-x-5 lg:gap-x-10 lg:order-2 [&>button]:w-4 [&>button]:shrink-0 xl:ml-20'>
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
      
      <div class='product-info__data flex flex-col gap-y-10  w-full pl-5 pr-5 md:pr-10 md:ml-0 md:pt-5 col-span-1 xl:pr-20 xl:pl-[104px] xl:pt-10 2xl:pr-[120px] xl:mx-0 xl:place-self-center'>

        <div class='product-info__data-instruction'>
          <div class='mb-2 2xl:mb-3 '>
            <p class='text-14-300 flex max-h-[70px] text-ellipsis overflow-hidden'>На этом мастер-классе помимо работы над легкостью элементов, будет проделана работа с динамикой изображения. Если проводить аналогию с живописью, то подход к работе в этом мастер-классе напоминает «Алла Приму». Это техника, позволяющая выполнить картину за один сеанс. Крыло – это красивый элемент декора и один из самых популярных образов в нашем пинтересте. Образ окрыления, влюбленности и свободы вдохновит на нестандартные решения. В один заход мы создадим объемную работу, изобразим глубину пространства и легкость перехода рельефа.</p>
          </div>
          <button class='flex justify-start items-center text-primary gap-x-2'>
            <span class='text-12-400-header !font-bold text-primary uppercase'>читать всё описание</span>
            <span class='border-t border-r border-primary w-2 h-2 rotate-[135deg] relative bottom-[2px] '></span>
          </button>
        </div>
        
        <div class='flex flex-col gap-y-10'>
          <div class='product-info__data-table text-14-400 flex flex-col gap-y-2'>
          
            <div class='tr flex justify-between items-center gap-x-2 [&>span]:shrink-0'>
              <span class='text-light-grey'>Длительность:</span>
              <div class='line w-full border-t border-dotted'></div>
              <span class=''><nobr>3 урока по 2 часа</nobr></span>
            </div>
            
            <div class='tr flex justify-between items-center gap-x-2'>
              <span class='text-light-grey'>Сложность:</span>
              <div class='line w-full border-t border-dotted'></div>
              <span class=''><nobr>Для начинающих</nobr></span>
            </div>
            
            <div class='tr flex justify-between items-center gap-x-2'>
              <span class='text-light-grey'>Размер барельефа:</span>
              <div class='line w-full border-t border-dotted'></div>
              <span class=''><nobr>50 x 75 см</nobr></span>
            </div>
            
            <div class='tr flex justify-between items-center gap-x-2'>
              <span class='text-light-grey'>Цена:</span>
              <div class='line w-full border-t border-dotted'></div>
              <span class='font-bold'><nobr>6 900 руб.</nobr></span>
            </div>
          </div>
          
  <div class=''>          
    <button class='shop__button flex justify-center items-center px-6 py-[12px] 2xl:py-[18px] bg-primary hover:hover-bg'>
      <span class='mr-2 text-button-primary text-light uppercase'>купить через getcourse</span>
      <svg width='34' height='28' viewBox='0 0 34 28' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 [&>path]:text-light'>
        <path d='M21.6301 25.1958C21.6301 26.3004 22.5256 27.1958 23.6301 27.1958C24.7347 27.1958 25.6301 26.3004 25.6301 25.1958C25.6301 24.0912 24.7347 23.1958 23.6301 23.1958C22.5256 23.1958 21.6301 24.0912 21.6301 25.1958Z' stroke='white'/>
        <path d='M10.4569 25.1958C10.4569 26.3004 11.3523 27.1958 12.4569 27.1958C13.5615 27.1958 14.4569 26.3004 14.4569 25.1958C14.4569 24.0912 13.5615 23.1958 12.4569 23.1958C11.3523 23.1958 10.4569 24.0912 10.4569 25.1958Z' stroke='white'/>
        <path d='M29.3478 19.2609H8.04348L7.5 4.65217H9.56522H12.913H19.6087H33L31.1739 11.9565L30.2609 15.6087M5.6087 1H0.130444' stroke='white'/>
      </svg>
    </button>
    <p class='text-14-400 text-light-grey mt-2 max-w-[320px]'>Для покупки курса вам потребуется зарегитрироваться или войти в свой аккаунт на GetCourse</p>
  </div>
          
          


        </div>  
      </div>
      
      

      
    </div>
    
   
  </div>
`
