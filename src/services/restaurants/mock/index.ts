import antwerp from "./antwerp.json";
import toronto from "./toronto.json";
import chicago from "./chicago.json";
import san_francisco from "./san_francisco.json";
import { RestaurantMockData } from "./types";


export const mocks: Record<string, RestaurantMockData> = {
    "51.219448,4.402464": antwerp,
    "43.653225,-79.383186": toronto,
    "41.878113,-87.6297982": chicago,
    "37.7749295,-122.4194155": san_francisco,
}

export const mocksImages = [
    "https://unsplash.com/pt-br/fotografias/uma-fileira-de-cadeiras-sentadas-uma-ao-lado-da-outra-em-cima-de-um-piso-de-madeira-rNsA91ci5fc",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673830185894-9030c9e7eba9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
]