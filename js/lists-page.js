const lists_page = document.querySelector("#lists-page");
const main_content = document.querySelector("#maincontent");
const home = document.querySelector("#home");
const options = document.querySelectorAll("#options li");

const createList = (id, title) => {

    const list = document.createElement("div");
    list.innerHTML =
        //   <a href="/draft/${id}"><b style="color:black;font-size:16px">${title}</b></a>
        `
        <div class="renderpost container bg-light rounded">
        <div class="row">
            <div class="col-9">
            <br><br>
                <h4>
                ${title}
                </h4><br><br>
                    <button class="btn btn-secondary rounded-pill">
                View list
                </button>
            </div>
            <div class="col-3">
                <img src="assets/blank-file-svgrepo-com.svg">
            </div>
        </div>
    </div>
    `;
    list.style.font = "14px Arial, sans-serif";
    list.style.marginTop = "20px";
    return list;
};

const createHighList = (id, title, highlighted) => {

    const highList = document.createElement("div");
    highList.innerHTML =
        //   <a href="/draft/${id}"><b style="color:black;font-size:16px">${title}</b></a>
        `
        <div class="renderpost container bg-light rounded">
        <figure>
        <blockquote class="blockquote"
        <p>${highlighted}</p>
        <br>
    </blockquote>
    <figcaption class="blockquote-footer">
    From the article:
        <cite title="Source Title">${title}</cite>
        </figcaption>
        </figure>
    </div>
    `;
    return highList;
};
const lists = [{
        id: "1",
        title: "My first List",
    },
    {
        id: "2",
        title: "My second list",
    }
];
const highLists = [{
    id: "3",
    title: "how to change keyboard language",
    highlighted: "Open Region and Language by clicking the Start button , clicking Control Panel, clicking Clock, Language, and Region, and then clicking Region and Language. Click the Keyboards and Languages tab. Under Display language, choose a language from the list, and then click OK."
}, ];
const renderActive = (currentActive) => {
    document.getElementById(currentActive).classList.add("active");
    while (main_content.firstChild)
        main_content.removeChild(main_content.firstChild);
    const data =
        currentActive === "saved" ?
        lists :
        highLists;

    if (data == lists) {
        data.forEach(({ id, title }) => {
            main_content.appendChild(createList(id, title));
        });
    } else {
        data.forEach(({ id, title, highlighted }) => {
            main_content.appendChild(createHighList(id, title, highlighted));
        });
    }

};

options.forEach((option) => {
    option.addEventListener("click", (e) => {
        options.forEach((o) => o.classList.remove("active"));
        // const data = await get_data(option.id)
        renderActive(option.id);
    });
});

renderActive("list");