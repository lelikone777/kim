export const sample = document.createElement('section')
sample.classList.add('youtube', 'section')

sample.innerHTML = `
 
<div class='flex flex-col md:flex-row max-w-screen-2xl m-auto'>
 
  <div class='wrapper flex flex-col mr-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl gap-y-3 md:gap-x-5 md:gap-y-20 xl:flex-row xl:gap-x-10 m-auto md:flex-1'>
  
    <div class=''>
      <div class='flex flex-col gap-y-3 '>
        <div class='title'>
          <h2 class='text-32-300'>Этот барельеф с подсветкой</h2>
        </div>   
        
        <div class='flex items-center gap-x-3'>
          <div class='switcher'>
            <div class='flex bg-semi-grey w-[69px] h-[36px] py-[6px] pl-[6px] pr-[12px] gap-x-2'>
              <div class='w-6 h-6 bg-light-grey'></div>
              <span class='text-light-grey'>off</span>
            </div>
          </div>
          <div class='text-16-400'><span>Включить подсветку</span></div>
        </div>
          
      </div>
    </div>
  </div>
  
  
  <div class='img'>
    <img src='/img/images/project-page/sample-sm.jpg' alt='sample' class='md:hidden'>
    <img src='/img/images/project-page/sample-md.jpg' alt='sample' class='hidden md:block xl:hidden'>
    <img src='/img/images/project-page/sample-xl.jpg' alt='sample' class='hidden xl:block 2xl:hidden'>
    <img src='/img/images/project-page/sample-2xl.jpg' alt='sample' class='hidden 2xl:block'>
  </div>
 
</div>
`
