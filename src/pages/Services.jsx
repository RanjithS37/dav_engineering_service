import React, { useState } from 'react'
import './Services.css'
import View3D from '../assets/images/3d_view.png'

function Services() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="services">
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive Engineering Solutions</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-intro">
            <p>
              DAV Engineering is committed to provide its customers with a broad spectrum 
              of service delivery. This includes providing superior services with excellent 
              quality, using a balanced mix of experience, knowledge, technology, innovation, 
              and "smart" work to the current and future business needs of our clients.
            </p>
          </div>

          <div className="service-section">
            <div className="service-card large">
              <div className="service-icon">
                <img
                  src={View3D}
                  alt="3D piping model overview"
                  className="service-image"
                  loading="lazy"
                  role="button"
                  tabIndex={0}
                  aria-haspopup="dialog"
                  onClick={() => setModalOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setModalOpen(true)
                    }
                  }}
                />
              </div>
              <h2>Piping Design and Detailing</h2>
              <p className="service-description">
                Piping Design and detailing is offered for the Industries like Process, 
                Oil & Gas, Chemical, Petrochemical, Power, Refinery, Fertilizer, 
                Pharmaceutical, Steel, Paper and Pulp.
              </p>
              <div className="service-features">
                <h3>Our Piping Services Include:</h3>
                <ul>
                  <li>Piping Plot plan and development</li>
                  <li>Pipe Routing and Sizing</li>
                  <li>Preparation of Scheme Layout</li>
                  <li>Extraction of Isometric</li>
                  <li>BOM generation</li>
                  <li>Detailed Design - Drawings for production and execution</li>
                  <li>Pipe Stress analysis - Static</li>
                  <li>3D Modeling using PDMS, PDS, etc.</li>
                  <li>Pipe support Detail Engineering</li>
                  <li>As-built Engineering</li>
                  <li>PMC Services [Project Management Consultancy]</li>
                </ul>
              </div>
            </div>

            <div className="service-card large">
              <div className="service-icon">🏗️</div>
              <h2>Structural Design and Detailing</h2>
              <p className="service-description">
                Structural steel detailing is offered for Industrial Projects, Refinery & 
                Petrochemical Projects, Power Plants, Institutional Buildings, Boiler 
                Support Structure, Conveyer structure, Tower Projects, Bridges, Platforms, 
                Technological structures, Pipe Racks & Pipe supports.
              </p>
              <div className="service-features">
                <h3>Our Structural Services Include:</h3>
                <p>
                  DAV ENGINEERING provides state of the art solution using AutoCAD, 
                  MICROSTATION, TEKLA (X-STEEL), STAAD-PRO, for:
                </p>
                <ul>
                  <li>Structural design (RCC & Steel)</li>
                  <li>Steel detailing</li>
                  <li>Shop drawing</li>
                  <li>Checking</li>
                  <li>Bill of Material</li>
                  <li>3D modeling using above CAD tools</li>
                  <li>As-built preparation, Revision and updation</li>
                  <li>Complete bills of materials for structural steel, miscellaneous steel, 
                      Gusset plates, Bracings, joints and parts lists</li>
                </ul>
              </div>
            </div>

            <div className="service-card large">
              <div className="service-icon">🏭</div>
              <h2>Plant Design Solutions (E3D/S3D Services)</h2>
              <p className="service-description">
                DAV offers comprehensive Plant Design Solutions using PDMS/ SP3D. We offer 
                Services to EPC's for the complete range of 3D Plant Engineering Solutions.
              </p>
              <div className="service-features">
                <h3>Our Plant Design Services Include:</h3>
                <ul>
                  <li>Detailed Engineering and 3D Plant Modeling</li>
                  <li>Specification management</li>
                  <li>Structural Modeling (Frame works)</li>
                  <li>Equipment Modeling</li>
                  <li>Electrical raceway modeling</li>
                  <li>Piping Modeling and ISO generation with MTO and General Arrangement Drawing</li>
                  <li>Plant Evaluation/ Optimization</li>
                  <li>Debottlenecking</li>
                </ul>
              </div>
            </div>

            <div className="service-card large">
              <div className="service-icon">💻</div>
              <h2>CAD/CAM/CAE Services</h2>
              <p className="service-description">
                DAV ENGINEERING SERVICES offers services with the state-of-the-art 
                infrastructure and technology using Software's such as CATIA, Solid Works, 
                Ansys, AutoCAD & MicroStation.
              </p>
              <div className="service-features">
                <h3>Our CAD/CAM/CAE Services Include:</h3>
                <ul>
                  <li>Legacy 3D MODEL & CAD conversion of Mechanical, Civil, Structural, 
                      Electrical and Instrumentation drawings</li>
                  <li>2D to 3D Modeling (Parametric)</li>
                  <li>Product Design & Development</li>
                  <li>Reverse Engineering</li>
                  <li>Finite Element Analysis - CAE (Stress, Dynamic & Thermal)</li>
                  <li>Exploded views of Assemblies</li>
                  <li>Raster to Vector Conversion</li>
                </ul>
              </div>
            </div>

            <div className="service-card large">
              <div className="service-icon">👨‍💼</div>
              <h2>Manpower Consultancy</h2>
              <p className="service-description">
                DAV ENGINEERING HR department is managed by a team of professionals who 
                have the adequate experience in identifying & short-listing the potential 
                candidates as per specific client requirements. We have designed our services 
                for the clients in a systematic manner so as to respond within clearly 
                specified time frame and we strive hard to achieve this through honest and 
                ethical practices.
              </p>
              <p className="service-description">
                DAV ENGINEERING always works in partnership with their clients to provide 
                first class solutions for their manpower requirements.
              </p>
              <div className="service-features">
                <h3>Our Manpower Services Include:</h3>
                
                <div className="service-offering">
                  <h4>1. Contract Staffing</h4>
                  <p>
                    Under this offering, DAV ENGINEERING would depute, at clients' site, 
                    its Human Resources, for a monthly fee that has been agreed with the client.
                  </p>
                </div>

                <div className="service-offering">
                  <h4>2. Permanent Placement</h4>
                  <p>
                    This service will offer a pure "search and place" service to the client. 
                    Our service include handling the entire process of meeting the client's 
                    requirements till the timely delivery of resources to client's. The charges 
                    for this service will be 8.33% of the candidate's gross annual salary.
                  </p>
                  <h5>The Process involves:</h5>
                  <ul>
                    <li>Short-listing of CVs as per client's specifications & requirements</li>
                    <li>Conducting preliminary interviews in order to ascertain the capacity 
                        of applicants (as per details furnished by them in their CVs)</li>
                    <li>Closely reviewing applicant's, I.Q, attitude & physical appearance</li>
                    <li>Forward a complete set of CVs of candidates to clients for their 
                        review and evaluation</li>
                  </ul>
                </div>

                <div className="service-offering">
                  <h4>3. Our Responsibilities</h4>
                  <ul>
                    <li>As we are committed to our clients to provide manpower of best quality 
                        and according to the standard of their requirements, the candidates 
                        provided by us are guaranteed for their professional competency</li>
                    <li>In case of any candidate selected by us failing to meet the client's 
                        requirements after employment, we shall replace him with another 
                        candidate at our cost</li>
                    <li>Any other guarantee, as per specific requirement and satisfaction of 
                        our client would also be provided</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close">✕</button>
            <img src={View3D} alt="3D view large" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Services


