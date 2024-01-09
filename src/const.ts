export const AppRoute = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: (id: number | string) => `/films/${id}`,
  AddReview: (id: number | string) => `/films/${id}/review`,
  Player: (id: number | string) => `/player/${id}`,
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
