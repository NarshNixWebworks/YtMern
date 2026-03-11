import fs from "fs/promises";
import pdfParse from "pdf-parse/lib/pdf-parse.js"; // ✅ skips the buggy part

/**
 * @param {string} filePath - path to the PDF file
 * @returns {Promise<{text: string, numPages: number, info: object}>}
 */

export const extractTextFromPDF = async (filePath) => {
  try {
    const dataBuffer = await fs.readFile(filePath); // step 1: read the file
    const data = await pdfParse(dataBuffer); // step 2: parse the PDF

    return {
      text: data.text, // all the text inside the PDF
      numPages: data.numpages, // total number of pages
      info: data.info, // metadata like title, author, etc.
    };
  } catch (e) {
    console.error("PDF parsing error: ", e);
    throw new Error("Failed to extract text from PDF");
  }
};
