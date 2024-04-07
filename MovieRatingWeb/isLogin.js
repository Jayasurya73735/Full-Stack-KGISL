let IsLogin = sessionStorage.getItem('isLogin')
      const dashboardLink = document.getElementById('dashboardLink')
      const loginId = document.getElementById('loginId')
      if(IsLogin){
        dashboardLink.href='./html/dashboard.html'
        loginId.innerText="Logout"
        loginId.setAttribute('onclick','logout()')
      }

let logout = () =>{    
  console.log('logout')
    sessionStorage.removeItem('isLogin')
    window.location.href='./html/login (1).html'
}