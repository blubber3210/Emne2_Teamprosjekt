const model = {
    app: {
        currentPage: 'loginPage',

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
            password: '',
            repeatPassword: '',
        },

        mainFeed: {
            search: '',
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
                password: '',
                placesAdded: [0, 1],
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
                image: 'imgLink',
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
                image: 'imgLink',
                rateCoffee: 2,
                rateFood: 4,
                description: 'SKIKKELIG dårlig kaffe, men ok bra mat',
            },
        ],
    },
}

