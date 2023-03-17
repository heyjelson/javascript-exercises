const fibonacci = function(number) {
   let add_a = 0;
   let add_b = 1;
   let sum;
   if(number == 0) {
    return 0;
   }else if (number < 0) {
    return "OOPS";
   }

   for(let i = 2; i <= number; i++) {
    sum = add_a + add_b;
    add_a = add_b;
    add_b = sum;
   }
   return add_b;

   
}
// Do not edit below this line
module.exports = fibonacci;
