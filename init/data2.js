const sampleListings = [
    {
        title: "Cozy Beachfront Cottage A",
        description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_1"
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Modern Loft in Downtown",
        description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: {
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_2"
        },
        price: 1200,
        location: "New York City",
        country: "United States",
    },
    {
        title: "Mountain Retreat",
        description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image: {
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_3"
        },
        price: 1000,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Historic Villa in Tuscany",
        description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image: {
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_4"
        },
        price: 2500,
        location: "Florence",
        country: "Italy",
    },
    {
        title: "Secluded Treehouse Getaway",
        description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image: {
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_5"
        },
        price: 800,
        location: "Portland",
        country: "United States",
    },
    {
        title: "Beachfront Paradise",
        description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image: {
            url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_6"
        },
        price: 2000,
        location: "Cancun",
        country: "Mexico",
    },
    {
        title: "Rustic Cabin by the Lake",
        description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image: {
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_7"
        },
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
    },
    {
        title: "Luxury Penthouse with City Views",
        description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image: {
            url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_8"
        },
        price: 3500,
        location: "Los Angeles",
        country: "United States",
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        image: {
            url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_9"
        },
        price: 3000,
        location: "Verbier",
        country: "Switzerland",
    },
    {
        title: "Safari Lodge in the Serengeti",
        description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image: {
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_10"
        },
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
    },
    {
        title: "Historic Canal House",
        description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image: {
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_11"
        },
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
    },
    {
        title: "Private Island Retreat",
        description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        image: {
            url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_12"
        },
        price: 10000,
        location: "Fiji",
        country: "Fiji",
    },
    {
        title: "Charming Cottage in the Cotswolds",
        description: "Enjoy the English countryside in this charming cottage. Perfect for a peaceful retreat.",
        image: {
            url: "https://images.unsplash.com/photo-1587683697664-d1ae0a07aad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zdHdvbGRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_13"
        },
        price: 1400,
        location: "Cotswolds",
        country: "United Kingdom",
    },
    {
        title: "Tropical Villa with Private Pool",
        description: "Relax in luxury with your own private pool and tropical garden in this stunning villa.",
        image: {
            url: "https://images.unsplash.com/photo-1620770247140-77b7dff5b335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_14"
        },
        price: 2200,
        location: "Bali",
        country: "Indonesia",
    },
    {
        title: "Urban Apartment with Skyline View",
        description: "Modern apartment in the heart of the city with breathtaking skyline views.",
        image: {
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0eSUyMHZpZXclMjBhbmQlMjBhcGFydG1lbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_15"
        },
        price: 1600,
        location: "Tokyo",
        country: "Japan",
    },
    {
        title: "Desert Oasis",
        description: "Find tranquility in this desert oasis, with beautiful surroundings and a serene atmosphere.",
        image: {
            url: "https://images.unsplash.com/photo-1528150177506-d38b0d66752f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRlc2VydCUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_16"
        },
        price: 1300,
        location: "Marrakech",
        country: "Morocco",
    },
    {
        title: "Luxury Yacht Experience",
        description: "Sail the high seas in luxury with this fully crewed yacht. Explore the coastline in style.",
        image: {
            url: "https://images.unsplash.com/photo-1533492245779-35cb194ef444?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWFjaHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_17"
        },
        price: 8000,
        location: "Monaco",
        country: "Monaco",
    },
    {
        title: "Eco-Friendly Jungle Lodge",
        description: "Stay in an eco-friendly lodge surrounded by jungle. A great choice for nature lovers.",
        image: {
            url: "https://images.unsplash.com/photo-1597002589911-49102b8ac408?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_18"
        },
        price: 1700,
        location: "Amazon Rainforest",
        country: "Brazil",
    },
    {
        title: "Cultural Stay in Kyoto",
        description: "Experience traditional Japanese culture in this beautifully designed ryokan.",
        image: {
            url: "https://images.unsplash.com/photo-1594633311189-97df702d89a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_19"
        },
        price: 2100,
        location: "Kyoto",
        country: "Japan",
    },
    {
        title: "Lakefront Cabin with Hot Tub",
        description: "Relax in the hot tub while enjoying lake views in this cozy cabin.",
        image: {
            url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_20"
        },
        price: 1500,
        location: "Lake District",
        country: "United Kingdom",
    },
    {
        title: "Clifftop Villa with Infinity Pool",
        description: "Soak in the infinity pool with stunning ocean views from this clifftop villa.",
        image: {
            url: "https://images.unsplash.com/photo-1590650045357-bd8c3d168c80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_21"
        },
        price: 5000,
        location: "Santorini",
        country: "Greece",
    },
    {
        title: "Chic Apartment in Paris",
        description: "Stay in style in this chic Parisian apartment with a view of the Eiffel Tower.",
        image: {
            url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_22"
        },
        price: 2500,
        location: "Paris",
        country: "France",
    },
    {
        title: "Adventure Basecamp",
        description: "Use this cozy cabin as your basecamp for all your mountain adventures.",
        image: {
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_23"
        },
        price: 900,
        location: "Rocky Mountains",
        country: "United States",
    },
    {
        title: "Modern House with Private Garden",
        description: "Enjoy the privacy and comfort of a modern house with its own private garden.",
        image: {
            url: "https://images.unsplash.com/photo-1600585154340-be6161c07b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBnYXJkZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "random_filename_24"
        },
        price: 1900,
        location: "Sydney",
        country: "Australia",
    }
];
  
  module.exports = { data: sampleListings };
  