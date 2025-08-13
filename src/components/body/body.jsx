import React, { useEffect, useState } from 'react';
import PDFViewer from '../pdf/pdfViewer.jsx';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './body.css';


const Body = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <section className='sec1'>
        <div className={show ? 'intro fade-rigth' : 'intro'}>
          <h2>Hi all, im Gerson</h2>
          <p>I specialize in creating precise, code-compliant
            construction documentation using Autodesk Revit
            and AutoCAD. My work bridges architectural design
            and structural detailing, delivering clear, buildable
            drawings that meet industry standards. From 3D modeling
            to detailed plans, sections, and schedules, I focus on
            accuracy, clarity, and coordination to ensure seamless
            communication between architects, engineers, and contractors.</p>
        </div>
        <DotLottieReact
          src="https://lottie.host/f135ce37-8411-4386-9f62-1ba57f8cca4a/tNTKxNSUCw.lottie"
          autoplay
          loop
          className={show ? '' : ''}
        />
      </section>
      <section className='sec2'>
        <h2 className={show ? 'fade-in' : 'out'}>Skills</h2>
        <ul className={show ? 'skills-list fade-rigth' : 'skills-list'}>
          <li>Accuracy in technical documentation.</li>
          <li>Proficiency in Revit for 3D modeling and view creation.</li>
          <li>AutoCAD expertise for technical detailing.</li>
          <li>Building code interpretation.</li>
          <li>Coordination between architectural design and structural requirements.</li>
          <li>Attention to detail in drawings and specifications.</li>
        </ul>
        <h2 className={show ? 'fade-in' : 'out'}>Deliverables</h2>
        <ul className={show ? 'skills-list fade-rigth' : 'skills-list'}>
          <li>Site Plan showing property boundaries, access points, and orientation.</li>
          <li>Architectural Elevations: front, rear, and side views.</li>
          <li>Floor Plans</li>
          <li>Structural plans: Foundation and Framing Plans</li>
          <li>Contruction Details</li>
        </ul>
        <h2 className={show ? 'fade-in' : 'out'}>Gallery</h2>
        <p>Here you have some of the works i have done</p>
        <ul className='gallery-list'>
          <li><PDFViewer file="sample.pdf" /></li>
          <li><PDFViewer file="sample-1.pdf" /></li>
          <li><PDFViewer file="sample-2.pdf" /></li>
        </ul>


      </section>
    </main>
  );
};

export default Body;