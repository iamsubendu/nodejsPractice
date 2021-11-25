const eventEmitter = require("events");

class MyEmitter extends eventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on("Interview Call", () => {
    setTimeout(() => {
        console.log("Please go for the interview");
    }, 3000);
    //3s
    console.log("Please go for the interview")
});

myEmitter.emit("Interview Call");