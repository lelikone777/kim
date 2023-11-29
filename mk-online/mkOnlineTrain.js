export const mkOnlineTrain = document.createElement('section')
mkOnlineTrain.classList.add('mk-online__train', 'section')

mkOnlineTrain.innerHTML = `
 
 <div class='wrapper relative grid grid-cols-1 grid-flow-row-dense md:grid-cols-2 my-5 ml-auto mr-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl gap-y-[14px] md:gap-y-5 md:gap-x-10 xl:gap-x-[146px]'>
 
<div class='frame absolute hidden xl:block border border-semi-grey right-20 top-10 bottom-10 w-2/3 -z-10 xl:bottom-[103px] xl:top-[40px] 2xl:top-[72px] 2xl:bottom-[181px] 2xl:right-[120px]'></div>
 
    <div class='principles__title text-26-300 col-span-1 md:col-start-2 md:row-start-1 md:place-self-end w-full xl:text-right xl:pr-[104px] xl:pl-[80px]'> 
      <div class=''>
        <h2 class='uppercase'>Вас будет учить</h2>
      </div>
    </div>
    
    <div class='poster flex flex-col gap-y-[14px] col-span-1 order-1 md:row-start-1 md:row-end-3'>
      <div class='img '>
        <img src='/img/images/mk-studio/train-2xl.jpg' alt='train'>
      </div>
    </div>
    
    <div class='info col-span-1 order-3 md:col-start-2 md:row-start-2 xl:text-right xl:pr-[104px] xl:pl-[270px] 2xl:pl-[200px]'>
      <h2 class='title'>
        <span class='text-24-300'>Леонид Ким</span>
      </h2>
      <p class='text-14-300 text-light-grey'>Основатель студии современного барельефа, художник, архитектор.</p>
    </div>
    
    
 </div> 
  
`
