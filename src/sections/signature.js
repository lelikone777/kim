export const signature = document.createElement('section')
signature.classList.add('signature')

signature.innerHTML = `
<div
  class="signature__wrapper relative flex justify-end lg:justify-between gap-x-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl my-8 md:my-20 xl:my-[102px] 2xl:my-[160px] m-auto"
>
  <div
    class="signature__frame hidden md:flex absolute border border-semi-grey bottom-0 top-0 left-0 right-0 md:left-10 md:right-10 xl:left-20 xl:right-20 2xl:left-[120px] 2xl:right-[120px]"
  ></div>
  <div
    class="signature__info flex flex-col justify-between py-5 md:pb-10 lg:py-10 2xl:py-20 md:pr-10 pl-5 lg:pl-10 2xl:pl-20"
  >
    <div class="signature__text text-right lg:text-left max-w-[295px]">
      <p
        class="font-stem-extra-light-italic text-[14px] md:text-[18px] 2xl:text-[24px] leading-[143%] tracking-[0.4px] md:leading-[155%] md:tracking-[0.6px] 2xl:tracking-[0.72px]"
      >
        Помогаю людям через искусство раскрываться в пространствах, в
        которых они живут и работают
      </p>
    </div>
    <div class="signature__tag text-right lg:text-left text-marianna">
      <p>
        Леонид <br />
        Ким
      </p>
    </div>
  </div>
  <div class="signature__images flex">
    <div
      class="min-w-[135px] min-h-[135px] md:min-w-[334px] md:min-h-[440px] xl:min-w-0 xl:w-[374px] xl:min-h-0 2xl:w-[546px] 2xl:h-[680px] w-[25vw] md:w-auto relative"
    >
      <img
        src="/src/img/images/signature-img-sm-1.jpg"
        alt="Aleks Kim Stands"
        class="md:hidden"
      />
      <img
        src="/src/img/images/signature-img-1.jpg"
        alt="Aleks Kim Stands"
        class="hidden md:flex relative top-[-20px] right-[-20px] lg:right-auto xl:h-full"
      />
      <img
        src="/src/img/icons/quotes-logo.svg"
        alt="quotes logo"
        class="absolute w-[42px] h-[36px] md:h-[48px] md:w-[56px] bottom-[33%] md:bottom-[58%] left-[-23px] md:left-[-11px] lg:left-[-31px] 2xl:left-[-40px] 2xl:w-[74px] 2xl:h-[64px]"
      />
    </div>
    <div
      class="hidden lg:flex lg:w-[334px] lg:h-[440px] xl:w-[374px] xl:h-[480px] 2xl:w-[546px] 2xl:h-[680px] relative"
    >
      <img
        src="/src/img/images/signature-img-2.jpg"
        alt="Aleks Kim Points"
        class="hidden lg:flex relative lg:top-[20px] lg:right-[-20px]"
      />
    </div>
  </div>
</div>
  
 `
