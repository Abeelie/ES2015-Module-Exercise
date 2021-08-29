const choice = (items) => {
    const i = Math.floor(Math.random() * items.length);
    return items[i];
}

const remove = (item, items) => {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            items.splice(i,1)
            return items
        }  
    }
}


export { choice, remove }