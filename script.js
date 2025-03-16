const button = document.querySelector(".btn-calcul");
const displayplace = document.querySelectorAll(".display");
const data = document.querySelectorAll(".wrapper input");
const labelTop = document.querySelectorAll(".wrapper .text-label")
const labelBottom = document.querySelectorAll(".wrapper .error-message")
const errorMessages = ["This field is required","Must be a valid day","Must be a valid Month","Must be a valid year","Must be a valid date"]
let typrOffError = 0
let placeOffError = 0
let today = new Date(); // Today date
console.log(today.getMonth)

const display = () =>{

};

const calcul = () =>{
    console.log("ok")
};

const verifY = () =>{
    if (data[2].value <= today.getFullYear()){
        return true;
    }else{
        typrOffError = 3;
        placeOffError = 2;
        return false;
    };
};

const verifM = () =>{
    if (data[1].value <= 12){
        return true;
    }else{
        typrOffError = 2;
        placeOffError = 1;
        return false;
    };
};

const verifD = () =>{
    if (data[0].value <= 31){
        return true;
    }else{
        typrOffError = 1;
        placeOffError = 0;
        return false;
    };
}
const verif = () =>{
    return  verifInt() && verifY() && verifM() && verifD() ;
};

const verifInt = () =>{ // verif of the integrity
    for (let i = 0; i<3; i++){ // for each input box
        if (data[i].value == "" ){  // if not integer
            // error of integrity (0) closure of the process 
            typrOffError = 0;
            placeOffError = i;
            console.log(data[i].value)
            return false;
        };
    
    };
    return true
};

const displayError = () =>{
    console.log("error");
    console.log(typrOffError);
    console.log(placeOffError);
    data[placeOffError].style.borderColor = "var(--Light-red)";
    labelTop[placeOffError].style.color = "var(--Light-red)";
    labelBottom[placeOffError].textContent = errorMessages[typrOffError]
};

// startof  process, condition: error => dispplay message ;or not => continue process
const process = () =>{
    if (verif()){  //if no error
        const res = calcul();
        display();
    }
    else{  //if error
        displayError();
    };
    
};

button.addEventListener("click", process);