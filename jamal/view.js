

const View = {
   updateContent() {
       let posts = Model.placesList; //liste over alle stedene
       if (Model.currentCategory !== null) { // resultat etter filtreringen
           posts = posts.filter(p => p.categoryID.includes(Model.currentCategory));
       }


       if (posts.length === 0) return; // hva skjer hvis listen er tom =ingenting


       if (Model.currentIndex >= posts.length) Model.currentIndex = 0; // sørger for at curr.. er ikke utenfor lista
       const post = posts[Model.currentIndex];


       // her setter man tekstene i HTML for tittel, ad... osv...
       document.getElementById("title").textContent = post.title;
       document.getElementById("address").textContent = post.address;
       document.getElementById("description").textContent = post.description;
       document.getElementById("rating").textContent = `☕ ${post.rateCoffee}/5 | 🍽️ ${post.rateFood}/5`;
       document.getElementById("carousel-img").src = post.image.length > 0 ? post.image[Model.imageIndex] : ""; // "en karusell format for bilder => hvis [tom}= ingenting?"
       document.getElementById("like-btn").textContent = Model.liked ? "❤️" : "🤍"; // view (ekte/falsk)
   },


   toggleFilterMenu() { //innhenting av html
       const menu = document.getElementById("filter-menu");
       if (menu.style.display === "block") { // hvis meny vises = skjule den
           menu.style.display = "none"; // ellers vis den
       } else {


           menu.innerHTML = ""; // knappa for hver kategori
           Model.categories.forEach(cat => {
               const btn = document.createElement("button");
               btn.textContent = cat.name;
               btn.onclick = () => {
                   Controller.filterCategory(cat.id); // kategoriene filtres
                   menu.style.display = "none";
               };
               menu.appendChild(btn);
           });
           menu.style.display = "block";
           // // filtermenyen skjules
       }
   }
};

