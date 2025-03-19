const button = document.querySelector(".btn-calcul");
const displayplace = document.querySelectorAll(".display");
const data = document.querySelectorAll(".wrapper input");
const labelTop = document.querySelectorAll(".wrapper .text-label")
const labelBottom = document.querySelectorAll(".wrapper .error-message")
const errorMessages = ["This field is required","Must be a valid day","Must be a valid Month","Must be a valid year","Must be a valid date"]
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
        displayError(3,2);
        return false;
    };
};

const verifM = () =>{
    if (data[1].value <= 12){
        return true;
    }else{
        
        displayError(2,1);
        return false;
    };
};

const verifD = () =>{
    if (data[0].value <= 31){
        return true;
    }else{
        displayError(1,0);
        return false;
    };
}
const verif = () =>{
    return  verifInt() & verifY() & verifM() & verifD() ;
};

const verifInt = () =>{ // verif of the integrity
    cursor = true
    for (let i = 0; i<3; i++){ // for each input box
        if (data[i].value == "" ){  // if not integer
            // error of integrity (0) closure of the process 
            displayError(0,i);
            console.log(data[i].value)
            cursor = false
        };
        
    };
    return cursor
};

const displayError = (typrOffError,placeOffError) => {
    console.log("error");
    data[placeOffError].style.borderColor = "var(--Light-red)";
    labelTop[placeOffError].style.color = "var(--Light-red)";
    labelBottom[placeOffError].textContent = errorMessages[typrOffError]
};

const undisplayError = (e) => {
    console.log(e.srcElement.attributes.name.nodeValue);
    inputplace = e.srcElement.attributes.name.nodeValue;
    data[inputplace].style.borderColor = "var(--Light-grey)";
    labelTop[inputplace].style.color = "var(--Smokey-grey)";
    labelBottom[inputplace].textContent =  "";
}
data.forEach(element =>{
    console.log("okozdc")
    element.addEventListener("change", undisplayError)
})

// startof  process, condition: error => dispplay message ;or not => continue process
const process = () =>{
    if (verif()){  //if no error
        const res = calcul();
        display();
    }
    else{  //if error
        //displayError();
    };
    
};

button.addEventListener("click", process);