const Cities = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

const enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

const enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const URL_MARKER_CURRENT = 'img/pin-active.svg';
const URL_MARKER_DEFAULT = 'img/pin.svg';
const QUERY_PARAMETER = 'slug';
const PageType = {
  OFFER: 'offer',
  CITIES: 'cities',
  NEAR_PLACES: 'near-places',
  FAVORITES: 'favorites',
} as const;

enum SortOptionValue {
  Popular = 'popular',
  PriceLowToHigh = 'priceLowToHigh',
  PriceHighToLow = 'priceHighToLow',
  TopRated = 'topRated',
}

const SORT_OPTIONS = [
  { id: 1, title: 'Popular', value: SortOptionValue.Popular },
  { id: 2, title: 'Price: low to high', value: SortOptionValue.PriceLowToHigh },
  { id: 3, title: 'Price: high to low', value: SortOptionValue.PriceHighToLow },
  { id: 4, title: 'Top rated first', value: SortOptionValue.TopRated },
] as const;


export {
  Cities,
  AppRoute,
  AuthStatus,
  SortOptionValue,
  PageType,
  URL_MARKER_CURRENT,
  URL_MARKER_DEFAULT,
  QUERY_PARAMETER,
  SORT_OPTIONS,
};
