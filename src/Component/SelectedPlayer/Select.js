import React from 'react';

const Select = (props) => {

    // console.log(props)
    const count = props.count;
    // console.log(count)
    
  
    let totalSalary = 0;

for (let i = 0; i < count.length; i++) {
    const player = count[i];
    totalSalary = totalSalary + player.salary;
    // console.log(totalSalary)
    
}

const names = count.name
console.log(names)
    
    return (
        <div>
           <div>
                    
                    <h1>Selected Player :{count.length}</h1>
                    <h2>Total Salary : ${totalSalary} </h2>
           </div>

           
           

         
        </div>
    );
};

export default Select;