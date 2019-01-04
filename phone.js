const isMomHappy = true

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: "Samsung",
      color: "black"
    }
    resolve(phone)
  } else {
    const reason = new Error("Mom is not happy")
    reject(reason)
  }
})

const showOff = function(phone) {
  const message =
    "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone"
  return Promise.resolve(message)
}

willIGetNewPhone
  .then(showOff)
  .then(fulfilled => console.log(fulfilled))
  .catch(error => console.log(error.message))
