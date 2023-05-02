const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), "..", '.env')})
const SibApi = require("sib-api-v3-sdk")

SibApi.ApiClient.instance.authentications['api-key'].apiKey = process.env.SIB_API_KEY


const sendEmail = async(subject, url, user, templateId) => {
    return await new SibApi.TransactionalEmailsApi().sendTransacEmail({
        "sender": {"email": "tinkhealth@gmail.com", "name": "tinkhealth"},
        "subject": "Please verify your email address to continue",
        "templateId": 1,
        "params": {
            "name": "Erasmus Antwi",
            "url": "https://cryptocrewuniversity.com"
        },
        messageVersions: [
            {
                "to": [
                    {
                        "email": "refugedesigns17@gmail.com",
                        "name": "Erasmus Antwi",
                    }
                ]
            }
        ]
    })
}

module.exports = sendEmail
