const express = require("express");
const {
  fetchAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
} = require("./accounts.controllers");

const router = express.Router();

router.get("/", fetchAccounts);
router.post("/", createAccount);
router.put("/:accountID", updateAccount);
router.delete("/:accountID", deleteAccount);

module.exports = router;
