function Student(name, surname, bithYear, marks = [], visits = []){
    this.name = name;
    this.surname = surname;
    this.birthYear = bithYear;
    this.marks = marks;
    this.visits = visits;

    this._addElement = function (value, arr) {
        const maxLength = 10;
        const notFound = -1;
        const minMark = 0;
        const maxMark = 10;
        arr.length = maxLength;
        const emptyElement = arr.findIndex(elem => typeof(elem) === 'undefined');
        if(emptyElement === notFound){
            return 'Oops! Limit has reached';
        }
        if(value >= minMark && value <= maxMark){
            arr.length = emptyElement;
            return arr[emptyElement] = value;
        }
    };

    Object.defineProperty(this, '_addElement', {
        enumerable: false,
        writable: false,
        configurable: false
    });
}

Student.prototype.getAge = function(){
    return (new Date).getFullYear() - this.birthYear;
};

Student.prototype.getAverageMark = function () {
    const emptyLength = 0;
    if(this.marks.length <= emptyLength){
        return;
    }
    return this.marks.reduce((sum, elem) => sum + elem) / this.marks.length;
};

Student.prototype._percentOfPresent = function () {
    return this.visits.reduce((sum, elem) => sum + elem) / this.visits.length;
};


Student.prototype.mark = function (value) {
    return this._addElement(value, this.marks);
};

Student.prototype.absent = function () {
    return this._addElement(false, this.visits);
};

Student.prototype.present = function () {
    return this._addElement(true, this.visits);
};

Student.prototype.summary = function () {
    const excellentMark = 9;
    const excellentPercent = 0.9;
    const averageMark = this.getAverageMark();
    const percentOfPresent = this._percentOfPresent();

    if(averageMark >= excellentMark &&
        percentOfPresent >= excellentPercent){

        return 'Well done! Keep working';
    } else if(averageMark < excellentMark &&
                percentOfPresent < excellentPercent){

        return 'Yayks! Your result not good enough. You should ask teacher for help. Dont delay it.';
    } else {

        return 'Not bad. But, we both know, you can better!';
    }
};

Object.defineProperties(Student.prototype, {
    _percentOfPresent: {
        enumerable: false,
        writable: false,
        configurable: false
    }
});


// const Ivan = new Student('Ivan', 'Mazepa', 1999, [10, 9, 9], [true, true, true]);
// const Petro = new Student('Petro', 'Sagaidachiy', 1998, [2,4,5], [true, true, true]);
// const Severin = new Student('Severin', 'Nalivayko', 2000, [1,2,1], [false,false,false]);

