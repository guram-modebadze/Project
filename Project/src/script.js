const person_container = document.getElementById("main_container");

const count = 3;

const fetchPerson = async () => {
  for (let i = 0; i <= count; i++) {
    await getPerson(i);
  }
};

const getPerson = async (id) => {
  const url = `https://api.fbi.gov/wanted/v1/list?page=${id + 1}`;
  const res = await fetch(url);
  const data = await res.json();

  createMissingCard(data);
};

const createMissingCard = (per) => {
  // console.log(per.items);
  for (let i = 1; i < 20; i++) {
    const personEl = document.createElement("div");

    personEl.addEventListener("click", () => {
      const json = JSON.stringify(per.items[i]);
      localStorage.setItem("Persona", json);
      window.location.href = "./personInfo.html";
      console.log(per.items[i]);
    });
    personEl.classList.add("person");

    const personInnerHtml = `
    <div class="person-inner">
    <span class="number">#${per.items[i].uid}</span>
        <img class="main-image" src="${per.items[i].images[0].large}" alt="No photo Found">
        <span class="name">${per.items[i].title}</span>
        </div>
            `;
    personEl.innerHTML = personInnerHtml;
    person_container?.appendChild(personEl);
  }
};

fetchPerson();
