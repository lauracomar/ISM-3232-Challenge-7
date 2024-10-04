// Task 1: Create a Department Structure
const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
}; // used Sample data to create deparments structure 

// Task 2: reate a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary(department) {
    let totalSalary = 0; // iniciate total salary
    department.employees.forEach(employee => { // loop through each employee (forEach)
        totalSalary += employee.salary; // add employee salary to total
        if (employee.subordinates.length > 0) { //if employee has subordinate add their salaries
            employee.subordinates.forEach(subordinate => {
                totalSalary += calculateEmployeeSalary(subordinate); // recursive calling function calculateEmployee that will be defined 
            });
        }
    });
    return totalSalary; // tot salary for department
}

function calculateEmployeeSalary(employee) {
    let totalSalary = employee.salary; // current employee salary
    if (employee.subordinates.length > 0) { // if employees subordinate has subordinates add their salaries
        employee.subordinates.forEach(subordinate => {
            totalSalary += calculateEmployeeSalary(subordinate); // function calls itself to find subordinates' own subordinate
        });
    }
    return totalSalary; //tot salary for employee and subordinates
}; 
