export const projectProfile = document.createElement('section')
projectProfile.classList.add('project__profile')

projectProfile.innerHTML = `
 
  <div class='product-info__wrapper flex flex-col gap-y-1 my-5 2xl:my-10 ml-auto mr-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl'>   
    <div class='product-info__pagination text-14-400 text-primary mb-1'>
      <ul class='flex flex-wrap gap-x-3 gap-y-1'>
        <li><a href='#'><span>Главная</span></a></li>
        <li><a href='#'><span>Магазин</span></a></li>
        <li><a href='#'><span>Тиражная коллекция</span></a></li>
        <li><a href='#'><span>L’AQUARIUM</span></a></li>
      </ul>
    </div>
  
    <div class='product-info__title flex mb-3'>
      <h2 class=' text-32-300 uppercase'>«BUG»</h2>
    </div>
  </div>
  
  <div class='product-info__profile mb-20'>
    <div class='product-info__profile-box gap-y-10 gap-x-5 xl:gap-x-10 grid grid-flow-row-dense md:grid-cols-2 max-w-screen-2xl m-auto xl:auto-rows-min'>
    
      <div class='product-info__image w-full m-auto max-w-[375px] md:max-w-[662px] xl:max-w-[936px] md:col-span-1 col-span-1 md:row-span-2 2xl:row-start-1 2xl:row-end-4'>
        <div class='flex flex-col gap-y-5'>
          <div class='w-full'>
            <img
              src='/img/images/product-page/product-2xl.jpg'
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
            <p class='text-14-300 flex max-h-[70px] text-ellipsis overflow-hidden'>Жук — это мой манифест как художника. Он буквально упёрся рогом и катит свой навозный шарик размером с его эго, наполненный терзаниями и страстями. А название «BUG» имеет двойной смысл. Это и «жук», и «ошибка» (компьютерный слэнг), что относит нас к вечным сомнениям художника: «А вдруг, все что я делаю, это всего лишь шарик дерьма? Да и в ту ли сторону я его качу?..»</p>
          </div>
          <button class='flex justify-start items-center text-primary gap-x-2'>
            <span class='text-12-400-header !font-bold text-primary uppercase'>читать всё описание</span>
            <span class='border-t border-r border-primary w-2 h-2 rotate-[135deg] relative bottom-[2px] '></span>
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
              <span class=''><nobr>200 х 160 см</nobr></span>
            </div>
            
            <div class='tr flex justify-between items-center gap-x-2'>
              <span class='text-light-grey'>Срок изготовления:</span>
              <div class='line w-full border-t border-dotted'></div>
              <span class=''><nobr>60 дней.</nobr></span>
            </div>
            
            <div class='tr flex justify-between items-center gap-x-2'>
              <span class='text-light-grey'>Цена:</span>
              <div class='line w-full border-t border-dotted'></div>
              <span class='font-bold'><nobr>7 000 000 руб.</nobr></span>
            </div>

          </div>

          <div class='flex flex-col justify-center'>
            <button class='shop__button flex justify-center items-center px-6 py-[12px] 2xl:py-[18px] bg-primary'>
              <span class='mr-2 text-button-primary text-light uppercase'>заказать авторскую копию</span>   
            </button>
            <div class='mx-5 border border-secondary text-14-20-300 py-2 px-4 text-center'><p>Возможны другие размеры и художественное переосмысление</p></div>
          </div>
        </div>  
      </div>
      
      
      <div class='download grid grid-cols-2 gap-x-5 gap-y-10 w-full px-5 md:px-10  md:mx-0 mt-6 place-content-stretch    col-span-1 md:col-span-2 md:row-start-3 md:row-end-4 xl:mt-0 xl:col-span-1 xl:col-start-2 xl:col-end-3 xl:row-start-2 xl:row-end-3 xl:place-self-start xl:px-20 2xl:pr-[120px] 2xl:pl-24'>
      
        <div class='catalog__magazine col-span-1 md:ml-10 md:gap-x-5'>
          <div class='catalog__magazine-wrap flex p-3 pt-7 md:pt-3 w-full items-center bg-primary text-light fill-light relative h-full md:pl-14 2xl:pl-24'>
            <div class='catalog__magazine-left absolute top-[-35px] md:top-1/2 md:translate-y-[-50%] md:left-[-44px]  w-[88px] h-[54px] 2xl:w-[120px] 2xl:h-[74px]'>
              <img src='/img/images/catalog/magazines.png' alt='magazines image' class='w-full'>
            </div>  
            <div class='catalog__magazine-right flex flex-col gap-y-[2px]'>
              <p class='text-12-400-header uppercase'>Скачать аннотацию</p>
              <span class='text-10-350-header'>Визуализация текcта, мыслей и идей</span>
            </div>    
          </div>
        </div>
        
        <div class='catalog__magazine w-full col-span-1 md:ml-10 md:pr-10 '>
          <div class='catalog__magazine-wrap flex p-3 pt-7 md:pt-3 w-full items-center bg-lighter-grey text-light fill-light relative h-full md:pl-14 2xl:pl-16'>
            <div class='catalog__magazine-left absolute top-[-35px] md:top-1/2 md:translate-y-[-50%] md:left-[-44px]'>
              <img src='/img/images/kraken.png' alt='magazines image' class='w-full'>
            </div>  
            <div class='catalog__magazine-right flex flex-col gap-y-[2px]'>
              <p class='text-12-400-header text-dark uppercase'>Скачать барельеф в 3D</p>
              <span class='text-10-350-header text-dark'>Получите набор всех наших барельефов в 3D</span>
            </div>    
          </div>
        </div>
         
      </div>
        
      <div class='product__info-warp w-full flex flex-col md:flex-row gap-y-10 md:gap-x-5  md:col-start-1  md:col-end-3 xl:place-self-start col-span-1 md:row-start-4 md:row-end-5 md:px-10 xl:px-20 xl:gap-x-10 2xl:row-start-3 2xl:row-end-4 2xl:col-start-2 2xl:col-end-3 2xl:flex-col 2xl:pl-[104px] 2xl:pr-[120px]'>
      
        <div class='product-info__warranty py-3 sm:py-5 pl-10 pr-5 relative border border-secondary ml-10 mr-5 md:gap-x-5 xl:mr-0 xl:ml-10 md:mr-0 md:pr-0 md:ml-5 col-span-1 md:col-span-2 md:flex-1 2xl:mx-0 2xl:mr-0 '>
          <div class='absolute bg-light left-[-20px] top-1/2 translate-y-[-50%]  '>
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="33" viewBox="0 0 37 33" fill="none">
              <path d="M0.927734 5.50007V29.5C0.927734 31.1569 2.27088 32.5 3.92773 32.5H16.9277M5.75514 5.5H22.4278M31.4278 5.5H36.4278V12.8547" stroke="#CED6DD"/>
              <path d="M24.9277 6.99754V15L27.0002 18.7106L28.9277 14.9646V1.5L24.9277 1.53294V4.49754H28.9277" stroke="#033260"/>
              <path d="M25.1992 15H28.4283" stroke="#033260"/>
              <path d="M26.9277 15L26.9277 4.99997" stroke="#033260"/>
              <path d="M0.927734 6C0.927734 3.23858 3.16631 1 5.92773 1V1V26C1.01868 26 0.927734 29 0.927734 29V6Z" stroke="#CED6DD"/>
              <path d="M36.4277 15.5107V32.5H19.4277V32.2072L36.1347 15.5107H36.4277Z" stroke="#033260"/>
              <path d="M25.1348 30L33.9277 21.2071V30H25.1348Z" stroke="#033260"/>
              <path d="M10.9277 10V19H19.9277V10H15.4277" stroke="#CED6DD"/>
              <path d="M19.9277 19H10.9277V28H17" stroke="#CED6DD"/>
            </svg>
          </div>
          <div class='flex justify-center items-center'>
            <span class='text-16-400'>Мы специализируемся на разработке и изготовлении индивидуальных барельефов любых форм и размеров, воплощаем ваши самые смелые задумки и наполняем каждый арт-объект смыслами и историей</span>
          </div>
        </div>
        
          <div class='product-info__warranty py-3 sm:py-5 pl-10 pr-5 relative border border-secondary ml-10 mr-5 md:flex md:justify-center md:gap-x-5 xl:mr-0 xl:ml-10 md:mr-0 md:flex-1 xl:pr-20 2xl:mx-0 2xl:mr-0 xl:pl-0'>
          <div class='absolute bg-light left-[-20px] top-1/2 translate-y-[-50%]'>
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

      </div>
      
    </div>
    
   
  </div>
  
  
  


  
`
