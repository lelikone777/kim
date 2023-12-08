export const articleNewsTitle = document.createElement('section')
articleNewsTitle.classList.add('article-news__title')

articleNewsTitle.innerHTML = `
  
<div class="wrapper flex flex-col gap-y-1 xl:gap-x-[42px] 2xl:gap-x-[48px] my-5 m-auto xl:flex-row xl:justify-between max-w-screen-2xl overflow-hidden">
  
  <div class='group flex flex-col justify-center xl:w-full'>
  <div class='box flex flex-col px-5 md:px-10 xl:px-20 2xl:px-[120px] xl:self-center mt-5 2xl:mt-10 w-full mb-5 2xl:mb-10'>
  
    <div class='flex flex-col gap-y-1'>
      <div class="pagination text-14-400 text-primary">
        <ul class="flex flex-wrap gap-x-3 gap-y-1">
          <li>
            <a href="#">
              <span>Главная</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Блог</span>
            </a>
          </li>
          <li>
            <a href="#" class='text-light-grey'>
              <span>Название статьи</span>
            </a>
          </li>
        </ul>
      </div>
    
      <div class="title flex">
        <h2 class=" text-32-300 uppercase">Название статьи</h2>
      </div>
      
      <span class='text-10-350-header text-deep-grey'>02.08.2023</span>
    </div>
    
  </div>
  <div class='lines flex items-center gap-x-5'>
    <div class='right-line w-5 xl:w-[60px] 2xl:w-[100px] h-[1px] border-t border-semi-grey hidden md:block'></div>
    
    <div class='bottom flex gap-x-5 [&_div]:flex [&_div]:items-center px-5 md:px-0 relative shrink-0'>
      <div class='time'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7.5" stroke="#78848F"/>
          <path d="M8 5V9H12" stroke="#78848F"/>
        </svg>
        <span class='text-light-grey ml-2'>5 минут</span>
      </div>
      <div class='like'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
          <path d="M9 15C2.87187 10.239 1 8.03847 1 5.50868C1 3.03122 2.79375 1 5.25 1C6.95312 1 8.21875 2.031 9 3.49286C9.78125 2.031 11.0469 1 12.75 1C15.2062 1 17 3.03122 17 5.50868C17 7.81996 15.575 9.89119 9 15Z" stroke="#033260"/>
        </svg>
        <span class='text-light-grey ml-2'>22</span>
      </div>
      <div class='repost'>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
          <path d="M11.005 6C6 8 3.5 10.3235 2 14.5C5.5 12 6.5 11 11.005 10.5V16L18 8.45455L11.005 2V6Z" stroke="#033260"/>
        </svg>
        <span class='text-light-grey ml-2'>9</span>
      </div>
      <div class='views'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
          <path d="M0.61356 7.01517C0.609999 7.01005 0.606485 7.00499 0.603019 7C0.606485 6.99501 0.609999 6.98995 0.61356 6.98483C0.742683 6.7993 0.934335 6.5325 1.18181 6.21157C1.67738 5.56888 2.39356 4.71328 3.27651 3.85943C5.06226 2.13254 7.44027 0.5 10 0.5C12.5597 0.5 14.9377 2.13254 16.7235 3.85943C17.6064 4.71328 18.3226 5.56888 18.8182 6.21157C19.0657 6.5325 19.2573 6.7993 19.3864 6.98483C19.39 6.98995 19.3935 6.99501 19.397 7C19.3935 7.00499 19.39 7.01005 19.3864 7.01517C19.2573 7.2007 19.0657 7.4675 18.8182 7.78843C18.3226 8.43112 17.6064 9.28672 16.7235 10.1406C14.9377 11.8675 12.5597 13.5 10 13.5C7.44027 13.5 5.06226 11.8675 3.27651 10.1406C2.39356 9.28672 1.67738 8.43112 1.18181 7.78843C0.934335 7.4675 0.742683 7.2007 0.61356 7.01517Z" stroke="#78848F"/>
          <circle cx="10" cy="7" r="2.5" stroke="#78848F"/>
        </svg>
        <span class='text-light-grey ml-2'>124</span>
      </div>
    </div>
    
    <div class='left-line h-[1px] border-t border-semi-grey w-max flex-1 hidden md:flex'></div>
  </div>
</div>
  
  <div class='img mt-5 2xl:mt-10 xl:pr-20 2xl:pr-[120px] shrink-0'>
    <img src='/img/images/article-news/title-2xl.jpg' alt='title'>
  </div>
  
</div>


<div class='text-wrap flex flex-col gap-y-8 2xl:gap-y-16 text-16-400 px-5 md:px-10 xl:px-[288px] max-w-screen-2xl m-auto my-10 md:my-20 xl:my-[104px]'>

  <div class='paragraph flex flex-col gap-y-3'>
    <h2 class='text-26-300'>Заголовок H2</h2>
    <p>Также как курс на социально-ориентированный национальный проект прекрасно подходит для реализации системы обучения кадров, соответствующей насущным потребностям. Таким образом, постоянный количественный рост и сфера нашей активности не даёт нам иного выбора, кроме определения поэтапного и последовательного развития общества. Не следует, однако, забывать, что внедрение современных методик однозначно фиксирует необходимость инновационных методов управления процессами.</p>
  </div>
  
  <div class='paragraph flex flex-col gap-y-3'>
    <h3 class='text-24-300'>Заголовок H3</h3>
    <p>А также сторонники тоталитаризма в науке представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть преданы социально-демократической анафеме. Банальные, но неопровержимые выводы, а также тщательные исследования конкурентов призывают нас к новым свершениям, которые, в свою очередь, должны быть в равной степени предоставлены сами себе.</p>
    <p>Следует отметить, что сплочённость команды профессионалов способствует повышению качества форм воздействия. Повседневная практика показывает, что новая модель организационной деятельности, в своём классическом представлении, допускает внедрение существующих финансовых и административных условий. В рамках спецификации современных стандартов, многие известные личности своевременно верифицированы.</p>
  </div>
  
  <div class='paragraph flex flex-col gap-y-3'>
    <h4 class='text-20-300'>Заголовок H4</h4>
    <p>Как уже неоднократно упомянуто, предприниматели в сети интернет, превозмогая сложившуюся непростую экономическую ситуацию, функционально разнесены на независимые элементы. Разнообразный и богатый опыт говорит нам, что выбранный нами инновационный путь требует определения и уточнения первоочередных требований.</p>
    <p>Равным образом, синтетическое тестирование влечет за собой процесс внедрения и модернизации кластеризации усилий. Для современного мира новая модель организационной деятельности однозначно фиксирует необходимость существующих финансовых и административных условий.</p>
    <p>Принимая во внимание показатели успешности, реализация намеченных плановых заданий однозначно определяет каждого участника как способного принимать собственные решения касаемо экспериментов, поражающих по своей масштабности и грандиозности.</p>
  </div>

</div>


<div class='soc w-full flex justify-center my-10 md:my-20 xl:my-[104px]'>

    <div class='bottom flex justify-center gap-x-5 md:gap-x-10 [&_div]:flex [&_div]:items-center py-3 bg-lighter-grey w-full m-auto '>
      <div class='time'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7.5" stroke="#78848F"/>
          <path d="M8 5V9H12" stroke="#78848F"/>
        </svg>
        <span class='text-light-grey ml-2'>5 минут</span>
      </div>
      <div class='like'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
          <path d="M9 15C2.87187 10.239 1 8.03847 1 5.50868C1 3.03122 2.79375 1 5.25 1C6.95312 1 8.21875 2.031 9 3.49286C9.78125 2.031 11.0469 1 12.75 1C15.2062 1 17 3.03122 17 5.50868C17 7.81996 15.575 9.89119 9 15Z" stroke="#033260"/>
        </svg>
        <span class='text-light-grey ml-2'>22</span>
      </div>
      <div class='repost'>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
          <path d="M11.005 6C6 8 3.5 10.3235 2 14.5C5.5 12 6.5 11 11.005 10.5V16L18 8.45455L11.005 2V6Z" stroke="#033260"/>
        </svg>
        <span class='text-light-grey ml-2'>9</span>
      </div>
      <div class='views'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
          <path d="M0.61356 7.01517C0.609999 7.01005 0.606485 7.00499 0.603019 7C0.606485 6.99501 0.609999 6.98995 0.61356 6.98483C0.742683 6.7993 0.934335 6.5325 1.18181 6.21157C1.67738 5.56888 2.39356 4.71328 3.27651 3.85943C5.06226 2.13254 7.44027 0.5 10 0.5C12.5597 0.5 14.9377 2.13254 16.7235 3.85943C17.6064 4.71328 18.3226 5.56888 18.8182 6.21157C19.0657 6.5325 19.2573 6.7993 19.3864 6.98483C19.39 6.98995 19.3935 6.99501 19.397 7C19.3935 7.00499 19.39 7.01005 19.3864 7.01517C19.2573 7.2007 19.0657 7.4675 18.8182 7.78843C18.3226 8.43112 17.6064 9.28672 16.7235 10.1406C14.9377 11.8675 12.5597 13.5 10 13.5C7.44027 13.5 5.06226 11.8675 3.27651 10.1406C2.39356 9.28672 1.67738 8.43112 1.18181 7.78843C0.934335 7.4675 0.742683 7.2007 0.61356 7.01517Z" stroke="#78848F"/>
          <circle cx="10" cy="7" r="2.5" stroke="#78848F"/>
        </svg>
        <span class='text-light-grey ml-2'>124</span>
      </div>
    </div>

</div>




`
