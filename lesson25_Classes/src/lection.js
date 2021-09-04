
/*lection material*/

class Vehicle{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    moveForward(){
        return 'Move forward';
    }
    moveBack(){
        return 'Move back';
    }
    moveRight(){
        return 'Move right';
    }
    moveLeft(){
        return 'Move left';
    }
}

class Car extends Vehicle{
    constructor(brand, model, year, body, engineType){
        super(brand, model, year);

        this.body = body;
        this.engineType = engineType;
    }

    moveForward(){
        const moveParent = super.moveForward()
        return `${this.brand} ${this.model} ` + moveParent;
    }
    moveBack(){
        const moveParent = super.moveBack();
        return `${this.brand} ${this.model} Move back`;
    }
    moveRight(){
        const moveParent = super.moveRight()
        return `${this.brand} ${this.model} Move right`;
    }
    moveLeft(){
        const moveParent = super.moveLeft()
        return `${this.brand} ${this.model} Move left`;
    }

}

class Boat extends Vehicle{
    constructor(brand, model, year, anchor, type){
        super(brand, model, year);

        this.anchor = anchor;
        this.type = type;
    }

    moveForward(){
        return `${this.brand} ${this.model} swimming forward`;
    }
    moveBack(){
        return `${this.brand} ${this.model} swimming back`;
    }
    moveRight(){
        return `${this.brand} ${this.model} swimming right`;
    }
    moveLeft(){
        return `${this.brand} ${this.model} swimming left`;
    }
}

const car = new Car('BMW', 'x5', 2021, 'sedan', 'diesel');
const boat = new Boat('name', 'model', 2012, '12qwer', 'galery');

/*LECTION MATERIAL*/
/* syntaxis: */
// class myClass{
//     variables;
//     constructor([constructVar]){
//         this.someVariabl = constructVar;
//     }
//     method(methodArguments){
//         code
//     }
// }
/* В JS класс - эо разновидность функции. 
То есть typeof(myClass) = function
конструкция class myClass{} делает следующее:
    1. Создает функцию с именем myClass, которая становиться результатом 
    обьявления класса. Код функции берется из конструктора
    2. Сохраняет все методы в myClass.prototype
Во время вызова метода обьекта new myClass, он(метод)
будет взят из прототипа. Таким образом обьекты new myClass 
имеют доступ к методам класса */
    //проверка вышесказанного
    // class User{
    //     constructor(name){
    //         this.name = name;
    //     }
    //     sayHi(){
    //         console.log(this.name);
    //     }
    // }

    // console.log(typeof(User)); //function так как класс
    //                            // - это метод функции-конструктора
    // //проверка вышесказанного:
    // console.log(User === User.prototype.constructor); //true
    // //Методы класса находятся в прототипе
    // console.log(User.prototype.sayHi); // console.log(this.name)
    // //в данном случае в прототипе находится 2 метода:
    // //1. constructor
    // //2. sayHi
    // console.log(Object.getOwnPropertyNames(User.prototype));


