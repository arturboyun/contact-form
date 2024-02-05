import {JWT} from "google-auth-library";
import {GoogleSpreadsheet} from "google-spreadsheet";

const credentials = {
    "type": "service_account",
    "project_id": "au111-413414",
    "private_key_id": "f8f8ed9512fe5248853526c6d6d4ddd8c8d2dba4",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCcJKkf/ZbGHBX+\nPhbIUelWD1PL+3H9UDej2I/UfkUfm4EdcvkKTDZDUO6fkERENyttr3hxdxKa19PY\n+2kxitdniEcc+c10XjfP/xlHsVSZYwZLAfVCZOJMu6D9YIbszZlZ9AEHGfegcHXc\nczItfsoxOZ5niTzzJwU4EuUsldFZDtYIWOTqafdzyLNNLSjI+qDcNnhn/aNyCFGy\n+O3bDI4CSLcqENjxQj/nMEQVbj4l9KdwA7EomEmQ+IX9Ye7GrIKRnXN/WeNWQQT0\n7VJUNDXKdNuY/F2eN9uRIJgsWaaj/DtCaaVJfVrHyWCwT+R2236y1+eA+hlUkimB\nOtpcO2JVAgMBAAECggEAGNjBm/BZ14UdH9PIAtD8CUCPpFhLG5TyAa3it1zviXfQ\nnDvRMukNQnmEu1n07wj7bW0chKu+x2qcUL0zEFnobJZ0QIFkxwV+KqhMoMqwbGck\nV3fEjC/rDexWkjNTzSdrZXPNXRCuBbcXnkCrha9VI++oDBA75XJ6Y2GoW8esZFgX\nIhB7UpxRnuCAWy3WVPDDhN+qoZgSgL+0+B0Sw5jpAlukawG68m8v3jriltIh7Xga\nETzyObh1trhPbLMgvYHBnA44plDxNKf4kWm1MlffsN/ClWZafyMIrwq066NLZfiI\nags2J5Z5l/SwYiWXjbRKr1X+eDqvaZ6b51szCGPAgQKBgQDNewqfSVYalu8qigyB\n5YXLhGg+L+uhRb4ZzA06u8CTo57Uezha3ga4l5jYQl37wCQStSPkGU1cBfAWG2zb\nhE/MRsQp3sEBQlinXXYfcbpx3gG3ZgUMyV+WQxnZ5o/YBqWip79kbUP88l2AUhLl\nvs0+rAROBau9voR2bvYZ7xjU1QKBgQDCiFHdZe1GRWaaZrz59njkDkyyNpSJnk1I\nDXWS6WX+6rD17kRGkbK2Lihd0jk0ZaFDxSDtLqXJOgzSRNVeEIMptQoVQqnxb5tU\neA5yFk/pNIp5kLiDcUkSLTPuFr/+Sqn0yMyNvFoiDlcVHl9R3c6zBDOj7vU8B2nY\nHUtD/7UXgQKBgQDB7heHYDKoo70T+/hz/Ei7XLr5vkZ4DhetxzzRKvRFI067IZR9\nhkD3pPQ3XuPOv3gMQ/OcyxiM+nmuk7G4uHaLyFpJXhfwdUqwou/iG3cpEquyCNJJ\nUCEr8yaJ1iX6b8OR8Roc0VcyexguDMgTF3IkbTse3BFL4myoTm9s6JEaBQKBgAyk\nVUWhERlm+zL/iDpqVRLlBwDx4RdMbVNIZKKmflVhpRxmXpODdmy2dTMbrVIFZMSF\ntA0V4fpAxoKHrKIPSqbUOBKHoYmqKhsELlQltQ2/t1wNFqCcJRaET4KigdmhuofI\n4No5KlZaPjiGH8WvN3aUyFJX/iHnjW5ZAQIrRPaBAoGAcnWpv8u8dNtgVrrKhhRF\n91ZXlZP7nGdqFMHQz1xA7Q4GXXbTu3edztJZi7brFJockS+19aB/UZ1h6/vbSd3v\nlsZ8oiIWdZSnfcxzubKEuGLfaXDTaiYYnTCPVkz8dyWTwdM6rzxb4zxrRjycduDM\nY74LziwRTBBOIfMeO5PV26g=\n-----END PRIVATE KEY-----\n",
    "client_email": "au111-342@au111-413414.iam.gserviceaccount.com",
    "client_id": "114294625831735969920",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/au111-342%40au111-413414.iam.gserviceaccount.com",
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
    let body = await readBody(event)
    const doc = new GoogleSpreadsheet('1C464KutevY8WXcH_cjvobQZGO3AWxtv2u4xtWBZq5Mw', jwt);
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0];
    body['Name'] = body['name']
    body['Last Name'] = body['lastName']
    body['Birthday Date'] = body['birthdayDate']
    body['Passport Number'] = body['passportNumber']
    body['Passport Issue Date'] = body['passportIssueDate']
    body['Passport Issuer'] = body['passportIssuer']
    body['Street'] = body['street']
    body['House Number'] = body['houseNumber']
    body['Appartment'] = body['doorNumber']

    delete body['name']
    delete body['lastName']
    delete body['birthdayDate']
    delete body['passportNumber']
    delete body['passportIssueDate']
    delete body['passportIssuer']
    delete body['street']
    delete body['houseNumber']
    delete body['doorNumber']

    const rows = await sheet.addRows([
        body,
    ]);
    return {message: "ok"}
})
