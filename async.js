const condition = false

async function myAsyncFunction() {
  if (condition) {
    return "Resolved!"
  } else {
    return new Error("Rejected!")
  }
}

myAsyncFunction()
  .then(value => {
    console.log(value)
  })
  .catch(error => {
    console.error("Program is failed!")
  })
