const loadArticles = () => {
    const list = document.querySelector('.articles_list')
    let htmlText = `<div class="article">
    <div class="article_text">
        <div class="author">
            <img src="assets/RightBar/joseph.jpg" alt="profile picture">
            <span>
                Joseph Dawod
            </span>
        </div>
        <h4>
            Why Snapchat's Product Is Booming
        </h4>
        <p>
            The company withstood Facebook's best swing, now it's growing fast again. Here's why.
        </p>
        <div class="article_info">
            <div class="article_tags">
                <span class="article_date">
                    Apr <span>22</span>
                </span>
                <span class="article_time">
                    3 min read
                </span>
                <a href="">
                    Technoligie
                </a>
            </div>
            <i class="far fa-bookmark"></i>
        </div>
    </div>
    <div class="article_img">
        <img src="assets/dummyData/dummyImagepng.png" alt="article image">
    </div>
</div>`;
    if (list.childElementCount == 0) {
        list.insertAdjacentHTML('afterbegin', htmlText);
    }
    else {
        list.lastElementChild.insertAdjacentHTML('afterend', htmlText);
    }
};


const loadTrending = (articleNumber) => {
    let htmlText = `
    <div class="trending_element">
                    <h3 class="number_text">
                        0${articleNumber}
                    </h3>
                    <div class="trending_article_info">
                        <div class="trending_article_author">
                            <img src="assets/RightBar/joseph.jpg" alt="user image">
                            <span>Andre cronje</span>
                        </div>
                        <h4>
                            The rise and fall of crypto culture 
                        </h4>
                        <div class="article_tags">
                            <span class="article_date">
                                Apr <span>22</span>
                            </span>
                            <span class="article_time">
                                3 min read
                            </span>
                        </div>
                    </div>
                </div>`;
    const container = document.querySelector('.trending_article_container');
    container.insertAdjacentHTML('beforeend',htmlText);
}
let scrolling = false;

const scrollHandler = () => {
    if (scrolling) {
        scrolling = false;
        const header = document.querySelector('header');
        const button = document.querySelector('.button_style.navigation_button');
        if (window.scrollY > 300) {
            if (header.classList.contains('orange_background')) {
                //header background color change
                header.classList.remove('orange_background');
                header.classList.add('white_background');
                //button color change 
                button.classList.remove('black_button');
                button.classList.add('green_button');
            }
        }
        else {
            if (header.classList.contains('white_background')) {
                //header background color change             
                header.classList.remove('white_background');
                header.classList.add('orange_background');
                //button color change 
                button.classList.remove('green_button');
                button.classList.add('black_button');
            }
        }
    }
}

const setScrollFlag = () => {
    scrolling = true;
}
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 40; i++) {
        loadArticles();
    }

    for (let i = 0; i < 6; i++) {
        loadTrending(i+1);
    }

    window.addEventListener('scroll', setScrollFlag)
    setInterval(scrollHandler, 300);
})