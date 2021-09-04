/* FIRST TASK */

function generateList(arr){
    const ul = document.createElement('ul');
    arr.forEach(element => {
        const li = document.createElement('li');
        if(Array.isArray(element)){
            li.appendChild(generateList(element));
        } else {
            li.appendChild(ul);
            li.innerText = element.toString();
        }
        return ul.appendChild(li);
    });
    return ul;
}


const testArray = [1, 2, [3.1, 3.2, [4.1, 4.2]], 3];
document.body.appendChild(generateList(testArray));


/* SECOND TASK */

function generateTable(row, column){
    const table = document.createElement('table');
    let number = 1;
    for(let i = 1; i <= row; i++){
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for(let j = 1; j <= column; j++){
            const td = document.createElement('td');
            td.innerText = number;
            number++;
            tr.appendChild(td);
        }
    }
    return table;
}


const testRow = 10;
const testColumn = 10;
document.body.appendChild(generateTable(testRow, testColumn));
const borderWidth = 1;
const elementsOfTableCollection = document.querySelectorAll('tr > td');
elementsOfTableCollection.forEach(element => {
    element.style.border = borderWidth + 'px solid black';
});



