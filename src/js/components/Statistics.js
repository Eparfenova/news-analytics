import { NEWS_API_DATE_LAG } from "../constants/constants";
import { DateUtils } from '../utils/DateUtils';

export class Statistics {
    constructor(container, dataStorage) {
        this.container = container;
        this.dataStorage = dataStorage;
    }

    getRequestTitle() {
        const requestTitle = this.dataStorage.getData('searchText');
        if (requestTitle) {
            return requestTitle;
        } else {
            return "";
        }
        
    }

    getRequestNewsCount(arr) {
        return arr ? arr.length : 0;
    }

    getRequestTitleCount(arr, searchText) {
        const result = arr.filter(e => e.title && e.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
        return result.length;
        
    }

    getRequestMaxCount(arr, searchText) {
        const date = new Date();
        let maxCount = 0;
        for (let i = 0; i < NEWS_API_DATE_LAG; i++) {
            let checkDate  = new Date(date);
            checkDate.setDate(date.getDate() - i);
            checkDate = DateUtils.sliceDate(checkDate);
            const result = arr.filter(e => e.title && e.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0 && checkDate == e.date);
            if (maxCount < result.length) {
                maxCount = result.length;
            }
        }
        return maxCount;
        
    }

    getAnalytics() {
        const newsData = this.dataStorage.getData('newsData');
        const requestContent = this.container.querySelector('.request').querySelector('.request__content');
        const requestTitle = requestContent.querySelector('.request__title');
        const searchText = this.getRequestTitle();
        requestTitle.textContent = `Вы спросили: «${searchText}»`;
        const newsCount = requestContent.querySelector('#newsCount');
        let requestNewsCount = this.getRequestNewsCount(newsData);
        newsCount.textContent = `Новостей за неделю: ${requestNewsCount}`;
        const titleCount = requestContent.querySelector('#titleCount');
        titleCount.textContent = `Упоминаний в заголовках: ${this.getRequestTitleCount(newsData, searchText)}`;
        const maxCount = this.getRequestMaxCount(newsData, searchText);
        const tableContent = this.container.querySelector('.table').querySelector('.table__content');
        const tableScaleTop = tableContent.querySelector('.table__scale');
        const tableScaleDown = tableContent.querySelector('.table__scale_position_down');
        let tableScaleTopArray = Array.from(tableScaleTop.querySelectorAll('.table__scale-length'));
        tableScaleTopArray.reduce(function(persent, e) {
             e.textContent = Math.ceil(maxCount * persent);
             return persent + 0.25;
        }, 0);
        let tableScaleDownArray = Array.from(tableScaleDown.querySelectorAll('.table__scale-length'));
        tableScaleDownArray.reduce(function(persent, e) {
            e.textContent = Math.ceil(maxCount * persent);
            return persent + 0.25;
        }, 0);
        const tableHistogram = tableContent.querySelector('.table__histogram');
        const tableDate = tableHistogram.querySelector('.table__date');
        let tableDateArray = Array.from(tableDate.querySelectorAll('.table__day'));
        tableDateArray.reduce(function(day, e) {
            let date = new Date();
            date.setDate(date.getDate() - day + 1);
            e.textContent = DateUtils.getAnalyticsDate(date);
            return day - 1;
        }, NEWS_API_DATE_LAG);
    }


 }