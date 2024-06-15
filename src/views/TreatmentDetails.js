export function TreatmentDetails(treatmentId) {
  const section = document.createElement("section");
  section.classList.add('detail', 'treatment')

  fetch(`http://localhost:3000/treatments/${treatmentId}`)
    .then((response) => response.json())
    .then((treatment) => {
      section.innerHTML = `
   <h2 class="header">${treatment.name}</h2>
   <p>Cena: ${treatment.price.toFixed(2)} PLN</p>
   <p>Obszar zabiegu: ${treatment.area} 💆‍♀️ </p>
   <p>Czas zabiegu: ${treatment.time} miunutes </p>
   `;
    });

  return section;
}
