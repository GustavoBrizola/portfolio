import React, {useState} from "react";

// react-pdf stuff
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default
function PdfViewer(props) {

    const {
        file,
        pages,
        textSelect = false
    } = props

    // Get number of pages from file
    const [numPages, setNumPages] = useState(null);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    const pagesToRender = pages || Array.from({ length: numPages }, (_, i) => i + 1);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', margin: '20px 0', width:'100%'}}>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                {pagesToRender.map((pageNumber) => (
                    <Page 
                        key={`page_${pageNumber}`}
                        pageNumber={pageNumber} 
                        renderTextLayer={textSelect}
                        renderAnnotationLayer={false}
                        width={window.innerWidth > 800 ? 600 : window.innerWidth * 0.9}
                    />
                ))}
            </Document>
        </div>
    )
}