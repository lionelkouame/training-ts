// number type
const myInterger: number = 1

// string  declaration
const myString: string = "test"

// boolean declaration
const isValid: boolean = true

const notRecommedType :  any = ['test', 1, 2]

// user type  exemple
const user : { lastname: string , pwd: string, age?: number } = {lastname:"jhon", pwd:"lol"}

// product object with dybamic attribute
const product: { name: string , [key: string] : string} = {name: "test", description: "i am un test"}

//call back MousseEvent Typage
const  cbMousseEvent = (e: MouseEvent) => {}


