var index = require("./index.js")

if (index.name === "Su") {
    console.log("The name is correct")
} else {
    console.log("Expected: Su, Received: "+index.name)
}



if (index.height === "70") {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
