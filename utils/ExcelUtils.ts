import xlsx from 'xlsx'

export class ExcelUtils{

    // filePath - 
    // sheetName - 

    static getExcelData(filePath : string, sheetName: string){
        // Excel sheet 
        try{
            const workbook = xlsx.readFile(filePath)
            const sheet = workbook.Sheets[sheetName]
            const jsonData = xlsx.utils.sheet_to_json(sheet)
            return jsonData
        }
        catch(error){
            console.log("File not found ", filePath);
            console.log(error);
        }

    }

}

// 

