const debounce = (fn, time) => {
    let isExecution = false;
    return () => {
        const promise = new Promise((onResolve, reject) => {
            if(isExecution){
                reject('You should be more patient. Action in progress');
            } else {
                isExecution = true;
                setTimeout(() => {
                    onResolve(fn());
                    isExecution = false;
                }, time);
            }
        });
        promise.catch(alert);
    };
};

const $btn = document.createElement('button');
$btn.style.cssText = `width: 50px;
    height: 35px;`;
$btn.textContent = 'click me';
document.body.append($btn);

const createParagraph = () => {
    const $p = document.createElement('p');
    $p.textContent = 'Success';
    $p.style.cssText = `text-align: center;
        color: green;
        font-size: 42px;`;
    document.body.append($p);
};

const timerValue = 3000;

$btn.addEventListener('click', debounce(() => {
    createParagraph();
}, timerValue));