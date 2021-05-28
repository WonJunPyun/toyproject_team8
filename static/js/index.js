
// dark mode
const btn = document.querySelector('.dark__mode');
const currentTheme = localStorage.getItem('theme');

if (currentTheme == 'dark') {
    document.body.classList.add("dark-theme");
}

btn.addEventListener('click', function() {
    document.body.classList.toggle("dark-theme");
    let theme = 'light';
    if (document.body.classList.contains('dark-theme')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
})


// fontAwesome icon change
btn.onclick = function() {
    btn.classList.toggle('active');

    const iconSun = document.querySelector('.sun');
    const iconMoon = document.querySelector('.moon');
    iconSun.style.justifyContent = 'center';
    iconMoon.style.justifyContent = 'center';

    if (iconMoon.style.display == 'flex') {
        iconSun.style.display = 'flex';
        iconMoon.style.display = 'none';
    } else {
        iconMoon.style.display = 'flex';
        iconSun.style.display = 'none';
    }
}