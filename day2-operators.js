function solve(meal_cost, tip_percent, tax_percent) {
    let tip = (meal_cost/100)*tip_percent;
    let tax = (tax_percent/100)*meal_cost;
    let total_cost = meal_cost + tip + tax;
    total_cost = Math.round(total_cost);
    console.log(total_cost);
}
