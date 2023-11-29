export const mkOnlineTitle = document.createElement('div')
mkOnlineTitle.classList.add('mk-online__title')

mkOnlineTitle.innerHTML = `
  
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
          <span>Видео курсы</span>
        </a>
      </li>
      <li>
        <a href="#" class='text-light-grey'>
          <span>Мастер-класс «Рыбка»</span>
        </a>
      </li>
     
    </ul>
  </div>

  <div class="academy-profile__title flex mb-3">
    <h2 class=" text-32-300 uppercase">Мастер-класс «Рыбка»</h2>
  </div>
</div>
  
`
