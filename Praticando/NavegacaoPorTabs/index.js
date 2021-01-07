const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

function activeTab() {
  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add('ativo');

    function handleClick(index) {
      tabContent.forEach((item) => {
        item.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        handleClick(index);
      });
    });
  }
}

activeTab();

function activeAccordion() {
  const accordinList = document.querySelectorAll('.js-accordion dt');

  if (accordinList.length) {
    accordinList[0].classList.toggle('ativo');
    accordinList[0].nextElementSibling.classList.toggle('ativo');

    function handleAccording() {
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    }

    accordinList.forEach((item) => {
      item.addEventListener('click', handleAccording);
    });
  }
}

activeAccordion();

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
console.log(linksInternos);

function handleMenu(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  //forma alternativa
  //   const topo = section.offsetTop;
  //   window.scrollTo({
  //     top: topo,
  //     behavior: 'smooth',
  //   });
}

linksInternos.forEach((item) => {
  item.addEventListener('click', handleMenu);
});
