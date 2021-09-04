/*PROMISES
Промиз - это специальный ОБЬЕКТ, который обладает состоянием!!!!!!
У него есть 3 состояния:
    1. Выполняется Pending. В результате ожидется одно из 2 следующих
        состояний:
        2. fullfield - Выполнен корректно
            либо
        3. Reject - невыполнен

Промиз не всегде асинхронные действия. Но коллбэки асинхронны всегда
Для того что бы создать новый промиз используем конструктор Промиз.
Конструктор принимает только один параметр - ФУКНЦИЮ ЭКЗИКЮТОР(выполнитель)
Внутри функции будет код, после выполнения которого будет создан Промиз
*/

// const promise = new Promise(function(){
//     return 'string';
// });

// console.log(promise);

/*В данном случае консоль.лог выведет нам Промиз, где будет указано
Что он ещё не выполнился. Это произошло из-за асинхронности.
Для того что бы узнать как выполнился наш Промиз нужно, так сказать,
оформить подписку. Так как мы знаем, что Промиз это обьект, который
обладает состоянием, а так же мы имеем возможность передать ему
коллбэки, которые будут выполнятся в зависимости от результата выполнения
Для этого функция Экзикьютер принимает 2 параметра.
    1. resolve - это коллбэк, который будет автоматически вызван
    в случае успешного выполнения. Нам его описывать не нужно

    2. Необязательный параметр Reject. Соответсвенно в случае
    выполнения с ошибкой
Для того что бы узнать успешно ли выполнилась фунция мы должны добавить
коллбэк. Если Промиз выполняется успешно, мы на него подписываемся
И когда к нам приходит результат подписки мы хотим его обработать.
Для того что бы подписаться используется метод then()
then() тоже принимает 2 коллбэка. По аналогии, первый для успешного
выполнения, а второй на случай выялвения ошибки.
В случае успешного выполнения наш коллбэк в методе then() автоматически
получит результат выполнеия нашего resolve. Это, конечно, технически не верно
То есть по сути resolve будет выполнять функцию коллбэк then()
Таким образом, результат выполнения кода ниже будет: 'string'*/

// const promise = new Promise(function(resolve, Reject){
//     resolve('string');
// });

// promise.then(result =>{
//     console.log(result);
// });

/*Давайте рассмотрим что будет, если возникнет какая-то ошибка во
время ввыполнения Промиза. Промиз подождал выполнения СетТаймАута
и отловил ошибкую. */
// const promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         if(false){
//             resolve('string');
//         } else {
//             reject('error!');
//         }
//     }, 1000)
// });

// promise.then(result =>{
//     console.log(result);
// });

/*Для того что бы обработать ошибку есть два сопособа.
    1. Передать второй коллбэк в then(). Этим способом пользуются
    довольно редко
    2. Использовать catch() после then(). Использовать эти методы
    по цепочки мы можем благодаря тому, что методы then() и catch()
    возвращают новый Промиз. Кол-во then() и catch() может быть
    аобсолютно любое. Вызывать несколько Кетчей друг за другом смысла нету
    Мы можем вызывать после какого-то действия для того что бы отследить
    ошибку, в какой именно момент она случилась*/

// const promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         if(false){
//             resolve('string');
//         } else {
//             reject('error!');
//         }
//     }, 1000)
// });
// promise
//     .then(result =>{
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// можно также использовать следующую конструкцию
// promise.then(console.log, console.log);
// это тоже валидный сопособ

// 1й способ:
// promise.then(
//     result => { console.log(result); },
//     error => { console.log(error); }
// );

/*Помимо этого еще существует метод finally(). Он ринимает коллбэк,
который не получает каких-лиюо параметров и будет вызван в независимости
от состояния выполнения Промиза. Это может понадобиться, например для
индикатора загрузки, который по завершению, не важно, успешному или
с ошибкой индикатор нужно скрыть */

// const promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         if(123){
//             resolve('string');
//         } else {
//             reject('error!');
//         }
//     }, 1000)
// });
// promise
//     .then(result =>{
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('finish!');
//     });

/*Промиз никогда не меняет свое состояние. Если Промиз закончил свое
выполнение с ошибокй и получил состояние fullfield, то оно уже никогда
не поменяет состояние, точно так же и с Reject.  */

// const momsMood = 'goqweod';

// const willGetNewFrom = new Promise(function(onResolve, onReject){
//     if(momsMood === 'good'){
//         const phone = {
//             brand: 'Samsung',
//             model: 'Note8',
//             color: 'silver',
//         };

//         onResolve(phone);
//     } else {
//         const reason = new Error('Mum isn`t happy');

//         onReject(reason);
//     }
// });


// const toFlex = ({brand, model, color}) => {
//     return `Hey guys! Look at my new Phone! It's ${color} ${brand} ${model}`;
// };

// const badMood = (reason) => {
//     return `Oh, sheet :( ${reason}, so i hasn't get new phone`;
// }

// willGetNewFrom
//     .then(toFlex)
//     .then(console.log)
//     .catch(badMood)
//     .then(console.log)
//     .finally(() => {
//         console.log('Cool, Right?');
//     });


// const timeSetSmall = 1000;
// const timeSetMedium = 2000;
// const timeSetLarge = 3000;

// const menu = {
//     burger: [
//         {
//             name: 'chicken burger',
//             time: timeSetLarge,
//         },
//         {
//             name: 'fried potato',
//             time: timeSetMedium,
//         },
//         {
//             name: 'chica-cola',
//             time: timeSetSmall,
//         },
//     ],
//     pizza: [
//         {
//             name: 'diablo pizza',
//             time: timeSetMedium,
//         },
//         {
//             name: 'memsi-cola',
//             time: timeSetSmall,
//         },
//     ]
// };

// const order = (menuName) => {
//     console.log('Sart cooking!');

//     const cookFood = ({name, time}) => new Promise((onResolve, onReject) => {
//         setTimeout(() => {
//             const condition = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

//             condition ? onResolve(name) : onReject(name)

//         }, time)

//     });
//     return Promise.allSettled(menuName.map(cookFood));
// };

// order(menu.burger).then(console.log)

// const willGetNewPhone = new Promise ((onResolve, onReject) => {
//     if(1){
//         onResolve({
//             model: 'note8'
//         });
//     } else {
//         onReject(new Error(':('));
//     }
// })

// const toFlex = ({model}) => Promise.resolve(`I have ${model}`);

// async function askMom(){
//     const phone = await willGetNewPhone;

//     console.log(phone);
//     const message = await toFlex(phone);

//     console.log(message);
// }

// askMom();



