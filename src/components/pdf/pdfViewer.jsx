import React, { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;

const PDFViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(600);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', maxWidth: '730px', height: 'auto', padding: '0', margin: '0' }}
    >
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} width={containerWidth} />
      </Document>
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button
          onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
          disabled={pageNumber === 1}
        >
          Previous
        </button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <button
          onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
          disabled={pageNumber === numPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;