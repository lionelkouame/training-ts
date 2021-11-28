/**
 * for exemples to understand norrinwind sustem
 *
 * we can use narrowing with type of and condition
 */
function  numberOrStringProcess( enterParam : string | number ) :void {
    if(typeof enterParam === "number") {
        console.log("The enterParam is a NUMBER");
    } else {
        console.log("The enterParam is a  string");
    }
}

numberOrStringProcess("Je suis un test")

numberOrStringProcess(1848)

/**
 *
 * The in operator to use the narrowing system
 */
function testNarrrowing( a: MouseEvent | HTMLInputElement )  {
    if ("value" in a ) {
        console.log("a is HTMLInputElement because value is not in MouseEvent")
    } else {
        console.log('a is a Mouse event')
    }
}
