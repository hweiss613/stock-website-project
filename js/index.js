

//const userSearch = document.querySelector("userSearch");//

/* const searchInput = document.querySelector(`.input-field`);

searchInput.addEventListener(`input`,event => {
  searchInput.value === `` ? results.innerHTML = `` : true;
}) */
//document.querySelector('searchTxt').searchText;//


document.getElementById("button").addEventListener("click", getStocks);




function getStocks () {
    searchTxt = document.getElementById("searchTxt").value;
    const url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${searchTxt}&limit=10&exchange=NASDAQ`
    fetch(url)
        .then((response) => response.json())
          .then((data) => {
              data.forEach((item) => {
                 console.log(item)      
                 const newDiv = document.createElement("div");
                 const newContent = document.createTextNode(`${item.name}`);
                 newDiv.appendChild(newContent);
                 document.getElementById("div1").appendChild(newDiv);
              })
        })
    }

 /*  for (let i = 0; i <= getStocks.length - 1; i++) {
        const e = document.createElement('div');
        document.body.appendChild(e);  
        e.innerHTML = '<a> href=${companyUrl};  
      }

      const loading = document.createElement('div'); {
        <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      }
  */