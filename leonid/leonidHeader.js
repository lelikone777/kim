export const leonidHeader = document.createElement('header')
leonidHeader.classList.add('leonid__header')

leonidHeader.innerHTML = `

  <div class='header relative text-light bg-hero-secondary-2xl bg-[length:auto_100%] bg-no-repeat bg-top min-h-screen md:bg-cover'>

      <div class='header__container flex flex-col justify-between w-full h-screen m-auto'>
      
        <div class='header__menu--mobile flex-between xl:hidden w-full px-5 md:px-10 pt-3 pb-10 hero-bg-gradient-top'>
          <div class='header__left flex-between w-[86px] shrink-1 mr-2'>
            <button class='header__menu-button w-9 h-9 relative'>
              <img src='/img/icons/burger-logo.svg' alt='menu button' class='flex-center'>
            </button>
            <a href='#' class='header__logo w-[30px] h-[36px]'>
              <img src='/img/icons/main-logo.svg' alt='main logo' class='flex-center h-full'>
            </a>
          </div>
          <div class='header__info flex flex-col items-center max-w-[150px]'>
            <a href='tel:+74951452598' class='text-16-400 whitespace-nowrap'>
              +7 495 145-25-98
            </a>
            <p class='text-10-300 text-center max-w-[95%]'>
              Бесплатная консультация по любым вопросам
            </p>
          </div>
          <a href='#' class='header__cart-button ml-2 w-[33px] h-[27px] relative shrink-0'>
            <img src='/img/icons/cart-logo.svg' alt='cart logo'>
            <div class='header__cart-button_badge absolute top-[-7px] right-[-7px] w-[20px] h-[20px] bg-primary text-light flex-center text-10-400'>
              <span>2</span>
            </div>
          </a>
        </div>

        <div class='header__menu hidden xl:flex xl:flex-col hero-bg-gradient-top'>
          <div class='header__menu-top flex justify-between items-start w-full m-auto px-10 pt-5 pb-5 xl:px-20 2xl:px-[120px] max-w-screen-2xl'>
            <div class='header__address flex flex-col text-left mr-2'>
              <span class='text-10-350-header'>Адрес</span>
              <p class='text-14-400 whitespace-nowrap'>г. Москва, Старомонетный <wbr> пер., 22, стр. 2</p>
            </div>
            <div class='header__time flex flex-col text-left mr-2'>
              <span class='text-10-350-header'>Время работы</span>
              <p class='text-14-400 whitespace-nowrap'>Пн - Пт с 10.00 <wbr> до 18.00</p>
            </div>
            <div class='header__email flex flex-col text-left mr-4'>
              <span class='text-10-350-header'>Электронная почта</span>
              <a href='mailto:zakaz@kimart.ru' class='font-regular-14 whitespace-nowrap'>zakaz@kimart.ru</a>
            </div>
            <div class='header__email flex flex-col text-left mr-2'>
              <span class='text-10-350-header'>Телефон для связи</span>
              <a href='tel:+74951452598' class='font-regular-14 whitespace-nowrap'>+7 (495) 145-25-98</a>
            </div>

            <button type='button' role='button' class='flex-center py-2.5 px-10 border border-light whitespace-nowrap font-regular-12 tracking-[0.6px] uppercase'>
              <span>Написать нам</span>
            </button>

            <a href='#' class='header__cart-button ml-2 w-[36px] h-[36px] relative shrink-0 self-center'>
              <img src='/img/icons/cart-logo.svg' alt='cart logo'>
              <div class='header__cart-button_badge absolute top-[-7px] right-[-7px] w-[20px] h-[20px] bg-primary text-light flex-center font-regular-10'>
                <span>1</span>
              </div>
            </a>
          </div>

          <div class='header__menu-bottom relative flex-between w-full m-auto px-10 xl:px-20 2xl:px-[120px] pt-5 max-w-screen-2xl'>
            <div class='header__line absolute left-0 top-0 h-[2px] bg-grey w-full'></div>
            <a href='#' class='header__logo w-[27px] h-[32px] 2xl:w-[32px] 2xl:h-[32px] shrink-0 mr-20'>
              <img src='/img/icons/main-logo.svg' alt='main logo' class='flex-center h-full'>
            </a>

            <nav class='header__nav w-full'>
              <ul class='flex-between w-full uppercase text-12-400-header [&>li]:relative'>
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
              <span class='text-12-400-header'>EN</span>
            </a>
            
          </div>

        </div>

        <div class='header__title text-left px-5 pb-5 md:px-10 md:pb-10 xl:px-20 xl:pb-20 hero-bg-gradient-top hero-bg-gradient-bottom'>
          <div class='max-w-screen-2xl m-auto'>
            <div class='h1-pagination'>
              <ul class='text-14-300 !font-light flex flex-wrap gap-x-3'>
                <li>
                  Главная
                </li>
                <li>
                  О студии
                </li>
                <li class='light-grey'>
                  Леонид Ким     
                </li>
              </ul>
            </div>
            <h1 class='text-32-300'>
              Леонид Ким <span class='relative ml-2 inline-block bg-accent py-[2px] 2xl:py-[4px] px-2.5 text-light text-[10px] md:text-[14px] xl:text-[20px] leading-[140%] 2xl:leading-[160%] tracking-[0.3px] md:tracking-[0.6px] normal-case before:absolute before:content-[&quot;&quot;] before:w-0 before:h-0 before:border-t-[22px] before:border-r-0 before:border-b-0 before:border-l-[5px] before:border-l-transparent before:border-solid before:border-accent before:top-0 before:left-[-4px] after:absolute after:content-[&quot;&quot;] after:w-0 after:h-0 after:border-b-[22px] after:border-r-0 after:border-t-0 after:border-l-[5px] after:border-l-transparent after:border-solid after:border-accent after:bottom-0 after:left-[-4px]'>Основатель <br class=''> студии</span>

            </h1>
          </div>
        </div>
      </div>
      
    </div>

`
