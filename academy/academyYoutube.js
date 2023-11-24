export const academyYoutube = document.createElement('section')
academyYoutube.classList.add('academy-youtube', 'section')

academyYoutube.innerHTML = `
 
  <div class='academy-youtube__wrapper grid grid-cols-1 xl:grid-cols-2 grid-flow-row-dense m-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl gap-y-5 xl:gap-y-10 gap-x-10'>
    
    
    <div class='section-title flex flex-col gap-y-2 col-span-1 xl:order-2'>
      <h2 class='text-26-300 uppercase'>об академии</h2>
      <p class='text-16-400'>На мастер-классах вы окунётесь в атмосферу творчества и сможете сделать арт-объект своими руками</p>
    </div>
    
    <div class='academy-youtube__preview col-span-1 xl:row-span-2 xl:order-1'>
      <img src='/img/images/academy/youtube-2xl.jpg' alt='youtube-preview'>
    </div>
    
    <div class='academy-youtube__blocks grid grid-cols-2 grid-rows-2 text-center text-light-grey col-span-1 xl:order-3'>
    
      <div class='flex flex-col justify-center items-center p-5 xl:p-10 border border-semi-grey col-span-1 gap-y-1'>
        <span class='text-26-300 xl:!text-[40px]  text-light-grey'>>  <span class='text-primary'>200</span></span>
        <p class='text-14-400'>Талантливых выпускников</p>
      </div>
      
       <div class='flex flex-col justify-center items-center p-5 xl:p-10 border border-semi-grey col-span-1 gap-y-1'>
        <span class='text-26-300  xl:!text-[40px] text-light-grey'>>  <span class='text-primary'>50</span></span>
        <p class='text-14-400'>Проведённых мастерклассов</p>
      </div>
      
       <div class='flex flex-col justify-center items-center p-5 xl:p-10 border border-semi-grey col-span-1 gap-y-1'>
        <span class='text-26-300  xl:!text-[40px] text-light-grey'>>  <span class='text-primary'>200</span></span>
        <p class='text-14-400'>Чего-то ещё</p>
      </div>
      
       <div class='flex flex-col justify-center items-center p-5 xl:p-10 border border-semi-grey col-span-1 gap-y-1'>
        <span class='text-26-300  xl:!text-[40px] text-light-grey'>>  <span class='text-primary'>50</span></span>
        <p class='text-14-400'>Чего-то ещё</p>
      </div>
    </div>
    
  </div>
  
`
