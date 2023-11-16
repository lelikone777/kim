export const mainFooter = document.createElement('footer')
mainFooter.innerHTML = `
<div class="footer">
      <div class="footer__container">
        <div
          class="footer__wrap flex gap-y-5 md:gap-y-10 flex-col pt-10 md:pt-16 pb-5 md:pb-10 xl:p-20 w-full m-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-3xl"
        >
          <a href="#" class="footer__lang w-full flex">
            <div class="header__lang-icon flex-center mr-2">
              <img
                src="/src/img/icons/flag-logo-eng.svg"
                alt="flag eng"
                class="2xl:w-[32px] 2xl:h-[26px]"
              />
            </div>
            <span class="font-semi-14 leading-[157%] tracking-[0.42px]"
              >English version</span
            >
          </a>

          <div
            class="footer__nav flex flex-col md:flex-row justify-between gap-y-5 md:gap-y-10 md:gap-x-10 w-full font-semi-14"
          >
            <div class="footer__table flex flex-1 flex-col">
              <h6 class="mb-1 font-semi-16 font-bold">О нас</h6>
              <div
                class="xl:flex xl:justify-between w-full gap-y-5 md:gap-y-10 md:gap-x-10"
              >
                <ul class="footer__list w-full">
                  <li
                    class="footer__list-item py-2.5 border-b border-semi-grey"
                  >
                    <a class="flex w-full" href="#"><span>О студии</span></a>
                  </li>
                  <li
                    class="footer__list-item py-2.5 border-b border-semi-grey"
                  >
                    <a class="flex w-full" href="#"
                      ><span>Эксклюзивные проекты</span></a
                    >
                  </li>
                  <li
                    class="footer__list-item py-2.5 border-b border-semi-grey"
                  >
                    <a class="flex xl:w-full" href="#"
                      ><span>Индивидуальный заказ</span></a
                    >
                  </li>
                  <li
                    class="footer__list-item py-2.5 border-b border-semi-grey"
                  >
                    <a class="flex xl:w-full" href="#"
                      ><span>Дизайнерам</span></a
                    >
                  </li>
                </ul>
                <ul class="footer__list w-full">
                  <li
                    class="footer__list-item py-2.5 border-b border-semi-grey"
                  >
                    <a class="flex w-full" href="#"><span>Команда</span></a>
                  </li>
                  <li
                    class="footer__list-item py-2.5 border-b border-semi-grey"
                  >
                    <a class="flex w-full" href="#"><span>Блог</span></a>
                  </li>
                  <li
                    class="footer__list-item py-2.5 border-b border-semi-grey"
                  >
                    <a class="flex w-full" href="#"><span>FAQ</span></a>
                  </li>
                  <li
                    class="footer__list-item py-2.5 border-b border-semi-grey"
                  >
                    <a class="flex w-full" href="#"><span>Контакты</span></a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="footer__table flex flex-col xl:flex-row flex-1 justify-between gap-y-5 md:gap-y-10 md:gap-x-10"
            >
              <div class="xl:w-full">
                <h6 class="mb-1 font-semi-16 font-bold">Магазин</h6>
                <ul class="footer__list">
                  <li
                    class="footer__list-item py-2.5 border-b border-semi-grey"
                  >
                    <a class="flex w-full" href="#"
                      ><span>Тиражная коллекция</span></a
                    >
                  </li>
                  <li
                    class="footer__list-item py-2.5 border-b border-semi-grey"
                  >
                    <a class="flex w-full" href="#"
                      ><span>Люксовая коллекция</span></a
                    >
                  </li>
                  <li
                    class="footer__list-item py-2.5 border-b border-semi-grey"
                  >
                    <a class="flex w-full" href="#"
                      ><span>Оплата и доставка</span></a
                    >
                  </li>
                </ul>
              </div>

              <div class="xl:w-full">
                <h6 class="mb-1 font-semi-16 font-bold">Академия</h6>
                <ul class="footer__list">
                  <li
                    class="footer__list-item py-2.5 border-b border-semi-grey"
                  >
                    <a class="flex w-full" href="#"><span>Онлайн</span></a>
                  </li>
                  <li
                    class="footer__list-item py-2.5 border-b border-semi-grey"
                  >
                    <a class="flex w-full" href="#"
                      ><span>Обучение в студии</span></a
                    >
                  </li>
                  <li
                    class="footer__list-item py-2.5 border-b border-semi-grey"
                  >
                    <a class="flex w-full" href="#"
                      ><span>Личное наставничество</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col md:flex-row md:justify-between gap-5 md:gap-10"
          >
            <button
              class="footer__button flex-center xl:justify-start flex-1 md:flex-1 md:order-1 w-full"
            >
              <span
                class="w-full min-w-[220px] flex justify-center items-center xl:justify-start xl:w-fit bg-primary font-semi-14 text-light leading-normal uppercase tracking-[2.1px] px-5 py-4"
                >Связаться с нами</span
              >
            </button>

            <div
              class="footer__contacts flex flex-1 justify-between gap-x-8 md:gap-x-5"
            >
              <div class="footer__phone flex-1">
                <a
                  href="tel:+74951452598"
                  class="flex font-semi-16 font-bold tracking-[0.48px]"
                  >+7 495 145-25-98</a
                >
                <span class="flex font-semi-10 leading-[150%] tracking-[0.3px]"
                  >Бесплатная консультация по любым вопросам</span
                >
              </div>
              <div class="footer__email flex-1">
                <a
                  href="mailt:zakaz@kimart.ru"
                  class="flex font-semi-16 font-bold tracking-[0.48px]"
                  >zakaz@kimart.ru</a
                >
                <span class="flex font-semi-10 leading-[150%] tracking-[0.3px]"
                  >Если хотите консультацию в письменном виде</span
                >
              </div>
            </div>
          </div>

          <div class="flex flex-col md:gap-y-10 md:gap-x-10&quot;">
            <div
              class="footer__agreements flex flex-col gap-y-1 text-primary font-semi-14 leading-[22px] tracking-[0.42px]"
            >
              <a href="#" class="flex"
                >Согласие Пользователя на обработку персональных данных</a
              >
              <a href="#" class="flex"
                >Политика Академии дополнительно образования «Образовариум»</a
              >
              <a href="#" class="flex">Пользовательское соглашение</a>
            </div>

            <div
              class="footer__address flex flex-col gap-y-5 md:gap-y-4 font-semi-14 leading-[22px] tracking-[0.42px]"
            >
              <a href="#" class="flex"
                >ИП Ким Леонид Сергеевич / ИНН: 616108063916 / ОГРН:
                318619600249722</a
              >
              <a href="#" class="flex">kimart.ru © 2023 </a>
              <a href="#" class="flex">Дизайн сайта: Борис Лужин</a>
            </div>
          </div>
        </div>
      </div>
    </div>
`
