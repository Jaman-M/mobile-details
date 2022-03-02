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