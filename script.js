function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.width = circle.style.height = `${Math.random() * 100}px`;
    circle.style.top = `${Math.random() * window.innerHeight}px`;
    circle.style.left = `${Math.random() * window.innerWidth}px`;
    circle.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;
    return circle;
}

function animateCircles() {
    const animationContainer = document.getElementById('animation-container');
    const numberOfCircles = 30; // Adjust the number of circles as needed

    for (let i = 0; i < numberOfCircles; i++) {
        const circle = createCircle();
        animationContainer.appendChild(circle);

        setTimeout(() => {
            circle.remove(); // Remove the circle after its animation
        }, 4000); // Should match the animation duration
    }
}

window.addEventListener('load', function() {
    animateCircles();

    setTimeout(function() {
        document.getElementById('animation-container').style.display = 'none';
        const mainContent = document.getElementById('main-content');
        mainContent.style.display = 'block';
        mainContent.style.opacity = 1;
    }, 5000); // Adjust time as needed, should be longer than circle animation
});
