// task 1
function canPurchaseAlcohog(age){
    let permission = (age >= 21) ? true: false 
    return permission    
}

canPurchaseAlcohog(21)
function canPurchaseAlcohog2(age) {
    let permission2 = (age >= 21) || false;
    return permission2
}
canPurchaseAlcohog2(32)
// task 2
function max(a,b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}
max(50,3)
// task 3
const colorCode = +prompt('Enter color ocode (1-red, 2-blue, 3-green)', "" );
let colour;
switch (colorCode) {
    case 1:
       colour = 'You have chosen red colour'
        break
    case 2:
        colour = 'You have chosen blue colour'
        break
    case 3:
        colour = 'You have chosen green colour'
        break
    default:
        colour = 'Indavid number'
}
console.log(colour)
// task 4
function sumToWhile(n) {
    sum = 0
    i = 0
    while (n >= i) {
        sum +=i;
        i++;
    }
    console.log(sum)
}
// sumToWhile(5)
function sumToFor(n) {
    f_sum = 0;
    for (let f = 1; f <= n; f++ ) { 
        f_sum += f
        }
    console.log(f_sum)
}
// sumToFor(5)
function sumToDoWhile(n) {
    d_sum = 0;
    d = 0;
    do {
        d_sum += d
        d++
    } while (d <= n)
    console.log(d_sum)
}
// sumToDoWhile(5)

// Task 5
function reverseString(word) {
    result = word.split('').reverse().join('');
    console.log(result)
}
// reverseString('hello')
// task 6
function calculateDiscount(price, discount) {
    if (discount <= 1 ?? discount <= 0) { 
        price *= (1-discount)
        return price
    } else {
        alert('Invalid discount, try from 0 to 1')
    }
}
// calculateDiscount(200, 0.30)
// task 7
multiplyNumbers = function (x, y) {
    return x*y
}
// multiplyNumbers(1,4)
// task 8
const calculateSquareRoot = (number) => number ** (1/2);
// calculateSquareRoot(225)
// Task 9
const student = {
    name: 'Adilkhan',
    age: 19,
    grade: 100
};
const cloneStudent = (original) => {
    return Object.assign({}, original)
}
const studentClone = cloneStudent(student)
studentClone.age = 20;
console.log('Original object', student)
console.log('Clone', studentClone)
// task 10
const student3 = {
    name: 'Adilkhan',
    age: 19,
    grades: [],
    major: 'Economics and Data Science',
    addGrade: function(grade) {
        this.grades.push(grade);
    },
    calculateAverageGrade: function() {
        if (this.grades.length === 0) {
            return 'No grades available'
        }
        const sum = this.grades.reduce((total, grade) => total+grade, 0);
        return sum/this.grades.length;
    },
    displayInfo: function() {
        console.log('Name - ' + this.name)
        console.log('Age is ' + this.age + ' years old')
        console.log('Major is ' + this.major)
        console.log('Average grade is ' + this.calculateAverageGrade())
    }
}
student3.addGrade(99);
student3.addGrade(100);
student3.addGrade(95);
student3.displayInfo();
// task 11
const dog = {
    name: 'Dog',
    bark: function() {
    console.log(this.name + ' says: Guf, guf')
    }
};
dog.bark()
// task 12 
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
console.log(book1.title);
console.log(book1.author);
console.log(book1.year)