let step = 0;

let ladder = {
  up: function() {
    step++
  },
  down: function() {
    step--
  },
  showStep: function() {
    console.log(step)
  }
};
