function updateGreeting() {
    const greetingText = document.querySelector('.right_greeting-text');
    const now = new Date();
    const hour = now.getHours();

    let greeting = '';

    if (hour >= 5 && hour < 12) {
        greeting = 'Good morning!';
    } else if (hour >= 12 && hour < 17) {
        greeting = 'Good noon!';
    } else if (hour >= 17 && hour < 21) {
        greeting = 'Good evening!';
    } else {
        greeting = 'Good night!';
    }

    greetingText.textContent = greeting;
}

// Вызываем сразу при загрузке
updateGreeting();