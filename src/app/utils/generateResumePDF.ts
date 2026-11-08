import { jsPDF } from 'jspdf';
import { resume, bio } from '../data/portfolioData';

export function generateResumePDF() {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let yPosition = 20;

  // Helper function to add text with automatic line wrapping
  const addText = (text: string, fontSize: number, isBold: boolean = false, maxWidth?: number, xPos?: number) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    
    const effectiveWidth = maxWidth || pageWidth - 2 * margin;
    const lines = doc.splitTextToSize(text, effectiveWidth);
    
    lines.forEach((line: string) => {
      // Check if we need a new page
      if (yPosition > doc.internal.pageSize.getHeight() - 20) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(line, xPos !== undefined ? xPos : margin, yPosition);
      yPosition += fontSize * 0.5;
    });
  };

  const addSpace = (space: number = 5) => {
    yPosition += space;
  };

  // Header - Two column layout
  const headerStartY = yPosition;
  
  // Left column - Name, Title, Location
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(bio.name, margin, yPosition);
  yPosition += 24 * 0.5;
  
  // Reduce gap by 4px (was 3, now -1)
  addSpace(-1);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(bio.tagline, margin, yPosition);
  yPosition += 12 * 0.5;
  
  addSpace(2);
  doc.setFontSize(10);
  doc.text('London, UK', margin, yPosition);
  
  // Right column - Contact info (aligned to right)
  const rightColumnX = pageWidth - margin;
  let contactY = headerStartY;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  // Website
  const websiteText = 'www.damilolaodulesi.com';
  const websiteWidth = doc.getTextWidth(websiteText);
  doc.text(websiteText, rightColumnX - websiteWidth, contactY);
  contactY += 10 * 0.5;
  addSpace(2);
  
  // Email
  const emailText = 'damilolaodulesi@gmail.com';
  const emailWidth = doc.getTextWidth(emailText);
  doc.text(emailText, rightColumnX - emailWidth, contactY);
  contactY += 10 * 0.5;
  addSpace(2);
  
  // LinkedIn
  const linkedinText = 'linkedin.com/in/damilola-odulesi-7271a816a';
  const linkedinWidth = doc.getTextWidth(linkedinText);
  doc.text(linkedinText, rightColumnX - linkedinWidth, contactY);
  contactY += 10 * 0.5;
  addSpace(2);
  
  // Behance
  const behanceText = 'behance.net/damilolaodulesi';
  const behanceWidth = doc.getTextWidth(behanceText);
  doc.text(behanceText, rightColumnX - behanceWidth, contactY);
  
  // Move yPosition past the header section
  yPosition += 10 * 0.5;
  addSpace(3);

  // Horizontal line
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  addSpace(8);

  // Professional Summary
  addText('PROFESSIONAL SUMMARY', 14, true);
  addSpace(2);
  addText(bio.fullBio, 10);
  addSpace(4);

  // Experience Section
  addText('EXPERIENCE', 14, true);
  addSpace(2);

  resume.experience.forEach((job, index) => {
    addText(job.title, 12, true);
    addSpace(1);
    addText(`${job.company} | ${job.location}`, 10);
    addSpace(1);
    addText(job.period, 10);
    addSpace(2);
    
    job.description.forEach((item) => {
      addText(`• ${item}`, 10);
      addSpace(1);
    });
    
    if (index < resume.experience.length - 1) {
      addSpace(2);
    }
  });

  addSpace(4);

  // Education Section
  addText('EDUCATION', 14, true);
  addSpace(2);

  resume.education.forEach((edu, index) => {
    addText(edu.degree, 12, true);
    addSpace(1);
    addText(edu.school, 10);
    addSpace(1);
    addText(edu.period, 10);
    addSpace(1);
    addText(edu.description, 10);
    if (index < resume.education.length - 1) {
      addSpace(2);
    }
  });

  addSpace(4);

  // Skills Section
  addText('SKILLS & EXPERTISE', 14, true);
  addSpace(2);
  const skillsText = bio.skills.map(s => s.name).join(' • ');
  addText(skillsText, 10);
  addSpace(4);

  // Tools Section
  addText('TOOLS & TECHNOLOGIES', 14, true);
  addSpace(2);
  const toolsText = bio.tools.join(' • ');
  addText(toolsText, 10);
  addSpace(4);

  // Achievements Section
  addText('ACHIEVEMENTS & RECOGNITION', 14, true);
  addSpace(2);
  resume.achievements.forEach((achievement, index) => {
    addText(`• ${achievement}`, 10);
    if (index < resume.achievements.length - 1) {
      addSpace(1);
    }
  });

  // Save the PDF
  doc.save('Damilola_Odulesi_Resume.pdf');
}
