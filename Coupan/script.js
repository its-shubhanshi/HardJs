
      "use strict";

      function applyCoupan(fn, price) {
        let checkFn = typeof fn;
        if (price <= 0) {
          return "Invalid price";
        } else if (checkFn !== "function") {
          return "Invalid coupan";
        } else {
          let finalAmount = fn(price);
          if (finalAmount < 0) {
            return "Final Amount Cannot be negative";
          } else {
            return finalAmount;
          }
        }
      }

      function coupanNew50(price) {
        let res = price - 50;
        return res;
      }
      function coupanSave10(price) {
        let discount = (price * 10) / 100;
        let res = price - discount;
        return res;
      }

      function fREESHIP(price) {
        let res = price - 30;
        return res;
      }

      console.log(applyCoupan(coupanNew50, 500));
      console.log(applyCoupan(coupanSave10, 1000));
      console.log(applyCoupan(fREESHIP, 500));
      console.log(applyCoupan("hello", 500));
      console.log(applyCoupan(coupanNew50, -100));