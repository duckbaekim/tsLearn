interface Developer {
    name : string;
    skill : string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony' , age: 33, skill: 'Iron Making'}
}
const tony = introduce();

if((tony as Developer).skill){
    const skill = (tony as Developer).skill;
    console.log(skill);
}
if((tony as Person).age) {
    const age = (tony as Person).age;
    console.log(age);
}

//type asserion 으로 해결시 위와 같이 어렵다.
//때문에 is을 활용한 타입가드 사용
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}
if(isDeveloper(tony)){
    console.log(tony.skill);
}
if(!isDeveloper(tony)){
    console.log(tony.age);
}


