const medicines =
JSON.parse(localStorage.getItem("medicines")) || [];

const table =
document.getElementById("stockTableBody");

function loadMedicines() {

table.innerHTML = "";

medicines.forEach((medicine,index)=>{

table.innerHTML += `
<tr>
<td>${medicine.name}</td>
<td>${medicine.quantity}</td>
<td>₹${medicine.sellingPrice}</td>
<td>${medicine.expiryDate}</td>
<td>${medicine.location}</td>
<td>
<button onclick="editMedicine(${index})">Edit</button>

<button onclick="deleteMedicine(${index})">Delete</button>
</td>

</tr>
`;

});

}

function deleteMedicine(index){

let medicines =
JSON.parse(localStorage.getItem("medicines")) || [];

medicines.splice(index,1);

localStorage.setItem(
"medicines",
JSON.stringify(medicines)
);

location.reload();

}

loadMedicines();


function editMedicine(index){

localStorage.setItem(
"editMedicineIndex",
index
);

window.location.href =
"edit-medicine.html";

}