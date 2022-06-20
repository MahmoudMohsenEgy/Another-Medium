const storyForm = document.getElementById("story-form");

const addbtn1 = document.querySelector("#add-icon-1");
const addbtn2 = document.querySelector("#add-icon-2");
const addimg = document.querySelector("#add-img");
const input_1 = document.querySelector("#input-1");
const imgInputBox = document.querySelector("#img-input");
const imgdiv = document.querySelector("#img-div");
const savebtn = document.querySelector("#save");
const canclebtn = document.querySelector("#cancle");
const imgUrlInput = document.querySelector("#img");
// input_1.addEventListener("focus", () => {
//   addbtn2.classList.add("hidden");
//   addbtn1.classList.contains("hidden")
//     ? addbtn1.classList.remove("hidden")
//     : null;
// });
const input_2 = document.querySelector("#input-2");
input_2.addEventListener("focus", () => {
  addbtn1.classList.add("hidden");
  addbtn2.classList.contains("hidden")
    ? addbtn2.classList.remove("hidden")
    : null;
});
const publish_btn = document.querySelector("#publish");
publish_btn.addEventListener("click", () => {
  storyForm.submit();
});

addbtn1.addEventListener("click", () => {
  addbtn1.classList.contains("add-icon-clicked")
    ? addbtn1.classList.remove("add-icon-clicked")
    : addbtn1.classList.add("add-icon-clicked");
});
addbtn2.addEventListener("click", () => {
  addbtn2.classList.toggle("add-icon-clicked");
  addimg.classList.toggle("add-img-active");
});
imgdiv.addEventListener("click", () => {
  imgInputBox.classList.toggle("hidden");
});
addimg.addEventListener("click", () => {
  imgInputBox.classList.toggle("hidden");
});
savebtn.addEventListener("click", () => {
     imgInputBox.classList.toggle("hidden")
});
canclebtn.addEventListener("click", () => {
  imgUrlInput.value = "";
  imgInputBox.classList.toggle("hidden");
});

// function isValidURL(str) {
//   var pattern = new RegExp(
//     "^(https?:\\/\\/)?" + // protocol
//       "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
//       "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
//       "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
//       "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
//       "(\\#[-a-z\\d_]*)?$",
//     "i"
//   ); // fragment locator
//   return !!pattern.test(str);
// }