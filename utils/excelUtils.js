import * as xlsx from 'xlsx';
export function getExcelData(resolvePath,sheetName){
    // Read the Excel file
    const workbook=xlsx.readFile(resolvePath);
    //get the sheet by name
    const targetSheetName= sheetName ||workbook.SheetNames[0];
    //Access the sheet
    const worksheet=workbook.Sheets[targetSheetName];
    //convert excel rows into JSON format
    const testData=xlsx.utils.sheet_to_json(worksheet);
    return testData;
}