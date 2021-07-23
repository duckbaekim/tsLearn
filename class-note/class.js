// ES6(2015) 추가
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const person  = new Person('인규', 30); // 생성자 실행
console.log(person);


//클래스와 prototype
const user = { name : 'asdf' , age : 30};
const admin  = {name : 'asdfsdf' , age : 31 , role:'admin'}
// 위 코드는 중복 속성이 있어 아래 어드민 상속받아 생성
let admin2 = {};
admin2.__proto__ = user;
admin2.role = 'admin';
// console.log(admin2.age, admin2.name, admin2.role ); 처럼 상속 가능

const obj = { a : 10}



