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






