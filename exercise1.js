const name1 = { // создаем обьект name1 с ключем a и b и его значениями
  a: "Andrey",
  b: "Petr"
}

const name2 = Object.create(name1); // создаем обьект name2 и в нем создаем еще один ключ со своим значением который помещаем в обьект name1
name2.c = "Vova";

function group (abc){  // создаем функцию group которая принимает в качестве аргумента объект
    for(let i in abc){  // цикл который ищет все ключи в выбранных обьектах
      if (abc.hasOwnProperty(i)){ // Метод hasOwnProperty() возвращает логическое значение
        console.log(i, abc[i]); // выводим в  консоль ключи и их значения из собственных свойств
    }
  }
}

group(name1)
group(name2)