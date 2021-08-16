var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkDate = document.querySelector("#check-date");
var outputBox = document.querySelector("#output-box");

function checkBirthdayIsLucky(){
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  compareValues(sum,luckyNumber.value);
}

function calculateSum(dob){
   dob = dob.replaceAll("-","");
   let sum=0;
   for(let i=0; i<dob.length; i++){
       sum = sum + Number(dob.charAt(i));
   }

   return sum;
}

function compareValues(sum,luckyNumber){


    if(sum,luckyNumber)
   { if(sum%luckyNumber==0){
        outputBox.innerHTML = "Your Birthday is Lucky🥳";
    }

    else {
        outputBox.innerHTML = "Your Birthday is not that Lucky🙁";
    }
}

else{
    outputBox.innerHTML = "Please fill all the fields🧐";
}

}


checkDate.addEventListener('click',checkBirthdayIsLucky);





    
