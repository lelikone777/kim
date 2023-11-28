export const studyStudioMk = document.createElement('section')
studyStudioMk.classList.add('study-studio__mk', 'section')

studyStudioMk.innerHTML = `
  <div class='wrapper flex flex-col gap-y-3 px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl m-auto '>
    <div class='principles__title text-26-300 text-left mb-5 2xl:mb-10'>
      <div class='m-auto px-5 md:px-0'>
        <h2 class='uppercase'>Мастер классы</h2>
      </div>
    </div>
  </div>
  
<div class='flex flex-col xl:flex-row xl:justify-between gap-y-5 xl:max-w-screen-2xl xl:m-auto xl:px-20 2xl:px-[120px]'>
  <div class='study-studio__tabs flex flex-col items-center w-full m-auto border-b border-primary max-w-screen-2xl pl-5 pr-5 md:pl-10 md:pr-10 xl:px-0 xl:min-w-[684px] 2xl:min-w-[1101px]'>
    <div class='w-full'>
      <div class='tabs-buttons flex w-full min-h-[40px] md:min-h-[48px]'>
        <button
          class='tabs-button flex-1 tabs-button-active px-3 py-2'>Для начинающих</button>
        <button
          class='tabs-button flex-1 px-3 py-2'>Для продвинутых</button>
      </div>
    </div>
    
  </div>     
  <div class='study-studio__switcher flex items-center justify-start md:justify-center xl:justify-end w-full gap-x-3 m-auto pl-5 pr-5 md:pl-10 md:pr-10 xl:px-0 max-w-screen-2xl'>
      <div class='switcher-wrapper'>
        <div class='flex justify-between bg-primary w-[69px] h-[36px] py-[6px] pl-[6px] pr-[6px] gap-x-2 min-h-[36px]'>
          <span class='text-light'>on</span>
          <div class='w-6 h-6 bg-light'></div>
        </div>
      </div>
      <div class='text-16-400'><span>Сортировка по календарю</span></div>
    </div>
</div>

<div class='study-studio__calendar flex items-center overflow-hidden [&>div]:shrink-0 my-5'>

  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-semi-grey border border-semi-grey'>
    <span class='text-10-350-header'>Сентябрь</span>
    <span class='text-14-20-300'>2023</span>
  </div>

  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ПТ</span>
    <span class='day-number text-26-300 !leading-[120%]'>1</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>СБ</span>
    <span class='day-number text-26-300 !leading-[120%]'>2</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day day-active flex flex-col items-center justify-center w-[64px] h-[80px] 2xl:w-[104px] 2xl:h-[120px] bg-primary border border-primary'>
    <span class='text-10-350-header text-light'>СБ</span>
    <span class='day-number text-26-300 text-light'>3</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-light'>
      <span class='text-10-350-header text-primary'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ВС</span>
    <span class='day-number text-26-300 !leading-[120%]'>4</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ПН</span>
    <span class='day-number text-26-300 !leading-[120%]'>5</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ВТ</span>
    <span class='day-number text-26-300 !leading-[120%]'>6</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>СР</span>
    <span class='day-number text-26-300 !leading-[120%]'>7</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ЧТ</span>
    <span class='day-number text-26-300 !leading-[120%]'>8</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ПТ</span>
    <span class='day-number text-26-300 !leading-[120%]'>9</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>СБ</span>
    <span class='day-number text-26-300 !leading-[120%]'>10</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ВС</span>
    <span class='day-number text-26-300 !leading-[120%]'>11</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
    <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ПН</span>
    <span class='day-number text-26-300 !leading-[120%]'>12</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ВТ</span>
    <span class='day-number text-26-300 !leading-[120%]'>13</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>СР</span>
    <span class='day-number text-26-300 !leading-[120%]'>14</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ЧТ</span>
    <span class='day-number text-26-300 !leading-[120%]'>15</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ПТ</span>
    <span class='day-number text-26-300 !leading-[120%]'>16</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>СБ</span>
    <span class='day-number text-26-300 !leading-[120%]'>17</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ВС</span>
    <span class='day-number text-26-300 !leading-[120%]'>18</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ПН</span>
    <span class='day-number text-26-300 !leading-[120%]'>19</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ВТ</span>
    <span class='day-number text-26-300 !leading-[120%]'>20</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>СР</span>
    <span class='day-number text-26-300 !leading-[120%]'>21</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
    <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ЧТ</span>
    <span class='day-number text-26-300 !leading-[120%]'>22</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ПТ</span>
    <span class='day-number text-26-300 !leading-[120%]'>23</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>СБ</span>
    <span class='day-number text-26-300 !leading-[120%]'>24</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ВС</span>
    <span class='day-number text-26-300 !leading-[120%]'>25</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ПН</span>
    <span class='day-number text-26-300 !leading-[120%]'>26</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
  <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ВТ</span>
    <span class='day-number text-26-300 !leading-[120%]'>27</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
    <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>СР</span>
    <span class='day-number text-26-300 !leading-[120%]'>28</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
    <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ЧТ</span>
    <span class='day-number text-26-300 !leading-[120%]'>29</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
    <div class='day flex flex-col items-center justify-center gap-y-[-4px] w-[64px] h-[72px] 2xl:w-[104px] 2xl:h-[120px] bg-light border border-semi-grey'>
    <span class='text-10-350-header'>ПТ</span>
    <span class='day-number text-26-300 !leading-[120%]'>30</span>
    <div class='flex-center rounded-full w-4 h-4 2xl:w-6 2xl:h-6 bg-primary'>
      <span class='text-10-350-header text-light'>1</span>
    </div>
  </div>
  
</div>


 

`
