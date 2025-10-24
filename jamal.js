// controller => testing
const Controller = {
   init() { // starter appen
       View.updateContent();
   },


   nextImage() { //lag en list, velg kategori, filtreres basert på kategorien
       const posts = Model.currentCategory !== null ? Model.placesList.filter(p => p.categoryID.includes(Model.currentCategory)) : Model.placesList;
       const post = posts[Model.currentIndex]; //bruker info basert på cur...
       if (post.image.length === 0) return; // sjekk om stedet har bilder
       Model.imageIndex = (Model.imageIndex + 1) % post.image.length; // =>neste neste bilde hvis ikke tilbake til første bilde
       View.updateContent();
   },


   prevImage() { // samme her, men tilbake
       const posts = Model.currentCategory !== null ? Model.placesList.filter(p => p.categoryID.includes(Model.currentCategory)) : Model.placesList;
       const post = posts[Model.currentIndex];
       if (post.image.length === 0) return; //(Model.imageIndex - 1 + post.image.length) % post.image.length => sørger for at går frem og tilbake)
       Model.imageIndex = (Model.imageIndex - 1 + post.image.length) % post.image.length;
       View.updateContent();
   },


   nextPost() { // filtrerer lister
       const posts = Model.currentCategory !== null ? Model.placesList.filter(p => p.categoryID.includes(Model.currentCategory)) : Model.placesList;
       Model.currentIndex = (Model.currentIndex + 1) % posts.length; // vender tilbake
       Model.imageIndex = 0; // indeks til starten
       View.updateContent();
   },


   prevPost() {
       const posts = Model.currentCategory !== null ? Model.placesList.filter(p => p.categoryID.includes(Model.currentCategory)) : Model.placesList;
       Model.currentIndex = (Model.currentIndex - 1 + posts.length) % posts.length;
       Model.imageIndex = 0;
       View.updateContent();
   },


   toggleLike() { // bytte status
       Model.liked = !Model.liked;
       View.updateContent();
   },


   sharePage() {
       navigator.clipboard.writeText(window.location.href);
       alert("Lenken er kopiert ✅");
   },


   filterCategory(catId) {
       Model.currentCategory = catId; // valgt kategori
       Model.currentIndex = 0; //vis første sted
       Model.imageIndex = 0; // starter på det første bilde
       View.updateContent();
   },


   goBack() {
       alert("Tilbake-knapp trykket");
   },


   openMenu() {
       alert("Meny-knapp trykket");
   }
};


// Start appen
Controller.init(); // viser det første stedet med riktig info når siden lastes









const Model = {
   categories: [
       { id: 0, name: 'Kafé' },
       { id: 1, name: 'Bakeri' },
       { id: 2, name: 'Restaurant' },
   ],


   placesList: [
       {
           id: 0,
           title: 'GLH Glutenfrihuset Tøyen',
           address: 'Ålebergveien 50A',
           categoryID: [0, 1],
           image: ['./image/23.jpg', './image/3456.jpg', './image/3667.jpg'], // kombinasjon 1
           rateCoffee: 5,
           rateFood: 5,
           description: 'Velkommen til GLH Glutenfrihuset - ditt glutenfrie bakeri i Oslo.',
       },
       {
           id: 1,
           title: 'Åpent Bakeri Damplassen',
           address: 'Damplassen 24',
           categoryID: [1],
           image: ['./image/3456.jpg', './image/3667.jpg', './image/23.jpg'], // kombinasjon 2
           rateCoffee: 4,
           rateFood: 5,
           description: 'Kjent for sine deilige kanelboller og ferske brød.',
       },
       {
           id: 2,
           title: 'La Pasta',
           address: 'Torggata 17',
           categoryID: [2],
           image: ['./image/3667.jpg', './image/23.jpg', './image/3456.jpg'], // kombinasjon 3
           rateCoffee: 4,
           rateFood: 5,
           description: 'Italiensk restaurant med autentiske smaker fra Roma.',
       },
   ],


   currentIndex: 0,
   imageIndex: 0,
   liked: false,
   currentCategory: null
};



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


<!DOCTYPE html>
<html lang="no">
<head>
   <meta charset="UTF-8">
   <title>Spooky testing</title>
   <link rel="stylesheet" href="style/style7.css">
</head>
<body>
   <div class="container">


       <!-- TOPP/intro -->
       <div class="top">
           <h1 id="title">Stedets navn</h1>
           <p id="address">Adresse</p>
           <button class="filter-btn" onclick="View.showFilterMenu()">Filtrer kategori</button>
           <div id="filter-menu"></div>
           <p id="rating">☕ 0/5 | 🍽️ 0/5</p>
       </div>


       <!-- Bilde i midten med knappa -->
       <div class="middle">
           <button class="prev" onclick="Controller.prevImage()">&#8592;</button>
           <img id="carousel-img" src="" alt="Bilde">
           <button class="next" onclick="Controller.nextImage()">&#8594;</button>
       </div>


       <!-- BESKRIVELSE/rating-->
       <div class="description">
           <p id="description">Beskrivelse av stedet</p>
       </div>


       <!-- BUNN KNAPPER -->
       <div class="buttons">
           <button onclick="Controller.goBack()">Tilbake</button>
           <button onclick="Controller.openMenu()">Meny</button>
           <button onclick="Controller.sharePage()">Del/Kopier</button>
           <button id="like-btn" onclick="Controller.toggleLike()">🤍</button>
       </div>


   </div>


   <script src="model/places7"></script>
   <script src="view/view8bedre.js"></script>
   <script src="controller/app8.js"></script>
</body>
</html>




body {
   font-family: Arial, sans-serif;
   background: #f6f6f6;
   margin: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
}


.container {
   width: 400px;
   background: #fff;
   border-radius: 15px;
   box-shadow: 0 4px 12px rgba(0,0,0,0.2);
   padding: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
}


.top {
   text-align: center;
   margin-bottom: 15px;
}


.filter-btn {
   background: #3a7bd5;
   color: white;
   border: none;
   padding: 5px 15px;
   border-radius: 20px;
   cursor: pointer;
   margin: 5px 0;
}


#filter-menu {
   display: none;
   background: white;
   border: 1px solid #ccc;
   border-radius: 10px;
   margin-top: 5px;
   padding: 5px;
   position: absolute;
   z-index: 100;
}


#filter-menu button {
   display: block;
   width: 100%;
   border: none;
   background: none;
   padding: 5px 0;
   cursor: pointer;
   text-align: left;
}


.middle {
   position: relative;
   width: 100%;
   height: 250px;
   margin-bottom: 15px;
}


.middle img {
   width: 100%;
   height: 100%;
   border-radius: 15px;
   object-fit: cover;
}


.middle .prev, .middle .next {
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   background-color: rgba(0,0,0,0.5);
   color: white;
   border: none;
   font-size: 20px;
   padding: 10px;
   border-radius: 50%;
   cursor: pointer;
}


.middle .prev { left: 10px; }
.middle .next { right: 10px; }


.description {
   margin-bottom: 15px;
   text-align: center;
}


.buttons {
   display: flex;
   justify-content: space-between;
   width: 100%;
}


.buttons button {
   background: #3a7bd5;
   color: white;
   border: none;
   padding: 10px 15px;
   border-radius: 10px;
   cursor: pointer;
   font-size: 14px;
}


#like-btn {
   background: none;
   font-size: 20px;
}









