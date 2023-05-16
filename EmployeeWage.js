console.log("Welcome to Employee wage program");

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let empHr=0;
let empCheck=Math.floor(Math.random()*3);
    switch (empCheck) {
        case IS_PART_TIME:
            empHr=PART_TIME_HOURS;            
            break;
        case IS_FULL_TIME:
            empHr=FULL_TIME_HOURS;
            break
        default:
            empHr=0;
            break;
    }
    let empWage=empHr*WAGE_PER_HOUR;
    console.log("Employee Wage is :"+empWage);