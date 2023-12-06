export const blogNewsList = document.createElement('section')
blogNewsList.classList.add('blog-news__list', 'section')

blogNewsList.innerHTML = `
  
  <div class='wrapper px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl m-auto'>
    <div class='list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 md:gap-y-[64px] xl:gap-y-[80px] 2xl:gap-y-[120px] gap-x-5 xl:gap-x-[42px] 2xl:gap-x-[48px] grid-flow-row-dense [&>div]:col-span-1'>
    
      <div class='card flex flex-col gap-y-5 2xl:gap-y-7'>
        <div class='img'>
          <img src='/img/images/blog-news/card-2xl-1.jpg' alt='1'>
        </div>
        <div class='info flex flex-col gap-y-3 2xl:gap-y-5'>
        
          <div class='top'>
          
            <div class='date'>
              <span class='text-10-350-header text-deep-grey'>02.08.2023</span>
            </div>
            
            <button
              class='projects__slide-title flex items-center text-left w-fit'>
              <h5
                class='text-button-primary uppercase'>
                <span>Название статьи</span>
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
      
      <div class='card flex flex-col gap-y-5 2xl:gap-y-7'>
        <div class='img'>
          <img src='/img/images/blog-news/card-2xl-2.jpg' alt='1'>
        </div>
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
      
      <div class='card flex flex-col gap-y-5 2xl:gap-y-7'>
        <div class='img'>
          <img src='/img/images/blog-news/card-2xl-3.jpg' alt='1'>
        </div>
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
      
      <div class='card flex flex-col gap-y-5 2xl:gap-y-7'>
        <div class='img'>
          <img src='/img/images/blog-news/card-2xl-4.jpg' alt='1'>
        </div>
        <div class='info flex flex-col gap-y-3 2xl:gap-y-5'>
        
          <div class='top'>
          
            <div class='date'>
              <span class='text-10-350-header text-deep-grey'>02.08.2023</span>
            </div>
            
            <button
              class='projects__slide-title flex items-center text-left w-fit'>
              <h5
                class='text-button-primary uppercase'>
                <span>Название статьи</span>
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
      
      <div class='card flex flex-col gap-y-5 2xl:gap-y-7'>
        <div class='img'>
          <img src='/img/images/blog-news/card-2xl-5.jpg' alt='1'>
        </div>
        <div class='info flex flex-col gap-y-3 2xl:gap-y-5'>
        
          <div class='top'>
          
            <div class='date'>
              <span class='text-10-350-header text-deep-grey'>02.08.2023</span>
            </div>
            
            <button
              class='projects__slide-title flex items-center text-left w-fit'>
              <h5
                class='text-button-primary uppercase'>
                <span>Название статьи</span>
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
      
      <div class='card flex flex-col gap-y-5 2xl:gap-y-7'>
        <div class='img'>
          <img src='/img/images/blog-news/card-2xl-1.jpg' alt='1'>
        </div>
        <div class='info flex flex-col gap-y-3 2xl:gap-y-5'>
        
          <div class='top'>
          
            <div class='date'>
              <span class='text-10-350-header text-deep-grey'>02.08.2023</span>
            </div>
            
            <button
              class='projects__slide-title flex items-center text-left w-fit'>
              <h5
                class='text-button-primary uppercase'>
                <span>Название статьи</span>
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
    
    <button class='footer__button flex-center flex-1 md:flex-1 md:order-1 w-full xl:w-fit m-auto xl:justify-center my-10 md:my-[64px] xl:my-20 2xl:my-[120px]'>
      <span class='w-full min-w-[220px] flex justify-center items-center xl:w-fit text-button-primary bg-primary text-light px-5 py-4'>
        показать ещё
      </span>
    </button>
    
  </div>
  
`
