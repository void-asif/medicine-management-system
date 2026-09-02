const medicines =
JSON.parse(localStorage.getItem("medicines")) || [];

const index =
localStorage.getItem("editMedicineIndex");

const medicine =
medicines[index];

document.getElementById("name").value =
medicine.name;

document.getElementById("quantity").value =
medicine.quantity;

document.getElementById("sellingPrice").value =
medicine.sellingPrice;

document.getElementById("expiryDate").value =
medicine.expiryDate;

document.getElementById("location").value =
medicine.location;

document
.getElementById("editForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

medicines[index] = {

...medicine,

name:
document.getElementById("name").value,

quantity:
document.getElementById("quantity").value,

sellingPrice:
document.getElementById("sellingPrice").value,

expiryDate:
document.getElementById("expiryDate").value,

location:
document.getElementById("location").value

};

localStorage.setItem(
"medicines",
JSON.stringify(medicines)
);

alert("Medicine Updated Successfully");

window.location.href =
"stock.html";

});