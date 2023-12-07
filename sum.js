const theSum = (...numbers) => {
      return numbers.reduce((pv,cv) => pv + cv,0); // 0 for intial value in case theres no inputs 
};

module.exports=theSum;