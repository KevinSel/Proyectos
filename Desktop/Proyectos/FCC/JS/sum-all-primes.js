function sumPrimes(num) {
  function calcPrimes(primes,max){
    let prime = primes[0] + 1
    while(primes.some(x=> prime%x === 0)){
      prime++
    }
    if (prime > max){return primes}
    else{
      primes.unshift(prime)
      return calcPrimes(primes,max)
    }
  }

  return calcPrimes([2],num).reduce((acc,x)=>acc+x);
}

sumPrimes(10);