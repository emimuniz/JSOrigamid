const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

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
