function logText<T>(text:T):T{
    console.log(text);
    return text;
}

logText(10);
const str = logText<string>('하이'); //호출 시점애  타입 적용
str.split(''); // 타입 명시로 인해 split사용가능  자동완성

logText(true);
 const bool  = logText<boolean>(true);

 // 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T>{
    value : T;
    selected: boolean;
}
const testObj: Dropdown<number> = {value: 1, selected:false};

// 제네릭의 타입 제한
function logTextLength<T>(text:T[]): T[]{
    //length, foreach 등 사용가능
    return text;
}

// 제네릭의 타입 제한 2 - 정의된 타입 이용하기
interface LenghType{
    length: number;
}
function logTextLength2<T extends LenghType>(text:T):T{
    //객체의 속성에 lengh가 있을때 사용 가능
    text.length;
    return text;
}



//제너릭 타입 제한 3 - keyof

interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption:T): T{
    // 제너릭에 키 값 중 하나만 들어 갈 수 있다.
    return itemOption;
}
getShoppingItemOption('name')

