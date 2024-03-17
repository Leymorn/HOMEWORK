

// Глава 1, 5. Грокаем алгоритмы
// Реализовать класс MySet
// Придумать проект над которым будем работать
// Читать Грокаем алгоритмы, и https://learn.javascript.ru/map-set
// Понять что такое Event Loop
// Знать разницу между let var const
// learn.javascript.ru :
// Перавая часть Язык Javascript
// https://learn.javascript.ru/event-loop
// https://learn.javascript.ru/dom-nodes
// https://learn.javascript.ru/script-async-defer
// https://learn.javascript.ru/constructor-new

class MySet {

  constructor(array) {
    this.set = [];
    for(let i = 0; i < array.length; i++) {
      if (!this.set.includes(array[i])) {
        this.set.push(array[i]);
      }
    }
  }

  showSet() {
    console.log(this.set);
  }

  has(value) {
    if (this.set.includes(value)) {
      return true
    } else {
      return false
    }
  }

  add(value) {
    if(!this.set.includes(value)) {
      this.set.push(value);
    }
  }

  remove(value) {
    if(this.set.includes(value)) {
      let elementIndex = this.set.indexOf(value);
      this.set.splice(elementIndex, 1);
    }
  }

}

const areSetsEqual = (set1, set2) => {
  if (set1.length != set2.length) {
    return false
  } else {
    for (let i = 0; i < set1.length; i++) {
      if (set1[i] != set2[i]) {
        return false
      }
    }
    return true
  }
};

const mySetTest1 = () => {
  let array = [1, 1, 2, 3];
  let requiredSet = [1, 2, 3];
  let realSet = new MySet(array).set;
  let result = areSetsEqual(requiredSet, realSet);
  return result;
};

const mySetTest2 = () => {
  let set = new MySet([1, 1, 2, 3]);
  let value1 = 1;
  let value2 = 5;
  if(set.has(value1) && !set.has(value2)) {
    return true
  } else {
    return false
  }
};

const mySetTest3 = () => {
  let initialSet = new MySet([1, 1, 2, 3]);
  let value1 = 3;
  let value2 = 4;
  initialSet.add(value1);
  initialSet.add(value2);
  let requiredSet = [1, 2, 3, 4];
  let result = areSetsEqual(initialSet.set, requiredSet);
  return result
};

const mySetTest4 = () => {
  let initialSet = new MySet([1, 1, 2, 3]);
  let value = 2;
  initialSet.remove(value);
  let requiredSet = [1, 3];
  let result = areSetsEqual(initialSet.set, requiredSet);
  return result;
};


console.log(mySetTest1());
console.log(mySetTest2());
console.log(mySetTest3());
console.log(mySetTest4());