export const faqQuestions = document.createElement('section')
faqQuestions.classList.add('faq__questions')

faqQuestions.innerHTML = `
  
  <div class='wrapper px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl m-auto'>
    
    <div class='search'>
      <div class='relative md:col-span-2'>
        <input type='text' placeholder='поиск по вопросам' class='contact__form-phone flex px-4 py-[15px] 2xl:py-[22px] 2xl:px-5 w-full border border-secondary border-l-primary placeholder:text-light-grey placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:tracking-[2.1px] placeholder:uppercase'>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" class='absolute right-4 top-1/2 translate-y-[-50%]'>
          <circle cx="8" cy="8.5" r="7.5" stroke="#033260"/>
          <path d="M4 8.5C4 6.29086 5.79086 4.5 8 4.5" stroke="#033260"/>
          <path d="M13 13.5L17 17.5" stroke="#033260"/>
        </svg>
        
      </div>
      
<!--      <p>Прежде чем задать нам вопрос, пожалуйста, ознакомьтесь с часто задаваемыми нам вопросами</p>-->
    </div>
    
  </div>
  
  
  <div class='wrapper px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl m-auto text-black mt-10 2xl:mt-20'>
  
    <div class='title text-26-300 text-left xl:pb-10'>
      <div class='m-auto md:px-0'>
<!--        <h2 class='uppercase'>FAQ</h2>-->
        <p class='text-16-400'>Прежде чем задать нам вопрос, пожалуйста, ознакомьтесь с часто задаваемыми нам вопросами</p>
      </div>
    </div> 
    
    
    <div class='list flex flex-col gap-y-2 mt-10 2xl:mt-20'>
    
    
        <div class='item flex flex-col p-3 pl-5 xl:px-10 xl:py-8 border border-semi-grey relative gap-y-2'>
            <div class='title text-16-400 !font-bold'>Название вопроса</div>
            <div class='text'></div>
            <svg class='absolute left-[-10px] top-[50%] translate-y-[-50%]' xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none">
              <rect width="20" height="36" fill="white"/>
              <line y1="17.5" x2="20" y2="17.5" stroke="#033260"/>
              <line x1="10.5" y1="8" x2="10.5" y2="28" stroke="#033260"/>
            </svg>
          </div>
          
        <div class='item flex flex-col p-3 pl-5 xl:px-10 xl:py-8 border border-semi-grey relative gap-y-2'>
            <div class='title text-16-400 !font-bold'>Название вопроса, который длиннее одной строки</div>
            <div class='text'></div>
            <svg class='absolute left-[-10px] top-[50%] translate-y-[-50%]' xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none">
              <rect width="20" height="36" fill="white"/>
              <line y1="17.5" x2="20" y2="17.5" stroke="#033260"/>
              <line x1="10.5" y1="8" x2="10.5" y2="28" stroke="#033260"/>
            </svg>
          </div>
          
        <div class='item flex flex-col p-3 pl-5 xl:px-10 xl:py-8 border border-semi-grey relative gap-y-2'>
            <div class='title text-16-400 !font-bold'>Название вопроса</div>
            <div class='text'><p class='text-14-400'>Таким образом, укрепление и развитие внутренней структуры создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса благоприятных перспектив.</p></div>
            <svg class='absolute left-[-10px] top-6 translate-y-[-50%]' xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none">
              <rect width="20" height="36" fill="white"/>
              <line y1="17.5" x2="20" y2="17.5" stroke="#033260"/>
            </svg>
          </div>
          
         <div class='item flex flex-col p-3 pl-5 xl:px-10 xl:py-8 border border-semi-grey relative gap-y-2'>
              <div class='title text-16-400 !font-bold'>Название вопроса, который длиннее одной строки</div>
              <div class='text'></div>
              <svg class='absolute left-[-10px] top-[50%] translate-y-[-50%]' xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none">
                <rect width="20" height="36" fill="white"/>
                <line y1="17.5" x2="20" y2="17.5" stroke="#033260"/>
                <line x1="10.5" y1="8" x2="10.5" y2="28" stroke="#033260"/>
              </svg>
            </div>
          
         <div class='item flex flex-col p-3 pl-5 xl:px-10 xl:py-8 border border-semi-grey relative gap-y-2'>
            <div class='title text-16-400 !font-bold'>Название вопроса</div>
            <div class='text'></div>
            <svg class='absolute left-[-10px] top-[50%] translate-y-[-50%]' xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none">
              <rect width="20" height="36" fill="white"/>
              <line y1="17.5" x2="20" y2="17.5" stroke="#033260"/>
              <line x1="10.5" y1="8" x2="10.5" y2="28" stroke="#033260"/>
            </svg>
          </div>
    
         <div class='item flex flex-col p-3 pl-5 xl:px-10 xl:py-8 border border-semi-grey relative gap-y-2'>
            <div class='title text-16-400 !font-bold'>Название вопроса</div>
            <div class='text'></div>
            <svg class='absolute left-[-10px] top-[50%] translate-y-[-50%]' xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none">
              <rect width="20" height="36" fill="white"/>
              <line y1="17.5" x2="20" y2="17.5" stroke="#033260"/>
              <line x1="10.5" y1="8" x2="10.5" y2="28" stroke="#033260"/>
            </svg>
          </div>
                
         <div class='item flex flex-col p-3 pl-5 xl:px-10 xl:py-8 border border-semi-grey relative gap-y-2'>
            <div class='title text-16-400 !font-bold'>Название вопроса, который длиннее одной строки</div>
            <div class='text'></div>
            <svg class='absolute left-[-10px] top-[50%] translate-y-[-50%]' xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none">
              <rect width="20" height="36" fill="white"/>
              <line y1="17.5" x2="20" y2="17.5" stroke="#033260"/>
              <line x1="10.5" y1="8" x2="10.5" y2="28" stroke="#033260"/>
            </svg>
          </div>
     </div>
        
  </div>
  
`