/*Можно услышать мнение о том, что классы в JS - 
просто улучшают читаемость кода, а весь функционал досягаем и без 
данной конструкции(class)
Но на самом деле есть важные отличия:
    1. Функция созданная с помощью class имеет специальное свойство:
        [[FunctionKind]]:"classConstructor"
        В отличии от обычных функция-конструкторов класс не может
        быть вызыван без new*/
        // class User{
        //     constructor(){}
        // }

        // User(); // Error: Class constructor cannot be invoked without 'new'
    /*К тому же, строковое представление конструктора класса в
    большинстве движков JS начинается с "class ... " */
        // console.log(User); //class User {...}
    /*2. Методы класса являются неитерируемыми. Определение класса
    автоматически устанавливает флаг enumerable: false для всех
    методов в прототипе
        И это хорошо, так как если мы проходимся циклом for...in по
        обьекту, то обычно мы не хотим получать методы класса
    3. Классы всегда используют use strict. Весь код внтури класса
    автоматически находится в строгом режиме */

    /*Мы уже говорили, что классы - это фунцкии. Подобно функциям
    мы можем определять классы внутри другого вырежения, передавать
    присваивать,возвращать и так далее 
    Пример Class Expression
        let User = class {
            sayHi(){
                console.log('Hi!');
            }
        }
    
    При наличии у Class Expression имени, оно видно 
    только внутри класса */
    // let User = class{
    //     sayHi(){
    //         console.log(User);
    //     }
    // }

    // new User.sayHi() //Работает и выводит определение Uset
    // console.log(User); //Ошибка так как имя User не видно за пределами класса

    /*Мы также можем созавать классы динамически: */
    // function createClass(phrase){
    //     return class{
    //         sayHi(){
    //             console.log(phrase);
    //         }
    //     }
    // }

    // let User = createClass('Hello, World!');
    // new User().sayHi();


    /*Getter, Setter etc
    Как и в литеральных обьектах, в классах можно 
    обьявлять вычесляемые свойства , геттеры/сеттеры и ттак далее
    
    К примеру user.name реализованного при помощи get/set*/
    // class User{
    //     constructor(name){
    //         this.name = name;
    //     }

    //     get name(){
    //         return this._name;
    //     }

    //     set name(value){
    //         if(value.length < 2){
    //             console.log('it`s too short for name');
    //             return;
    //         }
    //         this._name = value
    //     }
    // }

    // let user = new User('Ivan'); 
    // console.log(user.name); // ivan

    // user = new User(''); // its too short

    /*При обьявленнии класса геттеры/сеттеры создаются на 
    User.prototype следующим образом: */
    // Object.defineProperties(User.prototype, {
    //     name: {
    //         get() {
    //             return this._name
    //         },
    //         set(name){
    //             //..
    //         }
    //     }
    // });
    /*Пример с вычисляемым свойством в скобках [...] */
    // class User {
    //     ['say' + 'Hi'](){
    //         console.log('Hello');
    //     }
    // }

    // new User().sayHi(); // hello


    /*Свойтсво классов 
    В примерах выше у класса были только методы*/
    // class User{
    //     name = 'Ivan'; //property
    //     sayHi(){
    //         console.log('Hello, ' + this.name);
    //     }
    // }

    // new User().sayHi();


/*СТАТИЧЕСКИЕ СВОЙСТВА И МЕТОДЫ */
        /*Мы также можем присвоить метод самой функции-классу,
        а не ёё прототипу. Такие методы называються статичесими
        
        В классе такие методы обозначаються ключевым словом 'static'*/
        // class User{
        //     static staticMethod(){
        //         console.log(this, 'this');
        //         console.log(this === User);
        //     }
        //     static anotherStaticMethod(){
        //         console.log(this, 'this');
        //         console.log(this === User);
        //     }
        // }
        // User.staticMethod(); // true
        // User.anotherStaticMethod(); // true

        /*Фактически это тоже самое, что напрямую присвоить
        как свойство функции.*/

        // class User{}
        // User.staticMethod = function () {
        //     console.log(this === User);    
        // };

        // User.staticMethod() //true

        /*Значением this при вызове User.staticMethod() является сам 
        конструктор класса(правило "обьект до точки") 
        
        Как правило, статические методы используют для реализации функций, принадлежащих
        классу, но не к каким-то конкретным его обьектам
        
        Например, есть обьект Article и нужна функция для их сравнения. Естественное решение - 
        сделать для этого метод Article.compare */

        // class Article{
        //     constructor(title, date){
        //         this.title = title; 
        //         this.date = date;
        //     }

        //     static compare(articleA, articleB){
        //         return articleA.date - articleB.date; 
        //     }
        // }

        // let articles = [
        //     new Article('name1', new Date (2021, 3, 12)),
        //     new Article('name2', new Date (2021, 11, 11)),
        //     new Article('name3', new Date (2021, 2, 21))
        // ]

        // articles.sort(Article.compare);
        // alert(articles[0].title); //name3 

        /*Метод Article.compare стоит над статьями как способ их сравнения. 
        Это метод не отдельной статьи, а всего класса.
        
        Другим примером может быть так называемый "фабричный" метод.
        Представим что нам нужно создать статьи различным способами:
        1. Создание через заданные параметры(title,date,etc)
        2. Создание пустой статьи с текущей датой
        3. Или как-то ещё
        Первый способ можно реализовать через конструктор. Для второго подходит 
        статический метод класса*/
        //Пример:
        // class Article{
        //     constructor(title,date){
        //         this.title = title;
        //         this.date = date;
        //     }

        //     static createTodays(){
        //         return new this('Digest', new Date());
        //     }
        // }

        // let atricle = Article.createTodays();
        // console.log(article.title);
        
        /*!!!! Статические методы также используются в классах относящихся к 
        базам данных, для посика/сохранения/удаления вхождения в базу данных, например: 
        Article.remove({id: 1231})*/


        /*Static properties*/
        /*Все то же самое что и было сказано выше */



        /*Наследование статических свойств и методов */
        /*Статические свойства и методы наследуются. К примеру, метод Animal.compare
        в коде ниже наследуется и доступен как Rabbit.compare*/
        // class Animal{
        //     constructor(name, speed){
        //         this.speed = speed;
        //         this.name = name;
        //     }

        //     run(speed = 0){
        //         this.speed += speed;
        //         console.log(`${this.name} speed ${this.speed}`);
        //     }

        //     static compare(animalA, animalB){
        //         return animalA.speed - animalB.speed;
        //     }
        // }

        // class Rabbit extends Animal{
        //     hide(){
        //         console.log(`${this.name} hide`);
        //     }
        // }
        
        // let rabbits = [
        //     new Rabbit('a', 10),
        //     new Rabbit('b', 5)
        // ];

        // rabbits.sort(Rabbit.compare);
        // console.log(rabbits);

        /*Как это работает? Снова с использованием прототипов. extends дает классу
        кроликов ссылку на прототип класса животных. 
        То есть наследование создает 2 ссылки на прототип
        1. Кролик прототипно наследует от функции Животное
        2. прототип Кроликов прототипно наследуте прототип Животного */



