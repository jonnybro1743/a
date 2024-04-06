
const  accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWI1ZDQ4ZmYzMjM5M2VmMjAyZTYyNTFlYzM5ZDhkYiIsInN1YiI6IjY1YjRjMThhMTI0MjVjMDE0NzQ4MDk2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xrBR_TjWDi6PW_08tp8d3bn9gEUdhP1Ly1xEaz5kRJY';
//const accessToken = '75b5d48ff32393ef202e6251ec39d8db';
var data1;
var data2;
var data3;
var data5;
var data6;
var i=0;

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  }
};

 // Example items per page
var data1;
let recommendationsData;

let page = 1; // Example page number
const perPage = 14;

async function paginationnext(character) {
  page++;

  if (page > 500) {
    // Reset page to 1 if it exceeds the maximum value
    page = 1;
  }

  for (let i = 0; i < 14; i++) {
    deleteData(i);
  }
  
 
  switch(character) {
    case 'A':
      fetchEndpoint2(page);
      for (let i = 0; i < 14; i++) {
        deleteData(i,'A');
      }
      break;
    case 'B':
      fetchEndpoint3(page);
      for (let i = 0; i < 14; i++) {
        deleteData(i,'B');
      }
      break;
    case 'C':
      fetchEndpoint5(page);
      for (let i = 0; i < 14; i++) {
        deleteData(i,'C');
      }
      break;
    case 'G':
      fetchEndpoint4(page);
      for (let i = 0; i < 14; i++) {
        deleteData(i,'G');
      }
    
    default:
      console.error('Invalid character:', character);
      break;
  
  }
  
}

async function paginationprev(character) {
  page--;
  if (page > 500) {
    // Reset page to 1 if it exceeds the maximum value
    page = 1;
  }

  // Clear existing data
  
  switch(character) {
    case 'A':
      fetchEndpoint2(page);
      for (let i = 0; i < 14; i++) {
        deleteData(i,'A');
      }
      break;
    case 'B':
      fetchEndpoint3(page);
      for (let i = 0; i < 14; i++) {
        deleteData(i,'B');
      }
      break;
    case 'C':
      fetchEndpoint5(page);
      for (let i = 0; i < 14; i++) {
        deleteData(i,'C');
      }
      break;
    case 'G':
      fetchEndpoint4(page);
      for (let i = 0; i < 14; i++) {
        deleteData(i,'G');
      }
  
    default:
      console.error('Invalid character:', character);
      break;
  }
  
}

 function deleteData(i,character) {
  // Set variables to undefined
  let name = undefined;
  let rating = undefined;
  let overview = undefined;
  let posterPath = undefined;
  let backdrop_Path = undefined;
  let id = undefined;

  // Clear the content of the imageContainer
  let imageContainer = document.getElementById(character + i);
  let imageContainerD=document.getElementById('D1');
  if (imageContainer) {
    imageContainer.innerHTML = ''; // Clear inner HTML
  } /* if (imageContainerD) {
    imageContainerD.innerHTML = ''; // Clear inner HTML
  }*/
}
async function fetchEndpoint1(page) {
  const endpoint1 = `https://api.themoviedb.org/3/genre/movie/list?page=${page}&per_page=${perPage}`;
  fetch(endpoint1, options)
    .then(res => res.json())
    .then(data => {
      console.log('Data from endpoint1:', data);
      data1 = data;
      for (let i = 0; i < 21; i++) {
        readDataGenre(i);
      }
    })
    .catch(err => {
      console.error('Error fetching data from endpoint1:', err);
    });
}

async function fetchEndpoint4(page,id) {
  const endpoint4 = `https://api.themoviedb.org/3/movie/${id}/recommendations?page=${page}&per_page=${perPage}`;
  fetch(endpoint4, options)
    .then(res => res.json())
    .then(data => {
      recommendationsData = data;
      for (let i = 0; i < 20; i++) {
        displayRecommendation(i);
      }
    })
    .catch(err => {
      console.error('Error fetching data from endpoint4:', err);
    });
}
async function fetchEndpoint6(page) {
  const endpoint6 = `https://api.themoviedb.org/3/movie/200/recommendations?page=${page}&per_page=${perPage}`;
  fetch(endpoint6, options)
    .then(res => res.json())
    .then(data => {
      data6 = data;
  
  readDataD(i);
    })
    .catch(err => {
      console.error('Error fetching data from endpoint6:', err);
    });
}
async function fetchEndpoint5(page) {
  const endpoint5 = `https://api.themoviedb.org/3/movie/100/recommendations?page=${page}&per_page=${perPage}`;
  fetch(endpoint5, options)
    .then(res => res.json())
    .then(data => {
      data5 = data;
      for (let i = 0; i <= 13; i++) {
        readData_data5(i);
      }
    })
    .catch(err => {
      console.error('Error fetching data from endpoint5:', err);
    });
}

async function fetchEndpoint2(page) {
  const endpoint2 = `https://api.themoviedb.org/3/movie/popular?page=${page}&per_page=${perPage}`;
  fetch(endpoint2, options)
    .then(res => res.json())
    .then(data => {
      console.log('Data from endpoint2:', data);
      data2 = data;
      for (let i = 0; i <= 13; i++) {
        readData(i);
      }
      
    })
    .catch(err => {
      console.error('Error fetching data from endpoint2:', err);
    });
}

async function fetchEndpoint3(page) {
  const endpoint3 = `https://api.themoviedb.org/3/movie/top_rated?page=${page}&per_page=${perPage}`;
  fetch(endpoint3, options)
    .then(res => res.json())
    .then(data => {
      data3 = data;
      for (let i = 0; i <= 13; i++) {
        readData_data3(i);
      }
    })
    .catch(err => {
      console.error('Error fetching data from endpoint3:', err);
    });
}


fetchEndpoint1(page);
fetchEndpoint2(page);
fetchEndpoint3(page);
fetchEndpoint4(page,11);
fetchEndpoint5(page);
fetchEndpoint6(page);
async function paginationnextD(i,D){
  i=1;
  deleteData();
fetchEndpoint6(1,i++)
 }