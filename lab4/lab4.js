// Створення 5 об'єктів з різними типами даних
let object1 = {
    name: "Asia",
    age: 18
};

let object2 = {
    course: 2,
    female: true
};

let object3 = "Hello world";

let object4 = 44;

let object5 = [1,2,3,4];

if (object1.female) {
    object1.female = false;
} else {
    object1.female = true;
}



function DayDate(d) {
    if (d == undefined) d = new Date();
    var res = d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + ': ';
    switch (d.getDay()) {
        case 0:
            res += 'неділя';
            break;
        case 1:
            res += 'понеділок';
            break;
        case 2:
            res += 'вівторок';
            break;
        case 3:
            res += 'середа';
            break;
        case 4:
            res += 'четвер';
            break;
        case 5:
            res += 'п\'ятниця';
            break;
        case 6:
            res += 'субота';
            break;
    }
    return res;
}

console.log(DayDate(new Date()));
let object6 = Object.assign({}, object1, object2); 
console.log(object6)
Object.freeze(object3); 
let obj4Keys = Object.keys(object4); 
let obj5Entries = Object.entries(object5); 
