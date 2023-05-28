//constructor

function employee(name,department,level,URL){
    this.fullName=name;
    this.department=department;
    this.level=level;
    this.ImageURL=URL;
    allEmployees.push(this);
}
//arrays

var existingID = [];
var allEmployees = [];
var employeeSalary = [];

//prototypes
employee.prototype.uniqeID = function(existingID){
    var ID = Math.floor(1000 + Math.random() * 9000);
    while (existingID.includes(ID)){
        ID = Math.floor(1000 + Math.random() * 9000);
    }
    existingID.push(ID) ;
    return ID ;
}

employee.prototype.salary = function(level){
    var salaryValue;
    var netSalary;

switch(level){  

case 'Senior' : 
 salaryValue = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
 netSalary = salaryValue*0.925; 
break;

case 'Mid-Senior' : 
 salaryValue = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
 netSalary = salaryValue*0.925; 
break;

case 'Junior' :
 salaryValue = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
 netSalary = salaryValue*0.925;
}
employeeSalary.push(netSalary);
return netSalary;
}



employee.prototype.display = function(allEmployees) {
    
    
    
    for (var i = 0; i < allEmployees.length; i++) {

        let div = document.createElement("div");
        div.style.border="solid 2px";
        div.style.height="415px";
        div.style.width="250px";
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(div);
        
        let image = document.createElement("img");
        image.src = allEmployees[i].ImageURL;
        image.style.height="250px";
        image.style.width="250px";
        image.style.padding="30px";
        div.appendChild(image);
    
        let name = document.createElement("h3");
        name.textContent="Name : "+allEmployees[i].fullName;
        name.style.padding="10px";
        name.style.fontFamily = "monospace";
        div.appendChild(name);
    
        let id = document.createElement("h3");
        id.textContent= "ID : "+allEmployees[i].uniqeID(existingID);
        id.style.padding="10px";
        id.style.fontFamily = "monospace";
        div.appendChild(id);
    
        let departmentName = document.createElement("h3");
        departmentName.textContent="Name : "+allEmployees[i].department;
        departmentName.style.padding="10px";
        departmentName.style.fontFamily = "monospace";
        div.appendChild(departmentName);

        let salary = document.createElement("h3");
        salary.textContent= "salary : "+allEmployees[i].salary(this.level);
        salary.style.padding="10px";
        salary.style.fontFamily = "monospace";
        div.appendChild(salary);
        

        document.body.appendChild(div);
     
     
     
      
    }
}
//creating objects

var Ghazi = new employee('Ghazi Samer','Administration','Senior' ,'./assets/Ghazi.jpg');
Ghazi.uniqeID(existingID);
Ghazi.salary(Ghazi.level);
var Lana = new employee('Lana Ali','Finance','Senior','./assets/Lana.jpg');
Lana.uniqeID(existingID);
Lana.salary(Lana.level);
var Tamara = new employee('Tamara Ayoub','Marketing','Senior','./assets/Tamara.jpg');
Tamara.uniqeID(existingID);
Tamara.salary(Tamara.level);
var Safi = new employee('Safi Walid','Administration','Mid-Senior','./assets/Safi.jpg');
Safi.uniqeID(existingID);
Safi.salary(Safi.level);
var Omar = new employee('Omar Zaid','Development','Senior','./assets/Omar.jpg');
Omar.uniqeID(existingID);
Omar.salary(Omar.level);
var Rana = new employee('Rana Saleh','Development','Junior' ,'./assets/Rana.jpg');
Rana.uniqeID(existingID);
Rana.salary(Rana.level);
var Hadi = new employee('Hadi Ahmad','Finance','Mid-Senior' ,'./assets/Hadi.jpg')
Hadi.uniqeID(existingID);
Hadi.salary(Hadi.level);

// I am just using any object to get access to the display function , any other object would work the same :)
Ghazi.display(allEmployees);


