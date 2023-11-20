import { headerDropdown } from './header-dropdown.js'

export const headerMobile = document.createElement('div')
headerMobile.classList.add(
  'header__mobile--nav',
  'absolute',
  'left-0',
  'top-14',
  'z-50',
)

headerMobile.innerHTML = `
<div class="header__mobile-wrapper flex flex-col p-4 min-w-[280px] bg-light text-dark">

  <div class='header__mobile-top pt-4 pb-8 flex-between'>
    <button class='header__mobile-close'>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L21 21" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
        <path d="M1 21L21 1" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>    
    <a href="#" class="header__lang flex">
      <div class="header__lang-icon flex-center mr-2">
        <img src="/src/img/icons/flag-logo-eng.svg" alt="flag eng" class="2xl:w-[32px] 2xl:h-[26px]"/>
      </div>
      <span class="text-14-300">English version</span>
    </a>

  </div>
  
  <nav class='header__mobile-nav flex flex-col gap-y-[32px]'>
    <div class='table'>
      <h6 class="mb-1 text-start text-16-400 !font-bold">О нас</h6>
      <ul class="header__list [&>li]:py-2.5 [&>li]:border-b [&>li]:border-semi-grey [&>li>a]:flex [&>li>a]:w-full">
        <li class="header__list-item">
          <a href="#"><span>О студии</span></a>
        </li>
        <li class=header__list-item">
          <a href="#"><span>Эксклюзивные проекты</span></a>
        </li>
        <li class="header__list-item">
          <a href="#"><span>Дизайнерам</span></a>
        </li>
        <li class="header__list-item">
          <a href="#"><span>Команда</span></a>
        </li>
        <li class="header__list-item">
          <a href="#"><span>Блог</span></a>
        </li>
        <li class="header__list-item">
          <a href="#"><span>FAQ</span></a>
        </li>
        <li class="header__list-item">
          <a href="#"><span>Контакты</span></a>
        </li>
      </ul>
    </div>
    
    <div class='table'>
      <h6 class="mb-1 text-start text-16-400 !font-bold">Магазин</h6>
      <ul class="header__list [&>li]:py-2.5 [&>li]:border-b [&>li]:border-semi-grey [&>li>a]:flex [&>li>a]:w-full">
        <li class="header__list-item">
          <a href="#"><span>Тиражная коллекция</span></a>
        </li>
        <li class=header__list-item">
          <a href="#"><span>Люксовая коллекция</span></a>
        </li>
        <li class="header__list-item">
          <a href="#"><span>Оплата и доставка</span></a>
        </li>
      </ul>
    </div>
    
    <div class='table'>
      <h6 class="mb-1 text-start text-16-400 !font-bold">Академия</h6>
      <ul class="header__list [&>li]:py-2.5 [&>li]:border-b [&>li]:border-semi-grey [&>li>a]:flex [&>li>a]:w-full">
        <li class="header__list-item">
          <a href="#"><span>Онлайн</span></a>
        </li>
        <li class=header__list-item">
          <a href="#"><span>Офлайн</span></a>
        </li>
        <li class="header__list-item">
          <a href="#"><span>Личное наставничество</span></a>
        </li>
      </ul>
    </div>
  </nav>
  
  <div class='header__mobile-bottom mt-[32px]'>
    <div class='header__mobile-buttons flex items-center justify-between gap-x-2'>
      <button class="footer__button flex-center w-full">
        <span class="w-full text-light bg-primary px-5 py-3 ">
          Связаться с нами
        </span>
      </button>
      <button class='header__mobile-whatsapp w-[48px] h-[48px] flex-center bg-primary shrink-0'>
        <svg class='fill-light' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class='fill-light' fill-rule="evenodd" clip-rule="evenodd" d="M5.4023 18.2323L5.05439 18.039L4.66881 18.1376L2.75218 18.628L3.25619 16.7872L3.37655 16.3476L3.12372 15.9684L2.88074 15.6039C1.98713 14.1847 1.5 12.4992 1.5 10.7731C1.5 5.83084 5.50514 1.85645 10.4583 1.85645C15.4252 1.85645 19.5 5.80265 19.5 10.7731C19.5 15.7679 15.4007 19.8564 10.5 19.8564C8.83401 19.8564 7.22296 19.3378 5.81958 18.4655L5.79875 18.4525L5.77731 18.4406L5.4023 18.2323ZM1.33337 20.0231L2.44827 19.7379L4.91665 19.1064L5.29166 19.3148C6.83332 20.2731 8.62501 20.8564 10.5 20.8564C15.9583 20.8564 20.5 16.3148 20.5 10.7731C20.5 5.23142 15.9583 0.856445 10.4583 0.856445C4.95833 0.856445 0.5 5.27309 0.5 10.7731C0.5 12.6898 1.04167 14.5648 2.04166 16.1481L2.29169 16.5231L1.63728 18.9132L1.33337 20.0231ZM6.91339 6.85645L7.49635 6.88566C7.61909 6.88566 7.71113 6.97326 7.74185 7.0609L8.63167 8.95921C8.66232 9.04685 8.63167 9.16367 8.57028 9.25127L7.83389 10.0398C7.77251 10.0982 7.77251 10.1858 7.8032 10.2734C8.7544 12.0257 10.5033 12.7266 11.025 12.9019C11.117 12.931 11.209 12.9019 11.2704 12.8434L12.0375 11.9089C12.1295 11.7921 12.283 11.7628 12.4057 11.8213L14.3388 12.6682C14.4615 12.7266 14.5229 12.8726 14.4922 12.9895L14.4001 13.3983C14.3081 13.8364 14.0319 14.2453 13.6024 14.5081C13.0501 14.8294 12.375 14.9754 11.5159 14.7418C8.81578 14.0116 7.28162 12.3178 6.48384 11.2664C5.68607 10.215 5.34856 9.16367 5.56333 8.28751C5.68607 7.70339 6.1463 7.26533 6.42246 7.03169C6.54519 6.91487 6.72927 6.85645 6.91339 6.85645Z" fill="#033260"/>
          </svg>
      </button>
    </div>
    
  </div>
  
  
</div>
</div>
`
