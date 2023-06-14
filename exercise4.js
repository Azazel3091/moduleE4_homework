function Device(name,power,efficiency,conn){ // создаем функцию Device со своими родительскими свойствами
    this.name = name
    this.efficiency = efficiency
    this.power = power
    this.conn = false
}

Device.prototype.connection = function(){ // включаем электроприбор в сеть
    this.conn = true; // значение подключения меняем на true
    console.log(`Электроприбор: ${this.name} включен, статус: ${this.conn}`); // выводим в консоль
}

Device.prototype.disconnection = function(){ // отключаем электроприбор от сети
    this.conn = false; // значение подключения возвращаем к false
    this.power = 0; // после отключения меняем значение мощности электроприбора в сети на ноль
    console.log(`Электроприбор: ${this.name} отключен, статус: ${this.conn}`);
}

Device.prototype.measurement = function(){ // определяем подключение электроприбора к сети исходя из мощности
    if(this.power > 0) {                   // если мощность электроприбора выше нуля то он подключен к сети
        console.log(`Статус подключения электроприбора ${this.name}: ${this.conn}, его мощность в сети: ${this.power}kW`)
    }
    else{                                  // если мощность электроприбора ниже или равна нулю то он отключен от сети
        console.log(`Статус подключения электроприбора ${this.name}: ${this.conn}, его мощность в сети: ${this.power}kW`)
    }
}

function DeskLamp(light,brightness){ // создаем функцию DeskLamp со своими индивидуальными свойствами
    this.light = light
    this.brightness = brightness
}

function Laptop(cpu, ram){ // создаем функцию Laptop со своими индивидуальными свойствами
    this.cpu = cpu
    this.ram = ram
}

DeskLamp.prototype = new Device('DeskLamp',30,'high') // помещаем DeskLamp в Device
const Lamp = new DeskLamp("warm","bright", )          // в DeskLamp создаем электроприбор Lamp
Lamp.connection()       // включаем электроприбор
Lamp.measurement()      // проверяем подключен ли он к сети и его мощность
//Lamp.disconnection()    // отключаем электроприбор
//Lamp.measurement()      // проверяем

Laptop.prototype = new Device('Laptop',520,'low')
const laptop = new Laptop("intel","6gb")
laptop.connection()
laptop.measurement()
laptop.disconnection()
laptop.measurement()

function info(){ // создаем функцию info для вывода информации о электроприборах и их суммарную мощность при подключении к сети
    console.log(Lamp,laptop)
    console.log(`Суммарная мощность: ${Lamp.power + laptop.power} kW`)
}
info()