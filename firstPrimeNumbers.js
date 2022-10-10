function firstPrimeNumbers(n) {

  let results = []
  let counter = 2
  if (!isNaN(n)) {

    // n is number of prime numbers to be returned

    while (results.length < n) {
        
      if (isPrime(counter)) {
        results.push(counter)
      }
    counter++
    }
  }
  
  return results
  }


  function isPrime(param) {
    let results = [];
      let number = Math.ceil(param)
    for (let i = 2; i <= number; i++) {
      if (number % i == 0) {
        results.push(i)
      }
    }
    return results.length <=1
  }

console.log(firstPrimeNumbers(5))
  