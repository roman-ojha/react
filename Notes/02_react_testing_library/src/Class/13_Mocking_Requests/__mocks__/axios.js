const mockResponse = {
  data: {
    results: [
      // now here this is the exact same data that we will get form api
      {
        name: {
          first: "Laith",
          last: "Harb",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/5.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
    ],
  },
};

// here we will export the
export default {
  // here we are mocking get call so
  get: jest.fn().mockResolvedValue(mockResponse),
};
