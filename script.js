const button = document.querySelector(".btn-calcul");
const displayplace = document.querySelectorAll(".display");
const data = document.querySelectorAll(".wrapper input");
let typrOffError = 0

const display = () =>{

};

const calcul = () =>{

};

const verifY = () =>{
    
}

const verifM = () =>{

}

const verifD = () =>{

}
const verif = () =>{
    return verifInt() && verifY() && verifM() && verifD()
}

const verifInt = () =>{ // verif of the integrity
    for (let i = 0; i<3; i++){ // for each input box
        if (data[i].value != Number){  // if not integer
            // error of integrity (0) closure of the process 
            typrOffError = 0
            return false
        }
    };
};

const displayError = () =>{

}


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