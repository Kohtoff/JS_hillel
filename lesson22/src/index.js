/* FIRST TASK */

function onClickSquare(element){
    let counter = 0;
    element.addEventListener('click', () => {
        counter++;
        document.getElementById('container').append(element);
        switch(counter){
        case 1: {
            element.style.backgroundColor = 'blue';
            break;
        }
        case 2: {
            element.style.backgroundColor = 'green';
            break;
        }
        case 3: {
            element.style.backgroundColor = 'yellow';
            const resetCounter = 0;
            counter = resetCounter;
            break;
        }
        }
    });
}


const amountByDefault = 0;

function createSquare(amount = amountByDefault){
    const $container = document.createElement('div');
    document.body.appendChild($container);
    $container.id = 'container';

    const minLimit = 0;
    let counter = amount;
    for(counter; counter > minLimit; counter--){
        const $square = document.createElement('button');
        $square.className = 'square';
        document.getElementById('container').appendChild($square);

        //styles
        $square.style.cssText = `background-color: transparent;
            border: 1px solid black;
            height: 50px;
            width: 50px;
            margin-right: 10px`;

        onClickSquare($square);
    }
}
const amountOfSquares = 5;
createSquare(amountOfSquares);



/* SECOND TASK */

function createTable(row, column){
    const $table = document.createElement('table');
    const $result = document.createElement('span');
    document.body.appendChild($table);
    document.body.appendChild($result);
    $table.onclick = (event) => {
        if(event.target.tagName !== 'TD'){
            return;
        } else {
            $result.append(event.target.innerText + ' ');
        }

    };


    for(let i = 1; i <= row; i++){
        const $tr = document.createElement('tr');
        $table.appendChild($tr);
        for(let j = 1; j <= column; j++){
            const $td = document.createElement('td');
            const rangeOfRandom = 101;
            $td.innerText = Math.floor(Math.random() * rangeOfRandom);
            $td.style.cursor = 'pointer';
            $tr.appendChild($td);
        }
    }

    //styles
    $table.style.cssText = 'margin-top: 20px';

    return $table;
}
const sizeX = 3;
const sizeY = 3;
createTable(sizeX,sizeY);


/* THIRD TASK */

const $button = document.createElement('button');

$button.className = 'button submit mediumSize';
$button.style.cssText = `width: 75px;
 height: 35px; 
 display: block;`;
document.body.appendChild($button);

function toggleClass(element, toggledClass){
    let classNamesArr = element.className.split(' ');

    const findResult = classNamesArr.find(className => className === toggledClass);
    if(findResult){
        classNamesArr = classNamesArr.filter(item => item !== toggledClass);
        element.className = classNamesArr.join(' ');
        return element.className;
    } else {
        return element.className += ' ' + toggledClass;
    }

}

toggleClass($button, 'submit');
toggleClass($button, 'newClass');

/* EXTRA TASK */
const $tabsList = document.querySelector('.tabs-list');


const getActiveContent = () => Array.from(document.querySelectorAll('.tab-content')).
    filter(item => !(item.hasAttribute('hidden'))
    )[0];


function tabsAction(clickedButton){
    const activeButton = document.querySelector('.tabs-list > .is-active');
    const currentActiveContent = getActiveContent();
    const idContent = '#' + clickedButton.getAttribute('data-target');

    activeButton.classList.toggle('is-active');
    clickedButton.classList.add('is-active');
    const newActiveContent = document.querySelector(idContent);
    if(active)
    newActiveContent.removeAttribute('hidden');
    currentActiveContent.setAttribute('hidden', 'true');
}

$tabsList.addEventListener('click', ({target}) => {
    if(target.tagName === 'BUTTON'){
        console.log('here');
        tabsAction(target);
    }
    return;
});