/*ПРИВАТНЫЕ, ЗАЩИЩЕННЫЕ МЕТОДЫ И СВОЙСТВА*/
        /*Внешний и внутренний интерфейсы*/
            /*В ООП свойства и методы деляться на 2 группы
            Внутренний интерфейс - методы и свойства доступные из других методов
            класса, но не снаружи
            Внешний интерфейс - методы и свойства, доступные снаружи класса */

            // class CoffeeMachine{
            //     _waterAmount = 0;

            //     set waterAmount(value){
            //         if(value < 0){
            //             throw new Error('can`t be negative');
            //         }
            //         this._waterAmount = value;
            //     }

            //     get waterAmount(){
            //         return this._waterAmount;
            //     }

            //     constructor(power){
            //         this._power = power; 
            //         console.log(power, '- power');
            //     }
            // }

            // let coffeeMachine = new CoffeeMachine(100);

            // coffeeMachine.waterAmount = -200; 

            /*Для перемнных, которые после создания обьекта изменятся не могут нужно 
            установить "только для чтения". Для этого нужно создавть только геттер, 
            сеттре же не создается */

            // class CoffeeMachine{
            //     constructor(power){
            //         this._power = power;
            //     }

            //     get power(){
            //         return this._power;
            //     }
            // }

            // let coffeeMachine = new CoffeeMachine(100);
            // coffeeMachine.power = 20; 
            // console.log(coffeeMachine.power);

            /*Стоит отметить, что защищеные поля по прежнему наследуются, чего нельзя
            сказать про приватные */

        /*Приватные поля # */
            /*Приватные свойства и методы начинаются с решетки. Они доступны только внутри
            класса. Например: */
            // class CoffeeMachine{
            //     #waterLimit = 200;

            //     #checkWater(value){
            //         if(value < 0) throw new Error('can`t be negative');
            //         if(value > this.#waterLimit) throw new Error('too much');
            //     }
            // }

            // let cofMac = new CoffeeMachine();

            // cofMac.#checkWate();
            // cofMac.#waterLimit = 1000;
            /*На уровне языка символ решекти является спец символом, который сообщает
            что поле приватное. 
            Приватное поле не конфликтует с публичным. У нас так же может быть два 
            поля #waterAmount & waterAmount */
            // class CoffeeMachine{
            //     #waterLimit = 0; 

            //     getWaterLimit(){
            //         return this.#waterLimit;
            //     }

            //     setWaterLimit(value){
            //         if (value < 0) throw new Error('negative');
            //         this.#waterLimit = value;
            //     }
            // }

            // let machine = new CoffeeMachine();

            // machine.setWaterLimit(100);
            // console.log(machine.getWaterLimit());

            /*Если мы унаследуем от CoffeMachine, то мы не получим прямого доступа к 
            приватному свойству. Нам будет необходимо полагаться на геттер/сеттер
            
            Приватные поля особенные. К приавтным свойтсвам невозможно получить с помощью
            this[#name]. Это ограничение синтаксиса для обеспечения приватности*/

