module.exports = function multiply(a, b) {
  
  a = a.split('').reverse()
  b = b.split('').reverse()

  var length = Math.max(a.length, b.length)
  var result = [], carry = 0, subres=0, sums =[];

  for (let j=0; j<b.length; j++) {
    for (let i=0; i<a.length; i++) {
      
      current = Number(a[i] || 0) * Number( b[j] || 0 ) + carry
      carry = Math.floor(current / 10)
      result.push(current % 10)
      
    }
        
    if (carry != 0) {
      result.push(carry);
      carry = 0;
    }
   
    sums.push('0'.repeat(j) + result.join(''))
    result = []; 
  }

  var lengthsOfSums = sums.map( (x) => x.length ); 
      lengthsOfSums = Math.max.apply(null, lengthsOfSums); 
  sums = sums.map( (x) => x.length < lengthsOfSums ?  x + '0'.repeat( lengthsOfSums - x.length ) : x )
  
  var finalResult = []; 
  var carry = 0,
      subres = 0;
  
  for (let i=0; i<lengthsOfSums; i++) {
    for (let j=0; j<sums.length; j++) {        
      subres +=  Number(sums[j][i] || 0);
    }
    
    subres += carry;
    carry = Math.floor(subres / 10);
    finalResult.push(subres % 10);
    subres = 0;
    
  }
  
  if (carry != 0) {
      finalResult.push(carry);
      carry = 0;
  }
  
  return finalResult.reverse().join('')
}