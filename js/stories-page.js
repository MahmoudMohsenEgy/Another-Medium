const stories_page = document.querySelector("#storiesPage");
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
  const timeinyears = (Date.now() - date) / (1000 * 60 * 60 * 24 * 365);
  const timeinMonths = timeinyears * 12;
  const timeinDays = timeinMonths * 30;
  const timeinWeeks = timeinDays / 7;
  const timeinHrs = timeinDays * 24;
  const timeinMins = timeinHrs * 60;

  const timetxt =
    timeinyears > 1
      ? timeinyears.toFixed(0) + " years "
      : timeinMonths > 1
      ? timeinMonths.toFixed(0) + " months "
      : timeinWeeks > 1
      ? timeinWeeks.toFixed(0) + " weeks "
      : timeinDays > 1
      ? timeinDays.toFixed(0) + " days "
      : timeinHrs > 1
      ? timeinHrs.toFixed(0) + " hrs "
      : timeinMins.toFixed(0) + " min ";

  const draft = document.createElement("div");
  draft.innerHTML =
    //   <a href="/draft/${id}"><b style="color:black;font-size:16px">${title}</b></a>
    `
  <div class="renderPost">
    <a href="#${title.split(" ").join("-")}">
      <b style="color:black;font-size:16px;">${title}</b>
    </a>
    <p style='opacity:50%;'> Created ${timetxt} ago </p>   
    <hr>
  </div>
  `;
  draft.style.font = "14px Arial, sans-serif";
  draft.style.marginTop = "20px";
  return draft;
};
const responses = [
  {
    id: "34rtyui8vds7",
    title: "Untitled response 1",
    time: Date.UTC(2021),
  },
  {
    id: "34rtdsayui87",
    title: "Untitled response 2",
    time: Date.UTC(2022, 3),
  },
  {
    id: "34rtyuidsa87",
    title: "Untitled response 3",
    time: Date.UTC(2022, 4, 1),
  },
  {
    id: "34rtyui8fas7",
    title: "Untitled response 4",
    time: Date.now(),
  },
];
const drafts = [
  {
    id: "34rtyui8vds7",
    title: "Untitled story 1",
    time: Date.UTC(2021),
  },
  {
    id: "34rtdsayui87",
    title: "Untitled story 2",
    time: Date.UTC(2022, 3),
  },
  {
    id: "34rtyuidsa87",
    title: "Untitled story 3",
    time: Date.UTC(2022, 4, 1),
  },
  {
    id: "34rtyui8fas7",
    title: "Untitled story 4",
    time: Date.now(),
  },
  {
    id: "34rtyui8ewf7",
    title: "Untitled story 5",
    time: Date.UTC(2020, 6),
  },
];
const published = [
  {
    id: "34rtyui8vds7",
    title: "Untitled published 1",
    time: Date.UTC(2021),
  },
  {
    id: "34rtyui8fas7",
    title: "Untitled published 4",
    time: Date.now(),
  },
  {
    id: "34rtyui8ewf7",
    title: "Untitled published 5",
    time: Date.UTC(2020, 6),
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
