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
        const result = arr.filter(element => element.title && element.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
        return result ? result.length : 0;
        
    }

    getRequestMaxCount(arr, searchText) {
        const date = new Date();
        let maxCount = 0;
        for (let i = 0; i < NEWS_API_DATE_LAG; i++) {
            let checkDate  = new Date(date);
            checkDate.setDate(date.getDate() - i + 1);
            checkDate = DateUtils.sliceDate(checkDate);
            const result = arr.filter(element => element.title && element.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0 && checkDate == element.date);
            if (maxCount < result.length) {
                maxCount = result.length;
            }
        }
        return maxCount;
        
    }

    setTableScale(obj, maxCount) {
        const tableScaleTopArray = Array.from(obj.querySelectorAll('.table__scale-length'));
        tableScaleTopArray.reduce(function(percent, element) {
            let value = Math.ceil(maxCount * percent);
            if ((value === 0 && percent != 0) || (value === maxCount && percent != 1) || (value ===  Math.ceil(maxCount * (percent + 0.25)))) {
                value = "";
            } 
            element.textContent = value;
             return percent + 0.25;
        }, 0);
    }

    setTableColumn(arr, obj, searchText, maxCount) {
        const date = new Date();
        const tableColumnArray = Array.from(obj.querySelectorAll('.table__column'));
            tableColumnArray.reduce(function(day, element) {
                let checkDate  = new Date(date);
                checkDate.setDate(date.getDate() - day + 1);
                checkDate = DateUtils.sliceDate(checkDate);
                const result = arr.filter(element => element.title && element.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0 && checkDate == element.date);
                const count = result.length;
                element.textContent = count;
                const width = Math.floor(count / maxCount * 100);
                element.setAttribute("style", `width: ${width}%;`);
                return day - 1;
            }, NEWS_API_DATE_LAG);
    }


    getAnalytics() {
        const newsData = this.dataStorage.getData('newsData');
        const requestContent = this.container.querySelector('.request').querySelector('.request__content');
        const requestTitle = requestContent.querySelector('.request__title');
        const searchText = this.getRequestTitle();
        requestTitle.textContent = `Вы спросили: «${searchText}»`;
        const newsCount = requestContent.querySelector('#newsCount');
        const requestNewsCount = this.getRequestNewsCount(newsData);
        newsCount.textContent = `Новостей за неделю: ${requestNewsCount}`;
        const titleCount = requestContent.querySelector('#titleCount');
        titleCount.textContent = `Упоминаний в заголовках: ${this.getRequestTitleCount(newsData, searchText)}`;
        const maxCount = this.getRequestMaxCount(newsData, searchText);
        const tableContent = this.container.querySelector('.table').querySelector('.table__content');
        const tableScaleTop = tableContent.querySelector('.table__scale');
        const tableScaleDown = tableContent.querySelector('.table__scale_position_down');
        this.setTableScale(tableScaleTop, maxCount);
        this.setTableScale(tableScaleDown, maxCount);
        const tableHistogram = tableContent.querySelector('.table__histogram');
        const tableDate = tableHistogram.querySelector('.table__date');
        const tableDateArray = Array.from(tableDate.querySelectorAll('.table__day'));
        tableDateArray.reduce(function(day, element) {
            let date = new Date();
            date.setDate(date.getDate() - day + 1);
            element.textContent = DateUtils.getAnalyticsDate(date);
            return day - 1;
        }, NEWS_API_DATE_LAG);
        const tableColumns = tableContent.querySelector('.table__columns');
        this.setTableColumn(newsData, tableColumns, searchText, maxCount); 
        const tableSubtitle = tableContent.querySelector('.table__container').querySelector('#month');
        const date = new Date();
        const tableMonth = date.toLocaleString('default', { month: 'long' });
        tableSubtitle.textContent = `Дата (${tableMonth})`;


    }


 }