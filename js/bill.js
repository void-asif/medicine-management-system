const STORE_NAME = "Health Care Medical Store";

function generateBill() {
    const customerName = document.getElementById("customerName").value.trim();
    const medicineName = document.getElementById("medicineName").value.trim();
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    const medicines = JSON.parse(localStorage.getItem("medicines")) || [];

    if (!customerName || !medicineName || !quantity || quantity < 1) {
        alert("Please enter customer name, medicine name and a valid quantity.");
        return;
    }

    const medicine = medicines.find(m =>
        String(m.name).trim().toLowerCase() === medicineName.toLowerCase()
    );

    if (!medicine) {
        alert("Medicine Not Found");
        return;
    }

    if (quantity > Number(medicine.quantity)) {
        alert(`Only ${medicine.quantity} units are available in stock.`);
        return;
    }

    const price = Number(medicine.sellingPrice) || 0;
    const total = quantity * price;

    document.getElementById("billOutput").innerHTML = `
        <div class="bill" id="printBill">
            <div class="bill-header">
                <img src="assets/logo.svg" alt="${STORE_NAME}" class="bill-logo">
                <h2>${STORE_NAME}</h2>
                <p>Medicine Bill</p>
            </div>
            <hr>
            <div class="bill-info">
                <p><b>Customer:</b> ${escapeHtml(customerName)}</p>
                <p><b>Date:</b> ${new Date().toLocaleDateString("en-IN")}</p>
            </div>
            <table class="bill-table">
                <thead>
                    <tr>
                        <th>Medicine</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${escapeHtml(medicine.name)}</td>
                        <td>${quantity}</td>
                        <td>Rs. ${price.toFixed(2)}</td>
                        <td>Rs. ${total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <h3 class="bill-total">Total: Rs. ${total.toFixed(2)}</h3>
            <div class="bill-actions no-print">
                <button type="button" onclick="printBill()">Print Bill</button>
                <button type="button" onclick="downloadPDF()">Download PDF</button>
            </div>
        </div>
    `;
}

function printBill() {
    window.print();
}

function downloadPDF() {
    const bill = document.getElementById("printBill");
    if (!bill) {
        alert("Please generate the bill first.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const customer = bill.querySelector(".bill-info p").textContent.replace("Customer:", "").trim();
    const date = bill.querySelectorAll(".bill-info p")[1].textContent.replace("Date:", "").trim();
    const row = bill.querySelector(".bill-table tbody tr").children;

    doc.setFontSize(18);
    doc.text(STORE_NAME, 20, 20);
    doc.setFontSize(11);
    doc.text("Medicine Bill", 20, 28);

    doc.text(`Customer: ${customer}`, 20, 42);
    doc.text(`Date: ${date}`, 20, 50);
    doc.line(20, 56, 190, 56);

    doc.text("Medicine", 20, 68);
    doc.text("Qty", 100, 68);
    doc.text("Price", 125, 68);
    doc.text("Amount", 160, 68);

    doc.text(row[0].textContent.trim(), 20, 78);
    doc.text(row[1].textContent.trim(), 100, 78);
    doc.text(row[2].textContent.trim(), 125, 78);
    doc.text(row[3].textContent.trim(), 160, 78);

    const total = bill.querySelector(".bill-total").textContent.trim();
    doc.line(20, 88, 190, 88);
    doc.setFontSize(13);
    doc.text(total, 145, 100);

    const safeName = customer.replace(/[^a-z0-9]/gi, "_") || "Customer";
    doc.save(`Bill_${safeName}.pdf`);
}

function escapeHtml(value) {
    return value.replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;",
        '"': "&quot;", "'": "&#039;"
    }[char]));
}
