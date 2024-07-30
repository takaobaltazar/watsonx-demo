const axios = require("axios");

module.exports = function () {
    this.before("CREATE", "Incident", async (req) => {
        // 1st call for Get Token
        try {
            const urlGetToken = "https://iam.cloud.ibm.com/identity/token";
            const params = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            };
            const body = {
                "grant_type": "urn:ibm:params:oauth:grant-type:apikey",
                "apikey": "IRQ_7U2r7Jj5OM8boznrqjHRQFYTI0ZH4sC30zAOCJDO",
            }

            const { data } = await axios.post(urlGetToken, body, params);

            // 2nd call to get classification from Watson X
            const urlClassify = "https://jp-tok.ml.cloud.ibm.com/ml/v1/deployments/4a07ded0-1546-4f74-8c83-b305247b42d2/text/generation?version=2021-05-01";
            const paramsClassify = {
                headers: {
                    "Authorization": `Bearer ${data?.access_token}`,
                    "Content-Type": "application/json"
                }
            }

            const classifyResult = await axios.post(urlClassify, { input: req?.data?.description }, paramsClassify);

            req.data.tags = classifyResult?.data?.results[0]?.generated_text;
        } catch (e) {
            req.error(`An error occured due to ${e.message}`);
        }
    });
}