export const contactsData = document.createElement('section')
contactsData.classList.add('contacts__data')

contactsData.innerHTML = `


<div class='wrapper md:flex md:gap-x-[42px] 2xl:gap-x-[82px] md:items-center max-w-screen-2xl m-auto'>
  <div class='box flex flex-col py-5 md:pl-10 xl:pl-20 2xl:pl-[120px] md:max-w-[354px] 2xl:max-w-[648px]'>
    <div class='flex flex-col border-b border-semi-grey'>
      <div class='flex flex-col gap-y-0.5 py-3 2xl:py-5 px-5 md:px-0'>
        <span class='text-14-300 text-light-grey'>Телефон для связи</span>
        <span class='text-20-300'>+7 495 145-25-98</span>
      </div>
    </div>
     <div class='flex flex-col border-b border-semi-grey'>
      <div class='flex flex-col gap-y-0.5 py-3 2xl:py-5 px-5 md:px-0'>
        <span class='text-14-300 text-light-grey'>WhatsApp (для звонков и сообщений)</span>
        <span class='text-20-300'>+7 985 059-30-43</span>
      </div>
    </div>
    <div class='flex flex-col border-b border-semi-grey'>
      <div class='flex flex-col gap-y-0.5 py-3 2xl:py-5 px-5 md:px-0'>
        <span class='text-14-300 text-light-grey'>Электронная почта</span>
        <span class='text-20-300'>zakaz@kimart.ru</span>
      </div>
    </div>
    <div class='flex flex-col border-b border-semi-grey'>
      <div class='flex flex-col gap-y-0.5 py-3 2xl:py-5 px-5 md:px-0'>
        <span class='text-14-300 text-light-grey'>Адрес</span>
        <span class='text-20-300'>г. Москва, Старомонетный пер., 22, стр. 2</span>
        <button class='flex justify-start items-center text-primary gap-x-2 pt-3'>
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" class='[&>path]:stroke-primary'>
            <path d="M11 0V12M11 12L7 8M11 12L15 8" stroke="#033260"/>
            <path d="M1 12V17H21V12" stroke="#033260"/>
          </svg>
          <span class='text-12-400-header !font-bold text-primary uppercase'>Скачать инструкцию по установке</span>
        </button>
      </div>
    </div>
    <div class='flex flex-col border-b border-semi-grey'>
      <div class='flex flex-col gap-y-0.5 py-3 2xl:py-5 px-5 md:px-0'>
        <span class='text-14-300 text-light-grey'>Время работы</span>
        <span class='text-20-300'>Пн - Пт с 10.00 до 18.00. <br> Сб - Вс — выходной.</span>
      </div>
    </div>
    <div class='flex flex-col'>
      <div class='flex flex-col gap-y-0.5 py-3 2xl:py-5 px-5 md:px-0'>
        <span class='text-14-300 text-light-grey'>Наши соц. сети</span>
        <div class='flex gap-x-3'>
          <a href='#'><img src='/img/icons/wa.svg' alt='wa' class='w-9 h-9 2xl:w-12 2xl:h-12'></a>
          <a href='#'><img src='/img/icons/tg.svg' alt='wa' class='w-9 h-9 2xl:w-12 2xl:h-12'></a>
          <a href='#'><img src='/img/icons/vk.svg' alt='wa' class='w-9 h-9 2xl:w-12 2xl:h-12'></a>
          <a href='#'><img src='/img/icons/inst.svg' alt='wa' class='w-9 h-9 2xl:w-12 2xl:h-12'></a>
        </div>
      </div>
    </div>
  </div>
  <div class='map hidden md:flex flex-1 h-[553px] xl:h-[601px] 2xl:h-[782px]'>
    <img src='/img/images/contacts-map-md.jpg' alt='map' class='object-cover'>
  </div>
</div>
  
  
`
