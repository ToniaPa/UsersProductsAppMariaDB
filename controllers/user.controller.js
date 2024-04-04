const userService = require("../services/user.services");

exports.findAll = async(req, res) => {
  console.log("Find all users");
  try {   
    const result = await userService.findAll();
    res.status(200).json({data: result});
    console.log("Success in reading all users");
  } catch (err) {
    res.status(400).json({data: err})
    console.log(`Problem in reading users, ${err}`);  
  }
}

exports.findOne = async(req, res) => {
  console.log("Find a user");
  const username = req.params.username;
  try {
    const result = await userService.findOne(username)
    res.status(200).json({data: result});
  } catch(err) {
    res.status(400).json({data: err})
    console.log(`Problem in reading user: ${username}, ${err}`)
  }
}

exports.create = async(req, res) => {
  const data = req.body;
  console.log("Insert user: " + data.username);
  try {
    const result = await userService.createOne(data);
    res.status(200).json({data: result});
    console.log("User inserted");
  } catch(err) {
    res.status(400).json({data: err})
    console.log("Problem in inserting user ", err);
  }
}

exports.update = async(req, res) => {
  const username = req.params.username;
  console.log("Update user with username:", username);
  const data = req.body;  
  try {
    const result = await userService.updateOne(data);
    res.status(200).json({data: result});
    console.log("Success in updating user: ", username)
  } catch(err){
    res.status(400).json({data: err})
    console.log("Problem in updating user: ", username);
  }
}

exports.delete = async(req, res) => {
  const username = req.params.username;
  console.log("Delete user: ", username);
  try {    
    console.log("Delete user: ", username);
    const result = await userService.deleteOne(username);
    res.status(200).json({data: result});
    console.log("Success in deleting user", username);
  } catch(err) {
    res.status(400).json({data: err})
    console.log("Problem in deleting user");
  }
}