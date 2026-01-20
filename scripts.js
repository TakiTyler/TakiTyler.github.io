document.addEventListener('DOMContentLoaded', function () {
    find_color_preference();
})

// toggles the burger menu on / off
function mobile_menu_toggle(){
    document.getElementById("header_menu").classList.toggle("active");
    document.getElementById("color_toggle").classList.toggle("active");
}

// checks the user's color preference of light or dark mode
function find_color_preference(){
    const prefers_dark_mode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    console.log(prefers_dark_mode);

    if(prefers_dark_mode){
        console.log("User prefers dark mode");
        localStorage.setItem('color-preference', 'dark');
        set_color_mode('dark');
    }
    else{ // user prefers light mode
        console.log("User prefers light mode");
        localStorage.setItem('color-preference', 'light');
        set_color_mode('light');
    }

    return;
}

// toggles between light and dark mode
function switch_colors(){
    document.getElementById("sun");

    const color_preference = localStorage.getItem('color-preference');

    if(color_preference == 'light'){
        console.log("User switched to dark mode");
        localStorage.setItem('color-preference', 'dark');
        set_color_mode('dark');
    }
    else if(color_preference == 'dark'){
        console.log("User switched to light mode");
        localStorage.setItem('color-preference', 'light');
        set_color_mode('light');
    }

    return;

}

// sets the color scheme for light or dark mode
function set_color_mode(color){

    const root_element = document.documentElement;
    // const computed_styles = getComputedStyle(root_element);
    // const current_color = computed_styles.getPropertyValue('--background');
    // console.log("Background = " + current_color);
    const sun_icon = document.getElementById('sun');
    const moon_icon = document.getElementById('moon');

    if(color == 'light'){
        moon_icon.style.display = 'none';
        sun_icon.style.display = 'inline-block';

        root_element.style.setProperty('--background', '#ffffff');
        root_element.style.setProperty('--surface', '#d9d9d9');
        root_element.style.setProperty('--text', '#121212');
        root_element.style.setProperty('--links', '#242424');
        root_element.style.setProperty('--borders', '#d9d9d9');
    }
    else if(color == 'dark'){
        moon_icon.style.display = 'inline-block';
        sun_icon.style.display = 'none';
        
        root_element.style.setProperty('--background', '#121212');
        root_element.style.setProperty('--surface', '#242424');
        root_element.style.setProperty('--text', '#f2f2f2');
        root_element.style.setProperty('--links', '#d9d9d9');
        root_element.style.setProperty('--borders', '#ffffff1a');
    }
}