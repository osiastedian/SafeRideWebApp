// Generated by https://quicktype.io

export interface RoadsAPIResults {
  html_attributions: any[];
  next_page_token:   string;
  results:           Result[];
  status:            string;
}

export interface Result {
  geometry:       Geometry;
  icon:           string;
  id:             string;
  name:           string;
  photos?:        Photo[];
  place_id:       string;
  reference:      string;
  scope:          Scope;
  types:          string[];
  vicinity:       string;
  plus_code?:     PlusCode;
  rating?:        number;
  opening_hours?: OpeningHours;
  price_level?:   number;
}

export interface Geometry {
  location: Location;
  viewport: Viewport;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: Location;
  southwest: Location;
}

export interface OpeningHours {
  open_now: boolean;
}

export interface Photo {
  height:            number;
  html_attributions: string[];
  photo_reference:   string;
  width:             number;
}

export interface PlusCode {
  compound_code: string;
  global_code:   string;
}

export enum Scope {
  Google = 'GOOGLE',
}