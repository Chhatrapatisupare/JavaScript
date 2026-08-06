// var example
var gstRate = 18;

// const example
const shopName = "SIT Nagpur Billing System";

function generateBill() {

    // let example
    let customer = document.getElementById("customer").value;
    let product = document.getElementById("product").value;
    let qty = Number(document.getElementById("qty").value);
    let price = Number(document.getElementById("price").value);

    let amount = qty * price;
    let gst = amount * gstRate / 100;
    let total = amount + gst;

    // Object
    const bill = {
        customer,
        product,
        qty,
        price,
        amount,
        gst,
        total
    };

    // Destructuring
    const {
        customer: cname,
        product: pname,
        qty: quantity,
        price: rate,
        amount: amt,
        gst: gstAmount,
        total: finalBill
    } = bill;

    // Template Literals
    document.getElementById("result").innerHTML = `
        <h2>Bill Details</h2>

        <p><b>Shop:</b> ${shopName}</p>
        <p><b>Customer:</b> ${cname}</p>
        <p><b>Product:</b> ${pname}</p>
        <p><b>Quantity:</b> ${quantity}</p>
        <p><b>Price:</b> ₹${rate}</p>
        <p><b>Amount:</b> ₹${amt.toFixed(2)}</p>
        <p><b>GST (18%):</b> ₹${gstAmount.toFixed(2)}</p>
        <h2>Total Bill: ₹${finalBill.toFixed(2)}</h2>
    `;

    console.log(bill);
}
