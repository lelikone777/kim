export const exclusiveTop = document.createElement('section')
exclusiveTop.classList.add('exclusive-top')

exclusiveTop.innerHTML = `

<div class='exclusive__wrapper flex flex-col my-5 md:my-10 xl:my-[42px] 2xl:my-[64px] gap-x-5 gap-y-5 ml-auto mr-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl xl:flex-row xl:items-end xl:justify-between'>
  
  <div class='top__wrap gap-y-3'>
    <div class='exclusive__pagination text  -14-400 text-primary mb-1'>
      <ul class='flex flex-wrap gap-x-3 gap-y-1'>
        <li><a href='#'><span>Главная</span></a></li>
        <li><a href='#'><span class='text-light-grey'>Эксклюзивные проекты</span></a></li>
      </ul>
    </div>
  
    <div class='product-info__title flex mb-3'>
      <h2 class=' text-32-300 uppercase'>Эксклюзивные проекты</h2>
    </div>
    
    <div class='top__text flex text-deep-grey flex-col gap-y-3'>
      <p>С 2015 года создали 65 уникальных проектов: барельефы ручной работы для внутреннего и внешнего декора.</p>
      <p>Некоторые работы представленные ниже попали на обложки журналов Salon Interior, ELLE Decoration, Architectural Digest.</p>
    </div>
  </div>
  
  <button class='catalog__magazine pl-4 flex xl:self-end '>
    <div class='catalog__magazine-wrap flex  w-full items-center bg-primary text-light fill-light hover:hover-bg'>
      <div class='catalog__magazine-left relative w-[88px] h-[54px] 2xl:w-[120px] 2xl:h-[74px]'>
        <img src='/img/images/catalog/magazines.png' alt='magazines image' class='absolute w-full left-[-15%]'>
      </div>  
      <div class='catalog__magazine-right flex flex-col gap-y-[2px] py-3 pr-8'>
        <p class='text-12-400-header uppercase'>Скачать каталог в pdf</p>
        <span class='text-10-350-header'>12 арт-объектов сделанных вручную</span>
      </div>    
    </div>
  </button>
  
  
  
  
</div>
  
`
