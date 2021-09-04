var Friend = function(name, password, interests, job){
    this.fullName = name;
    this.password = password;
    this.interests = interests;
    this.job = job;
  };
  
  function sayHello(){
     // раскомментируйте следующую строчку, чтобы узнать, на что указывает this
     console.log(this); 
    return `Hi, my name is ${this.fullName} and I'm a ${this.job}. Let's be friends!`;
  }
  
  // Мы можем создать один или несколько экземпляров объекта типа Friend, используя ключевое слово new
  var john = new Friend('John Smith', 'badpassword', ['hiking', 'biking', 'skiing'], 'teacher'); 
  
//   console.log(john); 
  
  // Назначим функцию ключу greeting объекта john
  john.greeting = sayHello; 
  
  // Вызовем новый метод объекта
  console.log( john.greeting() ); 
  
  // Помните о том, что sayHello() не стоит вызывать как обычную функцию
//   console.log( sayHello() ) ;