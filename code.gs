function sendEmails() {

var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var lastRow = sheet.getLastRow();
var lastCol = sheet.getLastColumn();
var range = sheet.getRange(1,1,lastRow,lastCol).getValues();
var rowLength = sheet.getRange(1,1,lastRow).getValues();

//create a loop to send emails to all on list
for(i = 1; i <= rowLength.length; i++) {

// Grab date from each row 
 let row = sheet.getRange(i,1,1,2).getValues();
 let rec = row[0]
 
//  Create a prospect object
 let prospect = {
    name: rec[0],
    email: rec[1]
    };
  
//    Get template from HTML file
  let templ = HtmlService
      .createTemplateFromFile('email');
  
//  Define variables in template
  templ.prospect = prospect;
  let message = templ.evaluate().getContent();
  
   MailApp.sendEmail({
    to: prospect.email,
    subject: "Your email subject goes here",
    htmlBody: message
  }); 
  
}
  
}
