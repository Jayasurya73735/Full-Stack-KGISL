const topMovieBox  = document.getElementById('topMovieBox')
const MainRightBox  = document.getElementById('MainRightBox')
const moreWatchedMovieBox  = document.getElementById('moreWatchedMovieBox')
const blockBusterMovieBox  = document.getElementById('blockBusterMovieBox')

let ExistMovieData = JSON.parse(localStorage.getItem('ExistMovieDetails'))




let topMovieDetails = () =>{
  topMovieBox.innerHTML=''
  moreWatchedMovieBox.innerHTML=''
  blockBusterMovieBox.innerHTML=''
   ExistMovieData.map((data,index)=>{
        
        if(data.catagory=='Top Rated'){
          console.log('toprated'+data)
          topMovieBox.innerHTML+=`
            <div class="movieBox card" onclick="SingleMoviePage(${index})">
                <div class="movieImg">
                  <img src="${data.image}" alt="">
                </div>
                <div class="movieDetail">
                  <span class="movieName">${data.mname}</span>
                  <h4 class="movieRating"><i class="bi bi-star-fill"></i><span class="movieRateValue">${data.mrating}</span></h4>
                </div>
            </div>
        `
        }
        if(data.catagory=='Top Movies'){
          console.log('topmovies'+data)
          moreWatchedMovieBox.innerHTML+=`
              <div class="movieBox card" onclick="SingleMoviePage(${index})">
                  <div class="movieImg">
                    <img src="${data.image}" alt="">
                  </div>
                  <div class="movieDetail">
                    <span class="movieName">${data.mname}</span>
                    <h4 class="movieRating"><i class="bi bi-star-fill"></i><span class="movieRateValue">${data.mrating}</span></h4>
                  </div>
              </div>
          `
          }
          if(data.catagory=='blockBuster'){
            console.log('tblockbuseter'+data)
            blockBusterMovieBox.innerHTML+=`
                <div class="movieBox card" onclick="SingleMoviePage(${index})">
                    <div class="movieImg">
                      <img src="${data.image}" alt="">
                    </div>
                    <div class="movieDetail">
                      <span class="movieName">${data.mname}</span>
                      <h4 class="movieRating"><i class="bi bi-star-fill"></i><span class="movieRateValue">${data.mrating}</span></h4>
                    </div>
                </div>
            `
            }
    })
}
topMovieDetails(topMovieBox)


// showMovieDetails(moreWatchedMovieBox)
// showMovieDetails(blockBusterMovieBox)

let SingleMoviePage = (index)=>
{
    console.log(index)
    window.location.href = `singleMovieShow.html?i=${index}`
}






