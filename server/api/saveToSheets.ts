import {JWT} from "google-auth-library";
import {GoogleSpreadsheet} from "google-spreadsheet";

const credentials = {
    "type": "service_account",
    "project_id": "lithe-maker-287913",
    "private_key_id": "54f40f725bc15d140417987b8576dd01cbcdf361",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC10Z28np9k00Gj\nqNsfCQSpiB0Yx1puyu/1ZQ4EHs7LTYJZ1PaBEDs96VbxQzqnWaPp1nIG9Pj+Umgj\n2gpx41ZWNfgssrdqJZkuJwH03kjdBh4L5m9w9yrmsILhNOuFfilnlbe0DYgWJqPC\nl99s+fzTs0Tkb/wLNTpCxiWlwWXAoymURnuvgaNvPp4e7MEt95q78m8U1ZEtQb6f\n3hLfOjM653bQyJ1Uv6tHIzlgVF7BFW2f0TBrUl/xxdEJ0TnT2iEjUmLuUjZ08Bmq\nhFWYbwaudb38b9HlyqfhRVZecRjo7krDRVygmjwrp111vG5GXavK9rJTheomK4dr\nxZ5cafr1AgMBAAECggEAElzC6DGB6goe4zMyvBHqV1/QhnfdtXpH3TnxPi/JVUV0\n8HMeWR8FSKWn+vI9+nhGYl+ewP6dJfw3GcXTz7g0uDy3nXYIKY92Bq/4Vd1cMPxE\n7RE++ILx4X36ndl9HsyEzHoVpTjHoWsSF11EuooNw2ijwMlhhFVCFsvRsgmT5+42\nvmS7XEiLLrrOsLFcatQ/z7630ce4JoQKNZnxOCb2iyWUHR0C8fgk66SOvi5U7oic\nG5Of1yTTQiQykzzt9T0cl6Is8fpLTBfqCzHnl3IU/HJbfcIx3D1WTJtiBSAPmnuM\nrzkwSqX3CASRMM4fwMlitLEKk7sh64B8P/hSbAjkyQKBgQDvDBYmlIU6y7Yf8evj\nLfh++SPB+wUXs8yxrPqhvYBs1m0PFP+PESZpY5baP33gRaBbYBELGCee6B6IY2oc\nJ7YvMx9jy7cH76RN2hkLnmI3qSA5P9prPR8/6WH7fSVLRTWOVJglodqI97axuhGN\nTWFxnKZuGjiS3hqA/xnSUinBSQKBgQDCtouaSkOMbzPFlcU7Kv2G4UFkgxC7I/2n\nDkkzdL2u/PEs3izI4GBgP+mIL3cF0l/1EaWnkoPhsWHeJJlouHdhStwYAkWToRtn\nmGBtwAHJv/YhnDF4yDQuAHezFb2G7zmObIjvLScKaaty0Ey5gVHhRsv8raght4pH\n0jA5mdwYTQKBgDhPcpBYACJfhmF0DYsQcy8F5UR2qzZwJlHcW5XqG+yHfl1FJwY+\nlfvRd+GlfzNrc2DS+nDQmdS2/SpHsOE9AY+QzV4myNDXxK6KJ8gy4RQXhP23au5E\nEa5ufaROUJCwlvMWPljvDZmiMKkhGa1dgwzOR+47wwPlyfyFG0IOFMPxAoGBAInj\nkktqahmqqoQzQyBamn4JSTDv7EpK+5dxc39gHfAtKnI2yIpc84NV34DU9DoIOHIp\n1CEujfynjIIvcwCJGemphOHvwewBPJIJg8hVIC8KpTg6D4LUbLdjF2GYdMZ45U6q\nJ/MRC8PA/2xofN0l6qFZbJ39MMLn4qJoBETWY9pFAoGAZ31eIM8ZBV+fhMw4CVRy\n83Yr/mefkhzd4SNXBYZoYBpTH6BVegUnjkEZW78V8ljpi9lsVS2J1jqxgeVHXbXz\ngoGdx2wKay5LFYC77Ib1bCjWo3HM3F1olXbZngVBRGt+5kBG6alSbsWrX+wJFcze\np88EGUJ5J9R840RcFUOVZTI=\n-----END PRIVATE KEY-----\n",
    "client_email": "test-786@lithe-maker-287913.iam.gserviceaccount.com",
    "client_id": "113019551008001530582",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/test-786%40lithe-maker-287913.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}

const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
];

const jwt = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: SCOPES,
});
export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const doc = new GoogleSpreadsheet('1C464KutevY8WXcH_cjvobQZGO3AWxtv2u4xtWBZq5Mw', jwt);
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.addRows([
        body,
    ]);
    return {message: "ok"}
})
