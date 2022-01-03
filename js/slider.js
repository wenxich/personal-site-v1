const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('theme', 'dark');
        headerChange();
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        localStorage.setItem('theme', 'light');
        headerChange();
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

function headerChange() {
  if(localStorage.getItem('theme') === 'dark') {
    document.getElementById("headerart").src = "files/headerdark.png";
    document.getElementById("headerartmobile").src = "files/headerdark.png";
  } else {
    document.getElementById("headerart").src = "files/header.png";
    document.getElementById("headerartmobile").src = "files/header.png";
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);