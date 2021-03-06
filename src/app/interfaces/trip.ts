// Generated by https://quicktype.io

export interface Trip {
  id: string;
  locations: Location[];
}

export interface Location {
  accuracy:                     number;
  altitude:                     number;
  bearing:                      number;
  bearingAccuracyDegrees:       number;
  complete:                     boolean;
  elapsedRealtimeNanos:         number;
  extras:                       Extras;
  fromMockProvider:             boolean;
  latitude:                     number;
  longitude:                    number;
  provider:                     string;
  speed:                        number;
  speedAccuracyMetersPerSecond: number;
  time:                         number;
  verticalAccuracyMeters:       number;
}

export interface Extras {
  empty:       boolean;
  emptyParcel: boolean;
  mFlags:      number;
  pairValue:   string;
  parcelled:   boolean;
  size:        number;
}
