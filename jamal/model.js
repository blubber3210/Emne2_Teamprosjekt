


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

