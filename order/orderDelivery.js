export const orderDelivery = document.createElement('div')
orderDelivery.classList.add('order-delivery', 'bg-light')

orderDelivery.innerHTML = `

<div class='order-wrapper flex flex-col items-center gap-y-8 md:gap-y-12 2xl:gap-y-20 m-auto px-5 md:px-0 '>

  <div class='order-header w-full pb-0 mx-5 md:mx-10 2xl:mx-16 pt-5 md:pt-10 md:max-w-[688px] xl:max-w-[582px] 2xl:max-w-[816px]'>
    <p class='text-14-300 text-primary'>Вернутся в корзину</p>
    <h1 class='text-26-300 text-black mt-3 2xl:mt-6 mb-[2px] 2xl:mb-2'>Оформление заказа</h1>
    <div class='flex justify-between items-center gap-x-2'>
      <span class='shrink-0 text-14-300 text-light-grey'>Сумма заказа:</span>
      <div class='w-full border-t h-[1px] border-dotted'></div>
      <span class='shrink-0 header-sum text-14-400 !font-bold'>59 600 руб.</span>
    </div>
  </div>
  
</div>


<form action='' class=''>  
  <div class='order-section w-full flex flex-col items-center m-auto px-5 md:px0 py-8 md:py-12 2xl:py-20 border-b border-secondary'>
    <div class='order-wrapper flex flex-col m-auto mx-5 md:mx-10 2xl:mx-16 pb-0 md:max-w-[688px] xl:max-w-[582px] 2xl:max-w-[816px] gap-y-8 md:gap-y-12 2xl:gap-y-20'>
    
      <div class='order-contact'>
        <h3 class='text-20-300 mb-3'>Ваши контактные данные</h3>
        <div class='flex flex-col md:flex-row gap-y-2 gap-x-5'>
          <input type='text' placeholder='имя' name='order-name' class='order-name flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase'>
          <input type='text' placeholder='e-mail' name='order-email' class='order-email flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase'>
          <input type='text' placeholder='телефон' name='order-phone' class='order-phone flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase'>   
        </div>
      </div>
    
        <div class='order-delivery-block flex flex-col gap-y-3'>
          <h3 class='text-20-300 mb-3 2xl:mb-6'>Доставка барельефа</h3>
          <div class='radios flex items-center justify-between md:justify-start gap-x-5 xl:gap-x-10'>
            <div class='mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] flex-1 md:flex-none'>
              <input
                class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-primary before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:z-[2] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-primary checked:before:absolute checked:before:content-[''] checked:before:left-1/2 checked:before:top-1/2 checked:before:[transform:translate(-50%,-50%)] checked:before:h-2 checked:before:w-2 checked:before:rounded-full checked:before:bg-light checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-full checked:after:w-full checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer focus:shadow-none focus:outline-none checked:focus:border-primary"
                type='radio'
                name='radio-delivery'
                id='radio-delivery-1' 
                value='self'
              />
              <label
                class='text-14-300 mt-px inline-block pl-[0.15rem] hover:cursor-pointer'
                for='radio-delivery-1'>
                Самовывоз
              </label>
            </div>
            <div class='mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] flex-1 md:flex-none'>
              <input
                class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-primary before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:z-[2] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-primary checked:before:absolute checked:before:content-[''] checked:before:left-1/2 checked:before:top-1/2 checked:before:[transform:translate(-50%,-50%)] checked:before:h-2 checked:before:w-2 checked:before:rounded-full checked:before:bg-light checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-full checked:after:w-full checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer focus:shadow-none focus:outline-none checked:focus:border-primary"
                type='radio'
                name='radio-delivery'
                id='radio-delivery-2' 
                value='del'
                checked
              />
              <label
                class='text-14-300   mt-px inline-block pl-[0.15rem] hover:cursor-pointer'
                for='radio-delivery-2'>
                Доставка
              </label>
            </div>
          </div>
          
          <div class='toggle-del grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-5 2xl:gap-x-12'>
            <textarea type='text' placeholder='Полный адрес доставки' rows='4' class='delivery-address-textarea col-span-1 md:col-span-2 px-4 py-[15px] w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] placeholder:tracking-[2.1px] placeholder:uppercase'></textarea>
            <div class='flex gap-x-2 px-4 py-[15px] border border-secondary border-l-primary col-span-1 h-[48px] 2xl:h-[64px]'>
              <input type='text' placeholder='Желаемая дата и время' class='delivery-date  w-full h-full placeholder:text-light-grey placeholder:text-[14px] placeholder:tracking-[2.1px] placeholder:uppercase max-h-12'/>
              <svg xmlns='http://www.w3.org/2000/svg' width='25' height='20' viewBox='0 0 25 20' fill='none'>
                <path d='M9.5 2.25H12.5H15.5M4.5 2.25H1V19.25H24V2.25H20.5' stroke='#033260'/>
                <path d='M7 3.75V0.75' stroke='#033260'/>
                <path d='M18 3.75V0.75' stroke='#033260'/>
                <rect x='5' y='6.25' width='3' height='3' stroke='#033260'/>
                <rect x='11' y='6.25' width='3' height='3' stroke='#78848F'/>
                <rect x='17' y='6.25' width='3' height='3' stroke='#78848F'/>
                <rect x='17' y='12.25' width='3' height='3' stroke='#78848F'/>
                <rect x='11' y='12.25' width='3' height='3' stroke='#78848F'/>
                <rect x='5' y='12.25' width='3' height='3' stroke='#78848F'/>
              </svg>
            </div>
            <div class='check-setup flex items-center justify-between col-span-1'>
              <div class='price__form-check flex items-center gap-x-3'>   
                <input id='primary-checkbox' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'/>
                <label for='primary-checkbox' class=' text-14-300'>Нужен монтаж</label>
                <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'/>
              </div>    
              <span class='text-14-300'>+ 500 руб.</span>
            </div>
          </div>
          
          <div class='toggle-self'>
            <p class='toggle-self-address mb-2'>г. Москва, Старомонетный пер., 22, стр. 2</p>
            <button class='flex justify-start items-center text-primary gap-x-2 mb-3'>
              <svg width='22' height='18' viewBox='0 0 22 18' fill='none' xmlns='http://www.w3.org/2000/svg' class='[&>path]:stroke-primary'>
                <path d='M11 0V12M11 12L7 8M11 12L15 8' stroke='#033260'/>
                <path d='M1 12V17H21V12' stroke='#033260'/>
              </svg>
              <span class='text-12-400-header !font-bold text-primary uppercase'>инструкция как нас найти</span>
            </button>
            
            <div class='toggle-self-map m-auto w-full'> 
              <img src='/img/images/order/order-map-2xl.jpg' alt='2xl' class=' 2xl:block'>
            </div>
          </div>

        </div>
        
    </div>
  </div>
  
  <div class='order-section w-full flex flex-col items-center m-auto px-5 md:px0 py-8 md:py-12 2xl:py-20 border-b border-secondary'>
    <div class='order-wrapper flex flex-col w-full m-auto mx-5 md:mx-10 2xl:mx-16 md:max-w-[688px] xl:max-w-[582px] 2xl:max-w-[816px] gap-y-8 md:gap-y-10 xl:gap-y-20'>
    
      <div class='certificate-block flex flex-col'>
        <div class='certificate-block-title flex flex-col mb-3 2xl:mb-6'>
           <h4 class='text-20-300'>Данные для подарочного сертификата 1</h4>
           <p class='text-14-300 text-light-grey'>Мастер-класс "Крыло"</p>
        </div>
        
        <div class='cert-name-input relative mb-4 md:mb-7 2xl:mb-10'>
          <input type='text' placeholder='Иванов Иван Иванович' name='order-name-cert' id='order-name-cert' class='order-name-cert flex px-4 pt-[23px] pb-[7px] 2xl:px-5 w-full 2xl:h-[64px] border border-secondary border-l-primary placeholder:text-dark placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase'>     
          <label for='order-name-cert' class='absolute top-[7px] left-[16px] xl:left-[22px] text-10-350-header light-grey'>ФИО получателя</label>
        </div>
        
        <div class='cert-radios flex items-center justify-between md:justify-start gap-x-5 xl:gap-x-10 mb-2 md:mb-3 2xl:mb-6'>
          <div class='flex items-center mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] flex-1 md:flex-none'>
            <input
              class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-primary before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:z-[2] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-primary checked:before:absolute checked:before:content-[''] checked:before:left-1/2 checked:before:top-1/2 checked:before:[transform:translate(-50%,-50%)] checked:before:h-2 checked:before:w-2 checked:before:rounded-full checked:before:bg-light checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-full checked:after:w-full checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer focus:shadow-none focus:outline-none checked:focus:border-primary shrink-0"
              type='radio'
              name='radio-delivery1'
              id='radio-delivery-1-1' />
            <label
              class='text-14-300 mt-px inline-block pl-[0.15rem] hover:cursor-pointer'
              for='radio-delivery-1-1'>
              Распечатать и отправить по почте
            </label>
          </div>
          <div class='flex items-center mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] flex-1 md:flex-none'>
            <input
              class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-primary before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:z-[2] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-primary checked:before:absolute checked:before:content-[''] checked:before:left-1/2 checked:before:top-1/2 checked:before:[transform:translate(-50%,-50%)] checked:before:h-2 checked:before:w-2 checked:before:rounded-full checked:before:bg-light checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-full checked:after:w-full checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer focus:shadow-none focus:outline-none checked:focus:border-primary shrink-0"
              type='radio'
              name='radio-delivery1'
              id='radio-delivery-2-2' />
            <label
              class='text-14-300   mt-px inline-block pl-[0.15rem] hover:cursor-pointer'
              for='radio-delivery-2-2'>
              Электронный сертификат на email
            </label>
          </div>
        </div>
        
        <div class='cert-address-inputs grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-2 2xl:gap-y-5 2xl:gap-x-5'>
          <input type='text' placeholder='индекс' name='cert-index' class='cert-index flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase col-span-2'>
          <input type='text' placeholder='город' name='cert-city' class='cert-city flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase col-span-2'>
          <input type='text' placeholder='Улица' name='cert-street' class='cert-street flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase col-span-2'>   
          
          <input type='text' placeholder='дом, корпус' name='cert-house' class='cert-house flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase col-span-1'>   
          <input type='text' placeholder='квартира' name='cert-flat' class='cert-flat flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase col-span-1'>   
        </div>
      </div>
      
      <div class='certificate-block flex flex-col'>
        <div class='certificate-block-title flex flex-col mb-3 2xl:mb-6'>
           <h4 class='text-20-300'>Данные для подарочного сертификата 2</h4>
           <p class='text-14-300 text-light-grey'>Мастер-класс "Крыло"</p>
        </div>
        
        <div class='cert-check flex items-center gap-x-3 mb-3 xl:mb-6'>   
          <input id='cert-check-email' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'/>
          <label for='cert-check-email' class=' text-14-300'>Такие же как у первого</label>
          <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'/>
        </div>    
        
        <div class='cert-name-input relative mb-4 md:mb-7 2xl:mb-10'>
          <input type='text' placeholder='Иванов Иван Иванович' name='order-name-cert' id='order-name-cert' class='order-name-cert flex px-4 pt-[23px] pb-[7px] 2xl:px-5 w-full 2xl:h-[64px] border border-secondary border-l-primary placeholder:text-dark placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase'>     
          <label for='order-name-cert' class='absolute top-[7px] left-[16px] xl:left-[22px] text-10-350-header light-grey'>ФИО получателя</label>
        </div>
        
        <div class='cert-radios flex items-center justify-between md:justify-start gap-x-5 xl:gap-x-10 mb-2 md:mb-3 2xl:mb-6'>
          <div class='flex items-center mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] flex-1 md:flex-none'>
            <input
              class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-primary before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:z-[2] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-primary checked:before:absolute checked:before:content-[''] checked:before:left-1/2 checked:before:top-1/2 checked:before:[transform:translate(-50%,-50%)] checked:before:h-2 checked:before:w-2 checked:before:rounded-full checked:before:bg-light checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-full checked:after:w-full checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer focus:shadow-none focus:outline-none checked:focus:border-primary shrink-0"
              type='radio'
              name='radio-delivery2'
              id='radio-delivery-3-3' />
            <label
              class='text-14-300 mt-px inline-block pl-[0.15rem] hover:cursor-pointer'
              for='radio-delivery-3-3'>
              Распечатать и отправить по почте
            </label>
          </div>
          <div class='flex items-center mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] flex-1 md:flex-none'>
            <input
              class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-primary before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:z-[2] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-primary checked:before:absolute checked:before:content-[''] checked:before:left-1/2 checked:before:top-1/2 checked:before:[transform:translate(-50%,-50%)] checked:before:h-2 checked:before:w-2 checked:before:rounded-full checked:before:bg-light checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-full checked:after:w-full checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer focus:shadow-none focus:outline-none checked:focus:border-primary shrink-0"
              type='radio'
              name='radio-delivery2'
              id='radio-delivery-4-4' />
            <label
              class='text-14-300   mt-px inline-block pl-[0.15rem] hover:cursor-pointer'
              for='radio-delivery-4-4'>
              Электронный сертификат на email
            </label>
          </div>
        </div>
        
        <div class='cert-address-inputs grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-2 2xl:gap-y-5 2xl:gap-x-5'>
          <input type='text' placeholder='e-mail на который отправить' name='cert-email' class='cert-index flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase col-span-4'>
        </div>
      </div>

    </div>
  </div>
  
  <div class='order-summary w-full flex flex-col items-center m-auto pt-8 pb-5 md:pt-12 md:pb-10 xl:pb-20 xl:pt-20'>
    <div class='flex flex-col m-auto px-5 md:px-0 md:mx-10 2xl:mx-16 pb-0 md:max-w-[688px] xl:max-w-[582px] 2xl:max-w-[816px]'>
      <div class='order-summary-table flex flex-col gap-y-2 xl:gap-y-4'>
        <div class='order-summary-row flex justify-between items-center gap-x-2'>
          <span class='shrink-0 text-16-400 text-light-grey'>Ваш заказ:</span>
          <div class='w-full border-t h-[1px] border-dotted'></div>
          <span class='shrink-0 header-sum text-16-400'><span>59 500</span> руб</span>
        </div>
        <div class='order-summary-row flex justify-between items-center gap-x-2'>
          <span class='shrink-0 text-16-400 text-light-grey'>Монтаж:</span>
          <div class='w-full border-t h-[1px] border-dotted'></div>
          <span class='shrink-0 header-sum text-16-400'><span>500</span> руб</span>
        </div>
        <div class='order-summary-row flex justify-between items-center gap-x-2'>
          <span class='shrink-0 text-16-400 text-light-grey'>Монтаж:</span>
          <div class='w-full border-t h-[1px] border-dotted'></div>
          <span class='shrink-0 header-sum text-16-400 !font-bold'><span>59 600</span> руб</span>
        </div>
      </div>
      <div class='text-14-300 text-light-grey mt-2 mb-5'>
        <p>Доставка в любую точку мира. Оплачивается отдельно. Для уточнения деталей с вами свяжется персональный менеджер после оплаты заказа. Подробнее на странице <a href='#' class='text-primary'>Доставка и оплата</a></p>
      </div>
      
      <div class='order-summary-accept'>
        <div class='summary-accept-wrap flex flex-col gap-y-3 md:flex-row md:justify-between md:gap-x-5 xl:gap-x-12'>
          <div class='summary-accept-check flex items-center gap-x-3 md:flex-1'>
            <input checked id='summary-accept-checkbox' type='checkbox' value='' class='relative peer shrink-0 appearance-none w-5 h-5 2xl:w-7 2xl:h-7 border border-primary rounded-none bg-light'>
            <label for='summary-accept-checkbox' class='text-light-grey text-10-350-header'>Даю своё согласие на обработку своей персональной информации на условиях, определенных Политикой в отношении обработки персональных данных.
            </label>
            <img src='/img/icons/checked-icon.svg' alt='check arrow' class='absolute w-5 h-5 2xl:w-7 2xl:h-7 hidden peer-checked:block pointer-events-none'>
          </div>
          <button class='summary-accept-button w-full px-4 2xl:px-10 py-[15px] 2xl:py-[22px] text-light text-button-primary uppercase bg-primary sm:px-6 md:flex-1'>
            перейти к оплате
          </button>
        </div>
      </div>
      </div>
  </div>
      
</form>

`
