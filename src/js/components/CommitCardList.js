export class CommitCardList {
    constructor(container, createCard, githubApi) {
      this.container = container;
      this.createCard = createCard;
      this.githubApi = githubApi;
    }
  
    addCard(dataCard) {
        const carouselCell = document.createElement("div");
        carouselCell.classList.add("carousel-cell");
        const newCard = this.createCard(dataCard, this.container);
        carouselCell.appendChild(newCard.getCard());
        //this.container.appendChild(carouselCell); 
        var flkty = new Flickity( this.container, {
            cellAlign: 'left',
            contain: true
          });
          flkty.append(newCard.getCard());
    }
  
    render(element) {
        this.addCard(element);
    }
  
    getCards() {
        this.githubApi.getCommits()
        .then(result => {
            result.forEach(e => this.render(e));
        })
    }

  }