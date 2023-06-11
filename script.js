const nav = document.querySelectorAll(".sidenav ul a");
nav.forEach(function (sidenav) {
  function change(event) {
    const id = event.currentTarget.id;
    const div = document.querySelectorAll("main > div");
    div.forEach(function (divs) {
      divs.classList.remove("active");
      if (divs.classList.contains(id)) {
        divs.classList.add("active");
      }
    });
  }
  sidenav.addEventListener("click", change);
});
