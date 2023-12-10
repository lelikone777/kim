export const designersHero = document.createElement('section')
designersHero.classList.add('designers__hero')

designersHero.innerHTML = `
  
  <div class='wrapper px-5 md:px-10 xl:px-20 text-light max-w-screen-2xl m-auto'>
    <div class='box bg-primary flex flex-col gap-y-5 py-5 md:flex-row md:justify-between md:gap-x-5 xl:gap-x-[146px] md:py-10 xl:py-20 '>
      <div class='top flex flex-col gap-y-2 px-5 md:px-10 xl:px-20 md:flex-1 md:self-center'>
        <h2 class='text-26-300 max-w-[293px]'>ну а Дружба начинается&shy;... с рыбки!</h2>
        <p class='text-14-20-300'>Мы дружим с десятками дизайнеров и архитекторов, работающих в самых разных стилях.</p>
      </div>

      <div class='bottom relative left-5 mr-2 md:mr-0 flex flex-col gap-y-1 bg-accent py-5 xl:py-10 2xl:py-[64px] pl-[60px] xl:pl-[76px] pr-5 md:flex-1 md:self-end xl:self-center'>
        <img src='/img/images/kraken.png' alt='kraken' class='absolute left-[-36px] xl:left-[-76px] top-1/2 -translate-y-1/2 w-20 h-[54px] xl:w-[120px] xl:h-[81px] 2xl:w-[200px] 2xl:h-[135px] 2xl:left-[-150px]'>
        <a class='text-18-22-24-28-300 underline'>Скачать 3D модели</a>
        <p class='text-14-300'>Получите набор всех наших барельефов в 3D</p>
      </div>
    </div>
    
  </div>
  
  <div class='section px-5 md:px-10 xl:px-20 text-light max-w-screen-2xl m-auto'>
    <p class='text-16-400 text-[#050122]'>Безусловное уважение, эффективные коммуникации, бизнес-подход, умение точно попадать в любой запрос, прозрачный процесс работы и продуманная логистика помогают нам создавать крепкие партнерские отношения. А совместные проекты уже стали украшением десятков портфолио.</p>
  </div>
  
`
