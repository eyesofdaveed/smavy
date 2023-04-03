const loadingPace = () => {
  let preloader = document.querySelector("#preloader");

  if (!preloader) return;

  if (document.body.classList.contains("pace-done")) {
    return preloader.classList.add("isdone");
  }

  document.addEventListener("load", () => preloader.classList.add("isdone"));

  setTimeout(() => preloader.classList.add("isdone"), 1000);
};

export default loadingPace;
