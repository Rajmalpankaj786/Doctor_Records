let hArr = JSON.parse(localStorage.getItem("hArr")) || [];
   displayData(hArr);
document.querySelector("form").addEventListener("submit", hospitalManagement);

function hospitalManagement(event){
    event.preventDefault();

    let name = document.querySelector("#name").value;
    let id = document.querySelector("#docID").value;
    let dept = document.querySelector("#dept").value;
    let exp = document.querySelector("#exp").value;
    let email = document.querySelector("#email").value;
    let mbl = document.querySelector("#mbl").value;

    console.log(name, id,dept,exp,email,mbl);

    let obj = {
        dName : name,
        dId : id,
        dDept : dept,
        dExp : exp,
        dEmail : email,
        dMbl : mbl
    };

    console.log(obj);

    hArr.push(obj);

    localStorage.setItem("hArr" ,JSON.stringify(hArr));

    displayData(hArr);
}

// here displayData funtion description 

function displayData(hArr){
    
    document.querySelector("tbody").innerHTML = "";
    hArr.forEach((el, index) => {
        
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = el.dName;

        let td2 = document.createElement("td");
        td2.innerText = el.dId;

        let td3 = document.createElement("td");
        td3.innerText = el.dDept;

        let td4 = document.createElement("td");
        td4.innerText = el.dExp;

        let td5 = document.createElement("td");
        td5.innerText = el.dEmail;

        let td6 = document.createElement("td");
        td6.innerText = el.dMbl;

        let td7 = document.createElement("td");
        
        if(el.dExp >= 5){
            td7.innerText = "Senior";
        } 
        else if(el.dExp >= 2 && el.dExp <4){
            td7.innerText = "Junior";
        }
        else{
            td7.innerText = "Trinee";
        }

        let td8 = document.createElement("td");
        td8.innerText = "Delete";
        td8.style.background = "red";

        td8.addEventListener("click" , function(){
            hArr.splice(index,1);
            localStorage.setItem("hArr" , JSON.stringify(hArr));
            displayData(hArr);
        });
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8)

        document.querySelector("tbody").append(tr);

       
    });

    
}


