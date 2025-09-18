// Step 1: Order Food
function orderFood(callback) {
  setTimeout(() => {
    console.log("Food ordered 🍕");
    callback();
  }, 1000);
}

// Step 2: Call Friend
function callFriend(callback) {
  setTimeout(() => {
    console.log("Called a friend ☎️");
    callback();
  }, 1000);
}

// Step 3: Book Cab
function bookCab(callback) {
  setTimeout(() => {
    console.log("Cab booked 🚖");
    callback();
  }, 1000);
}

// Step 4: Start Movie
function startMovie(callback) {
  setTimeout(() => {
    console.log("Movie started 🎬");
    callback();
  }, 1000);
}

// ❌ Callback Hell (Pyramid of Doom)
orderFood(() => {
  callFriend(() => {
    bookCab(() => {
      startMovie(() => {
        console.log("Finally relaxing 😅");
      });
    });
  });
});
