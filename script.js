console.log("Script Loaded Successfully");
const form = document.getElementById("medicineForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const medicine = {
    name: document.getElementById("name").value,
    quantity: document.getElementById("quantity").value,
    purchasePrice: document.getElementById("purchasePrice").value,
    sellingPrice: document.getElementById("sellingPrice").value,
    expiryDate: document.getElementById("expiryDate").value,
    location: document.getElementById("location").value
};

let medicines =
JSON.parse(localStorage.getItem("medicines")) || [];

medicines.push(medicine);

localStorage.setItem(
    "medicines",
    JSON.stringify(medicines)
);

alert("Medicine Added Successfully");

form.reset();

});

}