class List{
    // tasks = [];
    // contacts = [];
    constructor(title){
        this.title = title;
        this.tasks = [];
        this.contacts = [];
    }
    
    add(title, mode, id){
        id = mode.length;
        if(!this.isUnique(title, mode)){ 
            alert('Object is already exist!');
            return;
        }
        return {id, title};
    }

    edit(title, mode){
        if(this.isUnique(title, mode)){
            alert('Object doesn`t exist');
            return;
        }
        return this.getCurrentObject(title, mode);
    }

    remove(title, mode){
        if(this.isUnique(title, mode)){
            alert('Object doesn`t exist');
            return;
        }
    }



    isUnique(value, mode){
        if(!this.getCurrentObject(value, mode)){
            return true;
        }
        return false;
    }
    getCurrentObject(title, mode){
        return mode.find(object => object.title === title);
    }
}

class ToDoList extends List{
    constructor(title, tasks){
        super(title, tasks);
    }

    add(title, description, isComplete = false){
        let parentAdd = super.add(title, this.tasks);
        if(!parentAdd){
            return;
        }
        parentAdd['description'] = description;
        parentAdd['isComplete'] = isComplete;
        this.tasks.push(parentAdd);

        const $li = document.createElement('li');
        $li.className = `list__${parentAdd.title}`;

        const $title = document.createElement('h3');
        $title.textContent = parentAdd.title

        const $description = document.createElement('span');
        $description.textContent = description;

        const $manageContainer = document.createElement('div');
        $manageContainer.className = 'task-managment';
        const $completeBtn = document.createElement('button');
        $completeBtn.className = 'task-managment__btn btn-complete';
        $completeBtn.textContent = 'complete';

        const $updateBtn = document.createElement('button');
        $updateBtn.className = 'task-managment__btn btn-update';
        $updateBtn.textContent = 'update';

        const $removeBtn = document.createElement('button');
        $removeBtn.className = 'task-managment__btn btn-remove';
        $removeBtn.textContent = 'remove'

        $manageContainer.append($completeBtn);
        $manageContainer.append($updateBtn);
        $manageContainer.append($removeBtn);
        // const $status = document.createElement('input');
        // $status.type

        $li.append($title);
        $li.append($description);
        $li.append($manageContainer);

        const $list = document.querySelector('.list');
        $list.append($li);
        return parentAdd;
    }

    edit(title, newData = {}){
        let parentEdit = super.edit(title, this.tasks);
        if(!this.isUnique(newData.title, this.tasks)){
            alert(`Task with name ${newData.title} has already exist!`);
            return;
        }
        parentEdit.title = newData.title;
        parentEdit.description = newData.description;
        return parentEdit;
    }

    remove(title){
        return this.tasks = this.tasks.filter(task => task.title !== title);
    }

    complete(title){
        return this.getCurrentObject(title, this.tasks).isComplete = true;
    }

    getStatistic(){
        const uncompleted = this.tasks.filter(task => task.isComplete !== true);
        const completed = this.tasks.filter(task => task.isComplete === true);
        const amount = this.tasks.length
        let stats = {};

        return stats = {
            completed,
            uncompleted,
            amount
        }
    }

}

class ContactList extends List{
    constructor(title, contacts){
        super(title, contacts);
    }

    add(title, number){
        let parentAdd = super.add(title, this.contacts);
        if(!parentAdd){
            return;
        }
        parentAdd['number'] = number;
        this.contacts.push(parentAdd);
        return parentAdd;
    }
    edit(title, newData = {}){
        let parentEdit = super.edit(title, this.contacts);
        if(!this.isUnique(newData.title, this.contacts)){
            alert(`Contact with name ${newData.title} has already exist!`);
            return;
        }
        parentEdit.title = newData.title;
        parentEdit.number = newData.number;
        return parentEdit;
    }
    remove(title){
        return this.contacts = this.contacts.filter(contact => contact.title !== title);
    }
}

let taskList = new ToDoList('education');
const $addListBtn = document.querySelector('.sidebar__add-list');
const $submitAddTask = document.querySelector('.set-Info__submit-btn');
const $setTitleInput = document.querySelector('.set-Info__title-input');
const $setDescriptionInput = document.querySelector('.set-Info__description-input');

taskList.add('homework', 'finish hw');
taskList.add('cookies', 'love cookies <3');
taskList.add('say hello', 'be polite');

$submitAddTask.addEventListener('click', () => {
    if(!$setTitleInput.value || !$setDescriptionInput.value){
        return;
    }
    taskList.add($setTitleInput.value, $setDescriptionInput.value)
    const $form = document.querySelector('.set-Info');
    $form.className += ' hidden';
}, true);

$addListBtn.addEventListener('click', () => {
    const $form = document.querySelector('.set-Info');
    if($form.classList.contains('hidden')){
        $form.classList.remove('hidden');
    } else {
        $form.classList.add('hidden');
    }
})
// taskList.add('homework', 'finish ewqrhw'); // Error

// taskList.edit('cookies', {
//     title: 'pancakes',
//     description: 'my lovely pancakes 0_0'
// });

// taskList.edit('pancakes', { //error
//     title: 'homework',
//     description: 'something'
// })

// taskList.remove('homework');

let contactBook = new ContactList('Familly Group');

// contactBook.add('Denis Smirnov', +380999999);
// contactBook.add('Calvin Klein', +380000000);

// contactBook.edit('Denis Smirnov', {title: 'Den', number: +7777777});
// contactBook.remove('Calvin Klein');



