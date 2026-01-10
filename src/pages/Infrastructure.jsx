import React from 'react'
import './Infrastructure.css'

function Infrastructure() {
  return (
    <div className="infrastructure">
      <section className="page-header">
        <div className="container">
          <h1>Infrastructure & Team</h1>
          <p>State-of-the-art facilities and expert professionals</p>
        </div>
      </section>

      <section className="infrastructure-content">
        <div className="container">
          <div className="infrastructure-section">
            <h2>Our Infrastructure</h2>
            
            <div className="infra-card">
              <div className="infra-icon">💻</div>
              <h3>Computer Systems</h3>
              <div className="infra-details">
                <div className="infra-item">
                  <h4>SERVER</h4>
                  <p>Pentium Xeon Processor with 4 GB RAM, 500 GB HDD, 17" LCD Colour Monitor, Windows Server 2003 - 1 No.</p>
                </div>
                <div className="infra-item">
                  <h4>Work Stations</h4>
                  <p>Pentium Work Station Computers with 2 GB RAM, 320 GB HDD, 21" LED Colour Monitor - 8 Nos, 18.5" LED Colour Monitor - 4 Nos, 2 GB Graphics Card, DVD-ROM Drive, Windows XP - 08 Nos.</p>
                </div>
              </div>
            </div>

            <div className="infra-card">
              <div className="infra-icon">🖨️</div>
              <h3>Plotter & Printers</h3>
              <div className="infra-details">
                <div className="infra-item">
                  <h4>HP500 DESIGNJET Plotter</h4>
                  <p>Mono/Colour Plotter - A0 SIZE (1200 DPI Mono, 600 DPI Colour) - 1 No</p>
                </div>
                <div className="infra-item">
                  <h4>PANASONIC ALL IN ONE PRINTER</h4>
                  <p>600 dpi - 1 No</p>
                </div>
              </div>
            </div>

            <div className="infra-card">
              <div className="infra-icon">⚡</div>
              <h3>Power Backup</h3>
              <div className="infra-details">
                <div className="infra-item">
                  <h4>5 KVA ONLINE UPS</h4>
                  <p>Uninterruptible Power Supply with 12 hrs. backup - 1 No</p>
                </div>
                <div className="infra-item">
                  <h4>2 KVA OFFLINE UPS</h4>
                  <p>Uninterruptible Power Supply with 2 hrs. backup - 1 No</p>
                </div>
              </div>
            </div>

            <div className="infra-card">
              <div className="infra-icon">🌐</div>
              <h3>Network & Internet</h3>
              <div className="infra-details">
                <div className="infra-item">
                  <h4>Cisco 24 port Router</h4>
                  <p>With 10/100 MBPS capacity - 1 No</p>
                </div>
                <div className="infra-item">
                  <h4>ADSL Broadband Connection</h4>
                  <p>512 KBPS - 1 No</p>
                </div>
              </div>
            </div>

            <div className="expansion-note">
              <p>
                <strong>Note:</strong> DAV ENGINEERING has provision and capacity to 
                increase the Computer Systems to 15 no's also. For future expansion in 
                office, we have more than 2000 sqft space with power.
              </p>
            </div>
          </div>

          <div className="team-section">
            <h2>Our Team Structure</h2>
            
            <div className="departments-grid">
              <div className="department-card">
                <h3>Technical Department</h3>
                <ul>
                  <li>Design & Development Department</li>
                  <li>2D Drafting Department</li>
                  <li>3D Modeling Department</li>
                  <li>Programming Department</li>
                  <li>Quality Control Department</li>
                </ul>
              </div>

              <div className="department-card">
                <h3>Management Department</h3>
                <ul>
                  <li>Marketing Department</li>
                  <li>Accounts Department</li>
                  <li>Maintenance Department (Hardware)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="personnel-section">
            <h2>Personnel Details</h2>
            
            <div className="personnel-summary">
              <div className="summary-card">
                <h3>Total Employees</h3>
                <p className="summary-number">16 Nos.</p>
              </div>
            </div>

            <div className="personnel-breakdown">
              <div className="breakdown-card">
                <h3>Senior Consultants</h3>
                <ul>
                  <li>Sr. Consultants - Piping (Full & Part Time) - <strong>02</strong></li>
                  <li>Sr. Consultant - Structural (Full Time) - <strong>01</strong></li>
                  <li>Sr. Consultant - Process (Part Time) - <strong>01</strong></li>
                  <li>Sr. Consultant - Instrumentation/ Electrical - <strong>01</strong></li>
                </ul>
              </div>

              <div className="breakdown-card">
                <h3>Design Engineers</h3>
                <ul>
                  <li>Design Engineers with Piping Expertise - <strong>03</strong></li>
                  <li>Design Engineer with Structural Expertise - <strong>02</strong></li>
                </ul>
              </div>

              <div className="breakdown-card">
                <h3>Support Staff</h3>
                <ul>
                  <li>Draughtsman/Detailers - Piping/ RCC & Steel - <strong>08</strong></li>
                  <li>Personnel exclusively employed for QC/ Inspection - <strong>02</strong></li>
                </ul>
              </div>

              <div className="breakdown-card">
                <h3>Future Expansion</h3>
                <ul>
                  <li>Availability of personnel for future expansion - <strong>10</strong></li>
                </ul>
              </div>
            </div>

            <div className="qualifications-section">
              <h3>Qualification Requirements</h3>
              <div className="qual-card">
                <h4>CAD Draughtsman & Supervisory Staff</h4>
                <p>B.E./Diploma with 1-5 yrs of experience in CAD Drafting & Design environment.</p>
              </div>
              <div className="qual-card">
                <h4>Quality Control Manager and Inspection Staff</h4>
                <p>B.E./Diploma with min. 5-10 yrs of experience in Quality Inspection grade in Design/CAD environment.</p>
              </div>
              <div className="qual-card">
                <h4>Future Expansion</h4>
                <p>
                  For future expansion there is provision for incorporating more than 6 computers 
                  of the latest configuration with sufficient Power, Space and Manpower.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Infrastructure

