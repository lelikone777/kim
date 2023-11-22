export const ar = document.createElement('section')
ar.classList.add('ar')

ar.innerHTML = `
  <div class='price__wrapper relative max-w-screen-2xl m-auto'>
    <div
      class='price__image absolute left-0 right-0 xl:right-auto z-10 top-3 md:top-5 xl:top-4 2xl:top-10 h-[55vw] md:h-[46.878vw] xl:h-[619px] xl:w-[662px]  2xl:h-[741px] 2xl:w-[936px] overflow-hidden '>
      <img
        src='/img/images/product/hand1.jpg'
        alt='contact image'
        class='relative w-full md:hidden'
      />
      <img
        src='/img/images/product/hand-md.jpg'
        alt='contact image'
        class='relative w-full hidden md:block xl:hidden'
      />
      <img
        src='/img/images/product/hand-xl.jpg'
        alt='contact image'
        class='relative w-full hidden xl:block 2xl:hidden'
      />
      <img
        src='/img/images/product/hand-2xl.jpg'
        alt='contact image'
        class='relative w-full hidden 2xl:block'
      />
    </div>
  
    <div class='price__box relative border border-semi-grey mx-5 md:mx-10 xl:mx-20 px-5 sm:px-10 md:px-20 py-5 sm:py-10 md:py-20 xl:flex 2xl:gap-x-20 2xl:mx-[120px]'>
      <div class='flop h-[55vw] md:h-[46.878vw] xl:h-full relative top-3 md:top-5 xl:flex-1'></div>
      <div class='price__info flex flex-col gap-y-5 pt-2 md:gap-y-5 xl:flex-1'>
        <div class='price__text flex flex-col gap-y-3 items-start text-left'>
          <p class='inline-block text-[26px] 2xl:text-[40px] leading-[140%] tracking-[0.5px] 2xl:tracking-[0.8px] uppercase'>
            Примерьте арт объект в своём помещении при помощи
            <span
              class='relative ml-2 bottom-1 inline-block  bg-accent py-[2px] 2xl:py-[4px] px-2.5 text-light text-[10px] 2xl:text-[14px] leading-[140%] 2xl:leading-[160%] tracking-[0.3px] 2xl:tracking-[0.42px] normal-case before:absolute before:content-[&quot;&quot;] before:w-0 before:h-0 before:border-t-[22px] before:border-r-0 before:border-b-0 before:border-l-[5px] before:border-l-transparent before:border-solid before:border-accent before:top-0 before:left-[-4px] after:absolute after:content-[&quot;&quot;] after:w-0 after:h-0 after:border-b-[22px] after:border-r-0 after:border-t-0 after:border-l-[5px] after:border-l-transparent after:border-solid after:border-accent after:bottom-0 after:left-[-4px]'>AR
              </span>
          </p>
        </div>
        
        <button class='shop__button flex justify-center items-center px-6 py-[18px] 2xl:py-[18px] border border-primary lg:order-1 xl:w-fit'>
          <span class='text-[14px] 2xl:text-[16px] tracking-[2.1px] 2xl:tracking-[2.4px] font-bold uppercase'>применить</span>
        </button>
      </div>
    </div>
  </div>
`
