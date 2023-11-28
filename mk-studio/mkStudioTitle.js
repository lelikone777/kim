export const mkStudioTitle = document.createElement('div')
mkStudioTitle.classList.add('mk-studio__title')

mkStudioTitle.innerHTML = `
  
<div class="academy-profile__wrapper flex flex-col gap-y-1 my-5 ml-auto mr-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl">
  <div class="academy-profile__pagination text-14-400 text-primary mb-1">
    <ul class="flex flex-wrap gap-x-3 gap-y-1">
      <li>
        <a href="#">
          <span>Главная</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span>Академия</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span>Обучение в студии</span>
        </a>
      </li>
      <li>
        <a href="#" class='text-light-grey'>
          <span>Мастер-класс «Крыло»</span>
        </a>
      </li>
     
    </ul>
  </div>

  <div class="academy-profile__title flex mb-3">
    <h2 class=" text-32-300 uppercase">Мастер-класс «Крыло»</h2>
  </div>
</div>
  
`
