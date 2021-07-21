interface User {
    age: number;
    name: string;
}

//변수에 인터페이스 활용
const inq : User = {
    age:23,
    name:'인규'
}

//함수에 인터페이스 활용
function getUser(user: User): void{
    console.log(user)
}

//함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
    (a: number, b: number): number;
}
const sum: SumFunction = (a, b) => a + b;


//인덱싱
interface StringArray{
    [index: number] : string;
}
const arr: StringArray = ['a','b','c'];


//딕셔너리페턴 (자주 사용됨)
interface StringRegexDictionary{
    [key:string]:RegExp
}

const obj:StringRegexDictionary = {
    sth:/abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
}


//인터페이스 확장 
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

const inqq: Developer = {
    name:'인규',
    age:39,
    language:'ts'
}

