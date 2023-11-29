require("dotenv").config()
const express = require("express")
const xlsx = require("xlsx")
const path = require("path")
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.get("/", (req, res) => {
    const filePath = path.join(__dirname,"output.xlsx")

    // Use Fetch API to get the file
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    res.json(data)
})

app.listen(5000, () => console.log(`Server started on PORT: ${PORT}`))