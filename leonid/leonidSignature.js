export const leonidSignature = document.createElement('section')
leonidSignature.classList.add('signature', 'section')

leonidSignature.innerHTML = `
<div class='signature__wrapper relative flex justify-end lg:justify-between gap-x-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl my-8 md:my-20 xl:my-[102px] 2xl:my-[160px] m-auto'>
  <div
    class='signature__frame hidden md:flex absolute border border-semi-grey bottom-0 top-0 left-0 right-0 md:left-10 md:right-10 xl:left-20 xl:right-20 2xl:left-[120px] 2xl:right-[120px]'></div>
  <div class='signature__info flex flex-col justify-between py-5 md:pb-10 lg:py-10 2xl:py-20 md:pr-10 pl-5 lg:pl-10 2xl:pl-20'>
    <div class='signature__text text-right lg:text-left max-w-[295px]'>
      <p class='font-stem-extra-light-italic text-[14px] md:text-[18px] 2xl:text-[24px] leading-[143%] tracking-[0.4px] md:leading-[155%] md:tracking-[0.6px] 2xl:tracking-[0.72px]'>
        Помогаю людям через искусство раскрываться в пространствах,
в которых они живут и работают
      </p>
    </div>
    <div class='signature__tag text-right lg:text-left text-marianna'>
      <p>
        Леонид <br />
        Ким
      </p>
    </div>
  </div>
  <div class='signature__images flex'>
    <div
      class='min-w-[135px] min-h-[135px] md:min-w-[334px] md:min-h-[440px] xl:min-w-0 xl:w-[374px] xl:min-h-0 2xl:w-[546px] 2xl:h-[680px] w-[25vw] md:w-auto relative'>
      <img
        src='/img/images/signature-img-sm-1.jpg'
        alt='Aleks Kim Stands'
        class='md:hidden'
      />
      <img
        src='/img/images/signature-img-1.jpg'
        alt='Aleks Kim Stands'
        class='hidden md:flex relative top-[-20px] right-[-20px] lg:right-auto xl:h-full'
      />
<!--      <img-->
<!--        src='/img/icons/quotes-logo.svg'-->
<!--        alt='quotes logo'-->
<!--        class='absolute w-[42px] h-[36px] md:h-[48px] md:w-[56px] bottom-[33%] md:bottom-[58%] left-[-23px] md:left-[-11px] lg:left-[-31px] 2xl:left-[-40px] 2xl:w-[74px] 2xl:h-[64px]'-->
<!--      />-->
      
      
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="48" viewBox="0 0 56 48" fill="none" class='absolute w-[42px] h-[36px] md:h-[48px] md:w-[56px] bottom-[33%] md:bottom-[58%] left-[-23px] md:left-[-11px] lg:left-[-31px] 2xl:left-[-40px] 2xl:w-[74px] 2xl:h-[64px]'>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3059 48L55.8134 48L56 22.6668L39.3321 22.6668C39.4034 14.5261 41.6041 11.8419 43.1867 10.7627C45.2417 9.36133 48.0719 9.2302 51.9639 9.23021L51.9639 -0.000442858C51.8415 -0.000442868 48.4831 -0.000260057 48.3543 -0.000443173L48.3319 -0.000443175C46.518 -0.00049674 42.702 -0.000607699 38.1811 3.08236C33.0926 6.55236 30.3812 12.8985 30.3078 22.6668L30.3059 22.6668L30.3059 48Z" fill="#E0E5E9"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.000154495 48L25.1318 48L25.1318 22.6668L9.02543 22.6668C9.09678 14.5261 11.2975 11.8419 12.88 10.7627C14.9351 9.36133 17.7653 9.2302 21.6572 9.23021L21.6572 -0.000442809C21.5348 -0.000442819 18.1764 -0.000260007 18.0476 -0.000443124L18.0253 -0.000443126C16.2114 -0.00049669 12.3954 -0.00060765 7.87444 3.08236C2.78598 6.55236 0.0745823 12.8985 0.00118477 22.6668L-0.000156095 22.6668L-0.000156118 22.9312C-0.000283915 22.9795 -0.000346862 23.0278 -0.000346866 23.0762L-0.000156131 23.0762L-0.000154495 48Z" fill="#E0E5E9"/>
      </svg>
      
    </div>
    <div
      class='hidden lg:flex lg:w-[334px] lg:h-[440px] xl:w-[374px] xl:h-[480px] 2xl:w-[546px] 2xl:h-[680px] relative'>
      <img
        src='/img/images/signature-img-2.jpg'
        alt='Aleks Kim Points'
        class='hidden lg:flex relative lg:top-[20px] lg:right-[-20px]'
      />
    </div>
  </div>
</div>
  
 `
