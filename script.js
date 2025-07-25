document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("testDriveBtn");

  if (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault(); 
      btn.innerText = "Redirecting...";
      btn.style.backgroundColor = "#9C1717";

      setTimeout(function () {
        window.location.href = btn.href;
      }, 1000);
    });
  }
});
