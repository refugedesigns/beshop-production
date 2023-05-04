const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), "..", '.env')})
const SibApi = require("sib-api-v3-sdk")

SibApi.ApiClient.instance.authentications['api-key'].apiKey = process.env.SIB_API_KEY


const sendEmail = async({subject, url, user, templateId}) => {
    return new SibApi.TransactionalEmailsApi().sendTransacEmail({
        "sender": {"email": "tinkhealth@gmail.com", "name": "GoShop"},
        "subject": subject,
        "templateId": templateId,
        "params": {
            "name": "Erasmus Antwi",
            "url": url 
        },
        messageVersions: [
            {
                "to": [
                    {
                        "email": user.email,
                        "name": user.firstName,
                    }
                ]
            }
        ]
    })
}

module.exports = sendEmail
