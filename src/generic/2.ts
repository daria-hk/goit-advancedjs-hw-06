/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare(top: Partial<AllType>, bottom: Partial<AllType>): AllType {
  return {
    name: top.name || 'undefined',
    color: top.color || 'undefined',
    position: bottom.position || 0,
    weight: bottom.weight || 0,
  };
}


const topObject = { name: 'Object A', color: 'red' };
const bottomObject = { position: 1, weight: 5 };

console.log(compare(topObject, bottomObject)); 

