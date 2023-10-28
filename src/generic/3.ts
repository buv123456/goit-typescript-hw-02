/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<OA extends object, OB extends object>(
  objA: OA,
  objB: OB
): OA & OB {
  return Object.assign(objA, objB);
}

export {};
