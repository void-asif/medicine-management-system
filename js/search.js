function searchMedicine(){

const medicineName =
document.getElementById("searchName")
.value.trim();

const medicines =
JSON.parse(
localStorage.getItem("medicines")
) || [];

const medicine =
medicines.find(m =>
m.name.toLowerCase() ===
medicineName.toLowerCase()
);

const result =
document.getElementById("result");

if(!medicine){

result.innerHTML =
"<h3 style='color:red'>Medicine Not Found</h3>";

return;

}

result.innerHTML = `
<h3>Medicine Details</h3>

<p><b>Name:</b> ${medicine.name}</p>

<p><b>Stock:</b> ${medicine.quantity}</p>

<p><b>Price:</b> ₹${medicine.sellingPrice}</p>

<p><b>Expiry:</b> ${medicine.expiryDate}</p>

<p><b>Location:</b> ${medicine.location}</p>
`;

}