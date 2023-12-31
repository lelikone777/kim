export const youtube = document.createElement('section')
youtube.classList.add('youtube', 'section')

youtube.innerHTML = `

<div class='wrapper flex flex-col mr-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl gap-y-10 md:gap-y-20 xl:flex-row xl:gap-x-10 m-auto'>

  <div class='flex flex-col gap-y-3 xl:flex-1'>
    <div class='title'>
      <h2 class='text-32-300'>Посмотрите короткое видео с процессом работы</h2>
    </div>  
       
    <div class='image'>
      <img src='/img/images/youtube.jpg' alt='video'>
    </div>
  </div>
  
  <div class='bottom flex flex-col gap-y-3 xl:pl-[208px] xl:flex-1'>
    <div class='title'>
      <h2 class='text-32-300'>О чём этот барельеф</h2>
    </div> 
    <div class='flex flex-col gap-y-3 xl:gap-y-5'>
      <p class='text-16-400 text-black'>Жук — знаковый арт. Работа над ним была сопряжена с очень сложными душевными переживаниями, с которыми я справился сублимируя ситуацию в этом произведении.</p>
      <p class='text-16-400 text-black'>
        Накануне дня рождения студии для меня важно переосмысление столь знаковой работы. Это помогает мне прорефлексировать и оценить достигнутый результат, осознавая всю силу пройденного пути.
      </p>
    </div>
    <button class='shop__button flex justify-center items-center px-6 py-[12px] 2xl:py-[18px] bg-primary xl:w-fit xl:mt-5 hover:hover-bg'>
      <span class='mr-2 text-button-primary text-light uppercase !leading-[0.8px]'>узнать подробнее</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.9023 17.3758L4.55439 17.1826L4.16881 17.2812L2.25218 17.7715L2.75619 15.9307L2.87655 15.4912L2.62372 15.1119L2.38074 14.7475C1.48713 13.3282 1 11.6427 1 9.91664C1 4.97439 5.00514 1 9.95832 1C14.9252 1 19 4.94621 19 9.91664C19 14.9114 14.9007 19 10 19C8.33401 19 6.72296 18.4814 5.31958 17.609L5.29875 17.5961L5.27731 17.5842L4.9023 17.3758ZM0.833373 19.1667L1.94827 18.8815L4.41665 18.25L4.79166 18.4583C6.33332 19.4166 8.12501 20 10 20C15.4583 20 20 15.4583 20 9.91664C20 4.37497 15.4583 0 9.95832 0C4.45833 0 0 4.41665 0 9.91664C0 11.8333 0.541673 13.7083 1.54166 15.2917L1.79169 15.6667L1.13728 18.0567L0.833373 19.1667ZM6.41339 6L6.99635 6.02921C7.11909 6.02921 7.21113 6.11682 7.24185 6.20446L8.13167 8.10276C8.16232 8.1904 8.13167 8.30722 8.07028 8.39483L7.33389 9.18334C7.27251 9.24173 7.27251 9.32937 7.3032 9.41698C8.2544 11.1693 10.0033 11.8702 10.525 12.0454C10.617 12.0746 10.709 12.0454 10.7704 11.987L11.5375 11.0524C11.6295 10.9356 11.783 10.9064 11.9057 10.9648L13.8388 11.8118C13.9615 11.8702 14.0229 12.0162 13.9922 12.133L13.9001 12.5419C13.8081 12.98 13.5319 13.3888 13.1024 13.6517C12.5501 13.9729 11.875 14.119 11.0159 13.8853C8.31578 13.1552 6.78162 11.4613 5.98384 10.41C5.18607 9.35859 4.84856 8.30722 5.06333 7.43107C5.18607 6.84694 5.6463 6.40888 5.92246 6.17524C6.04519 6.05843 6.22927 6 6.41339 6Z" fill="white"/>
      </svg>
    </button> 
  
  </div>
</div>

`
