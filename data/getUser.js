module.exports = () => {
  return {
    id: "1",
    name: "Ethan Harper",
    firstName: "Ethan",
    lastName: "Harper",
    email: "ethan.harper@example.com",
    role: "admin",
    createdDate: "2023-01-15", // keep as string unless converted to Date
    status: "Active",
    phoneNumber: "8444444444",
    jobTitle: "Software Engineer",
    languagePreference: { id: "english", name: "English" },
    address: "123 Main St",
    city: "New York",
    postcode: "10001",
  };
};
