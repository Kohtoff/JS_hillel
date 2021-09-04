const todo = {
    taskList: [],

    newTask(name, description){
        const existCheck = this.uniqueCheck(name);

        if(existCheck){
            console.log(`Oops! Task with name \"${name}\" has already exist`);
            return false;
        }

        const task = {
            name, 
            description,
            status: false
        }

        this.taskList.push(task); 

        return true;
    },

    editTask(name, newName = null, description = null){
        const task = this.taskList.find(task => task.name === name)
        const existCheck = this.uniqueCheck(newName);
        if(!task){
            console.log(`Oops! There isn\`t any task with name \"${name}\"`);
            return false;
        }

        if(existCheck){
            console.log(`Oops! Task with name \"${newName}\" has already exist`);
            return false;
        }
        if(newName){
            task.name = newName
        }
        if(description){
            task.description = description;
        }
        
        return true;
    },

    deleteTask(name){
        this.taskList = this.taskList.filter(task => task.name !== name);

        return true;
    },

    completeTask(name){
        const task = this.taskList.find(task => task.name === name);
        if(!task){
            console.log(`That is problem. There isn\`t any task with name \"${name}\" `);
            return false;
        }

        task.status = true;

        return true;
    },

    getFullInfo(){
        const completedTasks = this.taskList.filter(task => task.status === true);
        const inProgressTasks = this.taskList.filter(task => task.status === false);

        const fullInfo = {
            completedTasks,
            completedAmount: completedTasks.length,
            inProgressTasks,
            inProgressAmount: inProgressTasks.length,
            totalAmount: this.taskList.length,
        }

        return fullInfo;
    },

    uniqueCheck(name){
        const result = this.taskList.find(task => {
            if(name === task.name){
                return true;
            }
        })
        return !!result; 
    }
};


todo.newTask("Fix homework", "change way to reset counter");
todo.newTask("Lection 16", "starts at 19:15. Online"); 
todo.newTask("Reissue passport", "It ends in July");
todo.newTask("English practise", "Read some english books");
todo.newTask("Lection 16", "qwe qwrwtrw sdf");

todo.editTask("Lection 16", "Fix homework", "test");
todo.editTask("Reissue passport","Visit passport service", "Passport ends in August");

todo.completeTask("Fix homework");
todo.completeTask("test");

todo.deleteTask("English practise");

console.log(todo.getFullInfo());