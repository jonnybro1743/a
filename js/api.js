const baseImageUrl = 'https://image.tmdb.org/t/p/';
//  const imageSize = 'original';
const imageSize = 'w185';

async function readDataD(i) {
  let name = data6.results[i].title;
  let rating = data6.results[i].vote_average;
  let overview = data6.results[i].overview;
if(overview.length>50){
   overview =overview.substring(0, 175) + '...';
  
}
  // Define base image URL and size
 // const baseImageUrl = 'https://image.tmdb.org/t/p'; // Base URL for TMDb images
  const imageSize = 'original'; // Choose the image size you prefer, e.g., 'w500', 'original'

  let backdropPath = data6.results[i].backdrop_path;
  let id = data6.results[i].id;
  let maindisplay = document.querySelector(".display");
  let display = document.querySelector('.maindisplay');

if (backdropPath) {
  const fullImageUrl = `${baseImageUrl}/${imageSize}/${backdropPath}`;
  display.style.background = `  radial-gradient(circle at 100% 60%, rgba(5, 5, 5, 0) 0%, rgba(0, 0, 0, 0.9) 100%),url(${fullImageUrl})`;
  display.style.backgroundSize = 'cover';
  display.style.backgroundRepeat = 'no-repeat';
}

  console.log(backdropPath);

  let contentElement = document.createElement('div');
  contentElement.innerHTML = `<h2>${name}</h2><p style="color:yellow;">${rating}</p>${overview}`;
  maindisplay.appendChild(contentElement);

}
async function readData(i) {
  try {
    if (data2 && data2.results && data2.results.length >= 0) {
      let name = data2.results[i].title;
      let rating = data2.results[i].vote_average;
      let overview = data2.results[i].overview;
      let posterPath = data2.results[i].poster_path;
      let backdrop_Path=data2.results[i].backdrop_Path;
      let id=data2.results[i].id;
    // console.log(data2);
      let imageContainer = document.getElementById("A" + i);
      const fullImageUrl = `${baseImageUrl}${imageSize}/${posterPath}`;
      imageContainer.style.background = `url(${fullImageUrl})`;
     
rating=rating.toFixed(1);
      let contentElement = document.createElement('div');
   //   contentElement.innerHTML = `<p>${rating}</p>`;
      imageContainer.appendChild(contentElement);
    }
  } catch (error) {
    console.error('Error in readData:', error);
  }
}
async function readData_data3(i) {
  try {
    if (data3 && data3.results && data3.results.length > 0) {
      let name = data3.results[i].title;
      let id=data3.results[i].id;
      let rating = data3.results[i].vote_average;
      let overview = data3.results[i].overview;
      let posterPath = data3.results[i].poster_path;
      let imageContainerB = document.getElementById("B" + i);

      if (imageContainerB) {
        const fullImageUrl = `${baseImageUrl}${imageSize}/${posterPath}`;
        
        imageContainerB.style.background = `url(${fullImageUrl})`;
rating=rating.toFixed(1);
        let contentElementB = document.createElement('div');
       // contentElementB.innerHTML = `<p>${rating}</p>`;
        imageContainerB.appendChild(contentElementB);
      } else {
        console.error('Image container B not found for index:', i);
      }
    }
  } catch (error) {
    console.error('Error in readData_data3:', error);
  }
}
async function readData_data5(i) {
  try {
    if (data5 && data5.results && data5.results.length > 0) {
      let name = data5.results[i].title;
      let id = data5.results[i].id;
      let rating = data5.results[i].vote_average;
      let overview = data5.results[i].overview;
      let posterPath = data5.results[i].poster_path;
      let imageContainerC = document.getElementById("C" + i);

      if (imageContainerC) {
        const fullImageUrl = `${baseImageUrl}${imageSize}/${posterPath}`;
        
        imageContainerC.style.background = `url(${fullImageUrl})`;
        rating = rating.toFixed(1);

        let contentElementC = document.createElement('div');
       // contentElementC.innerHTML = `<p>${rating}</p>`;
        imageContainerC.appendChild(contentElementC);
      } else {
        console.error('Image container c not found for index:', i);
      }
    }
  } catch (error) {
    console.error('Error in readData_data5:', error);
  }
}

//let dataA14Called = false;

document.addEventListener('DOMContentLoaded', function () {
// if (!dataA14Called) {
  //  readDataA14(14);
   // dataA14Called = true;
  
  //fetchMovies();
});

