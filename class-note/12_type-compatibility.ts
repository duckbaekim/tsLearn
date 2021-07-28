//타입 호환

interface Developer3 {
    name: string;
    skill: string;
}

interface Person3 {
    name : string
}

let developer : Developer3;
let person: Person3;
developer = person; //이럴떈 구조적으로 Developer 속성이 많아 호환 될 수 없다.
person = developer;

class Person4 {
    name: string
}

developer = new Person4();

class Developer4 {
    name: string;
    skill: string;
}
person = new Developer4();

//클래스도 같은이유로 안됌


//함수
let add = function(a:number){
    //...
}

let sum = function(a:number, b:number){
    //....
}

add = sum; // 2개의 인자를 못받는 함수라 안된다
sum = add; // 인자수가 모자라도 할당 가능

//제너릭
interface Empty<T>{
    //...
}

let empty1: Empty<string>;
let empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T>{
    data: T;
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;

notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;
//제너릭에 의해 어떤 값이 바뀐다하면 할당이 불가능 하다.





