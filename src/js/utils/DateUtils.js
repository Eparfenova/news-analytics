import { NEWS_FORMAT_DATE, NEWS_API_DATE_LAG } from '../constants/constants';

export class DateUtils {
    static formatDate() {
        let todayDate = new Date();
        todayDate.setDate(todayDate.getDate() - NEWS_API_DATE_LAG);
        return `${todayDate.toISOString().slice(0,10)}`;
    }

    static sliceDate(date) {
         let dateNews = new Date(date);
        return dateNews.toLocaleString("ru-ru", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'});
    }

    static getAnalyticsDate(date) {
        let tempDate = new Date(date);
        let weeksDay = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        let day = tempDate.getDay();
        let dayNumber = tempDate.getDate();
        return `${dayNumber}, ${weeksDay[day]}`

    }


}