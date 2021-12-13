import React from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import ResumePDF from "../content/CV-EmileG-EN.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
    return (
        <div className="flex flex-col items-center justify-center text-white" style={{ background: '#1D3557' }}>

            <div className="flex-1 ml-2 mb-5 text-sm">
                <span className="pr-1">
                    <a href='/'>
                        <button style={{ background: '#E63946' }} className="px-10 py-3 text-xl uppercase rounded-lg m-5">
                            Go Back
                        </button>
                    </a>
                </span>
                <span className="pl-1">
                    <a href={ResumePDF} download>
                        <button style={{ background: '#E63946' }} className="px-10 py-3 text-xl uppercase rounded-lg m-5">
                            Download
                        </button>
                    </a>
                </span>
            </div>
            <Document file={ResumePDF} className="mb-5">
                <Page pageNumber={1} scale={1.5} />
            </Document>
        </div>
    )
}