export interface Common{
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "date": string,
    // "event_type": string
}
export interface Event extends Common{
    "event_type": 'tasting'|'event'|'dish'|'wine'
}
export interface Wine{
    // id:number;
    country: string;
    region: string;
    type: string;
    year: number;
    rating: number;
    name: string;
    event: number;
}


export interface FormFieldModel {
    name: string;
    label: string;
    type: string;
    validation?: any; // Add validation rules here
}
export interface WineTasting {
    event: Event;
    wines: Wine[];
}

const mockEvents: Event[] = [
    {
        id: 1,
        title: "Wine Tasting in Napa Valley",
        description: "Join us for an exclusive wine tasting experience in the heart of Napa Valley.",
        price: 150,
        // image: "wine-tasting.jpg",
        date: "2022-07-22 12:00:00+00",
        event_type: "tasting"
    },
    // {
    //     title: "Wine Tasting in Napa Valley",
    //     description: "Join us for an exclusive wine tasting experience in the heart of Napa Valley.",
    //     price: 150,
    //     image: "wine-tasting.jpg",
    //     eventDate: "2022-07-22 12:00:00+00",
    //     eventType: "tasting"
    // },
    {
        id: 2,
        title: "Annual Food Carnival",
        description: "A weekend full of fun, food, and festivities for the whole family.",
        price: 50,
        // image: "food-carnival.jpg",
        date: "2024-06-20",
        event_type: "event"
    },
    {
        id: 3,
        title: "Master Chef Pasta Night",
        description: "A special evening featuring signature pasta dishes by renowned chefs.",
        price: 200,
        // image: "pasta-night.jpg",
        date: "2024-08-05",
        event_type: "dish"
    }
];

export default mockEvents;


export  const mockWineTastings: WineTasting[] = [
    {
        event: {
            id: 1,
            title: "Summer Wine Tasting",
            description: "A delightful journey through summer flavors.",
            price: 50,
            date: "2023-06-15T18:00:00Z",
            event_type: "tasting"
        },
        wines: [
            {  name: "Chardonnay", type: "White", year: 2020, region: "Napa Valley", country: "USA", rating: 4.5,event:1 },
            {  name: "Pinot Noir", type: "Red", year: 2019, region: "Burgundy", country: "France", rating: 4.8 ,event:1},
        ]
    },
    // ... more WineTasting objects
];

// Mock data for Events (can be reused for different types)
export  const mockEventsEvents: Event[] = [
    {
        id: 2,
        title: "Gourmet Evening",
        description: "A night of exquisite dining and fine wines.",
        price: 100,
        date: "2023-07-20T19:00:00Z",
        event_type: "event"
    },
    {
        id: 3,
        title: "Italian Cuisine Night",
        description: "Experience the flavors of Italy.",
        price: 80,
        date: "2023-08-10T19:00:00Z",
        event_type: "event"
    },
    {
        id: 4,
        title: "Exclusive Wine Collection Reveal",
        description: "Discover our new collection of rare wines.",
        price: 150,
        date: "2023-09-05T20:00:00Z",
        event_type: "event"
    },
    // ... more Event objects
];
export  const mockEventsDish: Event[] = [
    {
        id: 2,
        title: "Gourmet Evening",
        description: "A night of exquisite dining and fine wines.",
        price: 100,
        date: "2023-07-20T19:00:00Z",
        event_type: "dish"
    },
    {
        id: 3,
        title: "Italian Cuisine Night",
        description: "Experience the flavors of Italy.",
        price: 80,
        date: "2023-08-10T19:00:00Z",
        event_type: "dish"
    },
    {
        id: 4,
        title: "Exclusive Wine Collection Reveal",
        description: "Discover our new collection of rare wines.",
        price: 150,
        date: "2023-09-05T20:00:00Z",
        event_type: "dish"
    },
    // ... more Event objects
];
export  const mockEventsWine: Event[] = [
    {
        id: 2,
        title: "Gourmet Evening",
        description: "A night of exquisite dining and fine wines.",
        price: 100,
        date: "2023-07-20T19:00:00Z",
        event_type: "wine"
    },
    {
        id: 3,
        title: "Italian Cuisine Night",
        description: "Experience the flavors of Italy.",
        price: 80,
        date: "2023-08-10T19:00:00Z",
        event_type: "wine"
    },
    {
        id: 4,
        title: "Exclusive Wine Collection Reveal",
        description: "Discover our new collection of rare wines.",
        price: 150,
        date: "2023-09-05T20:00:00Z",
        event_type: "wine"
    },
    // ... more Event objects
];