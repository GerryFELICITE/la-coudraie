document.addEventListener("DOMContentLoaded", () => {
  // Fonction pour charger les événements à partir du CSV
  const loadEventsFromCSV = async () => {
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vR53ayRUqzOjrzdXr4_3jfo7vFBgX7O4Q-7pn8WgxwMhKuD8B9XbbypYLDIam9RRryfAnfSg39TJDLD/pub?output=csv');
    const csvText = await response.text();
    const rows = csvText.split('\n');

    // Ignorer la première ligne (entêtes)
    const events = rows.slice(1).map(row => {
      const [startDate, endDate, title] = row.split(',');
      return {
        title: title.trim(),
        start: startDate.trim(),
        end: endDate.trim(),
        color: '#0275d8'  // Tu peux ajouter une logique pour définir des couleurs dynamiquement
      };
    });

    return events;
  };

  // Initialisation du calendrier FullCalendar
  loadEventsFromCSV().then(events => {
    $('#calendar').fullCalendar({
      locale: 'fr',
      buttonText: {
          today: 'Aujourd’hui'
        },
      events: events,
      eventRender: function() {
        document.getElementById('dispos-message').style.display = 'none';
      }
    });
  });
});
