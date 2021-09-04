class List{
    data = [];

    add(object){
        object.id = (new Date()).getTime();
        this.data.push(object);
    }
    remove(id){
       this.data = this.data.filter((obj) => obj.id !== id);
    }
    edit(id, payload = {}){
        let targetElement = this.data.find((obj) => obj.id === id);
        if(!targetElement){
            return;
        }

        
        this.remove(id);

        targetElement = {
            ...targetElement,
            ...payload
        }
        this.data.push(targetElement);
        return this.data;
    }
}

class TodoList extends List{

    addTask(obj){
        const task = {
            ...obj,
            state: false
        };
        super.add(task);
    }
    completeTask(id){
        const targetElement = this.data.find((obj) => obj.id === id);
        targetElement.state = true;
    }
    getStatistic(){
        const completed = this.data.filter((task) => task.state).length;

        return {
            total: this.data.length,
            completed,
            uncompleted: this.data.length - completed
        }
    }
}

class TodoListView {
    addForm = document.querySelector('.todo .add-form');
    editForm = document.querySelector('.todo .edit-form');
    list = document.querySelector('.todo .list')
    constructor(){
        this.model = new TodoList();
        this.initAddFormListeners();
        this.renderTask();
        this.initTaskListeners();
        this.renderStatistic();
    }

    initAddFormListeners(){
        this.addForm.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(e.target);

            const data = Object.fromEntries(formData);
            this.model.addTask(data);
            this.addForm.reset();
            this.renderTask();
        })
    }
    renderTask(){
        const fragment = document.createDocumentFragment();
        this.model.data.forEach((task) => {
            const li = document.createElement('li');
            li.className = 'item';
            if(task.state === true){
                li.className += ' completed';
            }
            li.dataset.id = task.id;
            const template = `
                        <div class="item__container">
                            <h3 class="item__title">${task.title}</h3>
                            <p class="item__desc">${task.description}</p>
                            <div class="btn-container">
                                <button class="item__button item__button--complete">Complete</button>
                                <button class="item__button item__button--update">Update</button>
                                <button class="item__button item__button--remove">Remove</button>    
                            </div>
                        </div>`;
            li.innerHTML = template;
            fragment.appendChild(li);
        });
        this.list.innerHTML = '';
        this.list.appendChild(fragment);
        this.renderStatistic();
    }

    initTaskListeners(){
        this.list.addEventListener('click', ({ target }) => {
            const id = +target.offsetParent.dataset.id;
            if(target.nodeName === 'BUTTON'){
                switch(target.innerHTML){
                    case 'Complete':
                        this.model.completeTask(id);
                    break;
                    case 'Update':
                        this.toggleDisplayEditForm();
                        this.initEditFormListeners(id);
                    break;
                    case 'Remove':
                        this.model.remove(id);
                    break;
                }
            }
            this.renderTask();
        })
    }

    renderStatistic(){
        const statistic = this.model.getStatistic();
        const itemArray = [...document.querySelectorAll('.statistic__item')];
        itemArray.forEach((item) => {
            const type = item.className.split('--')[1];
            switch(type){
                case 'total':
                    item.textContent = 'Total: ' + statistic.total;
                    break;
                case 'completed':
                    item.textContent = 'Completed: ' + statistic.completed;
                    break;
                case 'uncompleted':
                    item.textContent = 'Uncompleted: ' + statistic.uncompleted;
                    break;
            }
        })
    }

    toggleDisplayEditForm(){
        const form = document.querySelector('.edit-form');
        form.style.display = (form.style.display === 'flex') ? 'none' : 'flex';
    }

    initEditFormListeners(id){
        const submitListener = (e) => {
            e.preventDefault();
            const formData = new FormData(document.querySelector('.edit-form'));
            
            
            
            const payload  = Object.fromEntries(formData);
            console.log(payload);

            this.model.edit(id, payload);
            this.editForm.reset();
            this.renderTask();
            this.toggleDisplayEditForm();
        }
        
        this.editForm.addEventListener('submit', submitListener, {once: true})
        
    }
}

class ContactList extends List{

    addContact(name, surname, phone){
        const contact = {
            name,
            surname,
            phone
        }
        super.add(contact);
    }
    search(value){
        return this.data.filter((contact) => {
            return contact.name === value
                || contact.surname === value 
                || contact.phone === value; 
        })
    }
}

const contacts = new ContactList();
const view = new TodoListView();
