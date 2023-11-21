export const headerPrimary = document.createElement('header')
headerPrimary.classList.add('header-primary')

headerPrimary.innerHTML = `
<div class='header relative text-primary'>

  <div class='header__container flex flex-col justify-between w-full m-auto'>
  
    <div class='header__menu--mobile flex-between xl:hidden w-full px-5 md:px-10 py-3 '>
      <div class='header__left flex-between w-[86px] shrink-1 mr-2'>
        <button class='header__menu-button flex-center w-9 h-9 relative'>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class='[&>path]:stroke-primary'>
            <path d="M0 8H12" stroke="white"/>
            <path d="M0 18H24" stroke="white"/>
            <path d="M0 28H20" stroke="white"/>
          </svg>
        </button>
        <a href='#' class='header__logo w-[30px] h-[36px]'>
          <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg" class='[&>path]:stroke-primary [&>path]:fill-primary'>
            <path d="M26.2216 36.0001H4.17401L0 31.8338V25.7122L4.17401 21.5459H26.2216L30.3956 25.7122V31.8338L26.2216 36.0001ZM4.17401 31.8338H26.2216V25.7122H4.17401V31.8338Z" fill="white"/>
            <path d="M27.2868 0L23.8235 1.85186L26.2407 5.78513V20.0339H27.7381L30.394 17.3813L30.413 5.1362L27.2868 0Z" fill="white"/>
            <path d="M22.2291 5.7041H0V9.87036H18.1519C14.469 13.4981 7.90019 15.6469 0 15.6469V17.195L2.54867 19.7389C6.86274 19.4956 10.8846 18.6344 14.2995 17.2088C18.9197 15.2775 22.3104 12.3384 24.1017 8.70712L22.2291 5.7041Z" fill="white"/>
          </svg>

        </a>
      </div>
      <div class='header__info flex flex-col items-center max-w-[150px]'>
        <a href='tel:+74951452598' class='text-16-400 !font-bold whitespace-nowrap'>
          +7 495 145-25-98
        </a>
        <p class='text-10-300 text-center max-w-[95%]'>
          Бесплатная консультация по любым вопросам
        </p>
      </div>
      <a href='#' class='header__cart-button ml-2 w-[33px] h-[27px] relative shrink-0'>
        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg" class='[&>path]:stroke-primary '>
          <path d="M21.6301 25.1958C21.6301 26.3004 22.5256 27.1958 23.6301 27.1958C24.7347 27.1958 25.6301 26.3004 25.6301 25.1958C25.6301 24.0912 24.7347 23.1958 23.6301 23.1958C22.5256 23.1958 21.6301 24.0912 21.6301 25.1958Z" stroke="white"/>
          <path d="M10.4569 25.1958C10.4569 26.3004 11.3523 27.1958 12.4569 27.1958C13.5615 27.1958 14.4569 26.3004 14.4569 25.1958C14.4569 24.0912 13.5615 23.1958 12.4569 23.1958C11.3523 23.1958 10.4569 24.0912 10.4569 25.1958Z" stroke="white"/>
          <path d="M29.3478 19.2609H8.04348L7.5 4.65217H9.56522H12.913H19.6087H33L31.1739 11.9565L30.2609 15.6087M5.6087 1H0.130444" stroke="white"/>
        </svg>

        <div class='header__cart-button_badge absolute top-[-7px] right-[-7px] w-[20px] h-[20px] bg-primary text-light flex-center text-10-400'>
          <span>2</span>
        </div>
      </a>
    </div>

    <div class='header__menu hidden xl:flex xl:flex-col'>
      <div class='header__menu-top flex justify-between items-start w-full m-auto px-10 pt-5 pb-5 xl:px-20 2xl:px-[120px] max-w-screen-2xl'>
        <div class='header__address flex flex-col text-left mr-2'>
          <span class='text-10-350-header'>Адрес</span>
          <p class='text-14-400 !font-bold whitespace-nowrap'>г. Москва, Старомонетный <wbr> пер., 22, стр. 2</p>
        </div>
        <div class='header__time flex flex-col text-left mr-2'>
          <span class='text-10-350-header'>Время работы</span>
          <p class='text-14-400 !font-bold whitespace-nowrap'>Пн - Пт с 10.00 <wbr> до 18.00</p>
        </div>
        <div class='header__email flex flex-col text-left mr-4'>
          <span class='text-10-350-header'>Электронная почта</span>
          <a href='mailto:zakaz@kimart.ru' class='text-14-400 !font-bold whitespace-nowrap'>zakaz@kimart.ru</a>
        </div>
        <div class='header__email flex flex-col text-left mr-2'>
          <span class='text-10-350-header'>Телефон для связи</span>
          <a href='tel:+74951452598' class='text-14-400 !font-bold whitespace-nowrap'>+7 (495) 145-25-98</a>
        </div>

        <button type='button' role='button' class='flex-center py-2.5 px-4 border border-primary whitespace-nowrap text-12-400-header !font-bold uppercase'>
          <span>Написать нам</span>
        </button>

        <a href='#' class='header__cart-button ml-2 w-[36px] h-[36px] relative shrink-0 self-center'>
           <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg" class='[&>path]:stroke-primary '>
            <path d="M21.6301 25.1958C21.6301 26.3004 22.5256 27.1958 23.6301 27.1958C24.7347 27.1958 25.6301 26.3004 25.6301 25.1958C25.6301 24.0912 24.7347 23.1958 23.6301 23.1958C22.5256 23.1958 21.6301 24.0912 21.6301 25.1958Z" stroke="white"/>
            <path d="M10.4569 25.1958C10.4569 26.3004 11.3523 27.1958 12.4569 27.1958C13.5615 27.1958 14.4569 26.3004 14.4569 25.1958C14.4569 24.0912 13.5615 23.1958 12.4569 23.1958C11.3523 23.1958 10.4569 24.0912 10.4569 25.1958Z" stroke="white"/>
            <path d="M29.3478 19.2609H8.04348L7.5 4.65217H9.56522H12.913H19.6087H33L31.1739 11.9565L30.2609 15.6087M5.6087 1H0.130444" stroke="white"/>
          </svg>
          <div class='header__cart-button_badge absolute top-[-7px] right-[-7px] w-[20px] h-[20px] bg-primary text-light flex-center font-regular-10'>
            <span>1</span>
          </div>
        </a>
      </div>

      <div class='header__menu-bottom relative flex-between w-full m-auto px-10 xl:px-20 2xl:px-[120px] pt-5 pb-5 max-w-screen-2xl'>
        <div class='header__line absolute left-0 top-0 h-[2px] bg-semi-grey w-full'></div>
        <a href='#' class='header__logo w-[27px] h-[32px] 2xl:w-[32px] 2xl:h-[32px] shrink-0 mr-20'>
          <img src='/img/icons/main-logo.svg' alt='main logo' class='flex-center h-full'>
        </a>

        <nav class='header__nav w-full'>
          <ul class='flex-between w-full uppercase text-12-400-header [&>li]:relative [&>li>a>span]:!font-bold'>
            <li class='header__nav-item'>
              <a href='#' class='header__nav-link'><span>Студия</span></a>
            </li>
            <li class='header__nav-item'>
              <a href='#' class='header__nav-link'><span>Проекты</span></a>
            </li>
            <li class='header__nav-item'>
              <a href='#' class='header__nav-link'><span>Магазин</span></a>
            </li>
            <li class='header__nav-item'>
              <a href='#' class='header__nav-link'><span>Академия</span></a>
            </li>
            <li class='header__nav-item'>
              <a href='#' class='header__nav-link'><span>Дизайнерам</span></a>
            </li>
            <li class='header__nav-item'>
              <a href='#' class='header__nav-link'><span>FAQ</span></a>
            </li>
            <li class='header__nav-item'>
              <a href='#' class='header__nav-link'><span>Контакты</span></a>
            </li>
          </ul>
        </nav>

        <a href='#' class='header__lang flex-between ml-20'>
          <div class='header__lang-icon flex-center mr-2'>
            <img src='/img/icons/flag-logo-eng.svg' alt='flag eng' class='2xl:w-[32px] 2xl:h-[26px]'>
          </div>
          <span class='text-12-400-header !font-bold'>EN</span>
        </a>
        
      </div>

    </div>

  
  </div>
  
</div>
`
