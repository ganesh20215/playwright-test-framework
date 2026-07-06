

import * as xlsx from "xlsx";

export class ExcelReader {
  
    static readExcel(filePath : string, sheetName : string) : any[]{

        //read workbook
        const wb = xlsx.readFile(filePath);

        //select sheet
        const sh = wb.Sheets[sheetName];

        //convert into json
        const data = xlsx.utils.sheet_to_json(sh);

        return data;

    }

}