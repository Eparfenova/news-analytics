export class NewsCard {
    constructor(dataCard, container) {
      this.container = container;
      this.dataCard = dataCard;
    }

    create() {
        const card = document.createElement('div');
        card.classList.add("result__card");
        const image = document.createElement('img');
        image.classList.add("result__img");
        image.setAttribute("src", `<%=require('${this.dataCard.urlToImage}').default%>`);
        const paragraph = document.createElement('div');
        paragraph.classList.add("result__paragraph");
        const date = document.createElement('p');
        date.classList.add("result__date");
        date.textContent = this.dataCard.publishedAt;
        const subtitle = document.createElement(h3);
        subtitle.classList.add("result__subtitle");
        subtitle.textContent = this.dataCard.title;
        const description = document.createElement('p');
        description.classList.add("result__description");
        description.textContent = this.dataCard.content;
        const source = document.createElement('p');
        source.classList.add("result__source");
        source.textContent = this.dataCard.source;
        card.appendChild(image);
        paragraph.appendChild(date);
        paragraph.appendChild(subtitle);
        paragraph.appendChild(description);
        paragraph.appendChild(source);
        card.appendChild(paragraph);
        this.card = card;
      }
}