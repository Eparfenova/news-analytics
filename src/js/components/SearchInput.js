export class SearchInput {
    constructor(page, newsApi, dataStorage, cardList) {
        this.dataStorage = dataStorage;
        this.page = page;
        const searchContent = this.page.querySelector('.search-content');
        this.newsApi = newsApi;
        const search = searchContent.querySelector('.search');
        const searchForm = search.querySelector('.search__form');
        this.searchInput = searchForm.querySelector('.search__input');
        this.searchButton = searchForm.querySelector('.search__button');
        this.preloader = this.page.querySelector('.preloader');
        this.notFound = this.page.querySelector('.not-found');
        this.result = this.page.querySelector('.result');
        this.resultButton = this.result.querySelector('.result__button');
        this.cardList = cardList;

    }

    search(event) {
        event.preventDefault();
        const searchInputValue = this.searchInput.value;
        this.preloader.removeAttribute("style", "display: none");
        this.result.setAttribute("style", "display: none");
        this.notFound.setAttribute("style", "display: none");
        this.cardList.clear();
        this.dataStorage.setData("searchText", searchInputValue);
        this.newsApi.getNews(searchInputValue)
        .then(result => {
            if (result) { 
                if(result.length === 0) {
                    this.notFound.removeAttribute("style", "display: none");
                    this.preloader.setAttribute("style", "display: none");
                    this.result.setAttribute("style", "display: none");
                } else { 
                    this.dataStorage.setData('newsData', result);
                    this.cardList.getCards();
                    this.notFound.setAttribute("style", "display: none");
                    this.preloader.setAttribute("style", "display: none");
                    this.result.removeAttribute("style", "display: none");
                }
            }
        })
    };

    getCards() {
        this.cardList.getCards();
    }

    setEvenListeners() {
        console.log(this.searchButton);
        const search = this.search.bind(this);
        const getCards = this.getCards.bind(this);
        this.searchButton.addEventListener('click', function(event) { search(event)});
        this.resultButton.addEventListener('click', getCards);

    }
}