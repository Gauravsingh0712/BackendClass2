// import the model
const Todo = require("../models/Todo");

//define route handler
exports.getTodo = async (req, res) => {
  try {
    //fetch all todo data from the database
    const todos = await Todo.find({});

    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo data is fetched",
    });
  } catch (error) {
    // if some error comes while fetching data
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    //fetch todo by id from the database
    const id = req.params.id;
    const todos = await Todo.find({ _id: id });

    //data for given id is not found
    if (!todos) {
      return res.status(404).json({
        success: false,
        message: "no data is found for the given id",
      });
    }
    //data for given id is found
    res.status(200).json({
      success: true,
      data: todos,
      message: `todo ${id} data successfully fetched`,
    });
  } catch (error) {
    // if some error comes while fetching data
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};
