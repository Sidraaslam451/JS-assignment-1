// =========================
// ELEMENTS
// =========================

const result = document.getElementById("result");
let completed = 0;

// =========================
// THEME TOGGLE
// =========================

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("themeBtn").innerHTML = "☀️ Light Mode";
  }
};

function toggleTheme() {
  document.body.classList.toggle("dark");

  const btn = document.getElementById("themeBtn");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    btn.innerHTML = "☀️ Light Mode";
    showToast("Dark Mode Enabled 🌙");
  } else {
    localStorage.setItem("theme", "light");
    btn.innerHTML = "🌙 Dark Mode";
    showToast("Light Mode Enabled ☀️");
  }
}

// =========================
// TOAST
// =========================

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// =========================
// PROGRESS BAR
// =========================

function updateProgress() {
  if (completed < 12) {
    completed++;

    document.getElementById("counter").innerText = completed;

    document.getElementById("fill").style.width = (completed / 12) * 100 + "%";
  }
}

// =========================
// RESULT DISPLAY
// =========================

function showResult(text) {
  const now = new Date().toLocaleString();

  result.innerHTML = `
    <div class="output-box">
      <strong>Generated On:</strong> ${now}
      <hr>
      ${text.replace(/\n/g, "<br>")}
    </div>
  `;
}

// =========================
// COPY RESULT
// =========================

function copyResult() {
  navigator.clipboard.writeText(result.innerText);
  showToast("Result Copied 📋");
}

// =========================
// CLEAR RESULT
// =========================

function clearResult() {
  result.innerHTML = "Output Cleared.";
  showToast("Result Cleared 🗑");
}

// =========================
// MODAL
// =========================

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (e) {
  const modal = document.getElementById("modal");

  if (e.target === modal) {
    closeModal();
  }
};

// =========================
// Q1 & Q2
// =========================

function showQ1() {
  let a = 5;
  let b = 6;

  let output = `
QUESTION:
Perform Addition, Subtraction, Multiplication, Division and Modulus.

LOGIC:
Using two variables:
a = 5
b = 6

OUTPUT:

Addition = ${a + b}

Subtraction = ${a - b}

Multiplication = ${a * b}

Division = ${(a / b).toFixed(2)}

Modulus = ${a % b}
`;

  showResult(output);
  updateProgress();
  showToast("Arithmetic Operations Executed ✅");
}

// =========================
// Q3
// =========================

function showQ3() {
  let myNumber;

  let output = `
QUESTION:
Demonstrate variable declaration, increment, decrement and remainder operations.

LOGIC:
Declare variable → Assign value → Increment → Add → Decrement → Modulus

OUTPUT:

Value after declaration: ${myNumber}
`;

  myNumber = 5;
  output += `

Initial Value: ${myNumber}`;

  myNumber++;
  output += `

After Increment: ${myNumber}`;

  myNumber += 7;
  output += `

After Addition: ${myNumber}`;

  myNumber--;
  output += `

After Decrement: ${myNumber}`;

  output += `

Remainder: ${myNumber % 3}`;

  showResult(output);
  updateProgress();
  showToast("Variable Operations Executed ✅");
}

// =========================
// Q4
// =========================

function showQ4() {
  let ticketPrice = 600;
  let quantity = 5;
  let total = ticketPrice * quantity;

  let output = `
QUESTION:
Calculate total cost of purchasing 5 movie tickets.

LOGIC:
Total Cost = Ticket Price × Quantity

OUTPUT:

Ticket Price = ${ticketPrice}

Quantity = ${quantity}

Total Cost = ${total}
`;

  showResult(output);
  updateProgress();
  showToast("Movie Ticket Calculator Executed 🎫");
}

// =========================
// Q5
// =========================

function generateTable() {
  let number = Number(document.getElementById("number").value);

  if (!number) {
    showToast("Enter a valid number");
    return;
  }

  let output = `
QUESTION:
Generate multiplication table of any number.

LOGIC:
Loop from 1 to 10 and multiply by entered number.

OUTPUT:

Multiplication Table of ${number}

`;

  for (let i = 1; i <= 10; i++) {
    output += `${number} x ${i} = ${number * i}\n`;
  }

  showResult(output);
  closeModal();
  updateProgress();
  showToast("Table Generated 📊");
}

// =========================
// Q6
// =========================

