import React from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import ResumePDF from "../content/CV-EmileG-EN.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
    return (
        <div className="flex flex-col items-center justify-center" style={{ background: '#1D3557' }}>
            <a href={ResumePDF} download>
                <button style={{ background: '#E63946' }} className="px-10 py-3 text-xl uppercase rounded-lg m-5">
                    Download
                </button>
            </a>
            <Document file={ResumePDF} className="rounded-md mb-5">
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}