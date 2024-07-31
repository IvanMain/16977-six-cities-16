const CITY_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

const COUNT_OFFERS_MAIN_PAGE = 5 as const;
const COUNT_OFFERS_OFFER_PAGE = 3 as const;

const GALLERY_IMAGES = [
  'img/apartment-01.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/studio-01.jpg',
  'img/amsterdam.jpg'
] as const;

const PLACES_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

const MAX_RATING = 5 as const;

const MAX_REVIEW_CHARACTERS = 50 as const;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*',
  Profile = '/profile'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const PlaceCardImageOptions = {
  Default: {
    name: 'default',
    width: 260,
    height: 200
  },
  Favorite: {
    name: 'favorite',
    width: 150,
    height: 110
  }
} as const;

export {
  CITY_NAMES,
  COUNT_OFFERS_MAIN_PAGE,
  GALLERY_IMAGES,
  PLACES_OPTIONS,
  MAX_RATING,
  COUNT_OFFERS_OFFER_PAGE,
  MAX_REVIEW_CHARACTERS,
  AppRoute,
  AuthorizationStatus,
  PlaceCardImageOptions
};
