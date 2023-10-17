// Create an array to store contributions (dummy contribution)
const contributions = [
  {
    name: "Faeez",
    image: "dummy.jpg",
    department: "Software Engineering",
    favoriteTech: "TypeScript",
  },
  
    {
      name: "Mudassir Hussain",
      image: "/dummy.jpg",
      department: "Information Technology",
      favoriteTech: "TypeScript",
    },
  
];

const contributionsContainer = document.getElementById("contributions");

contributions.forEach((contribution) => {
  const card = document.createElement("div");
  card.classList.add("card");

  // Populate the card with contribution data
  const image = document.createElement("img");
  image.src = contribution.image;
  image.alt = "Student Image";

  const name = document.createElement("h2");
  name.textContent = contribution.name;

  const department = document.createElement("p");
  department.textContent = contribution.department;

  const favoriteTech = document.createElement("p");
  favoriteTech.textContent = `Favorite Language: ${contribution.favoriteTech}`;

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(department);
  card.appendChild(favoriteTech);

  contributionsContainer.appendChild(card);
});
