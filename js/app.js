const searchMobile = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    //clear data
    searchField.value = '';
    //load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
}

//getting result after search
const displaySearchResult =data => {
    // console.log(data)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    data.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card h-100">
            <img src="${data.image}" class="card-img-top w-50 mx-auto p-2" alt="...">
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-center">Mobile Name: ${data.phone_name}</h5>
              <h4 class="card-title d-flex justify-content-center">Brand: ${data.brand}</h4>
              <p class="card-text d-flex justify-content-center">
              <button type="button" class="btn btn-outline-primary" onclick="loadMobileDetail('${data.slug}')">Explore...</button>
              </p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

// get phone details 
const loadMobileDetail = id => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/phone/${id}`

    fetch(url)
    .then(response => response.json())
    .then(data => displayMobileDetail(data.data))
};

//mobile details info 

const displayMobileDetail = data => {
    console.log(data);
    const mobileDetails = document.getElementById('mobile-details');

    mobileDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =`
    <img src="${data.image}" class="card-img-top p-5" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p>${data.releaseDate || 'No release Date found'}</p>
              <p>Display Size: ${data.mainFeatures.displaySize || 'No found'}</p>
              <p>Memory: ${data.mainFeatures.memory || 'No found'}</p>
              <p>Chip-set: ${data.mainFeatures.chipSet || 'No found'}</p>
              <hr>
              <h5>Sensors: </h5><p>${data.mainFeatures?.sensors.join(", ") || 'No found'}
              
              <hr>
              <hr>
              <h5>Others: </h5>
              <p>WLAN: ${data?.others?.WLAN || 'No found'}
              <p>Bluetooth: ${data?.others?.Bluetooth || 'No found'}
              <p>GPS: ${data?.others?.GPS || 'No found'}
              <p>NFC: ${data?.others?.NFC || 'No found'}
              <p>Radio: ${data?.others?.Radio || 'No found'}
              <p>USB: ${data?.others?.USB || 'No found'} <br>

              <a href="#" class="btn btn-primary ">Buy Now</a>
            </div>
    `;
    mobileDetails.appendChild(div);
}