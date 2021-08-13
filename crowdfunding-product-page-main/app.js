const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
const backBtn= document.querySelector("#backthisBtn");
const modal = document.querySelector(".modal-back-project")
const closeModal= document.querySelector(".close-modal");
backBtn.addEventListener("click", function () {
  modal.classList.add('modal-active');
  document.getElementById("overlay").style.display = "block";

});
closeModal.addEventListener("click", function () {
  modal.classList.remove('modal-active');
  document.getElementById("overlay").style.display = "none";

})
const continueBtn=document.querySelector(".continue-btn");
const thankyouModal=document.querySelector(".thankyou-modal");
continueBtn.addEventListener("click", function () {
  thankyouModal.classList.add('thankyou-modal-visible');
  document.getElementById("overlay2").style.display = "block";

})
const gotIt= document.querySelector(".thankyou-modal-btn");
gotIt.addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("overlay2").style.display = "none";
  modal.classList.remove('modal-active');
  thankyouModal.classList.remove('thankyou-modal-visible');

})