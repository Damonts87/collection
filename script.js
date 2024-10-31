let athletes = [];

const athleteForm = document.getElementById('athleteForm');
const athleteTableBody = document.querySelector('#athleteTable tbody');

function updateTable() {
    athleteTableBody.innerHTML = '';

    athletes.forEach(athlete => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${athlete.name}</td>
            <td>${athlete.position}</td>
            <td>${athlete.team}</td>
            <td>${athlete.sport}</td>
        `;
        athleteTableBody.appendChild(row);
    });
}

athleteForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const team = document.getElementById('team').value;
    const sport = document.getElementById('sport').value;

    const newAthlete = {
        name: name,
        position: position,
        team: team,
        sport: sport
    };
    athletes.push(newAthlete);

    athleteForm.reset();

    updateTable();
});
