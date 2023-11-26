export const cartBody = document.createElement('div')
cartBody.classList.add('cart-body')

cartBody.innerHTML = `
  <div class="wrapper flex flex-col gap-y-1 my-5 2xl:my-10 ml-auto mr-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl">
    <div class="academy-profile__pagination text-14-400 text-primary mb-1">
      <ul class="flex flex-wrap gap-x-3 gap-y-1">
        <li>
          <a href="#">
            <span>Главная</span>
          </a>
        </li>
        <li>
          <a href="#" class='text-light-grey'>
            <span>Корзина</span>
          </a>
        </li>
       
      </ul>
    </div>
  
    <div class="academy-profile__title flex"> 
      <h2 class=" text-32-300 uppercase">Корзина</h2>
    </div>
    
  </div>  
  
  <div class='cart-list [&>div:last-child]:border-b-0'>
<!--    header-->
    <div class='cart-item hidden xl:flex items-center gap-x-5 md:gap-x-[57px] xl:gap-x-[127px] xl:justify-between container-padding !py-0 '>  
      <div class='img self-start mt-2 w-[72px] md:w-[120px] xl:w-[80px] 2xl:w-[160px] shrink-0'></div>
      
      <div class='info md:flex md:flex-col gap-y-3 xl:flex-row xl:justify-between xl:gap-x-5 xl:items-center'>
     
        <h5 class='text-16-400 xl:w-[13vw] 2xl:w-[270px] shrink-1'></h5>
        
        <div class='cart-table flex flex-col md:flex-row md:gap-x-5 xl:gap-x-10 xl:justify-between xl:items-center w-[50vw] md:w-auto xl:pb-3'>
        
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[120px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] hidden xl:block'>Размер:</span>
          </div>
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[80px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] hidden xl:block'>Монтаж:</span>
          </div>
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[104px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] hidden xl:block'>Доставка:</span>
          </div>
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[104px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] hidden xl:block'>Цена:</span>
          </div>
        </div>
        
        <div class='check xl:w-[160px]'>
          <div class='price__form-check flex items-center gap-x-3 hidden'>
              <input checked id='primary-checkbox' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'/>
              <label for='primary-checkbox' class='text-light-grey text-14-400 sm:max-w-[330px] 2xl:max-w-[450px]'>
                Подарочным сертификатом
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'/>
            </div>
        </div>
        
        <div class='mt-1 md:mt-0 w-fit xl:w-[61px] shrink-0'></div>
      </div>
    </div>
  
<!--    cards-->
    <div class='cart-item flex items-center gap-x-5 border-t border-b border-semi-grey py-4 md:gap-x-[57px] xl:gap-x-[127px] xl:justify-between container-padding'>  
      <div class='img self-start mt-2 w-[72px] h-[72px] md:w-[120px] md:h-[120px] xl:w-[80px] xl:h-[80px] 2xl:w-[160px] 2xl:h-[160px] shrink-0'>
        <img src='/img/images/cart/card1.jpg' alt='1'>
      </div>
      
      <div class='info md:flex md:flex-col gap-y-3 xl:flex-row xl:justify-between xl:gap-x-5 xl:items-center'>
     
        <h5 class='text-16-400 xl:w-[13vw] 2xl:w-[270px] shrink-1'>L’AQUARIUM</h5>
        
        <div class='cart-table flex flex-col md:flex-row md:gap-x-5 xl:gap-x-10 xl:justify-between xl:items-center w-[50vw] md:w-auto'>
        
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[120px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Размер:</span>
            <span class='text-deep-grey w-[100px] md:w-auto xl:w-[120px]'>от 9 до 22 см.</span>
          </div>
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[80px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Монтаж:</span>
            <span class='text-deep-grey w-[100px] md:w-auto xl:w-[120px]'>нет</span>
          </div>
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[104px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Доставка:</span>
            <span class='text-deep-grey w-[100px] md:w-auto xl:w-[120px]'>Бесплатно</span>
          </div>
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[104px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Цена:</span>
            <span class='text-deep-grey !font-bold w-[100px] md:w-auto xl:w-[120px]'>14 900 руб.</span>
          </div>
        </div>
        
        <div class='check xl:w-[160px]'>
          <div class='price__form-check flex items-center gap-x-3 hidden'>
              <input checked id='primary-checkbox' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'/>
              <label for='primary-checkbox' class='text-light-grey text-14-400 sm:max-w-[330px] 2xl:max-w-[450px]'>
                Подарочным сертификатом
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'/>
            </div>
        </div>
        
        <button class='mt-1 md:mt-0 w-fit xl:w-[61px] shrink-0'>
          <span class='text-primary text-12-400-header text-14-400 !font-bold xl:!text-[14px]'>Удалить</span>
        </button>
      </div>
    </div>
  
    <div class='cart-item flex items-center gap-x-5 border-t border-b border-semi-grey py-4 md:gap-x-[57px] xl:gap-x-[127px] xl:justify-between container-padding'>  
      <div class='img self-start mt-2 w-[72px] h-[72px] md:w-[120px] md:h-[120px] xl:w-[80px] xl:h-[80px] 2xl:w-[160px] 2xl:h-[160px] shrink-0'>
        <img src='/img/images/cart/card2.jpg' alt='2'>
      </div>
      
      <div class='info md:flex md:flex-col gap-y-3 xl:flex-row xl:justify-between xl:gap-x-5 xl:items-center'>
     
        <h5 class='text-16-400 xl:w-[13vw] 2xl:w-[270px] shrink-1'>Будда Шакьямуни</h5>
        
        <div class='cart-table flex flex-col md:flex-row md:gap-x-5 xl:gap-x-10 xl:justify-between xl:items-center w-[50vw] md:w-auto'>
        
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[120px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Размер:</span>
            <span class='text-deep-grey w-[100px] md:w-auto xl:w-[120px]'>от 9 до 22 см.</span>
          </div>
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[80px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Монтаж:</span>
            <span class='text-deep-grey w-[100px] md:w-auto xl:w-[120px]'>500 руб.</span>
          </div>
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[104px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Доставка:</span>
            <span class='text-deep-grey w-[100px] md:w-auto xl:w-[120px]'>от 200 руб.</span>
          </div>
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[104px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Цена::</span>
            <span class='text-deep-grey !font-bold w-[100px] md:w-auto xl:w-[120px]'>14 900 руб.</span>
          </div>
        </div>
        
        <div class='check xl:w-[160px]'>
          <div class='price__form-check flex items-center gap-x-3 hidden'>
              <input checked id='primary-checkbox' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'/>
              <label for='primary-checkbox' class='text-light-grey text-14-400 sm:max-w-[330px] 2xl:max-w-[450px]'>
                Подарочным сертификатом
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'/>
            </div>
        </div>
        
        <button class='mt-1 md:mt-0 w-fit xl:w-[61px] shrink-0'>
          <span class='text-primary text-12-400-header text-14-400 !font-bold xl:!text-[14px]'>Удалить</span>
        </button>
      </div>
    </div>

    <div class='cart-item flex items-center gap-x-5 border-t border-b border-semi-grey py-4 md:gap-x-[57px] xl:gap-x-[127px] xl:justify-between container-padding'>  
      <div class='img self-start mt-2 w-[72px] h-[72px] md:w-[120px] md:h-[120px] xl:w-[80px] xl:h-[80px] 2xl:w-[160px] 2xl:h-[160px] shrink-0'>
        <img src='/img/images/cart/card3.jpg' alt='3'>
      </div>
      
      <div class='info md:flex md:flex-col gap-y-3 xl:flex-row xl:justify-between xl:gap-x-5 xl:items-center'>
     
        <h5 class='text-16-400 xl:w-[13vw] 2xl:w-[270px] shrink-1'>Мастер-класс "Крыло"</h5>
        
        <div class='cart-table flex flex-col md:flex-row md:gap-x-5 xl:gap-x-10 xl:justify-between xl:items-center w-[50vw] md:w-auto'>
        
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[120px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Размер:</span>
            <span class='text-deep-grey w-[100px] md:w-auto xl:w-[120px]'>от 9 до 22 см.</span>
          </div>
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[80px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Монтаж:</span>
            <span class='text-deep-grey w-[100px] md:w-auto xl:w-[120px]'>500 руб.</span>
          </div>
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[104px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Доставка:</span>
            <span class='text-deep-grey w-[100px] md:w-auto xl:w-[120px]'>от 200 руб.</span>
          </div>
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[104px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Цена::</span>
            <span class='text-deep-grey !font-bold w-[100px] md:w-auto xl:w-[120px]'>14 900 руб.</span>
          </div>
        </div>
        
        <div class='check xl:w-[160px]'>
          <div class='price__form-check flex items-center gap-x-3 '>
              <input checked id='primary-checkbox' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'/>
              <label for='primary-checkbox' class='text-light-grey text-14-400 sm:max-w-[330px] 2xl:max-w-[450px]'>
                Подарочным сертификатом
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'/>
            </div>
        </div>
        
        <button class='mt-1 md:mt-0 w-fit xl:w-[61px] shrink-0'>
          <span class='text-primary text-12-400-header text-14-400 !font-bold xl:!text-[14px]'>Удалить</span>
        </button>
      </div>
    </div>
    
    <div class='cart-item flex items-center gap-x-5 border-t border-b border-semi-grey py-4 md:gap-x-[57px] xl:gap-x-[127px] xl:justify-between container-padding'>  
      <div class='img self-start mt-2 w-[72px] h-[72px] md:w-[120px] md:h-[120px] xl:w-[80px] xl:h-[80px] 2xl:w-[160px] 2xl:h-[160px] shrink-0'>
        <img src='/img/images/cart/card3.jpg' alt='4'>
      </div>
      
      <div class='info md:flex md:flex-col gap-y-3 xl:flex-row xl:justify-between xl:gap-x-5 xl:items-center'>
     
        <h5 class='text-16-400 xl:w-[13vw] 2xl:w-[270px] shrink-1'>Мастер-класс "Крыло"</h5>
        
        <div class='cart-table flex flex-col md:flex-row md:gap-x-5 xl:gap-x-10 xl:justify-between xl:items-center w-[50vw] md:w-auto'>
        
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[120px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Размер:</span>
            <span class='text-deep-grey w-[100px] md:w-auto xl:w-[120px]'>от 9 до 22 см.</span>
          </div>
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[80px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Монтаж:</span>
            <span class='text-deep-grey w-[100px] md:w-auto xl:w-[120px]'>500 руб.</span>
          </div>
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[104px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Доставка:</span>
            <span class='text-deep-grey w-[100px] md:w-auto xl:w-[120px]'>от 200 руб.</span>
          </div>
          <div class='flex md:flex-col justify-between items-center md:items-start text-14-400 text-deep-grey xl:w-[104px]'>
            <span class='text-light-grey w-[100px] md:w-auto xl:w-[120px] xl:hidden'>Цена::</span>
            <span class='text-deep-grey !font-bold w-[100px] md:w-auto xl:w-[120px]'>14 900 руб.</span>
          </div>
        </div>
        
        <div class='check xl:w-[160px]'>
          <div class='price__form-check flex items-center gap-x-3 '>
              <input checked id='primary-checkbox' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'/>
              <label for='primary-checkbox' class='text-light-grey text-14-400 sm:max-w-[330px] 2xl:max-w-[450px]'>
                Подарочным сертификатом
              </label>
              <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'/>
            </div>
        </div>
        
        <button class='mt-1 md:mt-0 w-fit xl:w-[61px] shrink-0'>
          <span class='text-primary text-12-400-header text-14-400 !font-bold xl:!text-[14px]'>Удалить</span>
        </button>
      </div>
    </div>
    
  </div>
  
  
  <div class='card-sum w-full bg-lighter-grey mt-5 xl:mt-1'>
  
    <div class='flex flex-col md:flex-row md:justify-center md:gap-x-7 container-padding'>
      <div class='flex justify-center items-center py-3 gap-x-2'>
        <span class='text-16-400'>Итого:</span>
        <span id='cart-price' class='sum text-16-400 !font-bold'>59 600 руб.</span>
      </div>
      
      <button class='footer__button flex-center xl:justify-start'>
        <span class='w-full min-w-[220px] flex justify-center items-center xl:justify-start xl:w-fit text-button-primary bg-primary text-light px-10 py-4'>
          перейти к оформлению
        </span>
      </button>
    </div>
  
  </div>
  
  
`
