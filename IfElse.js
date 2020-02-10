//Variable for First Name
let firstName = prompt(`What is your first name?`)
let firstName1 = firstName.charAt(0).toUpperCase() + firstName.slice(1)


//Variable for person's State
let personState = prompt (`What is the state abbreviation that you are from?`)
let personState1 = personState.toUpperCase()

//Vraiable for person's Temperature
let personTemp = parseInt(prompt(`What is your temperature (in Farenheit)?`))

//Message notifying the user of the data they entered into the system as a nice message
let totalArray = [firstName.charAt(0).toUpperCase() + firstName.slice(1), personState.toUpperCase(), personTemp]
NSB.MsgBox(`Dear ${firstName1}, you are from ${personState1} and have a temperature of ${personTemp} degrees Farenheit. Have a nice day!!`)
console.log(totalArray);

//Message based in imputs telling them what they should wear 
if (personTemp < 32 && personState1 === 'NE') {
   NSB.MsgBox(`Wear a warm coat, hat, scarf and gloves.`)
} else if (personTemp >= 32 && personTemp < 50 && personState1 === 'NE') {
    NSB.MsgBox(`Wear a warm coat but you won't need a hat, scarf or gloves`)
} else if ((personTemp >= 32 && personTemp < 50 && personState1 === 'FL')) {
    NSB.MsgBox(`Wear your warmest coat, a warm hat, a scarf, and warm gloves.`)
} else if ((personTemp >= 50 && personTemp < 70 && personState1 === 'FL')) {
    NSB.MsgBox(`wear a warm coat, hat and gloves. Maybe a scarf too.`) 
} else { 
    NSB.MsgBox(`I do not know what you should wear.`)
}