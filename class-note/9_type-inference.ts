//타입 추론 기본
const a = 10;

function getB (b = 10){
    return b;
}


// 타입추론 2
interface Dropdown2<T> {
    value: T;
    title : string;
}

const shoppingItem: Dropdown2<string> = {
    value: 'abc',
    title : 'hello'
}

//타입추론3

interface DetailedDropdown<K> extends Dropdown2<K>{
    description: string;
    tag:K;
    //value
    //title
}

const detailedItem : DetailedDropdown<number> = {
    title: 'sd',
    description: 'asdf',
    value: 'asdfasdfasd',
    tag: 'asdsdasd'
}


//Best Common Type 값 들을 union으로 묶어 나간다.
const arr = [0, 1, 'ㄴㅇㄹ', true];






