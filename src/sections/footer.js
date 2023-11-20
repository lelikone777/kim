export const mainFooter = document.createElement('footer')
mainFooter.innerHTML = `
<div class='footer'>
  <div class='footer__container'>
    <div class='footer__wrap flex gap-y-5 md:gap-y-10 flex-col pt-10 md:pt-16 pb-5 md:pb-10 xl:p-20 w-full m-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl border-t border-t-semi-grey'>
      <a href='#' class='footer__lang w-full flex'>
        <div class='header__lang-icon flex-center mr-2'>
          <img src='/img/icons/flag-logo-eng.svg' alt='flag eng' class='2xl:w-[32px] 2xl:h-[26px]'/>
        </div>
        <span class='text-14-300'>English version</span>
      </a>

      <div class='footer__nav flex flex-col md:flex-row justify-between gap-y-5 md:gap-y-10 md:gap-x-10 w-full text-14-300'>
        <div class='footer__table flex flex-1 flex-col'>
          <h6 class='mb-1 text-16-400 !font-bold'>О нас</h6>
          <div class='xl:flex xl:justify-between w-full gap-y-5 md:gap-y-10 md:gap-x-10'>
            <ul class='footer__list w-full [&>li]:py-2.5 [&>li]:border-b [&>li]:border-semi-grey [&>li>a]:flex [&>li>a]:w-full'>
              <li class='footer__list-item'>
                <a href='#'><span>О студии</span></a>
              </li>
              <li class='footer__list-item'>
                <a href='#'><span>Эксклюзивные проекты</span></a>
              </li>
              <li class='footer__list-item'>
                <a href='#'><span>Индивидуальный заказ</span></a>
              </li>
              <li class='footer__list-item'>
                <a href='#'><span>Дизайнерам</span></a>
              </li>
            </ul>
            <ul class='footer__list w-full [&>li]:py-2.5 [&>li]:border-b [&>li]:border-semi-grey [&>li>a]:flex [&>li>a]:w-full'>
              <li class='footer__list-item'>
                <a href='#'><span>Команда</span></a>
              </li>
              <li class='footer__list-item'>
                <a href='#'><span>Блог</span></a>
              </li>
              <li class='footer__list-item'>
                <a href='#'><span>FAQ</span></a>
              </li>
              <li class='footer__list-item'>
                <a href='#'><span>Контакты</span></a>
              </li>
            </ul>
          </div>
        </div>

        <div class='footer__table flex flex-col xl:flex-row flex-1 justify-between gap-y-5 md:gap-y-10 md:gap-x-10'>
          <div class='xl:w-full'>
            <h6 class='mb-1 text-16-400 !font-bold'>Магазин</h6>
            <ul class='footer__list [&>li]:py-2.5 [&>li]:border-b [&>li]:border-semi-grey [&>li>a]:flex [&>li>a]:w-full'>
              <li class='footer__list-item'>
                <a href='#'><span>Тиражная коллекция</span></a>
              </li>
              <li class='footer__list-item'>
                <a href='#'><span>Люксовая коллекция</span></a>
              </li>
              <li class='footer__list-item'>
                <a href='#'><span>Оплата и доставка</span></a>
              </li>
            </ul>
          </div>

          <div class='xl:w-full'>
            <h6 class='mb-1 text-16-400 !font-bold'>Академия</h6>
            <ul class='footer__list [&>li]:py-2.5 [&>li]:border-b [&>li]:border-semi-grey [&>li>a]:flex [&>li>a]:w-full'>
              <li class='footer__list-item'>
                <a href='#'><span>Онлайн</span></a>
              </li>
              <li class='footer__list-item'>
                <a href='#'><span>Обучение в студии</span></a>
              </li>
              <li class='footer__list-item'>
                <a href='#'><span>Личное наставничество</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class='flex flex-col md:flex-row md:justify-between gap-5 md:gap-10'>
        <button class='footer__button flex-center xl:justify-start flex-1 md:flex-1 md:order-1 w-full'>
          <span class='w-full min-w-[220px] flex justify-center items-center xl:justify-start xl:w-fit text-button-primary px-5 py-4'>
            Связаться с нами
          </span>
        </button>

        <div class='footer__contacts flex flex-1 justify-between gap-x-8 md:gap-x-5'>
          <div class='footer__phone flex-1'>
            <a href='tel:+74951452598' class='flex text-16-400 !font-bold'>+7 495 145-25-98</a>
            <span class='flex text-10-400'>Бесплатная консультация по любым вопросам</span>
          </div>
          <div class='footer__email flex-1'>
            <a href='mailto:zakaz@kimart.ru' class='flex text-16-400 !font-bold'>zakaz@kimart.ru</a>
            <span class='flex text-10-400'>Если хотите консультацию в письменном виде</span>
          </div>
        </div>
      </div>

      <div class='flex flex-col gap-y-5 md:gap-y-10 md:gap-x-10 text-14-300'>
        <div class='footer__agreements flex flex-col gap-y-1 text-primary [&>a]:flex'>
          <a href='#'>Согласие Пользователя на обработку персональных данных</a>
          <a href='#'>Политика Академии дополнительно образования «Образовариум»</a>
          <a href='#'>Пользовательское соглашение</a>
        </div>

        <div class='footer__address flex flex-col gap-y-5 md:gap-y-4 [&>p]:flex'>
          <p>ИП Ким Леонид Сергеевич / ИНН: 616108063916 / ОГРН:318619600249722</p>
          <p>kimart.ru © 2023 </p>
          <p>Дизайн сайта: Борис Лужин</p>
        </div>
      </div>
      
    </div>
  </div>
</div>
`
