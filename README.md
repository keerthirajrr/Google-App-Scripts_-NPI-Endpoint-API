# 🩺 NPI Registry Lookup via Google Apps Script

This project is a simple **Google Apps Script Web App** that fetches healthcare provider details from the [NPI Registry API](https://npiregistry.cms.hhs.gov/api-page) using a given **NPI Number**.

## 🔧 How It Works

The script uses the built-in `UrlFetchApp` service to call the NPI Registry API and returns the JSON response to the user via a public web endpoint.

### 📦 Endpoint Sample

https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec?npiNumber=1234567890


> Replace `YOUR_DEPLOYMENT_ID` with your actual deployment ID.

### ✅ Input Parameter

| Parameter   | Type   | Description                    |
|-------------|--------|--------------------------------|
| `npiNumber` | String | 10-digit NPI number to lookup  |


🚀 How to Deploy
Open Google Apps Script.

Paste the code and Save.

Click Deploy > Manage deployments > New deployment.

Select "Web App":

Execute as: Me

Who has access: Anyone

Copy and share your Web App URL!

💡 Features
Google Apps Script + REST API

JSON output

Simple and fast healthcare provider lookup

Works on Google Sheets, forms, or custom apps

🔐 Notes
Ensure you have permissions set correctly to allow external users to access the web app.

Validate NPI inputs in your frontend if needed.


### 📤 API Response

Returns the complete JSON response from the NPI Registry API v2.1. Sample response:

```json
{
  "results": [
    {
      "number": 1234567890,
      "basic": {
        "first_name": "JOHN",
        "last_name": "DOE",
        "credential": "MD"
      },
      "addresses": [
        {
          "address_purpose": "LOCATION",
          "address_1": "123 MAIN ST",
          "city": "ANYTOWN",
          "state": "CA",
          "postal_code": "900011234"
        }
      ]
    }
  ]
}
