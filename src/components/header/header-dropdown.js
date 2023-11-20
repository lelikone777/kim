export const headerDropdown = document.createElement('div')
headerDropdown.classList.add('header__dropdown', 'absolute', 'left-0', 'top-5')

headerDropdown.innerHTML = `
<ul class="header__dropdown-list min-w-[225px] bg-light [&>li]:py-2.5 [&>li]:border-b last:[&>li]:border-0 [&>li]:border-semi-grey [&>li>a]:flex [&>li>a]:w-full py-4 px-[28px] text-14-300 text-dark normal-case">
  <li class="header__dropdown-item">
    <a href="#"><span>О студии</span></a>
  </li>
  <li class="header__dropdown-item">
    <a href="#"><span>Эксклюзивные проекты</span></a>
  </li>
  <li class="header__dropdown-item">
    <a href="#"><span>Индивидуальный заказ</span></a>
  </li>
  <li class="header__dropdown-item">
    <a href="#"><span>Дизайнерам</span></a>
  </li>
  
  <li class="header__dropdown-item">
    <a href="#"><span>Команда</span></a>
  </li>
  <li class="header__dropdown-item">
    <a href="#"><span>Блог</span></a>
  </li>
  <li class="header__dropdown-item">
    <a href="#"><span>FAQ</span></a>
  </li>
  <li class="header__dropdown-item">
    <a href="#"><span>Контакты</span></a>
  </li>
</ul>
`
