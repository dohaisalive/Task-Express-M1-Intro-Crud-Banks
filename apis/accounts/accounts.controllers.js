const Account = require("../../database/models/Account");

exports.fetchAccounts = async (request, response) => {
  try {
    const accounts = await Account.find();
    //Customize the attributes so that createdAt and updatedAt are excluded.
    response.status(200).json(accounts);
  } catch (error) {
    response.status(500).json(error);
  }
};

exports.createAccount = async (request, response) => {
  try {
    const newAccount = await Account.create(request.body);
    response.status(201).json(newAccount);
  } catch (error) {
    response.status(500).json(error);
  }
};

exports.updateAccount = async (request, response) => {
  try {
    const accountID = request.params.accountID;
    const foundAccount = await Account.findById(accountID);
    if (foundAccount) {
      await Account.findByIdAndUpdate(accountID, request.body);
      response.status(204).end();
    } else {
      response.status(404).json({ message: "account not found" });
    }
  } catch (error) {
    response.status(500).json(error);
  }
};

exports.deleteAccount = async (request, response) => {
  try {
    const accountID = request.params.accountID;
    const foundAccount = Account.findById(accountID);

    if (foundAccount) {
      await Account.remove(foundAccount);

      response.status(204).end();
    } else {
      response.status(404).json({ message: "not found" });
    }
  } catch (error) {
    response.status(500).json(error);
  }
};
