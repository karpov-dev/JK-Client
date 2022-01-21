export class LocalStorage {

    static setItem = (key, value) => {
        window.dispatchEvent(new CustomEvent('storage', {
            detail: {
                action: 'set',
                key,
                oldValue: window.localStorage.getItem(key),
                newValue: value
            }
        }));

        return window.localStorage.setItem(key, value);
    }

    static getItem = (key) => {
        return window.localStorage.getItem(key);
    }

}