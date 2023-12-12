export const whyUs = document.createElement('section')
whyUs.classList.add('why-us', 'section')

whyUs.innerHTML = `
  <div class='wrapper px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl m-auto'>
    <div class='principles__title text-26-300 text-left pb-3 md:pb-5 xl:pb-10'>
      <div class='m-auto md:px-0'>
        <h2 class='uppercase'>Почему лучше выбрать нас</h2>
      </div>
    </div>

  
    <div class='info flex justify-between gap-x-5 md:gap-x-10 xl:gap-x-[104px]'>
      <div class='left flex flex-1 flex-col gap-y-5 '>
        <div class=''>
          <p class='text-14-300 2xl:text-[20px]'>
            Мы создаем технически продуманное концептуальное искусство высокого качества, которое гарантированно украсит любой интерьер.
          </p>
        </div>
        <div class=''>
          <img src='/img/images/whyUs/1.jpg' alt='1' class='md:hidden'>
          <img src='/img/images/whyUs/1-md.jpg' alt='1' class='hidden md:block xl:hidden'>
          <img src='/img/images/whyUs/1-xl.jpg' alt='1' class='hidden xl:block 2xl:hidden'>
          <img src='/img/images/whyUs/1-2xl.jpg' alt='1' class='hidden 2xl:block'>
        </div>
      </div>
      
      
      <div class='right flex flex-1 flex-col gap-y-5'>
        <div class=''>
          <img src='/img/images/whyUs/2.jpg' alt='1' class='md:hidden'>
          <img src='/img/images/whyUs/2-md.jpg' alt='1' class='hidden md:block xl:hidden'>
          <img src='/img/images/whyUs/2-xl.jpg' alt='1' class='hidden xl:block 2xl:hidden'>
          <img src='/img/images/whyUs/2-2xl.jpg' alt='1' class='hidden 2xl:block'>
        </div>
        <div class=''>
          <p class='text-14-300 2xl:text-[20px]'>
            Дизайн разработан эксклюзивно нашей студией, все коллекции выпускаются малым тиражом и дорабатываются вручную.
          </p>
        </div>
      </div>
    </div>
  
  </div>
  
`
