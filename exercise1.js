function calc() {
    let fruitName = document.getElementById("fruit").value;
    let price = parseInt(document.getElementById("price").value);
    let count = parseInt(document.getElementById("count").value);
    var total = count * price;
    document.write("<body style='background-image: url(fruits.jpeg); background-size: cover;'><center><br><br><h1 style=\"border-width:3px; border-style:solid; border-color:#FF0000;\">Cost Details</h1><br><br>");
    document.write("<br><table border='1' cellpadding='15' style='font-size: x-large;'><tr><td>Fruit Name : </td><td>" + fruitName + "</td></tr>");
    document.write("<tr><td>Price per fruit : </td><td>" + price + "</td></tr>");
    document.write("<tr><td>Count : </td><td>" + count + "</td></tr>");
    document.write("<tr><td>Total price : </td><td>" + total + "</td></tr></table><br><br></center></body>");
}