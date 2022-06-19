const stories_page = document.querySelector("#stories-page");
const main_content = document.querySelector("#maincontent");
const home = document.querySelector("#home");
const options = document.querySelectorAll("#options li");

const get_data = async (option) => {
  const data = fetch(`http://localhost:3000/draft/${option}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "GET",
    body: JSON.stringify(),
  })
    .then((response) => response.json())
    .then((r) => console.log(r))
    .catch((e) => console.error(e));
};

const createDraft = (id, title, date) => {
  const list = document.createElement("div");
  list.innerHTML =
    //   <a href="/list/${id}"><b style="color:black;font-size:16px">${title}</b></a>
    `
  <div class="renderPost">
    <a href="#${title.split(" ").join("-")}">
      <b style="color:black;font-size:16px;">${title}</b>
    </a>
    <p style='opacity:50%;'> Created ${timetxt} ago </p>   
    <hr>
  </div>
  `;
  list.style.font = "14px Arial, sans-serif";
  list.style.marginTop = "20px";
  return list;
};

const lists = [
  {
    id: "34rtyui8vds7",
    title: "Untitled list 1",
    storiesNo: 5,
  },
  {
    id: "34rtyui8vds7",
    title: "Untitled list 2",
    storiesNo: 2,
  },
  {
    id: "34rtyui8vds7",
    title: "Untitled list 3",
    storiesNo: 9,
  },
  {
    id: "34rtyui8vds7",
    title: "Untitled list 4",
    storiesNo: 8,
  },
];

const renderActive = (currentActive) => {
  document.getElementById(currentActive).classList.add("active");
  while (main_content.firstChild)
    main_content.removeChild(main_content.firstChild);
  const data =
    currentActive === "drafts"
      ? drafts
      : currentActive === "published"
      ? published
      : responses;
  data.forEach(({ id, title, time }) => {
    main_content.appendChild(createDraft(id, title, time));
  });
};

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    options.forEach((o) => o.classList.remove("active"));
    // const data = await get_data(option.id)
    renderActive(option.id);
  });
});

renderActive("drafts");
