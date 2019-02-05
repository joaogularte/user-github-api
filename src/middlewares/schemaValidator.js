module.exports = (Schema, method) => (req, res, next) => {
  const data = {
    params: req.params,
    query: req.query,
  };

  const validation = Schema[method](data);

  if (!validation.error) {
    req.joi = {
      params: validation.value.params || {},
      query: validation.value.query || {},
    };
    next();
  } else {
    res.status(400).send({ success: false, messages: validation.error.details });
  }
};
