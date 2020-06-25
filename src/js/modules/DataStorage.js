export class DataStorage {
    constructor() {
        this.storage = window.localStorage;

    }

    setData(key, value) {
        this.storage.setItem(key, value);
    }

    getData(key) {
       return this.storage.getItem(key);

    }

    removeData(key) {
        this.storage.removeItem(key);
    }

    clearData(){
        this.storage.clear();
    }
}