const storyForm = document.getElementById("story-form");

const addbtn1 = document.querySelector("#add-icon-1");
const addbtn2 = document.querySelector("#add-icon-2");

const input_1 = document.querySelector("#input-1");
input_1.addEventListener("focus", () => {
  addbtn2.classList.add("hidden");
  addbtn1.classList.contains("hidden")
    ? addbtn1.classList.remove("hidden")
    : null;
});
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
  addbtn2.classList.contains("add-icon-clicked")
    ? addbtn2.classList.remove("add-icon-clicked")
    : addbtn2.classList.add("add-icon-clicked");
});
