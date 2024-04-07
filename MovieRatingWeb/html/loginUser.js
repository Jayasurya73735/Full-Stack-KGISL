let loginUser = sessionStorage.getItem('loginUser')
if(loginUser)
{
    document.getElementById('loginUser').innerText=loginUser
}
else{
    document.getElementById('loginUser').innerText="User"
}

let logout = () => {
    sessionStorage.removeItem('isLogin',false)
    window.location.href = '../home.html'
}