const router = require("express").Router();
const { encryptpw } = require("../utils/password");

router.get("/:name", (req, res) => {
  const result = encryptpw(req.params.name || req.query.name || req.body.name);
  res.json({ msg: result });
});

router.put("/:name", (req, res) => {
  const result = encryptpw(req.params.name || req.query.name || req.body.name);
  res.json({ msg: result });
});

router.post("/:name", (req, res) => {
  const result = encryptpw(req.params.name || req.query.name || req.body.name);
  res.json({ msg: result });
});

router.patch("/:name", (req, res) => {
  const result = encryptpw(req.params.name || req.query.name || req.body.name);
  res.json({ msg: result });
});

router.delete("/:name", (req, res) => {
  const result = encryptpw(req.params.name || req.query.name || req.body.name);
  res.json({ msg: result });
});

module.exports = router;
