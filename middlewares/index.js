const Newsletter = require("../models/newsletter");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createNewsLetter = (req, res) => {
  if (req.body.title && req.body.body) {
    const data = {
      title: req.body.title,
      body: req.body.body,
      createdAt: Date.now(),
      newsletter_id: getRandomInt(1000, 9999)
    };

    Newsletter.insert(data, (err, docs) => {
      if (err) {
        res.status(400).json({
          message: err.message
        });
      } else {
        res.status(201).json({
          newsletter: docs
        });
      }
    });
  } else {
    res.status(400).json({
      message: err.message
    });
  }
};

const fetchAllNewsletter = (req, res) => {
  Newsletter.find()
    .sort({ createdAt: -1 })
    .exec((err, docs) => {
      if (err) {
        res.status(400).json({
          message: err.message
        });
      } else {
        res.status(200).json({
          newsletters: docs
        });
      }
    });
};

const fetchSingleNewsletter = (req, res) => {
  Newsletter.findOne(
    { newsletter_id: parseInt(req.params.newsletter_id, 10) },
    (err, doc) => {
      if (err) {
        res.status(400).json({
          message: err.message
        });
      } else {
        res.status(200).json({
          newsletter: doc
        });
      }
    }
  );
};

module.exports = {
  fetchAllNewsletter,
  fetchSingleNewsletter,
  createNewsLetter
};
