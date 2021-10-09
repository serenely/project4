function myFirstApp(name, age) {
    alert(`Привет, меня зовут ${name} и это моя вторая программа !`);

    function showSkills() {
        let skills = ['html', 'css', 'js'];

        let i = 0;

        do {
            alert(`Я владею: ${skills[i]}`);
            console.log(i);
            console.log(skills[i]);
            i++;

        } while (i < skills.length);

    }
    showSkills();


    function checkAge() {
         age = prompt('Сколько вам лет?');
         
        if ( age > 18 ) {
            alert('Привет!');
        } else if( age <= 18 ) {
            alert('Пока!');
            
        }
        // age > 18
        // У тебя отличные шансы стать front-end dev!
        // age < 18
        // У тебя отличные шансы!
    }
    checkAge();

    function calcPow(num) {

        return num * num;

    }
    


    let calc = prompt('Введите число', ); //16
    alert(calcPow(calc));

}

myFirstApp("Boris", 20);