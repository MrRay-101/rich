const express = require("express");
const router =  express.Router();

const users = [
    { id: 1, name: "Vin Diesel", age: 57, nationality: "American", dob:"July 18, 1967", bio: "American actor and film producer!" },
    { id: 2, name: "Jason Statham", age: 57,nationality: "British", dob:"July 26, 1967", bio: "Actor and film producer" },
    { id: 3, name: "Sylvester Stallone", age: 78, nationality: "American", dob:"July 6, 1946",bio: "American actor and filmmaker" },
    { id: 4, name: "Arnold Schwarzenegger", age: 77, nationality: "Austrian and American", dob:"July 30, 1947", bio: "Actor and former Governor of California" },
    { id: 5, name: "Tom Cruise", age: 62, nationality: "American", dob:" July 3, 1962",bio: "American actor and produce" },
    { id: 6, name: "Dwayne Johnson", age: 52, nationality: "American", dob:"May 2, 1972",bio: "American actor and professional wrestler" },
    { id: 7, name: "Jackie Chan", age: 70, nationality: "Chinese", dob:"April 7, 1954",bio: "Hong Kong actor and filmmaker" },
    { id: 8, name: "Christel Pangit", age: 12, nationality: "Bisaya", dob:"Febuary 8, 2013",bio: "Pinakabatig nawng sa tibuok kalibutan" }, 

  ];
  
  router.get("/", (req, res) => {
    res.render("userextention", { users }); 
  });
  
  router.get("/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.render("profile", { user }); 
});



module.exports = router