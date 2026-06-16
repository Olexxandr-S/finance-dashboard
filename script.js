const API =
"https://YOUR-WORKER.workers.dev";

loadData();

async function loadData() {

 const response =
 await fetch(API);

 const data =
 await response.json();

 const accounts =
 data.accounts;

 let html = "";

 accounts.forEach(acc => {

   html += `
   <div class="account">

      <div>
      ${acc.type}
      </div>

      <div>
      ${(acc.balance / 100).toFixed(2)} ₴
      </div>

   </div>
   `;
 });

 document
 .getElementById("accounts")
 .innerHTML = html;
}
