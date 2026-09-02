const sellForm =
document.getElementById("sellForm");

sellForm.addEventListener("submit", (e)=>{

e.preventDefault();

const medicineName =
document.getElementById("medicineName")
.value.trim();

const sellQty =
parseInt(
document.getElementById("sellQty").value
);

let medicines =
JSON.parse(
localStorage.getItem("medicines")
) || [];

const medicine =
medicines.find(m =>
m.name.toLowerCase() ===
medicineName.toLowerCase()
);

const message =
document.getElementById("message");

if(!medicine){

message.innerHTML =
"❌ Medicine Not Found";

message.style.color = "red";

return;

}

if(sellQty > Number(medicine.quantity)){

message.innerHTML =
"❌ Not Enough Stock";

message.style.color = "red";

return;

}

medicine.quantity =
Number(medicine.quantity) - sellQty;
let sales =
JSON.parse(localStorage.getItem("sales")) || [];

sales.push({
    medicineName: medicine.name,
    quantitySold: sellQty,
    date: new Date().toLocaleDateString()
});

localStorage.setItem(
    "sales",
    JSON.stringify(sales)
);

localStorage.setItem(
"medicines",
JSON.stringify(medicines)
);

message.innerHTML =
`✅ Sold Successfully.
Remaining Stock: ${medicine.quantity}`;

message.style.color = "green";

});