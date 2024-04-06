

async function displayRecommendation(i) {
  try {
    if (recommendationsData && recommendationsData.results && recommendationsData.results.length > 0) {
      let name = recommendationsData.results[i].title;
      let rating = recommendationsData.results[i].vote_average;
      let overview = recommendationsData.results[i].overview;
      let posterPath = recommendationsData.results[i].poster_path;
      let id=recommendationsData.results[i].id;
      let imageContainerC = document.getElementById("G" + i);

      if (imageContainerC) {
        const baseImageUrl = 'https://image.tmdb.org/t/p/';
        const imageSize = 'w185';
        const fullImageUrl = `${baseImageUrl}${imageSize}/${posterPath}`;

        imageContainerC.style.background = `url(${fullImageUrl})`;
        imageContainerC.style.backgroundSize = 'cover';
        imageContainerC.style.backgroundRepeat = 'no-repeat';
        imageContainerC.style.width = '185px';
        imageContainerC.style.height = '240px';

       

        
      } else {
        console.error(`Element with ID "G${i}" not found.`);
      }
    } else if (recommendationsData && !recommendationsData.results) {
      console.error('No results property in recommendationsData:', recommendationsData);
    } else {
      console.error('Invalid recommendationsData structure:', recommendationsData);
    }
  } catch (error) {
    console.error('Error in displayRecommendation:', error);
  }
}
async function readDataGenre(i){
try {
  if (data1 && data1.genres && data1.genres.length >= 0) {
    let name = data1.genres[i].name;
    let id = data1.genres[i].id;
   // console.log(id);
    let generalContainer = document.querySelector('.genre');
    let contentElement = document.createElement('div');
    contentElement.innerHTML = `
    <h2 class="genrename" onclick='fetchEndpoint4(${1},${id})'>${name}</h2>
`;


generalContainer.appendChild(contentElement);

  } else if (data1 && !data1.genres) {
    console.error('No genres property in data1:', data1);
  } else {
    console.error('Invalid data1 structure:', data1);
  }
} catch (error) {
  console.error('Error in readDataGenre:', error);
}
}
