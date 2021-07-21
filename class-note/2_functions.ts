
//함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number){
    return a + b
}

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// sum(10,20,30); 3번쨰 인수가 있다는 에러 발생

//힘수의 optional param
function log(a: string, b?: string, c?:string){
    console.log(a);
}

