const meaningCloud = "https://api.meaningcloud.com/sentiment-2.1";
const axios = require("axios");

const analyze = async (url, API) => {
    try {
        const response = await axios.get(`${meaningCloud}?key=${API}&url=${url}&lang=en`);
        const { code, msg } = response.data.status;

        if (code === 100 || code === 212) {
            // Handle error cases
            return handleError(code, msg);
        } else {
            // Extract relevant data from the response
            const { agreement, subjectivity, confidence, score_tag, irony } = response.data;

            // Create a sample object with extracted data
            const sample = {
                agreement,
                subjectivity,
                confidence,
                score_tag,
                irony
            };

            // Create a result object containing the sample data and code
            const result = {
                sample,
                code
            };

            return result;
        }
    } catch (error) {
        // Handle any network or other errors
        return handleError(500, "An error occurred while processing the request.");
    }
};

const handleError = (code, msg) => {
    return {
        code,
        msg
    };
};

module.exports = { analyze };
