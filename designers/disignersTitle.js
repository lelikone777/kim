export const designersTitle = document.createElement('section')
designersTitle.classList.add('designers__title')

designersTitle.innerHTML = `
  
<div class="wrapper flex flex-col gap-y-1 my-5 ml-auto mr-auto px-5 md:px-10 xl:px-20 2xl:px-[120px] max-w-screen-2xl">
  <div class="pagination text-14-400 text-primary mb-1">
    <ul class="flex flex-wrap gap-x-3 gap-y-1">
      <li>
        <a href="#">
          <span>Главная</span>
        </a>
      </li>
      <li>
        <a href="#" class='text-light-grey'>
          <span>Дизайнерам</span>
        </a>
      </li>
     
    </ul>
  </div>

  <div class="title flex mb-3">
    <h2 class=" text-32-300 uppercase">Дизайнерам</h2>
  </div>
  
</div>
`
