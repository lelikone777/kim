export const catalog = document.createElement('section')
catalog.classList.add('catalog')

catalog.innerHTML = `
 <div class='catalog__wrapper flex flex-col gap-y-10 pb-10 2xl:pb-20 mt-5 ml-auto mr-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl border-b border-secondary'>

  <div class='catalog__top flex flex-col gap-y-5 xl:flex-row xl:justify-between xl:items-end'>  
  
    <div class='catalog__top-box xl:max-w-[50%]'>
      <div class='catalog__info flex flex-col text-26-300 text-left'>   
        <div class='catalog__pagination text-14-400 text-primary mb-1'>
          <ul class='flex flex-wrap gap-x-3 [&>li>a>span]:!font-bold'>
            <li><a href='#'><span>Главная</span></a></li>
            <li><a href='#'><span>Магазин</span></a></li>
            <li class='text-light-grey'><a href='#'><span>Тиражная коллекция</span></a></li>
         </ul>
        </div>
      
        <div class='catalog__title flex mb-3'>
          <h2 class='uppercase'>Тиражная коллекция</h2>
        </div>
        
        <div class='catalog__title-text text-14-300'>
          <p>Мы создали специальную коллекцию: анималистичные рельефы, цветы, плавные линии и абстрактные панно — всё это, нестареющая классика, которая отвечает всем требованиям наших заказчиков и доступна для заказа в любое время</p>
        </div>    
      </div>
    </div>
  
    <div class='catalog__buttons flex flex-col gap-y-5 sm:flex-row sm:justify-between'>
    
      <div class='catalog__magazine pl-4'>
        <div class='catalog__magazine-wrap flex  w-full items-center bg-primary text-light fill-light'>
          <div class='catalog__magazine-left relative w-[88px] h-[54px] 2xl:w-[120px] 2xl:h-[74px]'>
            <img src='/img/images/catalog/magazines.png' alt='magazines image' class='absolute w-full left-[-15%]'>
          </div>  
          <div class='catalog__magazine-right flex flex-col gap-y-[2px] py-3 pr-8'>
            <p class='text-12-400-header uppercase'>Скачать каталог в pdf</p>
            <span class='text-10-350-header'>12 арт-объектов сделанных вручную</span>
          </div>    
        </div>
      </div>
      
      <button class='catalog__filter-button flex-center border border-primary px-6 py-[15px] w-full gap-x-2 sm:w-fit xl:hidden'>
        <svg width='20' height='14' viewBox='0 0 20 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <line x1='4.37114e-08' y1='3.5' x2='11' y2='3.5' stroke='#78848F'/>
          <line y1='-0.5' x2='11' y2='-0.5' transform='matrix(-1 8.74228e-08 8.74228e-08 1 20 12)' stroke='#78848F'/>
          <line x1='15' y1='3.5' x2='20' y2='3.5' stroke='#78848F'/>
          <line y1='-0.5' x2='5' y2='-0.5' transform='matrix(-1 8.74228e-08 8.74228e-08 1 5 12)' stroke='#78848F'/>
          <circle cx='13' cy='3' r='2' stroke='#78848F'/>
          <circle cx='2' cy='2' r='2' transform='matrix(-1 0 0 1 9 9)' stroke='#78848F'/>
        </svg>
        <span class='text-button-primary text-primary !font-bold'>Фильтры</span>
      </button>
      
    </div>
  </div>
  
  <div class='catalog__filter flex gap-x-[42px]'>
  
    <div class='catalog__form hidden xl:flex min-w-[270px] flex-[1]'>
      <div class='catalog__form-wrap flex flex-col gap-y-[28px]'>
      
        <div class='catalog__form-header flex justify-between items-center'>
          <h4 class='text-24-300-xl'>Фильтры</h4>
          <span class='text-right text-10-350-header'>Сбросить <br> фильтры</span>
        </div>
        
        <div class='catalog__form-price'>
          <h5 class='mb-2 font-stem-light text-dark'>Стоимость</h5>
          <div class='flex justify-between items-center gap-x-2'>
            <input type='text' placeholder='мин' class='flex max-h-[48px] px-4 py-[15px] xl:px-4 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase'>           
            <div class='h-[1px] w-6 bg-light-grey'></div>          
            <input type='text' placeholder='макс' class='max-h-[48px] flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase'>
          </div>
        </div>
        
        <div class='catalog__form-size'>
          <h5 class='mb-2 font-stem-light text-dark'>Размеры</h5>
          <ul>
            <li class='contact__form-check flex items-center gap-x-3 border-t border-b py-2'>
              <input id='sizes-small' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'>
              <label for='sizes-small' class='text-14-300 !leading-[125%] '>Маленькие <span class='text-light-grey'>(7)</span><br><span class='text-10-350-header text-light-grey'>До 1,5 м2</span>
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'>
            </li>
            <li class='contact__form-check flex items-center gap-x-3 border-t border-b py-2'>
              <input id='sizes-medium' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'>
              <label for='sizes-medium' class='text-14-300 !leading-[125%] '>Средние <span class='text-light-grey'>(7)</span><br><span class='text-10-350-header text-light-grey'>От 1,5 м2 до 3 м2</span>
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'>
            </li>
            <li class='contact__form-check flex items-center gap-x-3 border-t border-b py-2'>
              <input id='sizes-large' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'>
              <label for='sizes-large' class='text-14-300 !leading-[125%] '>Большие <span class='text-light-grey'>(7)</span><br><span class='text-10-350-header text-light-grey'>От 3 м2</span>
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'>
            </li>
          </ul>
        </div>
        
        <div class='catalog__form-shape'>
          <h5 class='mb-2 font-stem-light text-dark'>Форма</h5>
          <ul>
            <li class='contact__form-check flex items-center gap-x-3 border-t border-b py-2'>
              <input id='shape-small' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'>
              <label for='shape-small' class='text-14-300 !leading-[125%] '>Квадрат <span class='text-light-grey'>(7)</span>
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'>
            </li>
            <li class='contact__form-check flex items-center gap-x-3 border-t border-b py-2'>
              <input id='shape-medium' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'>
              <label for='shape-medium' class='text-14-300 !leading-[125%] '>Прямоугольник <span class='text-light-grey'>(7)</span>
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'>
            </li>
            <li class='contact__form-check flex items-center gap-x-3 border-t border-b py-2'>
              <input id='shape-large' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'>
              <label for='shape-large' class='text-14-300 !leading-[125%] '>Круг <span class='text-light-grey'>(7)</span>
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'>
            </li>
          </ul>
        </div>
        
        <div class='catalog__form-style'>
          <h5 class='mb-2 font-stem-light text-dark'>Стиль</h5>
          <ul>
            <li class='contact__form-check flex items-center gap-x-3 border-t border-b py-2'>
              <input id='style-1' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'>
              <label for='style-1' class='text-14-300 !leading-[125%]'>Растительный сюжет <span class='text-light-grey'>(7)</span>
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'>
            </li>
            <li class='contact__form-check flex items-center gap-x-3 border-t border-b py-2'>
              <input id='style-2' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'>
              <label for='style-2' class='text-14-300 !leading-[125%]'>Геометрическое панно <span class='text-light-grey'>(7)</span>
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'>
            </li>
            <li class='contact__form-check flex items-center gap-x-3 border-t border-b py-2'>
              <input id='style-3' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'>
              <label for='style-3' class='text-14-300 !leading-[125%]'>Арт-деко <span class='text-light-grey'>(7)</span>
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'>
            </li>
            <li class='contact__form-check flex items-center gap-x-3 border-t border-b py-2'>
              <input id='style-4' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'>
              <label for='style-4' class='text-14-300 !leading-[125%]'>Советский сюрреализм <span class='text-light-grey'>(7)</span>
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'>
            </li>
            <li class='contact__form-check flex items-center gap-x-3 border-t border-b py-2'>
              <input id='style-5' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'>
              <label for='style-5' class='text-14-300 !leading-[125%]'>Абстракция <span class='text-light-grey'>(7)</span>
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'>
            </li>
          </ul>
        </div>
        
         <button class='contact__form-button w-full px-4 2xl:px-10 py-[15px] 2xl:py-[22px] text-light text-button-primary uppercase bg-primary sm:px-6'>
            Применить
          </button>
      
      </div>
    </div>
    <div class='catalog__list flex flex-col w-full xl:w-auto xl:flex-[5] sm:flex-row sm:flex-wrap gap-x-5 gap-y-10 md:gap-y-[60px] xl:gap-x-[45px] xl:gap-y-[62px] 2xl:gap-x-[48px] 2xl:gap-y-[84px] [&>div]:flex-1 [&>div]:basis-[32%] [&>div]:xl:basis-[30%]'>
    
      <div class='catalog__list-item flex  flex-col gap-y-4'>
        <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <div class='shop__slide-image w-full h-[400px] 2xl:h-[480px] relative overflow-hidden'>
            <img src='/img/images/shop/shop-image-2xl-1.jpg' alt='project 1' class='absolute bottom-[-5%] '/>
          </div>
          <div class='shop__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
            <div class='shop__slide-title flex items-center justify-center w-fit' >
              <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px] uppercase font-bold'>
                <span>L’AQUARIUM</span>
              </h5>
              <button class='flex justify-between items-center ml-2'>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            <div class='shop__slide-data flex justify-start items-center gap-x-4'>
              <div class='shop__slide-size flex flex-col'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Диаметр:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>56 см.</span>
              </div>
              <div class='shop__slide-color'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Цвет:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Белый</span>
              </div>
               <div class='shop__slide-delivery'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Доставка:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Бесплатно</span>
              </div>
            </div>
            <div class='shop__slide-price text-[16px] leading-[150%] tracking-[0.5px] font-bold'>
              <span>59 900 руб.</span>
            </div>
          </div>
        </div>
        
        <button class='shop__button flex justify-center items-center px-6 py-[12px] 2xl:py-[18px] border border-primary lg:order-1'>
          <span class='mr-2 text-[14px] 2xl:text-[16px] tracking-[2.1px] 2xl:tracking-[2.4px] font-bold uppercase'>добавить в корзину</span>
          <svg width='34' height='28' viewBox='0 0 34 28' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 [&>path]:stroke-light-grey'>
            <path d='M21.6301 25.1958C21.6301 26.3004 22.5256 27.1958 23.6301 27.1958C24.7347 27.1958 25.6301 26.3004 25.6301 25.1958C25.6301 24.0912 24.7347 23.1958 23.6301 23.1958C22.5256 23.1958 21.6301 24.0912 21.6301 25.1958Z' stroke='white'/>
            <path d='M10.4569 25.1958C10.4569 26.3004 11.3523 27.1958 12.4569 27.1958C13.5615 27.1958 14.4569 26.3004 14.4569 25.1958C14.4569 24.0912 13.5615 23.1958 12.4569 23.1958C11.3523 23.1958 10.4569 24.0912 10.4569 25.1958Z' stroke='white'/>
            <path d='M29.3478 19.2609H8.04348L7.5 4.65217H9.56522H12.913H19.6087H33L31.1739 11.9565L30.2609 15.6087M5.6087 1H0.130444' stroke='white'/>
          </svg>
        </button>
      
      </div>
      
      <div class='catalog__list-item flex  flex-col gap-y-4'>
        <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <div class='shop__slide-image w-full h-[400px] 2xl:h-[480px] relative overflow-hidden'>
            <img src='/img/images/shop/shop-image-2xl-1.jpg' alt='project 1' class='absolute bottom-[-5%] '/>
          </div>
          <div class='shop__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
            <div class='shop__slide-title flex items-center justify-center w-fit' >
              <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px] uppercase font-bold'>
                <span>L’AQUARIUM</span>
              </h5>
              <button class='flex justify-between items-center ml-2'>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            <div class='shop__slide-data flex justify-start items-center gap-x-4'>
              <div class='shop__slide-size flex flex-col'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Диаметр:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>56 см.</span>
              </div>
              <div class='shop__slide-color'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Цвет:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Белый</span>
              </div>
               <div class='shop__slide-delivery'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Доставка:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Бесплатно</span>
              </div>
            </div>
            <div class='shop__slide-price text-[16px] leading-[150%] tracking-[0.5px] font-bold'>
              <span>59 900 руб.</span>
            </div>
          </div>
        </div>
        
        <button class='shop__button flex justify-center items-center px-6 py-[12px] 2xl:py-[18px] border border-primary lg:order-1'>
          <span class='mr-2 text-[14px] 2xl:text-[16px] tracking-[2.1px] 2xl:tracking-[2.4px] font-bold uppercase'>добавить в корзину</span>
          <svg width='34' height='28' viewBox='0 0 34 28' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 [&>path]:stroke-light-grey'>
            <path d='M21.6301 25.1958C21.6301 26.3004 22.5256 27.1958 23.6301 27.1958C24.7347 27.1958 25.6301 26.3004 25.6301 25.1958C25.6301 24.0912 24.7347 23.1958 23.6301 23.1958C22.5256 23.1958 21.6301 24.0912 21.6301 25.1958Z' stroke='white'/>
            <path d='M10.4569 25.1958C10.4569 26.3004 11.3523 27.1958 12.4569 27.1958C13.5615 27.1958 14.4569 26.3004 14.4569 25.1958C14.4569 24.0912 13.5615 23.1958 12.4569 23.1958C11.3523 23.1958 10.4569 24.0912 10.4569 25.1958Z' stroke='white'/>
            <path d='M29.3478 19.2609H8.04348L7.5 4.65217H9.56522H12.913H19.6087H33L31.1739 11.9565L30.2609 15.6087M5.6087 1H0.130444' stroke='white'/>
          </svg>
        </button>
      
      </div>
      
      <div class='catalog__list-item flex  flex-col gap-y-4'>
        <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <div class='shop__slide-image w-full h-[400px] 2xl:h-[480px] relative overflow-hidden'>
            <img src='/img/images/shop/shop-image-2xl-1.jpg' alt='project 1' class='absolute bottom-[-5%] '/>
          </div>
          <div class='shop__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
            <div class='shop__slide-title flex items-center justify-center w-fit' >
              <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px] uppercase font-bold'>
                <span>L’AQUARIUM</span>
              </h5>
              <button class='flex justify-between items-center ml-2'>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            <div class='shop__slide-data flex justify-start items-center gap-x-4'>
              <div class='shop__slide-size flex flex-col'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Диаметр:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>56 см.</span>
              </div>
              <div class='shop__slide-color'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Цвет:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Белый</span>
              </div>
               <div class='shop__slide-delivery'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Доставка:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Бесплатно</span>
              </div>
            </div>
            <div class='shop__slide-price text-[16px] leading-[150%] tracking-[0.5px] font-bold'>
              <span>59 900 руб.</span>
            </div>
          </div>
        </div>
        
        <button class='shop__button flex justify-center items-center px-6 py-[12px] 2xl:py-[18px] border border-primary lg:order-1'>
          <span class='mr-2 text-[14px] 2xl:text-[16px] tracking-[2.1px] 2xl:tracking-[2.4px] font-bold uppercase'>добавить в корзину</span>
          <svg width='34' height='28' viewBox='0 0 34 28' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 [&>path]:stroke-light-grey'>
            <path d='M21.6301 25.1958C21.6301 26.3004 22.5256 27.1958 23.6301 27.1958C24.7347 27.1958 25.6301 26.3004 25.6301 25.1958C25.6301 24.0912 24.7347 23.1958 23.6301 23.1958C22.5256 23.1958 21.6301 24.0912 21.6301 25.1958Z' stroke='white'/>
            <path d='M10.4569 25.1958C10.4569 26.3004 11.3523 27.1958 12.4569 27.1958C13.5615 27.1958 14.4569 26.3004 14.4569 25.1958C14.4569 24.0912 13.5615 23.1958 12.4569 23.1958C11.3523 23.1958 10.4569 24.0912 10.4569 25.1958Z' stroke='white'/>
            <path d='M29.3478 19.2609H8.04348L7.5 4.65217H9.56522H12.913H19.6087H33L31.1739 11.9565L30.2609 15.6087M5.6087 1H0.130444' stroke='white'/>
          </svg>
        </button>
      
      </div>
      
      <div class='catalog__list-item flex  flex-col gap-y-4'>
        <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <div class='shop__slide-image w-full h-[400px] 2xl:h-[480px] relative overflow-hidden'>
            <img src='/img/images/shop/shop-image-2xl-1.jpg' alt='project 1' class='absolute bottom-[-5%] '/>
          </div>
          <div class='shop__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
            <div class='shop__slide-title flex items-center justify-center w-fit' >
              <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px] uppercase font-bold'>
                <span>L’AQUARIUM</span>
              </h5>
              <button class='flex justify-between items-center ml-2'>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            <div class='shop__slide-data flex justify-start items-center gap-x-4'>
              <div class='shop__slide-size flex flex-col'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Диаметр:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>56 см.</span>
              </div>
              <div class='shop__slide-color'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Цвет:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Белый</span>
              </div>
               <div class='shop__slide-delivery'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Доставка:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Бесплатно</span>
              </div>
            </div>
            <div class='shop__slide-price text-[16px] leading-[150%] tracking-[0.5px] font-bold'>
              <span>59 900 руб.</span>
            </div>
          </div>
        </div>
        
        <button class='shop__button flex justify-center items-center px-6 py-[12px] 2xl:py-[18px] border border-primary lg:order-1'>
          <span class='mr-2 text-[14px] 2xl:text-[16px] tracking-[2.1px] 2xl:tracking-[2.4px] font-bold uppercase'>добавить в корзину</span>
          <svg width='34' height='28' viewBox='0 0 34 28' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 [&>path]:stroke-light-grey'>
            <path d='M21.6301 25.1958C21.6301 26.3004 22.5256 27.1958 23.6301 27.1958C24.7347 27.1958 25.6301 26.3004 25.6301 25.1958C25.6301 24.0912 24.7347 23.1958 23.6301 23.1958C22.5256 23.1958 21.6301 24.0912 21.6301 25.1958Z' stroke='white'/>
            <path d='M10.4569 25.1958C10.4569 26.3004 11.3523 27.1958 12.4569 27.1958C13.5615 27.1958 14.4569 26.3004 14.4569 25.1958C14.4569 24.0912 13.5615 23.1958 12.4569 23.1958C11.3523 23.1958 10.4569 24.0912 10.4569 25.1958Z' stroke='white'/>
            <path d='M29.3478 19.2609H8.04348L7.5 4.65217H9.56522H12.913H19.6087H33L31.1739 11.9565L30.2609 15.6087M5.6087 1H0.130444' stroke='white'/>
          </svg>
        </button>
      
      </div>
      
      <div class='catalog__list-item flex  flex-col gap-y-4'>
        <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <div class='shop__slide-image w-full h-[400px] 2xl:h-[480px] relative overflow-hidden'>
            <img src='/img/images/shop/shop-image-2xl-1.jpg' alt='project 1' class='absolute bottom-[-5%] '/>
          </div>
          <div class='shop__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
            <div class='shop__slide-title flex items-center justify-center w-fit' >
              <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px] uppercase font-bold'>
                <span>L’AQUARIUM</span>
              </h5>
              <button class='flex justify-between items-center ml-2'>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            <div class='shop__slide-data flex justify-start items-center gap-x-4'>
              <div class='shop__slide-size flex flex-col'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Диаметр:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>56 см.</span>
              </div>
              <div class='shop__slide-color'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Цвет:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Белый</span>
              </div>
               <div class='shop__slide-delivery'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Доставка:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Бесплатно</span>
              </div>
            </div>
            <div class='shop__slide-price text-[16px] leading-[150%] tracking-[0.5px] font-bold'>
              <span>59 900 руб.</span>
            </div>
          </div>
        </div>
        
        <button class='shop__button flex justify-center items-center px-6 py-[12px] 2xl:py-[18px] border border-primary lg:order-1'>
          <span class='mr-2 text-[14px] 2xl:text-[16px] tracking-[2.1px] 2xl:tracking-[2.4px] font-bold uppercase'>добавить в корзину</span>
          <svg width='34' height='28' viewBox='0 0 34 28' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 [&>path]:stroke-light-grey'>
            <path d='M21.6301 25.1958C21.6301 26.3004 22.5256 27.1958 23.6301 27.1958C24.7347 27.1958 25.6301 26.3004 25.6301 25.1958C25.6301 24.0912 24.7347 23.1958 23.6301 23.1958C22.5256 23.1958 21.6301 24.0912 21.6301 25.1958Z' stroke='white'/>
            <path d='M10.4569 25.1958C10.4569 26.3004 11.3523 27.1958 12.4569 27.1958C13.5615 27.1958 14.4569 26.3004 14.4569 25.1958C14.4569 24.0912 13.5615 23.1958 12.4569 23.1958C11.3523 23.1958 10.4569 24.0912 10.4569 25.1958Z' stroke='white'/>
            <path d='M29.3478 19.2609H8.04348L7.5 4.65217H9.56522H12.913H19.6087H33L31.1739 11.9565L30.2609 15.6087M5.6087 1H0.130444' stroke='white'/>
          </svg>
        </button>
      
      </div>
      
      <div class='catalog__list-item flex-col gap-y-4 hidden sm:flex'>
        <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <div class='shop__slide-image w-full h-[400px] 2xl:h-[480px] relative overflow-hidden'>
            <img src='/img/images/shop/shop-image-2xl-1.jpg' alt='project 1' class='absolute bottom-[-5%] '/>
          </div>
          <div class='shop__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
            <div class='shop__slide-title flex items-center justify-center w-fit' >
              <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px] uppercase font-bold'>
                <span>L’AQUARIUM</span>
              </h5>
              <button class='flex justify-between items-center ml-2'>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            <div class='shop__slide-data flex justify-start items-center gap-x-4'>
              <div class='shop__slide-size flex flex-col'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Диаметр:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>56 см.</span>
              </div>
              <div class='shop__slide-color'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Цвет:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Белый</span>
              </div>
               <div class='shop__slide-delivery'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Доставка:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Бесплатно</span>
              </div>
            </div>
            <div class='shop__slide-price text-[16px] leading-[150%] tracking-[0.5px] font-bold'>
              <span>59 900 руб.</span>
            </div>
          </div>
        </div>
        
        <button class='shop__button flex justify-center items-center px-6 py-[12px] 2xl:py-[18px] border border-primary lg:order-1'>
          <span class='mr-2 text-[14px] 2xl:text-[16px] tracking-[2.1px] 2xl:tracking-[2.4px] font-bold uppercase'>добавить в корзину</span>
          <svg width='34' height='28' viewBox='0 0 34 28' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 [&>path]:stroke-light-grey'>
            <path d='M21.6301 25.1958C21.6301 26.3004 22.5256 27.1958 23.6301 27.1958C24.7347 27.1958 25.6301 26.3004 25.6301 25.1958C25.6301 24.0912 24.7347 23.1958 23.6301 23.1958C22.5256 23.1958 21.6301 24.0912 21.6301 25.1958Z' stroke='white'/>
            <path d='M10.4569 25.1958C10.4569 26.3004 11.3523 27.1958 12.4569 27.1958C13.5615 27.1958 14.4569 26.3004 14.4569 25.1958C14.4569 24.0912 13.5615 23.1958 12.4569 23.1958C11.3523 23.1958 10.4569 24.0912 10.4569 25.1958Z' stroke='white'/>
            <path d='M29.3478 19.2609H8.04348L7.5 4.65217H9.56522H12.913H19.6087H33L31.1739 11.9565L30.2609 15.6087M5.6087 1H0.130444' stroke='white'/>
          </svg>
        </button>
      
      </div>
      
      <div class='catalog__list-item flex-col gap-y-4 hidden xl:flex'>
        <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <div class='shop__slide-image w-full h-[400px] 2xl:h-[480px] relative overflow-hidden'>
            <img src='/img/images/shop/shop-image-2xl-1.jpg' alt='project 1' class='absolute bottom-[-5%] '/>
          </div>
          <div class='shop__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
            <div class='shop__slide-title flex items-center justify-center w-fit' >
              <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px] uppercase font-bold'>
                <span>L’AQUARIUM</span>
              </h5>
              <button class='flex justify-between items-center ml-2'>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            <div class='shop__slide-data flex justify-start items-center gap-x-4'>
              <div class='shop__slide-size flex flex-col'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Диаметр:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>56 см.</span>
              </div>
              <div class='shop__slide-color'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Цвет:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Белый</span>
              </div>
               <div class='shop__slide-delivery'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Доставка:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Бесплатно</span>
              </div>
            </div>
            <div class='shop__slide-price text-[16px] leading-[150%] tracking-[0.5px] font-bold'>
              <span>59 900 руб.</span>
            </div>
          </div>
        </div>
        
        <button class='shop__button flex justify-center items-center px-6 py-[12px] 2xl:py-[18px] border border-primary lg:order-1'>
          <span class='mr-2 text-[14px] 2xl:text-[16px] tracking-[2.1px] 2xl:tracking-[2.4px] font-bold uppercase'>добавить в корзину</span>
          <svg width='34' height='28' viewBox='0 0 34 28' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 [&>path]:stroke-light-grey'>
            <path d='M21.6301 25.1958C21.6301 26.3004 22.5256 27.1958 23.6301 27.1958C24.7347 27.1958 25.6301 26.3004 25.6301 25.1958C25.6301 24.0912 24.7347 23.1958 23.6301 23.1958C22.5256 23.1958 21.6301 24.0912 21.6301 25.1958Z' stroke='white'/>
            <path d='M10.4569 25.1958C10.4569 26.3004 11.3523 27.1958 12.4569 27.1958C13.5615 27.1958 14.4569 26.3004 14.4569 25.1958C14.4569 24.0912 13.5615 23.1958 12.4569 23.1958C11.3523 23.1958 10.4569 24.0912 10.4569 25.1958Z' stroke='white'/>
            <path d='M29.3478 19.2609H8.04348L7.5 4.65217H9.56522H12.913H19.6087H33L31.1739 11.9565L30.2609 15.6087M5.6087 1H0.130444' stroke='white'/>
          </svg>
        </button>
      
      </div>
      
       <div class='catalog__list-item flex-col gap-y-4 hidden xl:flex'>
        <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <div class='shop__slide-image w-full h-[400px] 2xl:h-[480px] relative overflow-hidden'>
            <img src='/img/images/shop/shop-image-2xl-1.jpg' alt='project 1' class='absolute bottom-[-5%] '/>
          </div>
          <div class='shop__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
            <div class='shop__slide-title flex items-center justify-center w-fit' >
              <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px] uppercase font-bold'>
                <span>L’AQUARIUM</span>
              </h5>
              <button class='flex justify-between items-center ml-2'>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            <div class='shop__slide-data flex justify-start items-center gap-x-4'>
              <div class='shop__slide-size flex flex-col'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Диаметр:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>56 см.</span>
              </div>
              <div class='shop__slide-color'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Цвет:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Белый</span>
              </div>
               <div class='shop__slide-delivery'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Доставка:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Бесплатно</span>
              </div>
            </div>
            <div class='shop__slide-price text-[16px] leading-[150%] tracking-[0.5px] font-bold'>
              <span>59 900 руб.</span>
            </div>
          </div>
        </div>
        
        <button class='shop__button flex justify-center items-center px-6 py-[12px] 2xl:py-[18px] border border-primary lg:order-1'>
          <span class='mr-2 text-[14px] 2xl:text-[16px] tracking-[2.1px] 2xl:tracking-[2.4px] font-bold uppercase'>добавить в корзину</span>
          <svg width='34' height='28' viewBox='0 0 34 28' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 [&>path]:stroke-light-grey'>
            <path d='M21.6301 25.1958C21.6301 26.3004 22.5256 27.1958 23.6301 27.1958C24.7347 27.1958 25.6301 26.3004 25.6301 25.1958C25.6301 24.0912 24.7347 23.1958 23.6301 23.1958C22.5256 23.1958 21.6301 24.0912 21.6301 25.1958Z' stroke='white'/>
            <path d='M10.4569 25.1958C10.4569 26.3004 11.3523 27.1958 12.4569 27.1958C13.5615 27.1958 14.4569 26.3004 14.4569 25.1958C14.4569 24.0912 13.5615 23.1958 12.4569 23.1958C11.3523 23.1958 10.4569 24.0912 10.4569 25.1958Z' stroke='white'/>
            <path d='M29.3478 19.2609H8.04348L7.5 4.65217H9.56522H12.913H19.6087H33L31.1739 11.9565L30.2609 15.6087M5.6087 1H0.130444' stroke='white'/>
          </svg>
        </button>
      
      </div>
      
       <div class='catalog__list-item flex-col gap-y-4 hidden xl:flex'>
        <div class='shop__slide flex flex-col gap-y-5 2xl:gap-y-8'>
          <div class='shop__slide-image w-full h-[400px] 2xl:h-[480px] relative overflow-hidden'>
            <img src='/img/images/shop/shop-image-2xl-1.jpg' alt='project 1' class='absolute bottom-[-5%] '/>
          </div>
          <div class='shop__slide-info flex flex-col gap-y-3 2xl:gap-y-5'>
            <div class='shop__slide-title flex items-center justify-center w-fit' >
              <h5 class='text-[14px] 2xl:text-[16px] leading-normal tracking-[2.1px] uppercase font-bold'>
                <span>L’AQUARIUM</span>
              </h5>
              <button class='flex justify-between items-center ml-2'>
                <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
                </svg>
              </button>
            </div>
            <div class='shop__slide-data flex justify-start items-center gap-x-4'>
              <div class='shop__slide-size flex flex-col'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Диаметр:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>56 см.</span>
              </div>
              <div class='shop__slide-color'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Цвет:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Белый</span>
              </div>
               <div class='shop__slide-delivery'>
                <p class='text-light-grey text-[10px] 2xl:text-[14px] leading-[140%] tracking-[0.3px]'>
                  Доставка:
                </p>
                <span class='text-[14px] 2xl:text-[16px] leading-[160%] tracking-[0.4px]'>Бесплатно</span>
              </div>
            </div>
            <div class='shop__slide-price text-[16px] leading-[150%] tracking-[0.5px] font-bold'>
              <span>59 900 руб.</span>
            </div>
          </div>
        </div>
        
        <button class='shop__button flex justify-center items-center px-6 py-[12px] 2xl:py-[18px] border border-primary lg:order-1'>
          <span class='mr-2 text-[14px] 2xl:text-[16px] tracking-[2.1px] 2xl:tracking-[2.4px] font-bold uppercase'>добавить в корзину</span>
          <svg width='34' height='28' viewBox='0 0 34 28' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 [&>path]:stroke-light-grey'>
            <path d='M21.6301 25.1958C21.6301 26.3004 22.5256 27.1958 23.6301 27.1958C24.7347 27.1958 25.6301 26.3004 25.6301 25.1958C25.6301 24.0912 24.7347 23.1958 23.6301 23.1958C22.5256 23.1958 21.6301 24.0912 21.6301 25.1958Z' stroke='white'/>
            <path d='M10.4569 25.1958C10.4569 26.3004 11.3523 27.1958 12.4569 27.1958C13.5615 27.1958 14.4569 26.3004 14.4569 25.1958C14.4569 24.0912 13.5615 23.1958 12.4569 23.1958C11.3523 23.1958 10.4569 24.0912 10.4569 25.1958Z' stroke='white'/>
            <path d='M29.3478 19.2609H8.04348L7.5 4.65217H9.56522H12.913H19.6087H33L31.1739 11.9565L30.2609 15.6087M5.6087 1H0.130444' stroke='white'/>
          </svg>
        </button>
      
      </div>
      
      <button class='contact__form-button w-full px-4 lg:w-fit lg:m-auto 2xl:px-10 py-[15px] 2xl:py-[22px] text-light text-button-primary uppercase bg-primary sm:px-6'>
            показать ещё
      </button>
   
    </div>
  </div>
</div>

`
