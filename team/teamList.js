export const teamList = document.createElement('section')
teamList.classList.add('team__list', 'section')

teamList.innerHTML = `
  
  <div class='rapper'>
    <div class='list grid grid-cols-2 xl:grid-cols-4 px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl m-auto gap-x-3 md:gap-x-10 gap-y-10 md:gap-y-20'>
    
      <div class='item flex flex-col'>
        <div class='img mb-2 md:mb-4 2xl:mb-8'>
          <img src='/img/images/team/card-2xl-1.jpg' alt='1'>
        </div>
        <div class='text-20-300 mb-1 2xl:mb-2'><span>Matthew Kern</span></div>
        <div class='text-14-300 text-secondary'><span>Исполнительный директор</span></div>
      </div>
      
      <div class='item flex flex-col'>
        <div class='img mb-2 md:mb-4 2xl:mb-8'>
          <img src='/img/images/team/card-2xl-2.jpg' alt='1'>
        </div>
        <div class='text-20-300 mb-1 2xl:mb-2'><span>Stas Budkevich</span></div>
        <div class='text-14-300 text-secondary'><span>Маркетолог</span></div>
      </div>
      
      <div class='item flex flex-col'>
        <div class='img mb-2 md:mb-4 2xl:mb-8'>
          <img src='/img/images/team/card-2xl-1.jpg' alt='1'>
        </div>
        <div class='text-20-300 mb-1 2xl:mb-2'><span>Matthew Kern</span></div>
        <div class='text-14-300 text-secondary'><span>Исполнительный директор</span></div>
      </div>
      
      <div class='item flex flex-col'>
        <div class='img mb-2 md:mb-4 2xl:mb-8'>
          <img src='/img/images/team/card-2xl-2.jpg' alt='1'>
        </div>
        <div class='text-20-300 mb-1 2xl:mb-2'><span>Stas Budkevich</span></div>
        <div class='text-14-300 text-secondary'><span>Маркетолог</span></div>
      </div>
      
      
      
    </div>
  </div>
  
`
