import { List, Map } from 'immutable'

const initialState = {

    userProfile: Map({
        id: '',
        login: 'admin',
        email: 'some@ya.ru',
        phonenumber: '+79872921954',
        fio: 'Админов Админ Админыч',
        birthday: new Date(1945, 0, 1),
        avatar: '/url_to_avatar',
    }),

    userProfileMeta: Map({
        isFetching: false,
        didInvalidate: false,
    }),

    auth: Map({
        authenticated: false,
        error: ''
    }),

    parkingPlaces: List([
        {
            placeId: '',
            ownerId: '',
            city: 'Kazan',
            street: 'Fuchike',
            house: '86A',
            photos: List(['/...', '/...', '/...']), // photos
            // address: 'yл. Вишневского, д.11',
            payment: 100,
            coordinates: [-1.135171, 52.6376],
            placementDate: new Date(2019, 12, 21),
            status: ''
            // countOfPlace: 2, (?)
        }
    ]),

    parkingPlacesMeta: Map({
        isFetching: false,
        didInvalidate: false,
    }),

    form: {}
}

export default initialState