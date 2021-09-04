function isCacheFull(map){
    const maxAmountOfProps = 10;
    if (map.size >= maxAmountOfProps){
        //проверка на количество свойств в обьекте
        return true;
    }
    return false;
}

const cacheStoring = function(func){
    const cache = new Map();
    return function (...args) {
        let call = args;
        const callStr = String(call); //для проверки вхождения в map. Так как он хранит не сам массив а ссылку на него
        if(cache.has(callStr)){
            return cache.get(callStr);
        } else {
            const result = func(...call);
            cache.set(call = String(call), result);
            if(isCacheFull(cache)){
                for(const key of cache.keys()){
                    cache.delete(key);
                    break;
                }
            }
            return cache.get(call);
        }
    };
};

const testA = 12;
const testB = 10;
const testC = 1;

const sum = cacheStoring((a,b) => {
    const result = a + b;
    return result;
});

sum(testA, testB);
sum(testA, testC);
sum(testA, testB);