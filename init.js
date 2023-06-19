
window.onload = function() {
    const initPerson = personGenerator.getPerson();
    updatePersonDetails(initPerson);

    document.getElementById('generateNewPerson').addEventListener('click', function() {
        const newPerson = personGenerator.getPerson();
        updatePersonDetails(newPerson);
    });
}

function updatePersonDetails(person) {
    document.getElementById('genderOutput').innerText = person.gender;
    document.getElementById('firstNameOutput').innerText = person.firstName;
    document.getElementById('surnameOutput').innerText = person.surname;
    document.getElementById('birthYearOutput').innerText = person.birthDate;
    document.getElementById('professionOutput').innerText = person.profession;
    document.getElementById('patronymicNameOutput').innerText = person.patronymic;
};

function clearPerson() {
    document.getElementById('surnameOutput').textContent = '';
    document.getElementById('firstNameOutput').textContent = '';
    document.getElementById('genderOutput').textContent = '';
    document.getElementById('birthYearOutput').textContent = '';
    document.getElementById('professionOutput').textContent = '';
    document.getElementById('patronymicNameOutput').textContent = '';
}