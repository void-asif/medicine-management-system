const sales =
JSON.parse(localStorage.getItem("sales")) || [];

const table =
document.getElementById("salesTable");

sales.forEach((sale)=>{

table.innerHTML += `
<tr>
<td>${sale.date}</td>
<td>${sale.medicineName}</td>
<td>${sale.quantitySold}</td>
</tr>
`;

});