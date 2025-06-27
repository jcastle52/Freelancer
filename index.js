/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const $app = document.querySelector("#app");

const CreateFreelancer = () => {
  const person = {
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
    occupation: OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)],
    rate: Math.floor(
      Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min) + PRICE_RANGE.min
    ),
  };
  return person;
};

const CreateArrFreelancers = () => {
  const arrFreelancers = [];
  for (let i = 0; i < NUM_FREELANCERS; i++) {
    arrFreelancers.push(CreateFreelancer());
  }
  return arrFreelancers;
};

const arrFreelancers = CreateArrFreelancers();

const GetAvgRate = (people) => {
  let sumOfRates = 0;

  people.forEach((person, index) => {
    sumOfRates = sumOfRates + person.rate;
  });
  return sumOfRates / NUM_FREELANCERS;
};

const avgRate = GetAvgRate(arrFreelancers);

const HeadingComponent = () => {
  const $heading = document.createElement("h1");
  $heading.textContent = "Freelancer Forum";
  $app.append($heading);
};

const AverageRateComponent = () => {
  const $avg = document.createElement("h2");
  $avg.textContent = "The average rate is $" + avgRate;
  $app.append($avg);
};

const CreateRow = (person, $table) => {
  const $tr = document.createElement("tr");
  const $name = document.createElement("td");
  const $occupation = document.createElement("td");
  const $rate = document.createElement("td");

  $name.textContent = person.name;
  $occupation.textContent = person.occupation;
  $rate.textContent = "$" + person.rate;

  $tr.append($name);
  $tr.append($occupation);
  $tr.append($rate);
  $table.append($tr);
  $app.append($table);
};

const FreelancerComponent = () => {
  const $table = document.createElement("table");
  $table.innerHTML = `
    <tr>
    <th>Name</th>
    <th>Occupation</th>
    <th>Rate</th>
    </tr>
    `;

  for (let i = 0; i < NUM_FREELANCERS; i++) {
    CreateRow(arrFreelancers[i], $table);
  }
};

const Render = () => {
  HeadingComponent();
  AverageRateComponent();
  FreelancerComponent();
};

Render();
