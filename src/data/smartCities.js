const smartCities = [
  {
    Name: "Birmingham",
    Country: "United States",
  },
  {
    Name: "Valladolid",
    Country: "Spain",
  },
  {
    Name: "Vigo",
    Country: "Spain",
  },
  {
    Name: "Sarajevo",
    Country: "Bosnia and Herzegovina",
  },
  {
    Name: "Bilbao",
    Country: "Spain",
  },
  {
    Name: "Wellington",
    Country: "New Zealand",
  },
  {
    Name: "Bern",
    Country: "Switzerland",
  },
  {
    Name: "Bratislava",
    Country: "Slovakia",
  },
  {
    Name: "Miami",
    Country: "United States",
  },
  {
    Name: "Murcia",
    Country: "Spain",
  },
  {
    Name: "Duisburg",
    Country: "Germany",
  },
  {
    Name: "Vilnius",
    Country: "Lithuania",
  },
  {
    Name: "Basel",
    Country: "Switzerland",
  },
  {
    Name: "Baltimore",
    Country: "United States",
  },
  {
    Name: "Skopje",
    Country: "North Macedonia",
  },
  {
    Name: "Geneva",
    Country: "Switzerland",
  },
  {
    Name: "Riga",
    Country: "Latvia",
  },
  {
    Name: "Stuttgart",
    Country: "Germany",
  },
  {
    Name: "Doha",
    Country: "Qatar",
  },
  {
    Name: "Manama",
    Country: "Bahrain",
  },
  {
    Name: "Zagreb",
    Country: "Croatia",
  },
  {
    Name: "Boston",
    Country: "United States",
  },
  {
    Name: "Seville",
    Country: "Spain",
  },
  {
    Name: "Florence",
    Country: "Italy",
  },
  {
    Name: "Washington",
    Country: "United States",
  },
  {
    Name: "Zaragoza",
    Country: "Spain",
  },
  {
    Name: "Frankfurt",
    Country: "Germany",
  },
  {
    Name: "Nottingham",
    Country: "United Kingdom",
  },
  {
    Name: "Valencia",
    Country: "Spain",
  },
  {
    Name: "San Francisco",
    Country: "United States",
  },
  {
    Name: "Liverpool",
    Country: "United Kingdom",
  },
  {
    Name: "Nice",
    Country: "France",
  },
  {
    Name: "Jerusalem",
    Country: "Israel",
  },
  {
    Name: "Antwerp",
    Country: "Belgium",
  },
  {
    Name: "Oslo",
    Country: "Norway",
  },
  {
    Name: "Lille",
    Country: "France",
  },
  {
    Name: "Tbilisi",
    Country: "Georgia",
  },
  {
    Name: "Cologne",
    Country: "Germany",
  },
  {
    Name: "Dublin",
    Country: "Ireland",
  },
  {
    Name: "Sofia",
    Country: "Bulgaria",
  },
  {
    Name: "Prague",
    Country: "Czech Republic",
  },
  {
    Name: "Porto",
    Country: "Portugal",
  },
  {
    Name: "Helsinki",
    Country: "Finland",
  },
  {
    Name: "Dallas",
    Country: "United States",
  },
  {
    Name: "Copenhagen",
    Country: "Denmark",
  },
  {
    Name: "Belgrade",
    Country: "Serbia",
  },
  {
    Name: "Zurich",
    Country: "Switzerland",
  },
  {
    Name: "Ottawa",
    Country: "Canada",
  },
  {
    Name: "San Diego",
    Country: "United States",
  },
  {
    Name: "Abu Dhabi",
    Country: "United Arab Emirates",
  },
  {
    Name: "Munich",
    Country: "Germany",
  },
  {
    Name: "Rosario",
    Country: "Argentina",
  },
  {
    Name: "San Antonio",
    Country: "United States",
  },
  {
    Name: "Cordoba",
    Country: "Argentina",
  },
  {
    Name: "Philadelphia",
    Country: "United States",
  },
  {
    Name: "Marseille",
    Country: "France",
  },
  {
    Name: "Stockholm",
    Country: "Sweden",
  },
  {
    Name: "Novosibirsk",
    Country: "Russia",
  },
  {
    Name: "Glasgow",
    Country: "United Kingdom",
  },
  {
    Name: "Lyon",
    Country: "France",
  },
  {
    Name: "Phoenix",
    Country: "United States",
  },
  {
    Name: "Santa Cruz",
    Country: "Bolivia",
  },
  {
    Name: "Montevideo",
    Country: "Uruguay",
  },
  {
    Name: "Budapest",
    Country: "Hungary",
  },
  {
    Name: "Hamburg",
    Country: "Germany",
  },
  {
    Name: "Warsaw",
    Country: "Poland",
  },
  {
    Name: "Turin",
    Country: "Italy",
  },
  {
    Name: "La Paz",
    Country: "Bolivia",
  },
  {
    Name: "Panama City",
    Country: "Panama",
  },
  {
    Name: "Quito",
    Country: "Ecuador",
  },
  {
    Name: "Rabat",
    Country: "Morocco",
  },
  {
    Name: "Almaty",
    Country: "Kazakhstan",
  },
  {
    Name: "Vienna",
    Country: "Austria",
  },
  {
    Name: "Minsk",
    Country: "Belarus",
  },
  {
    Name: "Brussels",
    Country: "Belgium",
  },
  {
    Name: "Amman",
    Country: "Jordan",
  },
  {
    Name: "Naples",
    Country: "Italy",
  },
  {
    Name: "Houston",
    Country: "United States",
  },
  {
    Name: "Baku",
    Country: "Azerbaijan",
  },
  {
    Name: "Tunis",
    Country: "Tunisia",
  },
  {
    Name: "Vancouver",
    Country: "Canada",
  },
  {
    Name: "Birmingham",
    Country: "United Kingdom",
  },
  {
    Name: "Chicago",
    Country: "United States",
  },
  {
    Name: "Manchester",
    Country: "United Kingdom",
  },
  {
    Name: "Cali",
    Country: "Colombia",
  },
  {
    Name: "Dubai",
    Country: "United Arab Emirates",
  },
  {
    Name: "Caracas",
    Country: "Venezuela",
  },
  {
    Name: "Guatemala City",
    Country: "Guatemala",
  },
  {
    Name: "Kiev",
    Country: "Ukraine",
  },
  {
    Name: "Guayaquil",
    Country: "Ecuador",
  },
  {
    Name: "Milan",
    Country: "Italy",
  },
  {
    Name: "Athens",
    Country: "Greece",
  },
  {
    Name: "Kuwait City",
    Country: "Kuwait",
  },
  {
    Name: "Santo Domingo",
    Country: "Dominican Republic",
  },
  {
    Name: "Berlin",
    Country: "Germany",
  },
  {
    Name: "Curitiba",
    Country: "Brazil",
  },
  {
    Name: "Douala",
    Country: "Cameroon",
  },
  {
    Name: "Casablanca",
    Country: "Morocco",
  },
  {
    Name: "Salvador",
    Country: "Brazil",
  },
  {
    Name: "Los Angeles",
    Country: "United States",
  },
  {
    Name: "Montreal",
    Country: "Canada",
  },
  {
    Name: "Tel Aviv",
    Country: "Israel",
  },
  {
    Name: "Rome",
    Country: "Italy",
  },
  {
    Name: "Cape Town",
    Country: "South Africa",
  },
  {
    Name: "Brasilia",
    Country: "Brazil",
  },
  {
    Name: "Nairobi",
    Country: "Kenya",
  },
  {
    Name: "Sydney",
    Country: "Australia",
  },
  {
    Name: "Melbourne",
    Country: "Australia",
  },
  {
    Name: "Ankara",
    Country: "Turkey",
  },
  {
    Name: "Saint Petersburg",
    Country: "Russia",
  },
  {
    Name: "Barcelona",
    Country: "Spain",
  },
  {
    Name: "Johannesburg",
    Country: "South Africa",
  },
  {
    Name: "Singapore",
    Country: "Singapore",
  },
  {
    Name: "Belo Horizonte",
    Country: "Brazil",
  },
  {
    Name: "Toronto",
    Country: "Canada",
  },
  {
    Name: "Madrid",
    Country: "Spain",
  },
  {
    Name: "Santiago",
    Country: "Chile",
  },
  {
    Name: "Riyadh",
    Country: "Saudi Arabia",
  },
  {
    Name: "Kuala Lumpur",
    Country: "Malaysia",
  },
  {
    Name: "New York City",
    Country: "United States",
  },
  {
    Name: "Ho Chi Minh City",
    Country: "Vietnam",
  },
  {
    Name: "London",
    Country: "United Kingdom",
  },
  {
    Name: "Nagoya",
    Country: "Japan",
  },
  {
    Name: "Seoul",
    Country: "South Korea",
  },
  {
    Name: "Bangkok",
    Country: "Thailand",
  },
  {
    Name: "Lima",
    Country: "Peru",
  },
  {
    Name: "Jakarta",
    Country: "Indonesia",
  },
  {
    Name: "Paris",
    Country: "France",
  },
  {
    Name: "Bogota",
    Country: "Colombia",
  },
  {
    Name: "Shenzhen",
    Country: "China",
  },
  {
    Name: "Moscow",
    Country: "Russia",
  },
  {
    Name: "Rio de Janeiro",
    Country: "Brazil",
  },
  {
    Name: "Guangzhou",
    Country: "China",
  },
  {
    Name: "Tianjin",
    Country: "China",
  },
  {
    Name: "Manila",
    Country: "Philippines",
  },
  {
    Name: "Lagos",
    Country: "Nigeria",
  },
  {
    Name: "Kolkata",
    Country: "India",
  },
  {
    Name: "Buenos Aires",
    Country: "Argentina",
  },
  {
    Name: "Istanbul",
    Country: "Turkey",
  },
  {
    Name: "Karachi",
    Country: "Pakistan",
  },
  {
    Name: "Osaka",
    Country: "Japan",
  },
  {
    Name: "Mumbai",
    Country: "India",
  },
  {
    Name: "Beijing",
    Country: "China",
  },
  {
    Name: "Cairo",
    Country: "Egypt",
  },
  {
    Name: "Mexico City",
    Country: "Mexico",
  },
  {
    Name: "Shanghai",
    Country: "China",
  },
  {
    Name: "Tokyo",
    Country: "Japan",
  },
];

export default smartCities;
