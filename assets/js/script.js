document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".item");

  let index = 0;
  const showProjects = setInterval(() => {
    items[index].classList.add("fade");
    index++;
    if(index === items.length) {
      clearInterval(showProjects);
    }
  }, 300);

});