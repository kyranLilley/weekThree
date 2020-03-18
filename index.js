const studentScore = 58;
switch (true) {
        case studentScore >= 75 && studentScore <= 100:
            console.log('Pass with distinction');
            if (studentScore > 84 && studentScore < 101){
                console.log('Score is A+');
            } else if (studentScore > 79 && studentScore < 85){
                console.log('Score is A');
            } else if (studentScore > 74 && studentScore < 80){
                console.log('Score is A-')
            }
            break;
        case studentScore >= 60 && studentScore <= 74:
            console.log('Pass with merit');
            if (studentScore > 69 && studentScore < 75){
                console.log('Score is B+');
            } else if (studentScore > 64 && studentScore < 70){
                console.log('Score is B');
            } else if (studentScore > 59 && studentScore < 65){
                console.log('Score is B-')
            }
            break;
        case studentScore >= 40 && studentScore <= 59:
            console.log('Pass');
            if (studentScore > 54 && studentScore < 60){
                console.log('Score is C+');
            } else if (studentScore > 49 && studentScore < 55){
                console.log('Score is C');
            } else if (studentScore > 39 && studentScore < 50){
                console.log('Score is D')
            }
            break;
        case 39:
        default:
            console.log('Fail score is lower than 39');

}




let personObj = {
    name: 'kyran',
    age: 83,
}

if (personObj.age > 70 ){
console.log('old boiii') 
}else{
    console.log('young boii')
}



personObj.age > 70 ?  console.log('yes') : console.log('no');


let isMale = true ;
let isFemale = false;
let price = isFemale ? 8 : isMale ? 20 : 22;
console.log(price);


let iStudent = false;
let sprice = 12;
iStudent ? (
    sprice = 8,
  console.log('Please check for student ID')
) : (
    console.log('Enjoy the movie')
);