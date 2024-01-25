const router = require("express").Router();
const { passwordgenerate } = require("../utils/pass");
router.get("/:name", (req, res, next) => {
  try {
    const result = passwordgenerate(
      req.params.name || req.query.name || req.body.name
    );
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.put("/:name", (req, res, next) => {
  try {
    ee;
    const result = passwordgenerate(
      req.params.name || req.query.name || req.body.name
    );
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.post("/:name", (req, res, next) => {
  try {
    const result = passwordgenerate(
      req.params.name || req.query.name || req.body.name
    );
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.patch("/:name", (req, res, next) => {
  try {
    const result = passwordgenerate(
      req.params.name || req.query.name || req.body.name
    );
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.delete("/:name", (req, res, next) => {
  try {
    const result = passwordgenerate(
      req.params.name || req.query.name || req.body.name
    );
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
