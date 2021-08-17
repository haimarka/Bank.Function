// const customers = [
//     {id: 20},
//     {name:"haim"},
//     {phone: 0526122},
//     {email: "haimarka1@gmail.com"},
//     {balance: 26000},
// ]

// console.log(customers[0].id);
// console.log(customers[1].name);
// console.log(customers[2].phone);
// console.log(customers[3].email);
// console.log(customers[4].balance);

//2
//a

// const customers = [ {
//     id: 20,
//     name:"haim",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 26000,
// },
// {
//     id: 30,
//     name:"ezra",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 30000,   
// },
// {
//     id: 40,
//     name:"nadav",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 40000,   
// },
// ]

// function addClient(clientId,claientName){
//     for (let i = 0; i < customers.length; i++) {
//         if(customers != clientId){
//             console.log(customers[i].id);
//         }        
//         if(customers != claientName){
//             console.log(customers[i].name);
//         }
//     }
// }

// addClient(20,"haim")


//2.a

// const customers = [ {
//     id: 20,
//     name:"haim",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 26000,
// },
// {
//     id: 30,
//     name:"ezra",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 30000,   
// },
// {
//     id: 40,
//     name:"nadav",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 40000,   
// },
// ]



// function addClient(client){
//     customers.push(client)       
// }

// addClient(    
//     {
//     id:50,
//     name:"jacob",
//     phone:123456,
//     email: "haimarka1@gmail.com",
//     balance: 50000,
// }
// )

// console.log(customers);

//2.b

// const customers = [ {
//     id: 20,
//     name:"haim",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 26000,
// },
// {
//     id: 30,
//     name:"ezra",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 30000,   
// },
// {
//     id: 40,
//     name:"nadav",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 40000,   
// },
// ]

// function getClientById(clientId){
//     for (let i = 0; i < customers.length; i++) {
//         if(clientId == customers[i].id){
//             return customers[i].id;
//         }        
//     }
        // for (let i = 0; i < blockCustomers.length; i++) {
        //     if(blockCustomers[i] == client){
        //         return alert("blocked customer");
        //     } 
// }

// console.log(getClientById(20));

//2.c

// const customers = [ {
//     id: 20,
//     name:"haim",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 26000,
// },
// {
//     id: 30,
//     name:"ezra",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 30000,   
// },
// {
//     id: 40,
//     name:"nadav",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 40000,   
// }
// ];

// function delateClientById(delateClient){
//     for (let i = 0; i < customers.length; i++) {
//         if(delateClient == customers[i].id){
//             customers.splice(i,1);
//             return 
//         }  
            
        
//     }
        // for (let i = 0; i < blockCustomers.length; i++) {
        //     if(blockCustomers[i] == client){
        //         return alert("blocked customer");
        //     } 
// }
// delateClientById(20);
// console.log(customers);

//2.d

// const customers = [ {
//     id: 20,
//     name:"haim",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 26000,
// },
// {
//     id: 30,
//     name:"ezra",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 30000,   
// },
// {
//     id: 40,
//     name:"nadav",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 40000,   
// }
// ];

// function withDrowById (clientId,amont){
//     for (let i = 0; i < customers.length; i++) {
//         if(clientId == customers[i].id){
//             customers[i].balance -=  amont;
//             return;
//         }
//     } 
//     for (let i = 0; i < blockCustomers.length; i++) {
//         if(blockCustomers[i] == client){
//             return alert("blocked customer");
//         }   
// }
// withDrowById(20,300);
// console.log(customers);



//2.e

// const customers = [ {
//     id: 20,
//     name:"haim",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 26000,
// },
// {
//     id: 30,
//     name:"ezra",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 30000,   
// },
// {
//     id: 40,
//     name:"nadav",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 40000,   
// }
// ];

// function depositMoneyById (clientId , amont){
//     for (let i = 0; i < customers.length; i++) {
//         if(clientId == customers[i].id){
//             customers[i].balance += amont;
//             return
//         }        
//     }
        // for (let i = 0; i < blockCustomers.length; i++) {
        //     if(blockCustomers[i] == client){
        //         return alert("blocked customer");
        //     } 
// }
// depositMoneyById(20,400);
// console.log(customers);

//3

// const customers = [ {
//     id: 20,
//     name:"haim",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 26000,
// },
// {
//     id: 30,
//     name:"ezra",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 30000,   
// },
// {
//     id: 40,
//     name:"nadav",
//     phone: 0526122,
//     email: "haimarka1@gmail.com",
//     balance: 40000,   
// }
// ];

// const blockCustomers = [1,2,3];
// function getBlockedCustomers(client){
//     for (let i = 0; i < blockCustomers.length; i++) {
//         if(blockCustomers[i] == client){
//             return alert("blocked customer");
//         }
        
//     }
    
// }

// getBlockedCustomers(1);
// console.log(customers);
