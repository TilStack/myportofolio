// @ts-nocheck
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");
  const cursor2 = document.querySelector(".cursor2");

  if (cursor && cursor2) {
    document.addEventListener("mousemove", function (e) {
      const { clientX, clientY } = e;
      const style = `left: ${clientX}px; top: ${clientY}px;`;

      cursor.style.cssText = style;
      cursor2.style.cssText = style;
    });
  }
});
