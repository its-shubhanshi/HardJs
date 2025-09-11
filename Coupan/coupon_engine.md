# 🎯 Problem 4: Coupon Engine System

## 📘 Scenario (Interviewer says):

We are building a Coupon Engine for an E-commerce app. Customers can
apply different coupons at checkout.

------------------------------------------------------------------------

## 👉 Your Task:

Create 3 coupon functions:

-   **couponNEW50(price)** ➔ Flat ₹50 off\
-   **couponSAVE10(price)** ➔ 10% off\
-   **couponFREESHIP(price)** ➔ Reduces ₹30 (fixed shipping discount)

------------------------------------------------------------------------

## 📝 Write a reusable function:

``` javascript
function applyCoupon(fn, price)
```

-   Takes coupon function `fn` and price as arguments.\
-   Applies coupon discount.\
-   Returns final amount.

------------------------------------------------------------------------

## 🔎 Add validations:

1.  If price \<= 0 ➔ return `"Invalid Price ⛔"`.\
2.  If fn is not a function ➔ return `"Invalid Coupon ❌"`.\
3.  If after discount price \< 0 ➔ return
    `"Final Amount cannot be negative ⚠️"`.

------------------------------------------------------------------------

## ✅ Expected Outputs:

``` javascript
applyCoupon(couponNEW50, 500) ➔ 450  
applyCoupon(couponSAVE10, 1000) ➔ 900  
applyCoupon(couponFREESHIP, 200) ➔ 170  
applyCoupon("hello", 300) ➔ "Invalid Coupon ❌"  
applyCoupon(couponNEW50, -100) ➔ "Invalid Price ⛔"  


------------------------------------------------------------------------

## 📌 Requirements:

✔️ Use First-Class Function concept (functions as arguments).\
✔️ Must include validations inside applyCoupon.\
✔️ Must return (not just log).
