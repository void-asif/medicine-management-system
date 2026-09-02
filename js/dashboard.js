const medicines =
JSON.parse(localStorage.getItem("medicines")) || [];

document.getElementById("totalMedicine")
.textContent = medicines.length;

let totalStock = 0;
let lowStock = 0;

medicines.forEach(medicine => {

    totalStock += Number(medicine.quantity);

    if(Number(medicine.quantity) < 10){
        lowStock++;
    }

});

document.getElementById("totalStock")
.textContent = totalStock;

document.getElementById("lowStock")
.textContent = lowStock;
const lowStockList =
document.getElementById("lowStockList");

medicines.forEach(medicine => {

if(Number(medicine.quantity) < 10){

lowStockList.innerHTML += `
<li>
${medicine.name}
(Only ${medicine.quantity} Left)
</li>
`;

}

});

let expiryCount = 0;

const today = new Date();

medicines.forEach(medicine => {

const expiry =
new Date(medicine.expiryDate);

const diff =
(expiry - today) /
(1000 * 60 * 60 * 24);

if(diff <= 30){
    expiryCount++;
}

});

document.getElementById("expiryMedicine")
.textContent = expiryCount;