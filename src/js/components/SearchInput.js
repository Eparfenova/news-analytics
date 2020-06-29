export class SearchInput {
    constructor(searchContent, newsApi, dataStorage, cardList) {
        this.dataStorage = dataStorage;
        this.searchContent = searchContent;
        this.newsApi = newsApi;
        const search = this.searchContent.querySelector('.search');
        const searchForm = search.querySelector('.search__form');
        this.searchInput = searchForm.querySelector('.search__input');
        this.searchButton = searchForm.querySelector('.search__button');
        this.preloader = this.searchContent.querySelector('.preloader');
        this.notFound = this.searchContent.querySelector('.not-found');
        this.result = this.searchContent.querySelector('.result');
        this.resultButton = this.result.querySelector('.result__button');
        this.cardList = cardList;

    }
    search() {
        const searchInputValue = this.searchInput.value;
        this.preloader.setAttribute('disabled', false);
        this.result.setAttribute('disabled', true);
        this.notFound.setAttribute('disabled', true);
        this.cardList.clear();
        this.newsApi.getNews(searchInputValue)
        .then((result) => {
            if (result) { 
                if(result.length() === 0) {
                    this.notFound.setAttribute('disabled', false);
                    this.preloader.setAttribute('disabled', true);
                    this.result.setAttribute('disabled', true);
                } else { 
                    this.dataStorage.setData('newsData', result);
                    this.cardList.getCards();
                    this.notFound.setAttribute('disabled', true);
                    this.preloader.setAttribute('disabled', true);
                    this.result.setAttribute('disabled', false);
                }
            }
        })
    };

    setEvenListeners() {
        this.searchButton.addEventListener('click', this.search());
        this.resultButton.addEventListener('click', this.cardList.getCards());

    }
}