const router = require("express").Router();
const {
  escriptiongenerator,
  descriptiongenerator,
} = require("../utils/description");
router.use("/", random);
router.get("/:name", (req, res) => {
  const result = descriptiongenerator(
    req.params.name || req.query.name || req.body.name
  );
  res.json({ msg: result });
});
router.put("/:name", (req, res) => {
  const result = descriptiongenerator(
    req.params.name || req.query.name || req.body.name
  );
  res.json({ msg: result });
});
router.post("/:name", (req, res) => {
  const result = descriptiongenerator(
    req.params.name || req.query.name || req.body.name
  );
  res.json({ msg: result });
});
router.patch("/:name", (req, res) => {
  const result = descriptiongenerator(
    req.params.name || req.query.name || req.body.name
  );
  res.json({ msg: result });
});
router.delete("/:name", (req, res) => {
  const result = descriptiongenerator(
    req.params.name || req.query.name || req.body.name
  );
  res.json({ msg: result });
});
