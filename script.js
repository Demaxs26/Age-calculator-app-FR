const button = document.querySelector(".btn-calcul");
const displayplace = document.querySelectorAll(".display .wrapper-tirret");
const data = document.querySelectorAll(".wrapper input");
const labelTop = document.querySelectorAll(".wrapper .text-label")
const labelBottom = document.querySelectorAll(".wrapper .error-message")
const errorMessages = ["This field is required","Must be a valid day","Must be a valid Month","Must be a valid year","Must be a valid date"]
let today = new Date(); // Today date


const display = (date) =>{
    displayplace[0].textContent = date[0];
    displayplace[1].textContent = date[1];
    displayplace[2].textContent = date[2];
};

const calcul = () =>{
    console.log("ok")
    const dateyear = data[2].value;
    const datemonth = data[1].value;
    const dateday = data[0].value;
    const actday = today.getDate();
    const actmonth = today.getMonth() +1;
    const actyear = today.getFullYear();
    let year = actyear-dateyear;
    let month = 0;
    let day = 0;
    console.log(actday,actyear)
    if(datemonth>=actmonth){
        year = year-1;
        month = 12-datemonth+actmonth;
    }
    else{
        month = actmonth-datemonth;
    }
    if (dateday>=actday){
        month = month-1;
        day = 30 - (dateday-actday);
    }else{
        day = actday-dateday;
    }
    console.log([day,month,year])
    return [day,month,year]
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

const verifvalidday = () =>{  // for leap year and 30day months
    const month = data[1].value;
    const year = data[2].value;
    if (month%2 == 0 ){
    }
    if ((month%2 != 0 && month > 8) || (month%2 == 0 && month < 8)){
        if (data[0].value == 31){
            displayError(4,0)
            return false
        }
    }
    if (month === 2 ){
        displayError(4,0)
        return false
    }
    if ( !(year%400 == 0 || (year%4 == 0 && year%100 != 0)) ){ //not leap year
        if (data[0].value == 29){
            displayError(4,0)
            return false
        }
    }

    data[0].style.borderColor = "var(--Light-grey)";
    labelTop[0].style.color = "var(--Smokey-grey)";
    labelBottom[0].textContent =  "";
    return true
}
const verif1 = () =>{
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
    inputplace = e.srcElement.attributes.name.nodeValue;
    data[inputplace].style.borderColor = "var(--Light-grey)";
    labelTop[inputplace].style.color = "var(--Smokey-grey)";
    labelBottom[inputplace].textContent =  "";
}
data.forEach(element =>{
    element.addEventListener("change", undisplayError)
})

// startof  process, condition: error => dispplay message ;or not => continue process
const process = () =>{
    if (verif1() && verifvalidday()){  //if no error 2nd verif is done only if verif1 is ok ;
        display(calcul());
    }

};

button.addEventListener("click", process);