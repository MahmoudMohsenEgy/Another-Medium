const stories_page = document.querySelector("#storiesPage");
const main_content = document.querySelector("#maincontent");
const home = document.querySelector("#home");

const get_data = async(option) => {
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

const options = document.querySelectorAll("#options li");

options.forEach((option) => {
    option.addEventListener("click", (e) => {
        options.forEach((o) => o.classList.remove("active"));
        while (main_content.firstChild)
            main_content.removeChild(main_content.firstChild);
        option.classList.add("active");
    });
});