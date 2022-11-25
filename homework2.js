const menu = {
    width: 200,
    height: 300,
    title: 'MyMenu'
  };
  
  let multiplyNumeric = function() {
    for (let i in menu) {
      if (typeof menu[i] === 'number') {
        menu[i] = menu[i] * 2
      }
    }
    return menu
  };
  
  console.log(multiplyNumeric(menu));
  