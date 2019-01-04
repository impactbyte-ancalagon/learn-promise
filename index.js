const condition = true

const myFirstPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Fulfilled!")
  } else {
    const reason = new Error("Rejected!")
    reject(reason)
  }
})

myFirstPromise
  .then(successMessage => {
    console.log(".then >>> " + successMessage)
  })
  .catch(error => console.log(".catch >>> " + error.message))
