const axios = require("axios");
const { AI_URL, API_KEY } = require("../config/aiConfig");

async function getSpoilagePrediction(data) {

    try {

        const response = await axios.post(
            AI_URL,
            data,
            {
                headers: {
                    "api-key": API_KEY,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data;

    } catch (error) {

        console.error("AI Error:", error?.response?.data || error.message);
        throw new Error("AI prediction failed");
    }
}

module.exports = getSpoilagePrediction;
