import { NEWS_FORMAT_DATE, NEWS_API_DATE_LAG } from '../constants/constants';

export class DateUtils {
    static formatDate() {
        let todayDate = new Date();
        todayDate.setDate(todayDate.getDate() - NEWS_API_DATE_LAG);
        return `${todayDate.toISOString().slice(0,10)}`;
    }

    static sliceDate(date) {
         const dateNews = new Date(date);
        return dateNews.toLocaleString("ru-ru", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'});
    }

    static getAnalyticsDate(date) {
        const tempDate = new Date(date);
        const weeksDay = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        const day = tempDate.getDay();
        const dayNumber = tempDate.getDate();
        return `${dayNumber}, ${weeksDay[day]}`
    }
}