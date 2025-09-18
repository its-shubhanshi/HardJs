function orderPizza(callback) {
   console.log("Pizza ordered... 🍕");
   setTimeout(() => {
      console.log("Pizza is ready ✅");
      callback();
   }, 2000);
}

function eatPizza() {
   console.log("Eating pizza now 😋");
}

orderPizza(eatPizza);
