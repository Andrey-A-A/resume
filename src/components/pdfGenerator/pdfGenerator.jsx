import { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import Aside from '../acide/aside';
import Content from '../content/content';

const PdfGenerator = () => {
  const contentRef = useRef();

  const generatePdf = () => {
    const element = contentRef.current;
    const opt = {
      margin:       0,
      filename:     'Frontend разработчик Анисимов.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div>
      <div ref={contentRef}>
        <>
        <div className='cv'>
          <div className="wrap">
            <Aside />
            <Content generatePdf={generatePdf} />
          </div>
        </div>
        </>
      </div>
      
    </div>
  );
};

export default PdfGenerator;