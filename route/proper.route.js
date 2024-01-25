const router = require("express").Router();
const { propercase } = require("../utils/password");

router.get("/:name", (req, res, next) => {
  try {
    111;
    const result = propercase(
      req.params.name || req.query.name || req.body.name
    );
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.put("/:name", (req, res, next) => {
  try {
    e;
    const result = propercase(
      req.params.name || req.query.name || req.body.name
    );
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.post("/:name", (req, res, next) => {
  try {
    e;
    const result = propercase(
      req.params.name || req.query.name || req.body.name
    );
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.patch("/:name", (req, res, next) => {
  try {
    rr;
    const result = p;
    propercase(req.params.name || req.query.name || req.body.name);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.delete("/:name", (req, res) => {
  const result = propercase(req.params.name || req.query.name || req.body.name);
  res.json({ msg: result });
});

module.exports = router;
