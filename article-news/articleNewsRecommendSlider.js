export const articleNewsRecommendSlider = document.createElement('section')
articleNewsRecommendSlider.classList.add(
  'article-news__recommend-slider',
  'section',
)

articleNewsRecommendSlider.innerHTML = `
  
   <div class='projects__wrapper relative flex flex-col gap-y-5 xl:gap-y-10 mb-14 md:mb-20 xl:mb-[104px] 2xl:mb-[160px] max-w-screen-2xl m-auto'>
  <div class='projects__title flex flex-col gap-y-3 px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-[714px] 2xl:max-w-[1150px] items-start text-left w-full'>
    <h2 class='inline-block text-24-300 uppercase'>Работы, которые мы уже сделали</h2>
  </div>

  <div class='projects__box flex flex-col gap-y-5 pl-5 md:pl-10 xl:pl-20 2xl:pl-[120px] 2xl:pr-0 max-w-screen-2xl'>
    <div class='projects__slider'>
      <div
        class='projects__slider-wrapper flex flex-col gap-y-5 overflow-hidden'>
        <div class='projects__slider-slides flex gap-x-5 md:gap-x-10'>
        
          
          
          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <a href='#'
              class='projects__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/article-news/bottom-1.jpg' alt='project 1' class=''/>
            </a>
            <div class='info flex flex-col gap-y-3 2xl:gap-y-5'>
            
              <div class='top'>
              
                <div class='date'>
                  <span class='text-10-350-header text-deep-grey'>02.08.2023</span>
                </div>
                
                <button
                  class='projects__slide-title flex items-center text-left w-fit'>
                  <h5
                    class='text-button-primary uppercase'>
                    <span>очень длинное Название статьи на две строчки</span>
                  </h5>
                  <div class='flex justify-between items-center ml-2'>
                    <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                      <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                    </svg>
                  </div>
                </button>
              </div>
              
              <div class='text'>
                <p class='flex max-h-[70px] text-ellipsis overflow-hidden'>
                  Мы вынуждены отталкиваться от того, что внедрение современных методик предполагает независимые способы реализации позиций, занимаемых участниками в отношении поставленных задач!
                </p>
              </div>
              
              <div class='bottom flex gap-x-5 [&_div]:flex [&_div]:items-center'>
                <div class='time'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7.5" stroke="#78848F"/>
                    <path d="M8 5V9H12" stroke="#78848F"/>
                  </svg>
                  <span class='text-light-grey ml-2'>5 минут</span>
                </div>
                <div class='like'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path d="M9 15C2.87187 10.239 1 8.03847 1 5.50868C1 3.03122 2.79375 1 5.25 1C6.95312 1 8.21875 2.031 9 3.49286C9.78125 2.031 11.0469 1 12.75 1C15.2062 1 17 3.03122 17 5.50868C17 7.81996 15.575 9.89119 9 15Z" stroke="#033260"/>
                  </svg>
                  <span class='text-light-grey ml-2'>22</span>
                </div>
                <div class='repost'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M11.005 6C6 8 3.5 10.3235 2 14.5C5.5 12 6.5 11 11.005 10.5V16L18 8.45455L11.005 2V6Z" stroke="#033260"/>
                  </svg>
                  <span class='text-light-grey ml-2'>9</span>
                </div>
                <div class='views'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                    <path d="M0.61356 7.01517C0.609999 7.01005 0.606485 7.00499 0.603019 7C0.606485 6.99501 0.609999 6.98995 0.61356 6.98483C0.742683 6.7993 0.934335 6.5325 1.18181 6.21157C1.67738 5.56888 2.39356 4.71328 3.27651 3.85943C5.06226 2.13254 7.44027 0.5 10 0.5C12.5597 0.5 14.9377 2.13254 16.7235 3.85943C17.6064 4.71328 18.3226 5.56888 18.8182 6.21157C19.0657 6.5325 19.2573 6.7993 19.3864 6.98483C19.39 6.98995 19.3935 6.99501 19.397 7C19.3935 7.00499 19.39 7.01005 19.3864 7.01517C19.2573 7.2007 19.0657 7.4675 18.8182 7.78843C18.3226 8.43112 17.6064 9.28672 16.7235 10.1406C14.9377 11.8675 12.5597 13.5 10 13.5C7.44027 13.5 5.06226 11.8675 3.27651 10.1406C2.39356 9.28672 1.67738 8.43112 1.18181 7.78843C0.934335 7.4675 0.742683 7.2007 0.61356 7.01517Z" stroke="#78848F"/>
                    <circle cx="10" cy="7" r="2.5" stroke="#78848F"/>
                  </svg>
                  <span class='text-light-grey ml-2'>124</span>
                </div>
              </div>
              
            </div>
          </div>

          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <a href='#'
              class='projects__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/article-news/bottom-1.jpg' alt='project 1' class=''/>
            </a>
            <div class='info flex flex-col gap-y-3 2xl:gap-y-5'>
            
              <div class='top'>
              
                <div class='date'>
                  <span class='text-10-350-header text-deep-grey'>02.08.2023</span>
                </div>
                
                <button
                  class='projects__slide-title flex items-center text-left w-fit'>
                  <h5
                    class='text-button-primary uppercase'>
                    <span>очень длинное Название статьи на две строчки</span>
                  </h5>
                  <div class='flex justify-between items-center ml-2'>
                    <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                      <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                    </svg>
                  </div>
                </button>
              </div>
              
              <div class='text'>
                <p class='flex max-h-[70px] text-ellipsis overflow-hidden'>
                  Мы вынуждены отталкиваться от того, что внедрение современных методик предполагает независимые способы реализации позиций, занимаемых участниками в отношении поставленных задач!
                </p>
              </div>
              
              <div class='bottom flex gap-x-5 [&_div]:flex [&_div]:items-center'>
                <div class='time'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7.5" stroke="#78848F"/>
                    <path d="M8 5V9H12" stroke="#78848F"/>
                  </svg>
                  <span class='text-light-grey ml-2'>5 минут</span>
                </div>
                <div class='like'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path d="M9 15C2.87187 10.239 1 8.03847 1 5.50868C1 3.03122 2.79375 1 5.25 1C6.95312 1 8.21875 2.031 9 3.49286C9.78125 2.031 11.0469 1 12.75 1C15.2062 1 17 3.03122 17 5.50868C17 7.81996 15.575 9.89119 9 15Z" stroke="#033260"/>
                  </svg>
                  <span class='text-light-grey ml-2'>22</span>
                </div>
                <div class='repost'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M11.005 6C6 8 3.5 10.3235 2 14.5C5.5 12 6.5 11 11.005 10.5V16L18 8.45455L11.005 2V6Z" stroke="#033260"/>
                  </svg>
                  <span class='text-light-grey ml-2'>9</span>
                </div>
                <div class='views'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                    <path d="M0.61356 7.01517C0.609999 7.01005 0.606485 7.00499 0.603019 7C0.606485 6.99501 0.609999 6.98995 0.61356 6.98483C0.742683 6.7993 0.934335 6.5325 1.18181 6.21157C1.67738 5.56888 2.39356 4.71328 3.27651 3.85943C5.06226 2.13254 7.44027 0.5 10 0.5C12.5597 0.5 14.9377 2.13254 16.7235 3.85943C17.6064 4.71328 18.3226 5.56888 18.8182 6.21157C19.0657 6.5325 19.2573 6.7993 19.3864 6.98483C19.39 6.98995 19.3935 6.99501 19.397 7C19.3935 7.00499 19.39 7.01005 19.3864 7.01517C19.2573 7.2007 19.0657 7.4675 18.8182 7.78843C18.3226 8.43112 17.6064 9.28672 16.7235 10.1406C14.9377 11.8675 12.5597 13.5 10 13.5C7.44027 13.5 5.06226 11.8675 3.27651 10.1406C2.39356 9.28672 1.67738 8.43112 1.18181 7.78843C0.934335 7.4675 0.742683 7.2007 0.61356 7.01517Z" stroke="#78848F"/>
                    <circle cx="10" cy="7" r="2.5" stroke="#78848F"/>
                  </svg>
                  <span class='text-light-grey ml-2'>124</span>
                </div>
              </div>
              
            </div>
          </div>

          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <a href='#'
              class='projects__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/article-news/bottom-1.jpg' alt='project 1' class=''/>
            </a>
            <div class='info flex flex-col gap-y-3 2xl:gap-y-5'>
            
              <div class='top'>
              
                <div class='date'>
                  <span class='text-10-350-header text-deep-grey'>02.08.2023</span>
                </div>
                
                <button
                  class='projects__slide-title flex items-center text-left w-fit'>
                  <h5
                    class='text-button-primary uppercase'>
                    <span>очень длинное Название статьи на две строчки</span>
                  </h5>
                  <div class='flex justify-between items-center ml-2'>
                    <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                      <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                    </svg>
                  </div>
                </button>
              </div>
              
              <div class='text'>
                <p class='flex max-h-[70px] text-ellipsis overflow-hidden'>
                  Мы вынуждены отталкиваться от того, что внедрение современных методик предполагает независимые способы реализации позиций, занимаемых участниками в отношении поставленных задач!
                </p>
              </div>
              
              <div class='bottom flex gap-x-5 [&_div]:flex [&_div]:items-center'>
                <div class='time'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7.5" stroke="#78848F"/>
                    <path d="M8 5V9H12" stroke="#78848F"/>
                  </svg>
                  <span class='text-light-grey ml-2'>5 минут</span>
                </div>
                <div class='like'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path d="M9 15C2.87187 10.239 1 8.03847 1 5.50868C1 3.03122 2.79375 1 5.25 1C6.95312 1 8.21875 2.031 9 3.49286C9.78125 2.031 11.0469 1 12.75 1C15.2062 1 17 3.03122 17 5.50868C17 7.81996 15.575 9.89119 9 15Z" stroke="#033260"/>
                  </svg>
                  <span class='text-light-grey ml-2'>22</span>
                </div>
                <div class='repost'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M11.005 6C6 8 3.5 10.3235 2 14.5C5.5 12 6.5 11 11.005 10.5V16L18 8.45455L11.005 2V6Z" stroke="#033260"/>
                  </svg>
                  <span class='text-light-grey ml-2'>9</span>
                </div>
                <div class='views'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                    <path d="M0.61356 7.01517C0.609999 7.01005 0.606485 7.00499 0.603019 7C0.606485 6.99501 0.609999 6.98995 0.61356 6.98483C0.742683 6.7993 0.934335 6.5325 1.18181 6.21157C1.67738 5.56888 2.39356 4.71328 3.27651 3.85943C5.06226 2.13254 7.44027 0.5 10 0.5C12.5597 0.5 14.9377 2.13254 16.7235 3.85943C17.6064 4.71328 18.3226 5.56888 18.8182 6.21157C19.0657 6.5325 19.2573 6.7993 19.3864 6.98483C19.39 6.98995 19.3935 6.99501 19.397 7C19.3935 7.00499 19.39 7.01005 19.3864 7.01517C19.2573 7.2007 19.0657 7.4675 18.8182 7.78843C18.3226 8.43112 17.6064 9.28672 16.7235 10.1406C14.9377 11.8675 12.5597 13.5 10 13.5C7.44027 13.5 5.06226 11.8675 3.27651 10.1406C2.39356 9.28672 1.67738 8.43112 1.18181 7.78843C0.934335 7.4675 0.742683 7.2007 0.61356 7.01517Z" stroke="#78848F"/>
                    <circle cx="10" cy="7" r="2.5" stroke="#78848F"/>
                  </svg>
                  <span class='text-light-grey ml-2'>124</span>
                </div>
              </div>
              
            </div>
          </div>

          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <a href='#'
              class='projects__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/article-news/bottom-1.jpg' alt='project 1' class=''/>
            </a>
            <div class='info flex flex-col gap-y-3 2xl:gap-y-5'>
            
              <div class='top'>
              
                <div class='date'>
                  <span class='text-10-350-header text-deep-grey'>02.08.2023</span>
                </div>
                
                <button
                  class='projects__slide-title flex items-center text-left w-fit'>
                  <h5
                    class='text-button-primary uppercase'>
                    <span>очень длинное Название статьи на две строчки</span>
                  </h5>
                  <div class='flex justify-between items-center ml-2'>
                    <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                      <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                    </svg>
                  </div>
                </button>
              </div>
              
              <div class='text'>
                <p class='flex max-h-[70px] text-ellipsis overflow-hidden'>
                  Мы вынуждены отталкиваться от того, что внедрение современных методик предполагает независимые способы реализации позиций, занимаемых участниками в отношении поставленных задач!
                </p>
              </div>
              
              <div class='bottom flex gap-x-5 [&_div]:flex [&_div]:items-center'>
                <div class='time'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7.5" stroke="#78848F"/>
                    <path d="M8 5V9H12" stroke="#78848F"/>
                  </svg>
                  <span class='text-light-grey ml-2'>5 минут</span>
                </div>
                <div class='like'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path d="M9 15C2.87187 10.239 1 8.03847 1 5.50868C1 3.03122 2.79375 1 5.25 1C6.95312 1 8.21875 2.031 9 3.49286C9.78125 2.031 11.0469 1 12.75 1C15.2062 1 17 3.03122 17 5.50868C17 7.81996 15.575 9.89119 9 15Z" stroke="#033260"/>
                  </svg>
                  <span class='text-light-grey ml-2'>22</span>
                </div>
                <div class='repost'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M11.005 6C6 8 3.5 10.3235 2 14.5C5.5 12 6.5 11 11.005 10.5V16L18 8.45455L11.005 2V6Z" stroke="#033260"/>
                  </svg>
                  <span class='text-light-grey ml-2'>9</span>
                </div>
                <div class='views'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                    <path d="M0.61356 7.01517C0.609999 7.01005 0.606485 7.00499 0.603019 7C0.606485 6.99501 0.609999 6.98995 0.61356 6.98483C0.742683 6.7993 0.934335 6.5325 1.18181 6.21157C1.67738 5.56888 2.39356 4.71328 3.27651 3.85943C5.06226 2.13254 7.44027 0.5 10 0.5C12.5597 0.5 14.9377 2.13254 16.7235 3.85943C17.6064 4.71328 18.3226 5.56888 18.8182 6.21157C19.0657 6.5325 19.2573 6.7993 19.3864 6.98483C19.39 6.98995 19.3935 6.99501 19.397 7C19.3935 7.00499 19.39 7.01005 19.3864 7.01517C19.2573 7.2007 19.0657 7.4675 18.8182 7.78843C18.3226 8.43112 17.6064 9.28672 16.7235 10.1406C14.9377 11.8675 12.5597 13.5 10 13.5C7.44027 13.5 5.06226 11.8675 3.27651 10.1406C2.39356 9.28672 1.67738 8.43112 1.18181 7.78843C0.934335 7.4675 0.742683 7.2007 0.61356 7.01517Z" stroke="#78848F"/>
                    <circle cx="10" cy="7" r="2.5" stroke="#78848F"/>
                  </svg>
                  <span class='text-light-grey ml-2'>124</span>
                </div>
              </div>
              
            </div>
          </div>

          <div class='projects__slide flex flex-col gap-y-5 2xl:gap-y-8'>
            <a href='#'
              class='projects__slide-image w-[300px] h-[400px] xl:w-[374px] xl:h-[480px] 2xl:w-[528px] 2xl:h-[720px] overflow-hidden'>
              <img src='/img/images/article-news/bottom-1.jpg' alt='project 1' class=''/>
            </a>
            <div class='info flex flex-col gap-y-3 2xl:gap-y-5'>
            
              <div class='top'>
              
                <div class='date'>
                  <span class='text-10-350-header text-deep-grey'>02.08.2023</span>
                </div>
                
                <button
                  class='projects__slide-title flex items-center text-left w-fit'>
                  <h5
                    class='text-button-primary uppercase'>
                    <span>очень длинное Название статьи на две строчки</span>
                  </h5>
                  <div class='flex justify-between items-center ml-2'>
                    <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
                      <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
                    </svg>
                  </div>
                </button>
              </div>
              
              <div class='text'>
                <p class='flex max-h-[70px] text-ellipsis overflow-hidden'>
                  Мы вынуждены отталкиваться от того, что внедрение современных методик предполагает независимые способы реализации позиций, занимаемых участниками в отношении поставленных задач!
                </p>
              </div>
              
              <div class='bottom flex gap-x-5 [&_div]:flex [&_div]:items-center'>
                <div class='time'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7.5" stroke="#78848F"/>
                    <path d="M8 5V9H12" stroke="#78848F"/>
                  </svg>
                  <span class='text-light-grey ml-2'>5 минут</span>
                </div>
                <div class='like'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path d="M9 15C2.87187 10.239 1 8.03847 1 5.50868C1 3.03122 2.79375 1 5.25 1C6.95312 1 8.21875 2.031 9 3.49286C9.78125 2.031 11.0469 1 12.75 1C15.2062 1 17 3.03122 17 5.50868C17 7.81996 15.575 9.89119 9 15Z" stroke="#033260"/>
                  </svg>
                  <span class='text-light-grey ml-2'>22</span>
                </div>
                <div class='repost'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M11.005 6C6 8 3.5 10.3235 2 14.5C5.5 12 6.5 11 11.005 10.5V16L18 8.45455L11.005 2V6Z" stroke="#033260"/>
                  </svg>
                  <span class='text-light-grey ml-2'>9</span>
                </div>
                <div class='views'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                    <path d="M0.61356 7.01517C0.609999 7.01005 0.606485 7.00499 0.603019 7C0.606485 6.99501 0.609999 6.98995 0.61356 6.98483C0.742683 6.7993 0.934335 6.5325 1.18181 6.21157C1.67738 5.56888 2.39356 4.71328 3.27651 3.85943C5.06226 2.13254 7.44027 0.5 10 0.5C12.5597 0.5 14.9377 2.13254 16.7235 3.85943C17.6064 4.71328 18.3226 5.56888 18.8182 6.21157C19.0657 6.5325 19.2573 6.7993 19.3864 6.98483C19.39 6.98995 19.3935 6.99501 19.397 7C19.3935 7.00499 19.39 7.01005 19.3864 7.01517C19.2573 7.2007 19.0657 7.4675 18.8182 7.78843C18.3226 8.43112 17.6064 9.28672 16.7235 10.1406C14.9377 11.8675 12.5597 13.5 10 13.5C7.44027 13.5 5.06226 11.8675 3.27651 10.1406C2.39356 9.28672 1.67738 8.43112 1.18181 7.78843C0.934335 7.4675 0.742683 7.2007 0.61356 7.01517Z" stroke="#78848F"/>
                    <circle cx="10" cy="7" r="2.5" stroke="#78848F"/>
                  </svg>
                  <span class='text-light-grey ml-2'>124</span>
                </div>
              </div>
              
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>

  <div
    class='projects__slide-bottom flex flex-col lg:flex-row gap-y-5 lg:justify-between lg:items-center lg:order-2 mx-5 md:mx-10 xl:mx-20 2xl:mx-[120px] max-w-screen-2xl'>
    <div class='projects__slide-buttons flex justify-center gap-x-5 lg:gap-x-10 lg:order-2'>
      <button class='projects-slide-button flex-center w-3 h-3 2xl:w-4 2xl:h-4'>
        <span class='w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-secondary'></span>
      </button>
      <button class='projects-slide-button flex-center w-3 h-3 2xl:w-4 2xl:h-4 slider-button-outer-active'>
        <span class='w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-secondary slider-button-inner-active'></span>
      </button>
      <button class='projects-slide-button flex-center w-3 h-3 2xl:w-4 2xl:h-4'>
        <span class='w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-secondary'></span>
      </button>
      <button class='projects-slide-button flex-center w-3 h-3 2xl:w-4 2xl:h-4'>
        <span class='w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-secondary'></span>
      </button>
      <button class='projects-slide-button flex-center w-3 h-3 2xl:w-4 2xl:h-4'>
        <span class='w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-secondary'></span>
      </button>
    </div>

    <button class='projects__button flex justify-center items-center px-6 py-[18px] 2xl:py-[18px] border border-primary lg:order-1 hover:hover-text hover:hover-border'>
      <span class='mr-2 text-button-primary !font-bold uppercase'>смотреть все (17)</span>
      <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
        <path class='stroke-secondary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260'/>
      </svg>
    </button>

    <div class='projects__nav-buttons gap-x-2 hidden lg:flex lg:order-3'>
      <button
        class='projects__nav-button flex justify-center items-center px-[13px] py-[19px] 2xl:px-[21px] 2xl:py-[27px] border border-primary'>
        <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class='rotate-180 scale-y-[-1]'>
          <path class='stroke-primary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
        </svg>
      </button>
      <button
        class='projects__nav-button flex justify-center items-center px-[13px] py-[19px] 2xl:px-[21px] 2xl:py-[27px] border border-primary'>
        <svg width='24' height='11' viewBox='0 0 24 11' fill='none' xmlns='http://www.w3.org/2000/svg' class=''>
          <path class='stroke-primary' d='M0.000488281 4H22.0005L16.0005 10' stroke='#033260' />
        </svg>
      </button>
    </div>
  </div>
</div>
  
  
`
