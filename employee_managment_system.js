let Employee = [];
    function addEmployee(name, id, position, department) {
        Employee.push({ name, id, position, department });
    }

    function listEmployees() {
        console.log(Employee);
    }

    function findEmployee(id) {
        let info = Employee.filter(function (items) {
            return items.id == id;
        });
        console.log(info);
    }

    function updateEmployee(id, newName, newPosition, newDepartment) {
        for (let i = 0; i < Employee.length; i++) {
            if (Employee[i].id == id) {
                Employee[i].name = newName;
                Employee[i].position = newPosition;
                Employee[i].department = newDepartment;
            }
        }
    }

    function deleteEmployee(id) {
        for (let i = 0; i < Employee.length; i++) {
            if (Employee[i].id == id) {
                Employee.splice(i, 1);
                break;
            }
        }
    }

    let i = 0;
    while (i == 0) {
        console.log(":Employee Management System:");
        console.log("1. Manage Employee");
        console.log("2. Quit");
        let choice = prompt("Enter your choice: ");
        choice = parseInt(choice);

        if (choice == 1) {
            console.log("1. Add Employee");
            console.log("2. Update Employee");
            console.log("3. Delete Employee");
            console.log("4. Find Employee");
            console.log("5. List Employee");

            let choice2 =prompt("Enter your choice: ");
            choice2 = parseInt(choice2);

            if (choice2 == 1) {
                let id = prompt("Enter id: ");
                let position =prompt("Enter position: ");
                let department = prompt("Enter department: ");
                addEmployee(name, id, position, department);
            } else if (choice2 == 2) {
                let id = prompt("Enter id: ");
                let newName =prompt("Enter new name: ");
                let newPosition =prompt("Enter new position: ");
                let newDepartment =prompt("Enter new department: ");
                updateEmployee(id, newName, newPosition, newDepartment);
            } else if (choice2 == 3) {
                let id = prompt("Enter id: ");
                deleteEmployee(id);
            } else if(choice2 == 4) {
                let id =prompt("Enter id: ");
                findEmployee(id);
            } else if (choice2 == 5) {
                listEmployees();
            }
        } else {
            i = 1;
        }
    }
