import antwerp from "./antwerp.json";
import toronto from "./toronto.json";
import chicago from "./chicago.json";
import san_francisco from "./san_francisco.json";


export const mocks: Record<string, any> = {
    "51.219448,4.402464": antwerp,
    "43.653225,-79.383186": toronto,
    "41.878113, -87.629799": chicago,
    "37.7749295,-122.4194155": san_francisco,
}