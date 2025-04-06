function doGet(e) {
  var npiNumber = e.parameter.npiNumber;
  var apiUrl = 'https://npiregistry.cms.hhs.gov/api/?number=' + npiNumber + '&version=2.1';

  var response = UrlFetchApp.fetch(apiUrl);
  var data = response.getContentText();

  return ContentService.createTextOutput(data).setMimeType(ContentService.MimeType.JSON);
}
