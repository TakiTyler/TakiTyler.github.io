let modal = null;
let large_image = null;

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

    const color_preference = localStorage.getItem('color-preference');

    if(color_preference == 'dark'){
        console.log("User prefers dark mode");
        localStorage.setItem('color-preference', 'dark');
        set_color_mode('dark');
        return;
    }
    else if(color_preference == 'light'){
        console.log("User prefers light mode");
        localStorage.setItem('color-preference', 'light');
        set_color_mode('light');
        return;
    }

    // everything below runs if the user hasn't set their color preference before

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
        root_element.style.setProperty('--surface', '#f0f0f0');
        root_element.style.setProperty('--inner-surface', '#e6e6e6');
        root_element.style.setProperty('--inner-inner-surface', '#dbdbdb');
        root_element.style.setProperty('--text', '#0f0f0f');
        root_element.style.setProperty('--links', '#1f1f1f');
        root_element.style.setProperty('--borders', '#0000001a');
        root_element.style.setProperty('--blue', '#6687e7');
        root_element.style.setProperty('--blue-light', '#8da5ed');
        root_element.style.setProperty('--blue-lightest', '#b3c3f3');
        root_element.style.setProperty('--purple', '#e766e0');
        root_element.style.setProperty('--purple-light', '#ed8de8');
        root_element.style.setProperty('--purple-lightest', '#f3b3ef');
    }
    else if(color == 'dark'){
        moon_icon.style.display = 'inline-block';
        sun_icon.style.display = 'none';

        root_element.style.setProperty('--background', '#0f0f0f');
        root_element.style.setProperty('--surface', '#1f1f1f');
        root_element.style.setProperty('--inner-surface', '#2e2e2e');
        root_element.style.setProperty('--inner-inner-surface', '#3d3d3d');
        root_element.style.setProperty('--text', '#f2f2f2');
        root_element.style.setProperty('--links', '#d9d9d9');
        root_element.style.setProperty('--borders', '#ffffff1a');
        root_element.style.setProperty('--blue', '#4169e1');
        root_element.style.setProperty('--blue-light', '#6687e7');
        root_element.style.setProperty('--blue-lightest', '#8da5ed');
        root_element.style.setProperty('--purple', '#e141d9');
        root_element.style.setProperty('--purple-light', '#e766e0');
        root_element.style.setProperty('--purple-lightest', '#ed8de8');
    }
}

// shows more details on my projects / work experience
function toggle_more_details(div_id){
    // document.getElementById(div_id).classList.toggle("active");
    // document.getElementById(div_id + "-button").classList.toggle("active");
    modal = document.getElementById(div_id + "-modal");
    modal.style.display = "block";
}

function exit_modal(){
    modal.style.display = "none";
}

function view_image(img_id){
    large_image = document.getElementById(img_id);
    large_image.style.display = "flex";
}

function remove_image(){
    large_image.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == large_image){
    large_image.style.display = "none";
  }
}