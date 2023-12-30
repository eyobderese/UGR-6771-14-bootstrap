var readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach(function (button) {
  let isHidden = true;
  button.addEventListener("click", function () {
    if (isHidden) {
      button.innerHTML = "Read Less";
    } else {
      button.innerHTML = "Read More";
    }
    isHidden = !isHidden;
    var hiddenParagraph = button.previousElementSibling;
    hiddenParagraph.classList.toggle("d-none");
  });
});
