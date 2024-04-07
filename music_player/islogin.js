let loginNav = document.getElementById('login-nav');
let myplaylistNav = document.getElementById('myplaylist-nav');
let aboutNav = document.getElementById('about-nav');
let contactNav = document.getElementById('contact-nav');
let homeNav = document.getElementById('home-nav');
if(sessionStorage.getItem('login') != 'true')
{
    loginNav.innerText = 'Login';
    loginNav.href = 'register.html'
    myplaylistNav.href = '#'
    aboutNav.href = '#'
    contactNav.href = '#'
}
else{

    loginNav.innerText = 'Logout';
    loginNav.href = '#'
    myplaylistNav.href = 'myplaylist.html'
    aboutNav.href = 'about.html'
    contactNav.href = '#'
    
   
}


if(loginNav.innerText == 'Logout'){
    loginNav.addEventListener('click',()=>{
        sessionStorage.removeItem('login')
        window.location.href = 'register.html'
    })
}
console.log(document.title)
switch (document.title) {
    case 'My-Playlist':
        myplaylistNav.style.color='red'
        break;
    case 'About':
        aboutNav.style.color='red'
        break;
    case 'Home':
        homeNav.style.color='red'
        break;
    case 'Contact':
        contactNav.style.color='red'
        break;
    default:
        break;
}