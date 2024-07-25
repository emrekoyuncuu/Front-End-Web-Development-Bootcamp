// Menu data array
const menu = [
  {
      id: 1,
      title: "Sushi Deluxe Platter",
      category: "Japan",
      price: 24.99,
      img: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
      desc: `An exquisite assortment of fresh nigiri and maki rolls, featuring the finest cuts of fish and seasonal ingredients.`,
  },
  {
      id: 2,
      title: "Pad Thai Supreme",
      category: "Thailand",
      price: 16.99,
      img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg",
      desc: `Wok-tossed rice noodles with succulent shrimp, tofu, egg, bean sprouts, and crushed peanuts in our signature tangy-sweet sauce.`,
  },
  {
      id: 3,
      title: "Korean BBQ Feast",
      category: "Korea",
      price: 28.99,
      img: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg",
      desc: `Tender marinated beef, pork, and chicken grilled to perfection, served with an array of traditional side dishes and dipping sauces.`,
  },
  {
      id: 4,
      title: "Dim Sum Extravaganza",
      category: "China",
      price: 18.99,
      img: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg",
      desc: `A delightful selection of handcrafted dumplings, buns, and small bites, steamed to order and served in traditional bamboo baskets.`,
  },
  {
      id: 5,
      title: "Pho Noodle Symphony",
      category: "Vietnam",
      price: 15.99,
      img: "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg",
      desc: `Aromatic beef broth simmered for hours, served with rice noodles, tender slices of beef, and a garden of fresh herbs and bean sprouts.`,
  },
  {
      id: 6,
      title: "Thai Green Curry",
      category: "Thailand",
      price: 17.99,
      img: "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg",
      desc: `A fragrant coconut milk-based curry with your choice of protein, bamboo shoots, eggplant, and Thai basil, served with jasmine rice.`,
  },
  {
      id: 7,
      title: "Tempura Medley",
      category: "Japan",
      price: 19.99,
      img: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg",
      desc: `A crispy assortment of lightly battered and deep-fried seafood and vegetables, served with tentsuyu dipping sauce.`,
  },
  {
      id: 8,
      title: "Bibimbap Bowl",
      category: "Korea",
      price: 16.99,
      img: "https://images.pexels.com/photos/5339079/pexels-photo-5339079.jpeg",
      desc: `A colorful rice bowl topped with sautéed vegetables, marinated beef, a fried egg, and gochujang sauce, served in a sizzling stone bowl.`,
  },
  {
      id: 9,
      title: "Peking Duck",
      category: "China",
      price: 32.99,
      img: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg",
      desc: `Our signature dish featuring crispy-skinned roasted duck, served with thin pancakes, scallions, cucumber, and hoisin sauce.`,
  },
  {
      id: 10,
      title: "Banh Mi Sandwich",
      category: "Vietnam",
      price: 11.99,
      img: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg",
      desc: `A crusty baguette filled with your choice of meat, pickled vegetables, cilantro, and spicy mayo, a perfect blend of French and Vietnamese flavors.`,
  },
];

// Get parent elements
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
const searchContainer = document.querySelector(".search-container");

// Display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
  addSearchFunctionality();
});

// Function to display menu items
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
      return `
      <article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
              <div class="item-header">
                  <h4>${item.title}</h4>
                  <span class="price">$${item.price}</span>
              </div>
              <p class="item-text">${item.desc}</p>
          </div>
      </article>
      `;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// Function to display filter buttons
function displayMenuButtons() {
  const categories = ["all", ...new Set(menu.map((item) => item.category))];
  const categoryBtns = categories
      .map(function (category) {
          return `<button type="button" class="filter-btn" data-id=${category}>
              ${category}
          </button>`;
      })
      .join("");

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  // Filter items
  filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
          const category = e.currentTarget.dataset.id;
          const menuCategory = menu.filter(function (menuItem) {
              if (menuItem.category === category) {
                  return menuItem;
              }
          });
          if (category === "all") {
              displayMenuItems(menu);
          } else {
              displayMenuItems(menuCategory);
          }
          // Add active class to clicked button
          filterBtns.forEach(btn => btn.classList.remove('active'));
          e.currentTarget.classList.add('active');
      });
  });
}

// Function to add search functionality
function addSearchFunctionality() {
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search our menu...";
  searchInput.classList.add("search-input");
  searchContainer.appendChild(searchInput);

  searchInput.addEventListener("input", function(e) {
      const searchTerm = e.target.value.toLowerCase();
      const filteredMenu = menu.filter(item => 
          item.title.toLowerCase().includes(searchTerm) || 
          item.desc.toLowerCase().includes(searchTerm)
      );
      displayMenuItems(filteredMenu);
  });
}