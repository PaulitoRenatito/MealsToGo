import { LocationKey, LocationData } from "./types";

export const locations: Record<LocationKey, LocationData> = {
    antwerp: {
        results: [
            {
                geometry: {
                    location: {
                        lng: 4.402464,
                        lat: 51.219448,
                    },
                    viewport: {
                        northeast: {
                            lat: 51.2145994302915,
                            lng: 4.418074130291502,
                        },
                        southwest: {
                            lat: 51.2119014697085,
                            lng: 4.415376169708497,
                        },
                    },
                },
            },
        ]
    },
    "san francisco": {
        results: [
            {
                geometry: {
                    location: {
                        lat: 37.7749295,
                        lng: -122.4194155
                    },
                    viewport: {
                        northeast: {
                            lat: 37.812,
                            lng: -122.3482
                        },
                        southwest: {
                            lat: 37.70339999999999,
                            lng: -122.527
                        }
                    }
                }
            }
        ]
    },
    chicago: {
        results: [
            {
                geometry: {
                    location: {
                        lat: 41.8781136,
                        lng: -87.6297982
                    },
                    viewport: {
                        northeast: {
                            lat: 42.023,
                            lng: -87.5236
                        },
                        southwest: {
                            lat: 41.6445,
                            lng: -87.9401
                        }
                    }
                }
            }
        ]
    },
    toronto: {
        results: [
            {
                geometry: {
                    location: {
                        lat: 43.65107,
                        lng: -79.347015
                    },
                    viewport: {
                        northeast: {
                            lat: 43.8554579,
                            lng: -79.104091
                        },
                        southwest: {
                            lat: 43.581024,
                            lng: -79.639319
                        }
                    }
                }
            }
        ]
    }
}