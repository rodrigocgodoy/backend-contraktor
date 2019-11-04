const Upload = require('../models/Upload')

module.exports = {
  async index(req, res) {
    return res.json({ message: 'OK' })
  },

  async store(req, res) {
    console.log(req.file);

    const { originalname: name, size, key, location: url = '' } = req.file;

    const contract = await Upload.create({
      name,
      size,
      key,
      url
    });

    return res.json(contract);
  }
}