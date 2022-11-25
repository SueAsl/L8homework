const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  
  let res = 0;
  for (let i in salaries) {
    if (salaries !== {}) {
      res += salaries[i];
    } else {
      console.log(0)
    }
  }
  
  console.log(res);
  