export const lsGetItem = (type)=> {
    const item = localStorage.getItem(type);

    if (item) {
      return JSON.parse(item);
    } else {
      return [];
    }
}
export const lsSetItem = (type, data)=> {
    localStorage.setItem(type, JSON.stringify(data));
}