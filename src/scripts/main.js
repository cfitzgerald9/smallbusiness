const departments = [
    {
        id: 1,
        name: "Human Resources"
    },
    {
        id: 2,
        name: "Finance"
    },
    {
        id: 3,
        name: "Customer Service"
    },
    {
        id: 4,
        name: "Maintenance"
    }
]
const computers = [
    {
        id: 1,
        model: "2015 MacBook"
    },
    {
        id: 2,
        model: "2016 MacBook"
    },
    {
        id: 3,
        model: "2018 Windows 10 PC"
    },
    {
        id: 4,
        model: "2010 Windows Vista PC"
    }
]
const employees = [
    {
        id: 1,
        name: "Ricky",
        departmentId: 4,
        computerId: 2
    },
    {
        id: 2,
        name: "Mickey",
        departmentId: 3,
        computerId: 1
    },
    {
        id: 3,
        name: "Dickey",
        departmentId: 1,
        computerId: 4
    },
    {
        id: 4,
        name: "Vicky",
        departmentId: 3,
        computerId: 3
    },
    {
        id: 5,
        name: "Ericky",
        departmentId: 2,
        computerId: 2
    }
];

let computerName = "";
let departmentName = "";

employees.forEach(employee => {
    for (let i = 0; i < computers.length; i++) {
        if (employee.computerId === computers[i].id)
            computerName = computers[i].model
    };
    for (let i = 0; i < departments.length; i++) {
        if (employee.departmentId === departments[i].id)
            departmentName = departments[i].name
    };
    document.querySelector("#employeeContainer").innerHTML +=
        `<h2>${employee.name}</h2>
        <p> ${employee.name} works in the ${departmentName} department, and is using a ${computerName}</p>`
});
