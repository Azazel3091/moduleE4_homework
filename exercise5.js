class Device { // создаем родительский класс Device
    constructor(name,power,efficiency,conn){ // определяем сигнатуру функции родительского класса
        this.name = name;
        this.efficiency = efficiency;
        this.power = power;
        this.conn = false; // обозначение подключения в электросеть, по умолчанию это false т.е отключено
    };
    connection(){ // включаем электроприбор в сеть
        this.conn = true; // значение подключения меняем на true
        console.log(`Электроприбор: ${this.name} включен, статус: ${this.conn}`);
    };
    disconnection(){ // отключаем электроприбор от сети
        this.conn = false; // значение подключения возвращаем к false
        this.power = 0; // после отключения меняем значение мощности электроприбора в сети на ноль
        console.log(`Электроприбор: ${this.name} отключен, статус: ${this.conn}`);
    };
    measurement(){ // определяем подключение электроприбора к сети исходя из мощности
        if(this.power > 0) { // если мощность электроприбора выше нуля то он подключен к сети
            console.log(`Статус подключения электроприбора ${this.name}: ${this.conn}, его мощность в сети: ${this.power}kW`)
        }
        else{ // если мощность электроприбора ниже или равна нулю то он отключен от сети
            console.log(`Статус подключения электроприбора ${this.name}: ${this.conn}, его мощность в сети: ${this.power}kW`)
        }
    };
}

class DeskLamp extends Device{ // DeskLamp класс наследуется от класса Device, с помощью extends устанавливаем делегирующую связь
    constructor(light,brightness,name,power,efficiency,conn){ // определяем сигнатуру функции наследуемого класса
    super(name,power,efficiency,conn);   // свойства родительского класса
    this.light = light;                 // свои индивидуальными свойства
    this.brightness = brightness;
    }
}

class Laptop extends Device{ // Laptop класс наследуется от класса Device
    constructor(cpu, ram,name,power,efficiency,conn){
    super(name,power,efficiency,conn);
    this.cpu = cpu;     // так же задаем уникальные свойства
    this.ram = ram;
    }
}

const Lamp = new DeskLamp("warm","bright",'DeskLamp',30,'high') // создаем уникальный электроприбор со своими значениями
Lamp.connection()       // включаем электроприбор
Lamp.measurement()      // проверяем подключен ли он к сети и его мощность
Lamp.disconnection()    // отключаем электроприбор
Lamp.measurement()      // проверяем

const laptop = new Laptop("intel","6gb",'Laptop',520,'low')
laptop.connection()
laptop.measurement()
//laptop.disconnection()
//laptop.measurement()

class Info{         // создаем класс Info для вывода информации о электроприборах
    static inf(){
        console.log(Lamp,laptop);
    }
    static sumInf(){ // суммарная мощность подключенных электроприборов в сеть
        console.log(`Суммарная мощность: ${Lamp.power + laptop.power} kW`);
    }
}

Info.inf();
Info.sumInf();