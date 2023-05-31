const products = [
  {
    _id: "1",
    category: "Shoes",
    name: "Adidas Breaknet",
    price: "10000",
    image: "/images/Shoes/breaknet.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    _id: "2",
    category: "Shoes",
    name: "Nike Infinity ",
    price: "10000",
    image: "/images/Shoes/infinity.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 10,
    rating: 2,
    numReviews: 2,
  },
  {
    _id: "3",
    category: "Shoes",
    name: "Nike Shoes",
    price: "10000",
    image: "/images/Shoes/Nike.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 3,
    rating: 3.5,
    numReviews: 3,
  },
  {
    _id: "234r234",
    category: "Shoes",
    name: "Air Jordan 1 ",
    price: "10000",
    image: "/images/Shoes/AirJordan1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 10,
    rating: 2,
    numReviews: 2,
  },
  //Jersey//
  {
    _id: "4",
    category: "Jersey",
    name: "Stephen Curry ",
    price: "2000",
    image: "/images/Jersey/Curry.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },

  {
    _id: "5",
    category: "Jersey",
    name: "Lebron James",
    image: "/images/Jersey/Lebron.png",
    price: "2000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 7,
    rating: 2,
    numReviews: 2,
  },
  {
    _id: "6",
    category: "Jersey",
    image: "/images/Jersey/Durant.png",
    name: "Durant",
    price: "1900",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },

  {
    _id: "7",
    category: "Jersey",
    image: "/images/Jersey/Lamelo.png",
    name: "Lamelo Ball",
    price: "650",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: "8",
    category: "Jersey",
    image: "/images/Jersey/Jordan.png",
    name: "Michael Jordan",
    price: "1700",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: "9",
    category: "Jersey",
    image: "/images/Jersey/Giannis.png",
    name: "Giannis ",
    price: "1200",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: "10",
    category: "Shorts",
    image: "/images/shorts/Athletic.png",
    name: "Athletic Shorts ",
    price: "200",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: "11",
    category: "Shorts",
    image: "/images/shorts/black.png",
    name: "Nike Black Short ",
    price: "200",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: "12",
    category: "Shorts",
    image: "/images/shorts/Dynamo.png",
    name: "Dynamo Nike ",
    price: "200",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
  },
  {
    _id: "13",
    category: "Shorts",
    image: "/images/shorts/Drifit.png",
    name: "Drifit ",
    price: "190",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 10,
    rating: 5,
    numReviews: 4,
  },
  {
    _id: "14",
    category: "Shorts",
    image: "/images/shorts/Knee.png",
    name: "Knee Short",
    price: "120",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    _id: "15",
    category: "Shorts",
    image: "/images/shorts/Decathlon.png",
    name: "Decathlon Short ",
    price: "170",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 5,
    rating: 4,
    numReviews: 3,
  },
];

export default products;
