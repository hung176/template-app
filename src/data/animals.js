import Aardvark from "../assets/Aardvark2.png";

export const animalName = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Ant",
  "Anteater",
  "Antelope",
  "Ape",
  "Armadillo",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Boar",
  "Buffalo",
  "Butterfly",
  "Camel",
  "Capybara",
  "Caribou",
  "Cassowary",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Coyote",
  "Crab",
  "Crocodile",
  "Crow",
  "Curlew",
  "Deer",
  "Dinosaur",
  "Dog",
  "Dogfish",
  "Dolphin",
  "Donkey",
  "Dotterel",
  "Dove",
  "Dragonfly",
  "Duck",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Gnat",
  "Gnu",
  "Goat",
  "Goldfinch",
  "Goldfish",
  "Goose",
  "Gorilla",
  "Goshawk",
  "Grasshopper",
  "Grouse",
  "Guanaco",
  "Gull",
  "Hamster",
  "Hare",
  "Hawk",
  "Hedgehog",
  "Heron",
  "Herring",
  // "Hippopotamus",
  // "Horse",
  // "Human",
  // "Hummingbird",
  // "Hyena",
  // "Ibex",
  // "Ibis",
  // "Jackal",
  // "Jaguar",
  // "Jay",
  // "Jellyfish",
  // "Kangaroo",
  // "Kingfisher",
  // "Koala",
  // "Kookabura",
  // "Kouprey",
  // "Kudu",
  // "Lapwing",
  // "Lark",
  // "Lemur",
  // "Leopard",
  // "Lion",
  // "Llama",
  // "Lobster",
  // "Locust",
  // "Loris",
  // "Louse",
  // "Lyrebird",
  // "Magpie",
  // "Mallard",
  // "Manatee",
  // "Mandrill",
  // "Mantis",
  // "Marten",
  // "Meerkat",
  // "Mink",
  // "Mole",
  // "Monkey",
  // "Moose",
  // "Mosquito",
  // "Mouse",
  // "Narwhal",
  // "Newt",
  // "Nightingale",
  // "Octopus",
  // "Okapi",
  // "Opossum",
  // "Oryx",
  // "Ostrich",
  // "Otter",
  // "Owl",
  // "Oyster",
  // "Panther",
  // "Parrot",
  // "Partridge",
  // "Peafowl",
  // "Pelican",
  // "Penguin",
  // "Pheasant",
  // "Pig",
  // "Pigeon",
  // "Pony",
  // "Porcupine",
  // "Porpoise",
  // "Quail",
  // "Quelea",
  // "Quetzal",
  // "Rabbit",
  // "Raccoon",
  // "Ram",
  // "Rat",
  // "Red panda",
  // "Reindeer",
  // "Rhinoceros",
  // "Salamander",
  // "Salmon",
  // "Sandpiper",
  // "Sardine",
  // "Scorpion",
  // "Seahorse",
  // "Seal",
  // "Shark",
  // "Sheep",
  // "Shrew",
  // "Skunk",
  // "Snail",
  // "Snake",
  // "Sparrow",
  // "Spider",
  // "Spoonbill",
  // "Squid",
  // "Squirrel",
  // "Starling",
  // "Stingray",
  // "Stinkbug",
  // "Stork",
  // "Swallow",
  // "Swan",
  // "Tapir",
  // "Tarsier",
  // "Termite",
  // "Tiger",
  // "Toad",
  // "Trout",
  // "Turkey",
  // "Turtle",
  // "Viper",
  // "Vulture",
  // "Wallaby",
  // "Walrus",
  // "Wasp",
  // "Weasel",
  // "Whale",
  // "Wildcat",
  // "Wolf",
  // "Wombat",
  // "Woodcock",
  // "Woodpecker",
  // "Worm",
  // "Wren",
  // "Yak",
  // "Zebra"
];

const imageUrl = [
  "https://live.staticflickr.com/65535/50945952541_c90250290a_o.png",
  "https://live.staticflickr.com/65535/50946038257_4c4a4a39b3_o.png",
  "https://live.staticflickr.com/65535/50945932601_05204c3610_o.png",
];

export const animals = animalName.map((animal, index) => ({
  name: animal,
  image: imageUrl[index]
}));