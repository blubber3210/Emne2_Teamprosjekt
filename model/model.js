// INGEN TULLER MED MODELLEN UTEN Å SI FRA !!! :)

const model = {
    app: {
        currentPage: 'mainFeed',
        currentUser: null,
        selectedPlace: 0,

        page: [
            'loginPage',
            'mainFeed',
            'addPlaces',
            'placePage',
            'registerUser',
        ]
    },

    viewState: {
        registerUser: {
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
        },

        mainFeed: {
            search: 'e',
        },

        login: {
            userName: '',
            password: '',
        },

        addPlace: {
            id: null,
            userID: null,
            title: '',
            address: '',
            city: '',
            categoryID: [],
            image: '',
            rateCoffee: null,
            rateFood: null,
            description: '',
        },
    },

    data: {
        users: [
            {
                id: 0,
                userName: 'Spooky',
                email: 'spooky@email.com',
                password: '',
                placesAdded: [0, 1],
            },
            {
                id: 1,
                userName: '',
                email: 'test@email.com',
                password: '',
                placesAdded: [1],
            },
        ],

        category: [
            {
                id: 0, name: 'cafe',
            },
            {
                id: 1, name: 'bakeri',
            },
            {
                id: 2, name: 'restaurant',
            },
        ],

        placesList: [
            {
                id: 0,
                userID: 0,
                title: 'GLH Glutenfrihuset Tøyen',
                address: 'Ålebergveien 50A',
                city: 'Oslo',
                categoryID: [0, 1],
                image: 'media/glh.jpg',
                rateCoffee: 5,
                rateFood: 5,
                description: 'Velkommen til GLH Glutenfrihuset - ditt glutenfrie bakeri i OSlo',
            },
            {
                id: 1,
                userID: 0,
                title: 'En restaurant',
                address: 'En adresse - Veien10B',
                city: 'Bergen',
                categoryID: [2, 0],
                image: 'media/bergen.jpg',
                rateCoffee: 2,
                rateFood: 4,
                description: 'SKIKKELIG dårlig kaffe, men ok bra mat',
            },
            {
                id: 2,
                userID: 0,
                title: 'Cupcakehuset Jåblom Bakst',
                address: 'Haraldsgata 191',
                city: 'Haugesund',
                categoryID: [2, 0],
                image: 'media/cupcake.png',
                rateCoffee: 2,
                rateFood: 5,
                description: 'Knall gode muffins av alle slag',
            },
        ],
    },
}

