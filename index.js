// Create an Available Freelancer table. It has Names, occupations, and starting price. 
// The list should update. The Starting prices should be averaged and displayed. 
// New Freelancers should appear every few seconds to the list, and the 

//Define lists of names and occupations
const names = ['Alice', 'Bob', 'Carol', "Emily", "Liam", "Sophia", "Ethan", "Olivia", "Noah", "Ava", "Mason", "Isabella", "Jacob", "Mia", "William", "Amelia", "James", "Charlotte", "Benjamin", "Harper", "Lucas", "Evelyn", "Michael"];
const occupations = ['Writer', 'Teacher', 'Programmer', "Software Developer", "Graphic Designer", "Data Analyst", "Copywriter", "Web Developer", "Digital Marketer", "Project Manager", "UI/UX Designer", "Content Creator", "SEO Specialist", "Mobile App Developer", "Social Media Manager", "Video Editor", "IT Consultant", "Photographer", "Technical Writer", "Front-end Developer", "Back-end Developer", "Network Administrator", "Systems Analyst"];

//Initial Freelancers list
let freelancers = [
  {name: 'Alice', occupation: 'Writer', price: 30},
  {name: 'Bob', occupation: 'Teacher', price: 50}
];

function renderFreelancers(){
  const listElement = document.querySelector('#freelancerList');
  listElement.innerHTML = '';
  freelancers.forEach(freelancer => {
    const div = document.createElement('div');
    div.className = 'freelancer';
    div.textContent = `${freelancer.name}, ${freelancer.occupation}, $${freelancer.price}`;
    listElement.appendChild(div);
  });
  updateAveragePrice();
}

function updateAveragePrice(){
  const totalPrice = freelancers.reduce((accumulator, freelancer) => {
    return accumulator + freelancer.price;
  }, 0);
  const averagePrice = totalPrice / freelancers.length;
  const averagePriceElement = document.querySelector('#averagePrice');

  averagePriceElement.textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
}

function addFreelancer(){
  const newFreelancer = {
    name: names[Math.floor(Math.random() * names.length)],
    occupation: occupations[Math.floor(Math.random() * occupations.length)],
    price: Math.floor(Math.random() * 100) + 20
  };
  freelancers.push(newFreelancer);
  renderFreelancers();

}

renderFreelancers();
setInterval(addFreelancer, 5000);