const router = require("express").Router();
const { descriptiongenerator } = require("../utils/description");
router.get("/:name", (req, res) => {
  try {
    e;
    const result = descriptiongenerator(
      req.params.name || req.query.name || req.body.name
    );
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.put("/:name", (req, res, next) => {
  try {
    s;
    const result = descriptiongenerator(
      req.params.name || req.query.name || req.body.name
    );
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.post("/:name", (req, res, next) => {
  try {
    rr;
    const result = descriptiongenerator(
      req.params.name || req.query.name || req.body.name
    );
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.patch("/:name", (req, res, next) => {
  try {
    const result = descriptiongenerator(
      req.params.name || req.query.name || req.body.name
    );
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.delete("/:name", (req, res, next) => {
  try {
    const result = descriptiongenerator(
      req.params.name || req.query.name || req.body.name
    );
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
