const timeSetSmall = 1000;
const timeSetMedium = 2000;
const timeSetLarge = 3000;

const menu = {
    burger: [
        {
            value: 'chicken burger',
            time: timeSetLarge,
        },
        {
            value: 'fried potato',
            time: timeSetMedium,
        },
        {
            value: 'chica-cola',
            time: timeSetSmall,
        },
    ],
    pizza: [
        {
            value: 'diablo pizza',
            time: timeSetMedium,
        },
        {
            value: 'memsi-cola',
            time: timeSetSmall,
        },
    ]
};

function order(value, notify){
    const doneOrder = [];
    value.forEach((item, index) => {
        setTimeout(() => {
            doneOrder[index] = item.value;
            const doneOrderLength = doneOrder.filter(el => typeof(el) !== 'undefined').length;

            if(doneOrderLength === value.length){
                notify(doneOrder);
            }
        }, item.time);
    });
}

order(menu.burger, alert);


//in result [{value: name},{value: name}, etc];