import { isNull } from "@/util/util";
import { decode, encode } from 'js-base64';
import Cookies from "js-cookie";

export function getCookies(key) {
    return JSON.parse(decode(Cookies.get(key)));
}

export function setCookies(key, value) {
    return Cookies.set(key, encode(JSON.stringify(value)));
}

export function removeCookies(key) {
    return Cookies.remove(key);
}

export const setStore = (key, value, isSession) => {
    const obj = {
        dataType: typeof (value),
        content: value,
        type: isSession,
        datetime: new Date().getTime()
    };
    if (isSession) window.sessionStorage.setItem(key, encode(JSON.stringify(obj)));
    else window.localStorage.setItem(key, encode(JSON.stringify(obj)));
};

export const getStore = (key: string, debug: boolean) => {
    let obj: any, content: any;
    obj = window.localStorage.getItem(key);
    if (isNull(obj)) obj = window.sessionStorage.getItem(key);
    if (isNull(obj)) return;
    try {
        obj = JSON.parse(decode(obj));
    } catch {
        return obj;
    }
    if (debug) {
        return obj;
    }
    if (obj.dataType === 'string') {
        content = obj.content;
    } else if (obj.dataType === 'number') {
        content = Number(obj.content);
    } else if (obj.dataType === 'boolean') {
        content = eval(obj.content);
    } else if (obj.dataType === 'object') {
        content = obj.content;
    }
    return content;
};

export const removeStore = (key, isSession) => {
    if (isSession) {
        window.sessionStorage.removeItem(key);
    } else {
        window.localStorage.removeItem(key);
    }
};

export const getAllStore = (isSession) => {
    const list = [] as Array<{ name: string | null, content: any }>;
    if (isSession) {
        for (let i = 0; i <= window.sessionStorage.length; i++) {
            list.push({
                name: window.sessionStorage.key(i),
                content: getStore(window.sessionStorage.key(i) || '', false)
            })
        }
    } else {
        for (let i = 0; i <= window.localStorage.length; i++) {
            list.push({
                name: window.localStorage.key(i),
                content: getStore(window.localStorage.key(i) || '', false)
            })

        }
    }
    return list;
};

export const clearAllStore = (isSession) => {
    if (isSession) {
        window.sessionStorage.clear();
    } else {
        window.localStorage.clear()
    }
};
