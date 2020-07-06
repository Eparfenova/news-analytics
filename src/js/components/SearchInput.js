export class SearchInput {
    constructor(page, newsApi, dataStorage, cardList) {
        this.dataStorage = dataStorage;
        this.page = page;
        const searchContent = this.page.querySelector('.search-content');
        this.newsApi = newsApi;
        const search = searchContent.querySelector('.search');
        this.searchForm = search.querySelector('.search__form');
        this.searchInput = this.searchForm.querySelector('.search__input');
        this.searchButton = this.searchForm.querySelector('.search__button');
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
        .catch((err) => {
            console.log(err);
          });
    };

    getCards() {
        this.cardList.getCards();
        const newsData = this.dataStorage.getData('newsData');
        const cardsCount = this.cardList.getsCardCount();
        const newsCount = newsData ? newsData.length : 0;
        if (newsCount === cardsCount) {
            this.resultButton.setAttribute("style", "display: none");
        }
    }

    searchInputValidity(event) {
        event.preventDefault();
        this.resultButton.removeAttribute("style", "display: none");
        const spanError = this.searchForm.querySelector('.search__error');
        const errorMessage = "Это обязательное поле";
        if (this.searchInput.validity.valid) {
            this.search(event);
            spanError.textContent = "";
        } else {
             spanError.textContent = errorMessage;
        }
        
    }

    setEvenListeners() {
        const searchInputValidity = this.searchInputValidity.bind(this);
        const getCards = this.getCards.bind(this);
        this.searchButton.addEventListener('click', function(event) { searchInputValidity(event)});
        this.resultButton.addEventListener('click', getCards);

    }
}