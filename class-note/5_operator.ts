
// | 로 연결하는 union type
function logMessage(value : string | number){
    if(typeof value === 'number'){
        value.toLocaleString(); //number가 추론돼 넘버 함수만 나옴
    }
    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}



interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name : string;
    age: number;
}

function askSomeone(someone: Developer | Person){
    // someone.age;
    // someone.skill; 
    someone.name; //두 객체의 조건을 하나씩 비교하기 떄문에 안맞는 속성이 있음 안된다.
}

// & 이용  intersection &로 연결된 타입을 모두 합친 타입으로 추론
function askSomeone2(someone: Developer & Person){
    someone.age;
    someone.name;
    someone.skill;
}


function asd(){
    
}