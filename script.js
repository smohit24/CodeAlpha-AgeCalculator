function calculateAge() {
  const day = parseInt(document.getElementById("day").value, 10);
  const month = parseInt(document.getElementById("month").value, 10);
  const year = parseInt(document.getElementById("year").value, 10);

  if (!day || !month || !year) {
    document.getElementById("age-result").innerText =
      "Please fill out all fields.";
    document.getElementById("watermark").style.display = "none"; // Hide watermark if fields are missing
    return;
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // days in the previous month
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  const resultText = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
  document.getElementById("age-result").innerText = resultText;
  document.getElementById("watermark").innerText = `${ageYears} years`;
  document.getElementById("watermark").style.display = "block"; // Show watermark
}
