/*se solicita nombre del alumno*/
/*se solicita materia*/
/*se solicita n1 n2y n3*/

/* let studentName = 'Alex';
let subject = 'Maths';
let grade1 = 5;
let grade2 = 10;
let grade3 = 7; */

const studentName = prompt("Enter the student's name:");
const subject = prompt("Enter the subject:");
const grade1 = parseFloat(prompt("Enter the first grade (0-10):"));
const grade2 = parseFloat(prompt("Enter the second grade (0-10):"));
const grade3 = parseFloat(prompt("Enter the third grade (0-10):"));


const isNumber = (grade) => typeof (grade);

const isValid = (grade) => {
    if (isNumber(grade) === 'number') {
        if (grade >= 0 && grade <= 10) {
            console.log('Number is ok');
            return true;
        } else {
            console.log('Value is not valid. Try again');
            return false;
        }
    } else {
        console.log('Value is not a number. Try again');
        return false;
    }
};

const totalSum = () => {
    if (isValid(grade1) && isValid(grade2) && isValid(grade3)) {
        const summing = grade1 + grade2 + grade3;
        return summing;
    } else {
        console.log('Please check the info');
        return null;
    }
};

/* const average = totalSum() / 3

const results = () => {
    if (average >= 7) {
        console.log(studentName +', ¡felicidades! Has aprobado con un promedio de ' + average)
    } else {
        console.log(studentName +', gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ' + average)
    } 
} */

const sum = totalSum();

if (sum !== null) {
    const average = sum / 3;
    let msg = document.getElementById('msg')
    if (average >= 7) {
        //console.log(studentName + ', ¡felicidades! Has aprobado en ' + subject + ' con un promedio de ' + average.toFixed(2));
        msg.innerHTML= studentName + ', ¡felicidades! Has aprobado en ' + subject + ' con un promedio de ' + average.toFixed(2)
    } else {
        //console.log(studentName + ', gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido en ' + subject + ' es ' + average.toFixed(2));
        msg.innerHTML= studentName + ', gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido en ' + subject + ' es ' + average.toFixed(2)
    }
} else {
    console.log('No se puede calcular el promedio debido a datos no válidos.');
};

