const getSpoilagePrediction = require("../services/spoilageService");

exports.predictSpoilage = async (req, res) => {

    try {

        const result = await getSpoilagePrediction(req.body);

        res.json(result);

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};
