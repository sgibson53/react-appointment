const { Appointment, Slot } = require('../models/index');
const slotController = {
  all (req, res) {
    // Returns all Slots
      Slot.find({})
          .exec((err, slots) => res.json(slots))
  }
};

module.exports = slotController;