function showQ6() {
  let celsius = 30;
  let fahrenheit = (celsius * 9) / 5 + 32;

  let fahr = 86;
  let cel = ((fahr - 32) * 5) / 9;

  let output = `
QUESTION:
Convert Celsius and Fahrenheit temperatures.

LOGIC:
F = (C × 9/5) + 32
C = (F - 32) × 5/9

OUTPUT:

${celsius}°C = ${fahrenheit}°F

${fahr}°F = ${cel.toFixed(2)}°C
`;

  showResult(output);
  updateProgress();
  showToast("Temperature Converted 🌡");
}

// =========================
// Q7
// =========================

function showQ7() {
  let priceItem1 = 650;
  let quantity1 = 3;

  let priceItem2 = 100;
  let quantity2 = 7;

  let shipping = 100;

  let total = priceItem1 * quantity1 + priceItem2 * quantity2 + shipping;

  let output = `
QUESTION:
Calculate total order cost including shipping charges.

LOGIC:
(Item1 × Qty1) + (Item2 × Qty2) + Shipping

OUTPUT:

Item 1 Price = ${priceItem1}
Quantity = ${quantity1}

Item 2 Price = ${priceItem2}
Quantity = ${quantity2}

Shipping Charges = ${shipping}

Total Cost = ${total}
`;

  showResult(output);
  updateProgress();
  showToast("Shopping Cart Generated 🛒");
}

// =========================
// Q8
// =========================

function showQ8() {
  let totalMarks = 500;
  let obtained = 410;

  let percentage = (obtained / totalMarks) * 100;

  let output = `
QUESTION:
Calculate percentage from obtained marks.

LOGIC:
Percentage = (Obtained / Total) × 100

OUTPUT:

Total Marks = ${totalMarks}

Obtained Marks = ${obtained}

Percentage = ${percentage.toFixed(2)}%
`;

  showResult(output);
  updateProgress();
  showToast("Marks Sheet Generated 📈");
}

// =========================
// Q9
// =========================

function showQ9() {
  let totalPKR = 10 * 104.8 + 25 * 28;

  let output = `
QUESTION:
Convert Dollars and Riyals into Pakistani Rupees.

LOGIC:
(10 × 104.80) + (25 × 28)

OUTPUT:

US Dollars = 10

Saudi Riyals = 25

Total Currency in PKR = ${totalPKR}
`;

  showResult(output);
  updateProgress();
  showToast("Currency Converted 💱");
}

// =========================
// Q10
// =========================

function showQ10() {
  let number = 10;

  let resultValue = ((number + 5) * 10) / 2;

  let output = `
QUESTION:
Perform arithmetic operations in a single expression.

LOGIC:
((Number + 5) × 10) ÷ 2

OUTPUT:

Number = ${number}

Result = ${resultValue}
`;

  showResult(output);
  updateProgress();
  showToast("Expression Calculated 🧮");
}

// =========================
// Q11
// =========================

function showQ11() {
  let currentYear = 2025;
  let birthYear = 2004;

  let age1 = currentYear - birthYear;
  let age2 = age1 - 1;

  let output = `
QUESTION:
Calculate age using birth year.

LOGIC:
Age = Current Year − Birth Year

OUTPUT:

Current Year = ${currentYear}

Birth Year = ${birthYear}

Possible Ages:

${age2} or ${age1}
`;

  showResult(output);
  updateProgress();
  showToast("Age Calculated 🎂");
}

// =========================
// Q12
// =========================

function showQ12() {
  let radius = 10;
  let pi = 3.142;

  let circumference = 2 * pi * radius;
  let area = pi * radius * radius;

  let output = `
QUESTION:
Calculate circumference and area of a circle.

LOGIC:
Circumference = 2 × π × r
Area = π × r²

OUTPUT:

Radius = ${radius}

Circumference = ${circumference}

Area = ${area}
`;

  showResult(output);
  updateProgress();
  showToast("Geometry Calculated ⭕");
}

// =========================
// Q13
// =========================

function showQ13() {
  let snack = "Chocolate Chip Cookies";
  let currentAge = 21;
  let maxAge = 80;
  let amountPerDay = 2;

  let totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;

  let output = `
QUESTION:
Calculate lifetime snack supply.

LOGIC:
(Max Age − Current Age) × 365 × Amount Per Day

OUTPUT:

Favorite Snack = ${snack}

Current Age = ${currentAge}

Maximum Age = ${maxAge}

Amount Per Day = ${amountPerDay}

Total Snacks Needed = ${totalSnacks}
`;

  showResult(output);
  updateProgress();
  showToast("Lifetime Supply Calculated 🍪");
}
