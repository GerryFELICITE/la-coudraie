document.addEventListener("DOMContentLoaded", () => {
  fetch('temoignages.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('testimonial-list');
      data.forEach(t => {
        const div = document.createElement('div');
        div.className = 'testimonial';
        div.innerHTML = `
          <p class="message">“${t.message}”</p>
          <p class="author">— ${t.author}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Erreur lors du chargement des témoignages :", error);
    });
});