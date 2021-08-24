const willGetYouDog = new Promise((resolve, reject) => {
    const rand = Math.random();
    if (rand < 0.5) {
        resolve();

    } else {
        reject();
    }
});

console.log(willGetYouDog.then(() => {
    console.log("YAY WE GOT A DOG!!");
}).catch(() => {
    console.log(":( WE DID NOT GET A DOG!!");
})
);

