export const academyYoutube = document.createElement('section')
academyYoutube.classList.add('newHobby-youtube', 'section')

academyYoutube.innerHTML = `
 
  <div class='academy-youtube__wrapper grid grid-cols-1 xl:grid-cols-2 grid-flow-row-dense m-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl gap-y-5 xl:gap-y-10 gap-x-10'>
    
    
    <div class='section-title flex flex-col gap-y-2 col-span-1 xl:order-2'>
      <h2 class='text-26-300 uppercase'>об академии</h2>
      <p class='text-16-400'>На мастер-классах вы окунётесь в атмосферу творчества и сможете сделать арт-объект своими руками</p>
    </div>
    
    <div class='academy-youtube__preview col-span-1 xl:row-span-2 xl:order-1'>
      <img src='/img/images/academy/youtube-2xl.jpg' alt='youtube-preview'>
    </div>
    
    <div class='academy-youtube__blocks grid grid-cols-2 grid-rows-2 text-center text-light-grey col-span-1 xl:order-3 relative border border-semi-grey'>
      
      <div class='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <line y1="9.5" x2="20" y2="9.5" stroke="#033260"/>
          <line x1="10.5" y1="2.18557e-08" x2="10.5" y2="20" stroke="#033260"/>
        </svg>
      </div>
    
      <div class='flex flex-col justify-center items-center p-5 xl:p-10 border-r border-semi-grey col-span-1 gap-y-1'>
        <span class='text-26-300 xl:!text-[40px]  text-light-grey'>>  <span class='text-primary'>200</span></span>
        <p class='text-14-400'>Талантливых выпускников</p>
      </div>
      
       <div class='flex flex-col justify-center items-center p-5 xl:p-10 border-b border-semi-grey col-span-1 gap-y-1'>
        <span class='text-26-300  xl:!text-[40px] text-light-grey'>>  <span class='text-primary'>50</span></span>
        <p class='text-14-400'>Проведённых мастерклассов</p>
      </div>
      
       <div class='flex flex-col justify-center items-center p-5 xl:p-10 border-t border-semi-grey col-span-1 gap-y-1'>
        <span class='text-26-300  xl:!text-[40px] text-light-grey'>>  <span class='text-primary'>200</span></span>
        <p class='text-14-400'>Чего-то ещё</p>
      </div>
      
       <div class='flex flex-col justify-center items-center p-5 xl:p-10 border-l border-semi-grey col-span-1 gap-y-1'>
        <span class='text-26-300  xl:!text-[40px] text-light-grey'>>  <span class='text-primary'>50</span></span>
        <p class='text-14-400'>Чего-то ещё</p>
      </div>
    </div>
    
  </div>
  
`
