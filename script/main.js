window.onload = () => {
  // добавляем слушатели на кнопки
  const navBar = document.getElementById("header__burger__box");
  document.getElementById("burger__btn").onclick = () => {
    navBar.style.display != "block"
      ? (navBar.style.display = "block")
      : (navBar.style.display = "none");
  };
  for (
    let i = 0;
    i < document.querySelectorAll(".menu_burger_btn").length;
    i++
  ) {
    document.querySelectorAll(".menu_burger_btn")[i].onclick = () => {
      document.getElementById("header__burger__box").style.display = "none";
    };
  }
};
