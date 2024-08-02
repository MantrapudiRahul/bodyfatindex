




function checkbmi(){
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let age = document.getElementById('Age');
    let gender = document.getElementById('gender').value; // Assuming gender is an input field

    let sex;
    
    if (gender === 'male') {
        sex = 0;
    } else if (gender === 'female') {
        sex = 1;
    } else {
        // Handle other cases or provide a default value
        sex = 0; // Defaulting to male if gender is not specified correctly
    }

    let BMI = weight / (height * height);
    let result = -44.988 + (0.503 * age) + (10.689 * sex) + (3.172 * BMI) - (0.026 * (BMI * BMI)) + (0.181 * BMI * sex) - (0.02 * BMI * age) - (0.005 * (BMI * BMI) * sex) + (0.00021 * (BMI * BMI) * age);
    if(result>0 && result<9.99 && gender=='female')
        {
            document.getElementById('result').innerText = 'Extremely low fat😖'
        }
        else if (result>10 && result < 13.99 && gender=='female'){
            document.getElementById('result').innerText = 'Eessintial fat😄'
        }
        else if (result>14 && result <20.99 && gender=='female'){
            document.getElementById('result').innerText = 'Athletes💪😊'
        }
        else if (result>21 && result < 24.99 && gender=='female'){
            document.getElementById('result').innerText = 'Fitness😏😇'
        }
        else if (result>25 && result < 31.99 && gender=='female'){
            document.getElementById('result').innerText = 'Average😟'
        }
        else if (result>0 && result < 2.99 && gender=='male'){
            document.getElementById('result').innerText = 'Extremely low fat😖'
        }


        else if (result>2 && result < 5.99 && gender=='male'){
            document.getElementById('result').innerText = 'Eessintial fat😄'
        }
        else if (result>6 && result < 13.99 && gender=='male'){
            document.getElementById('result').innerText = 'Athletes💪😊'
        }
        else if (result>14 && result <17.99 && gender=='male'){
            document.getElementById('result').innerText = 'Fitness😏😇'
        }
        else if (result>18 && result <24.99 && gender=='male'){
            document.getElementById('result').innerText = 'Average😟'
        }
       






        else{
            document.getElementById('result').innerText = 'obese😵'
        }
}
