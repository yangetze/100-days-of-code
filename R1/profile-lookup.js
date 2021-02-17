// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    var contactResult = {};
    for(var i = 0; i < contacts.length; i++){
            if(isValidContact(contacts[i], name, prop)){
                return contacts[i][prop];
            }
            contactResult.isValidProp = contactPropExists(contacts[i], prop); 
            if(contactExists(contacts[i], name)){
                contactResult.isValidName = true;
            }
        } // End For   
        return messageWhenProfileIsNotValid(contactResult);
// Only change code above this line
}

function contactExists(valRow, valName){
    return valRow.firstName == valName;
}

function contactPropExists(valRow, valProp){
    return valRow.hasOwnProperty(valProp);
}

function isValidContact(valRow, valName, valProp) {
   return contactExists(valRow, valName) && contactPropExists(valRow, valProp);
}

function messageWhenProfileIsNotValid(contactResult) {
     if(!contactResult.isValidName){ 
            return "No such contact"; 
        } else if(!contactResult.isValidProp) {            
            return  "No such property";
        }
}


console.log(lookUpProfile("Kristian", "lastName")); 
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));
