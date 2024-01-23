const container = document.querySelector(".container");
const button = document.querySelector(".btn");

  fetch("https://api.adviceslip.com/advice")
  .then((response) => {
      if(!response.ok){
          throw new Error("error cixdi.");
      }else{
          console.log("error cixmadi.");
          return response.json();
  }
  }).then((data) => {  
      if(data === {}){
          throw new Error("data ici bos cixdi.")
      }
      else{
      console.log(data.slip)
      const html = `<p class="advice-header">Advice:#${data.slip.id}</p>
      <div class="advice">${data.slip.advice}</div>
      <svg class="svg" width="444" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"></path>
                <g transform="translate(212)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3"></rect>
                  <rect x="14" width="6" height="16" rx="3"></rect>
                </g>
              </g>
            </svg>
            <button class="btn">
              <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"></path>
              </svg>
            </button>`;
      
      container.insertAdjacentHTML("beforeend",html);
  }
  });

    

//!click addeventlisteneri hara elave edim
//!containerin olcusu advice olcusune gore nece edim ki deyissin
//!butona klik edende ne edimki isiqlansin
//!advice headerin fontu kicilmir