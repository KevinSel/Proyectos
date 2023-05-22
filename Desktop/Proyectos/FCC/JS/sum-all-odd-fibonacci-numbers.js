function sumFibs(num) {
  function calcFibs(fibs,max){
    let fib = fibs[0] + fibs[1];
    if (fib > max){return fibs}
    else{
      fib = fibs[0] + fibs[1];
      fibs.unshift(fib)
      return calcFibs(fibs,max)
    }
  }
  return calcFibs([1,0],num).filter(x => !(x%2==0)).reduce((acc,x)=>acc+x)
}

sumFibs(4);