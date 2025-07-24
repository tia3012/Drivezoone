document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("testDriveBtn");

  if (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault(); // يمنع التنقل المؤقت

      // ✅ تغيير نص الزر
      btn.innerText = "Redirecting...";

      // ✅ تغيير لونه كمثال (اختياري)
      btn.style.backgroundColor = "#9C1717";

      // بعد ثانية، يروح للرابط فعليًا
      setTimeout(function () {
        window.location.href = btn.href;
      }, 1000);
    });
  }
});
