export const productInfo = document.createElement('section')
productInfo.classList.add('product-info')

productInfo.innerHTML = `

  <div class='product-info__wrapper flex flex-col gap-y-1 my-5 ml-auto mr-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl'>   
    <div class='product-info__pagination text-14-400 text-primary mb-1'>
      <ul class='flex flex-wrap gap-x-3 gap-y-1'>
        <li><a href='#'><span>Главная</span></a></li>
        <li><a href='#'><span>Магазин</span></a></li>
        <li><a href='#'><span>Тиражная коллекция</span></a></li>
        <li><a href='#'><span>L’AQUARIUM</span></a></li>
      </ul>
    </div>
  
    <div class='product-info__title flex mb-3'>
      <h2 class=' text-32-300 uppercase'>L’AQUARIUM</h2>
    </div>
  </div>
  
  <div class='product-info__profile'>
    <div class='product-info__profile-box flex flex-col md:flex-row md:flex-wrap items-center gap-y-10 gap-x-5 md:grid grid-flow-row-dense md:grid-cols-2 max-w-screen-2xl m-auto'>
    
      <div class='product-info__image w-full max-w-[375px] md:max-w-[662px] xl:max-w-[936px] md:col-span-1 md:row-span-2'>
        <div class='flex flex-col gap-y-5'>
          <div class='w-full'>
            <img
              src='/img/images/product/product-image.jpg'
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
      
      <div class='product-info__data flex flex-col gap-y-10 ml-5 mr-5 w-full pl-5 pr-5 md:pr-10 md:ml-0 md:pt-5  md:col-span-1 xl:pr-20 xl:pl-[104px] xl:pt-10 2xl:pr-[120px] xl:mx-0'>
        <div class='product-info__data-instruction'>
          <div class='mb-2 2xl:mb-3'>
            <p class='text-14-300'>Коллекция L’AQUARIUM включает в себя 3 разных гипсовых рыбки в подарочной упаковке.</p>
          </div>
          <button class='flex justify-start items-center text-primary gap-x-2'>
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" class='[&>path]:stroke-primary'>
              <path d="M11 0V12M11 12L7 8M11 12L15 8" stroke="#033260"/>
              <path d="M1 12V17H21V12" stroke="#033260"/>
            </svg>
            <span class='text-12-400-header !font-bold text-primary uppercase hover:hover-text'>Скачать инструкцию по установке</span>
          </button>
        </div>
        
        <div class='flex flex-col gap-y-10'>
          <div class='product-info__data-table text-14-400 flex flex-col gap-y-2'>
          
            <div class='tr flex justify-between items-center gap-x-2 [&>span]:shrink-0'>
              <span class='text-light-grey'>Стиль:</span>
              <div class='line w-full border-t border-dotted'></div>
              <span class=''><nobr>Арт-деко</nobr></span>
            </div>
            
            <div class='tr flex justify-between items-center gap-x-2'>
              <span class='text-light-grey'>Размер:</span>
              <div class='line w-full border-t border-dotted'></div>
              <span class=''><nobr>от 9 до 22 см.</nobr></span>
            </div>
            
            <div class='tr flex justify-between items-center gap-x-2'>
              <span class='text-light-grey'>Цена:</span>
              <div class='line w-full border-t border-dotted'></div>
              <span class='font-bold'><nobr>14 900 руб.</nobr></span>
            </div>
            
            <div class='tr flex justify-between items-center gap-x-2'>
              <div class='flex items-center'>
                <div class='flex items-center gap-x-2'>
                  <input id='product-info-check' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light checked:hover:hover-bg'>
                  <label for='product-info-check' class='text-14-300 !leading-[125%] '>Мне нужен монтаж</label>
                  <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'>
                </div>
              </div>
              <div class=''><nobr>+ 500 руб.</nobr></div>
            </div>
            
          </div>

          <button class='shop__button flex justify-center items-center px-6 py-[12px] 2xl:py-[18px] bg-primary hover:hover-bg'>
            <span class='mr-2 text-button-primary text-light uppercase'>добавить в корзину</span>
            <svg width='34' height='28' viewBox='0 0 34 28' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 [&>path]:text-light'>
              <path d='M21.6301 25.1958C21.6301 26.3004 22.5256 27.1958 23.6301 27.1958C24.7347 27.1958 25.6301 26.3004 25.6301 25.1958C25.6301 24.0912 24.7347 23.1958 23.6301 23.1958C22.5256 23.1958 21.6301 24.0912 21.6301 25.1958Z' stroke='white'/>
              <path d='M10.4569 25.1958C10.4569 26.3004 11.3523 27.1958 12.4569 27.1958C13.5615 27.1958 14.4569 26.3004 14.4569 25.1958C14.4569 24.0912 13.5615 23.1958 12.4569 23.1958C11.3523 23.1958 10.4569 24.0912 10.4569 25.1958Z' stroke='white'/>
              <path d='M29.3478 19.2609H8.04348L7.5 4.65217H9.56522H12.913H19.6087H33L31.1739 11.9565L30.2609 15.6087M5.6087 1H0.130444' stroke='white'/>
            </svg>
          </button>
        </div>
        
        
      </div>
        
      <div class='product__info-warp w-full flex flex-col gap-y-10  md:col-start-1  md:col-end-3 md:row-start-3 md:row-end-4    xl:col-start-2 xl:col-end-3 xl:row-start-2 xl:row-end-3 xl:place-self-start'>
      
        <div class='product-info__warranty py-3 sm:py-5 pl-10 pr-5 relative border border-secondary ml-10 mr-5 md:mr-10 md:flex md:justify-center md:gap-x-5 xl:ml-[104px] xl:mr-20 2xl:mr-[120px]'>
          <div class='absolute bg-light left-[-20px] top-1/2 translate-y-[-50%]  md:static md:top-auto md:left-auto md:bg-transparent  md:translate-y-0'>
            <svg width="38" height="45" viewBox="0 0 38 45" fill="none" xmlns="http://www.w3.org/2000/svg" class='w-full'>
              <path d="M29 15C29 20.5228 24.5228 25 19 25C13.4772 25 9 20.5228 9 15C9 9.47715 13.4772 5 19 5C20.8214 5 22.5291 5.48697 24 6.33782" stroke="#033260"/>
              <path d="M32.6778 12C32.8888 12.9665 33 13.9703 33 15C33 22.732 26.732 29 19 29C11.268 29 5 22.732 5 15C5 7.26801 11.268 1 19 1C21.6393 1 24.1081 1.73036 26.2152 3" stroke="#CED6DD"/>
              <path d="M15 15.5L18.5 19L32.5 5" stroke="#033260"/>
              <path d="M9 25L1 38.8564L6.4641 38.1244L7.9282 42.8564L15.9282 29" stroke="#CED6DD"/>
              <path d="M28.9277 25L36.9277 38.8564L31.4636 38.1244L29.9995 42.8564L21.9995 29" stroke="#CED6DD"/>
            </svg>
          </div>
          <div class='flex justify-center items-center'>
            <span class='text-16-400'><nobr>Гарантия на наши работы</nobr> <nobr>составляет 5 лет</nobr></span>
          </div>
        </div>
      
        <div class='product-info__tabs w-full xl:pr-20 2xl:pr-[120px] xl:w-auto xl:ml-[104px] '>
          <div class='product-info__tabs-list flex flex-col items-center w-full border-b border-primary max-w-screen-2xl pl-5 pr-5 md:pl-10 md:pr-10 xl:px-0'>
            <div class='tabs-buttons flex w-full'>
              <button
                class='tabs-button flex-1  tabs-button-active px-3 py-2'>Доставка </button>
              <button
                class='tabs-button flex-1 px-3 py-2 hover:bg-lighter-grey'>Самовывоз</button>
              <button
                class='tabs-button flex-1 px-3 py-2 hover:bg-lighter-grey'>Оплата</button>
            </div>
          </div>     
          
            <div class='p-5 bg-lighter-grey md:pl-10 md:pr-10'>
            <span class='text-14-300'>
              Доставка по Москве курьером или по РФ до пункта выдачи СДЭК включена в стоимость.
            </span>
          </div> 
        </div>
        
      </div>
    </div>
    
    <div class='product-info__bottom flex flex-col gap-y-10 px-5 md:px-10 xl:px-20 2xl:px-[120px] my-10 md:col-span-2 md:my-20 xl:my-[104px] 2xl:my-[160px]  xl:flex-row xl:gap-x-[42px] xl:items-center max-w-screen-2xl m-auto'>
      <div class='max-w-[668px] m-auto xl:flex-1 xl:order-2'>
        <img src='/img/images/product/product-image-2.jpg' alt='product image'>  
      </div>
      
      <div class='flex flex-col gap-y-3 text-14-300 xl:flex-1 xl:order-1 xl:pr-[104px] 2xl:text-[20px]'>
        <p>
        L’AQUARIUM — это лимитированная коллекция адаптивного интерьерного декора. Концептуальный проект на стыке искусства и декора. Придуман модным московским скульптором Леонидом Кимом. Позволяет любому человеку вводить новые доминанты в интерьер, менять зонирование пространства и освежать дизайн без помощи профессионалов.
        </p>
        <p>
        Адаптивный декор — тип интерьерного декора, разработанный Леонидом Кимом в 2020 году. Отвечает 4 обязательным критериям. Во-первых, все элементы создаются с академической точностью классической скульптурной школы. Во-вторых, этот декор разрабатывается с расчетом на то, чтобы его можно было вписать в любой интерьер. И потому он не принадлежит ни к одному стилю. В-третьих, адаптивный декор выполняет роль акцента в интерьере, но этот эффект достигается исключительно за счет яркой образности. В-четвертых, монтаж должен быть настолько простым, чтобы с ним мог справиться человек с любым уровнем подготовки. Без каких-либо инструментов. Более того, элементы адаптивного декора могут крепиться к любой поверхности, и её не нужно никак к этому подготавливать.
        </p>
        <p>
        Коллекция L’AQUARIUM включает в себя 3 разных гипсовых рыбок, выполненных в лучших традициях академической скульптуры. Сложная вуалевая пластика в сочетании с простотой формы и чистым цветом делает рыбок из L’AQUARIUM изящным акцентом в любом интерьере.
        </p>
      </div>
    </div>
  </div>
</div>

`
