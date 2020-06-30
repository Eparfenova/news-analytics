export class DataStorage {
    constructor() {
        this.storage = window.localStorage;

    }

    setData(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    getData(key) {
       return JSON.parse(this.storage.getItem(key));

    }

    removeData(key) {
        this.storage.removeItem(key);
    }

    clearData(){
        this.storage.clear();
    }
}