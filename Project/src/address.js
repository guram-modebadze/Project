const address_container = document.getElementById("address");

const jsonParse1 = localStorage.getItem("PersonaLock");
const persona2 = JSON.parse(jsonParse1);

console.log(persona2);

const personaFunc1 = () => {
  const personaAdd = document.createElement("div");

  const personInnerHtml = `
  <div class="contact" id="contact">
  <div class="contact-text ">Contact Us If You Find <div class='most-wanted'>${persona2.title}</div></div>
  <div class="contact-form">
    <form action="index.html">
      <div class="user-details">
        <div class="input-box">
          <span class="details">Full Name</span>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div class="input-box">
          <span class="details">Location</span>
          <input type="text" placeholder="Enter your Location" required />
        </div>
        <div class="input-box">
          <span class="details">Phone Number</span>
          <input type="text" placeholder="Enter your number" required />
        </div>
       
        <div class="button" id='buttonArr'>
          <input type="submit" value="Go and Arrest"  />
        </div>
      </div>
    </form>
  </div>
</div>
  `;

  personaAdd.innerHTML = personInnerHtml;
  address_container.appendChild(personaAdd);
};

personaFunc1();


