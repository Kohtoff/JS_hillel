/*lection material */

/*В JS существует 2 типа таймера, которые фактически не являются 
частью реализации языка. 
SetTimeOut(СИНХРОННАЯ ФУНКЦИЯ, А ВОТ КАК РЕЗ ТАКИ
    КОЛЛБЭК - АСИНХРОННЫЙ) & SetInterval
Для использования таких же функций, которые ак же не 
являются частью реализации языка, используются с помощью API языка
 */

// setTimeout(() => {
//     console.log('Timer');
// }, 1000); 

/*Хоть в данном коде и указано, что функция должна сработать через
1000мс(1с), это не означает, что он обязательно сработает через заданное
время. Он сработает НЕРАНЬШЕ чем через 1000мс
Почему происходит именно так? Мы говорим браузеру, через наше APIб 
что бы он запустил таймер, а длаьше браузер ищет место, где выполняется
наш код, но оно можеть быть занято выполнением другого куска нашего кода*/


// console.log('Start');

// setTimeout(() => {
//     console.log('Timer');
// }, 1000); 

// console.log('FINISH');

/*код выше выведет следующее:
Старт
Финиш
Таймер

Попробуем уменьшить ыремя*/

// console.log('Start');

// setTimeout(() => {
//     console.log('Timer');
// }, 10); 

// console.log('FINISH');

/*Однако вывод остался таким же как и прежде. Добавим цикл, что бы
увеличить время выполнения кода и посмотрим на его поведение*/


// console.log('Start');

// setTimeout(() => {
//     console.log('Timer');
// }, 1000); 

// for(let i = 0; i < 1899999999; i++){}

// console.log('FINISH');

/*Появился дилей перед выводом Финиша, однако порядок вывода остался 
таким же. Переместим цикл после выовода Финиша */

// console.log('Start');

// setTimeout(() => {
//     console.log('Timer');
// }, 1000); 

// console.log('FINISH');
// for(let i = 0; i < 1899999999; i++){}

/*Вывод тот же, однако задержка перед выводом Тайемра значительно выросла
благодаря тому что теперь, помимо дилея на секунду, который мы задали
изначально, появился дилей за время которого выполнялся наш цикл.
Это обусловлено тем, что ДжаваСкрипт - это ОДНОПОТОЧНЫЙ язык, 
то есть он выполняет лишь одной действие за единицу времени. 
СетТаймаут возвращает идентификатор и можем его записать в переменную*/

// console.log('Start');

// const timerID = setTimeout(() => {
//     console.log('Timer');
// }, 1000); 


// console.log(timerID);

/*В Выводе мы видим, что сам СетТаймаут срабатывает мгновенно.
По истеченнию времени срабатывает именно коллбэк.
Для понятия асинхронной модели кода, важно понимать, что 
у нас есть, условно, два типа кода:
1. Код, который выполняется сейчас 
2. Код, который выполняется потом(коллбэк, в данном случае)
 */

// console.log('Start');

// const timerID = setTimeout(() => {
//     console.log('Timer');
// }, 1000); 

// window.addEventListener('click', () => {})  

// console.log(timerID);

/*window.addEventListener работает точно так же. Само навешивание
события срабаотывает моментально, а вот коллбэк буде выполнятся потом
Идентификатор нужен для того что бы отменить Таймер. Это нужно, например
для того что бы избжать утечки памяти, так как каждая из функций
расходуют определенную память. Для отмены у нас есть следующий
инструмента: */

// console.log('Start');

// const timerID = setTimeout(() => {
//     console.log('Timer');
// }, 1000); 

// clearTimeout(timerID);

/*Естественно, функция-коллбэк выполняться не будет, но сам СетТаймАут
выполнтся и передаст в переменную свой идентификатор 

Теперь поговорим про собрата СетТаймаута - СетИнтревал.
Как можно догадаться из названия, он вызывает коллбэк множество раз
через определенный период времению. Стоит обратить внимание на то, что
мы не можем быть уверены, что оно будет выпонятся, к примеру, через
каждую секунду, так как мы не знаем сколько будет занимать времени
выполнение самой коллбэк-функции. Если вдруг, появляется необходимость
сказать, что каждая следующая функция будет выполнятся не раньше чем
закончилась предыдущая нам необходимо задать свойство интервал, 
иными словами рекурсивный СетТаймАут*/

// console.log("Start");

// const intervalID = setInterval(() => {
//     console.log('interval');
// }, 1000);

// setTimeout(() => {
//     clearInterval(intervalID);
// }, 3000);

/*Тут мы прервали СетИнтервал по истечению 3х секунд.
Это, если что, конечно же, не рекурсивный СетТаймАут
Но данный пример
нежизнеспособен в реальном коде. Мы попытались подстроиться и понимали
что после СетИнтервала будте вызываться СетТаймаут. НИКОГДА НЕЛЬЗЯ
РАСЧИТОВАТЬ НА ТО, ЧТО МЫ УГАДАЕМ КАКОЕ-ТО ДЕЙСТВИЕ ПО ВРЕМЕНИ
Давайте рассмотрим рекурсивный СетТаймАут*/


// setInterval(() => {
    
// }, 1000);

// const customSetInterval = (callback, delay) => {
//     setTimeout(() => {
//         callback();

//         return setTimeout(callback , delay);
//     }, delay);
// };

// customSetInterval(() => {
//     console.log('Work');
// }, 1000);

const customSetInterval = (callback, delay) => {
    let result = {id: null};
    result.id = setTimeout(function f(){
        callback();
        
        result.id = setTimeout(f, delay);  
    })
    return result; 
};


const result = customSetInterval(() => {
    console.log('hi');
}, 1000)

setTimeout(() => {
    console.log(result.id, 'in settimeout');
    clearInterval(result.id);
}, 2500);