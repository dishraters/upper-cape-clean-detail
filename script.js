const button = document.querySelector("[data-demo-button]");
const toast = document.querySelector(".demo-toast");

if (button && toast) {
  button.addEventListener("click", () => {
    toast.hidden = false;
    window.clearTimeout(window.demoToastTimer);
    window.demoToastTimer = window.setTimeout(() => {
      toast.hidden = true;
    }, 3200);
  });
}
