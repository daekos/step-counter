let stepCount = 0;
const stepsElement = document.getElementById('steps');
const distanceElement = document.getElementById('distance');
const achievementsElement = document.getElementById('achievements');

function updateSteps() {
    stepCount++;
    stepsElement.textContent = `Шаги: ${stepCount}`;
    const distance = stepCount * 0.762; // средняя длина шага в метрах
    distanceElement.textContent = `Расстояние: ${distance.toFixed(2)} м`;
    checkAchievements(distance);
}

function checkAchievements(distance) {
    const achievements = [
        { name: 'Пересечь Ла-Манш', distance: 33000 },
        { name: 'Подняться на Эльбрус', distance: 5642 },
        { name: 'Подняться на Эверест', distance: 8848 },
        { name: 'До Луны и обратно', distance: 7
