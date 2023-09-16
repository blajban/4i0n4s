const relay = {
  pingSensorDemo: async (req, res) => {
    const message = "PING SENSOR DEMO";
    return res.json({
      data: {
        msg: message
      }
    });
  }
};

module.exports = relay;
