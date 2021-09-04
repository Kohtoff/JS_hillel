const person = {
    name: 'Ivan',
    surname: 'Smirnov',

    birthdate: {
        day: 30,
        month: 9,
        year: 2001
    },
    location: {
        city: 'Odesa',
        street: 'Shevchenko avnue',
        house: 12
    },
};

const deepFreeze = function(obj){
    Object.keys(obj).forEach( prop => {
        if(typeof(obj[prop]) === 'object' && obj[prop].constructor === Object){
            return Object.freeze(obj[prop]);
        }
    });
    return Object.freeze(obj);
};


deepFreeze(person);
Object.getOwnPropertyDescriptors(person);
Object.isFrozen(person);
Object.isFrozen(person.birthdate);
Object.isFrozen(person.location);
Object.isFrozen(person.surname);
Object.isFrozen(person.name);


