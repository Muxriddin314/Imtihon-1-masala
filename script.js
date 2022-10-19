function sumInput(){  
  let sum = 0; 
  for (let i = 0; i < 3; i++) {
    let elNumber = Number(prompt('Son kiriting: '));
    const element = elNumber;
    sum += element;
}
console.log(sum)}
sumInput();