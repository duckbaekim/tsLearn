function fetchItems(): string[]{
    let items = ['a', 'b', 'c'];
    return items;
}


function fetchItems2(): Promise<string[]>{
    let items: string[] = ['a','b','c'];
    return new Promise(function (resolve){
        resolve(items);
    })
}