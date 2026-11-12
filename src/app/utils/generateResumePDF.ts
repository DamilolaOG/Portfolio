import { jsPDF } from 'jspdf';
import { resume, bio } from '../data/portfolioData';

export function generateResumePDF() {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 22;
  const contentWidth = pageWidth - 2 * margin;
  let y = 26;

  const checkPage = (needed = 14) => {
    if (y + needed > pageHeight - margin) {
      doc.addPage();
      y = 26;
    }
  };

  const space = (mm: number) => { y += mm; };

  const style = (size: number, weight: 'normal' | 'bold', r: number, g: number, b: number) => {
    doc.setFontSize(size);
    doc.setFont('helvetica', weight);
    doc.setTextColor(r, g, b);
  };

  const wrappedText = (text: string, x: number, maxWidth: number, lineHeight: number) => {
    const lines = doc.splitTextToSize(text, maxWidth);
    lines.forEach((line: string) => {
      checkPage(lineHeight + 2);
      doc.text(line, x, y);
      y += lineHeight;
    });
  };

  const sectionHeading = (title: string) => {
    checkPage(18);
    style(12.5, 'bold', 25, 25, 25);
    doc.text(title, margin, y);
    y += 5;
    doc.setDrawColor(210, 210, 210);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 5;
  };

  // ── Header ───────────────────────────────────────────────────────────────
  style(26, 'bold', 15, 15, 15);
  doc.text(bio.name, margin, y);
  y += 10;

  style(13, 'normal', 90, 90, 90);
  doc.text(bio.tagline, margin, y);
  y += 6.5;

  style(11.5, 'normal', 120, 120, 120);
  doc.text('London, UK', margin, y);

  // Right-aligned contact info — blue
  const contacts = [
    'www.damilolaodulesi.com',
    'damilolaodulesi@gmail.com',
    'linkedin.com/in/damilola-odulesi',
  ];
  style(11, 'normal', 37, 99, 235);
  let contactY = 26;
  contacts.forEach(text => {
    const w = doc.getTextWidth(text);
    doc.text(text, pageWidth - margin - w, contactY);
    contactY += 6;
  });

  y += 10;

  // Header divider
  doc.setDrawColor(170, 170, 170);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  space(10);

  // ── Professional summary ─────────────────────────────────────────────────
  sectionHeading('Professional summary');
  style(12, 'normal', 65, 65, 65);
  wrappedText(bio.fullBio, margin, contentWidth, 6.2);
  space(10);

  // ── Experience ───────────────────────────────────────────────────────────
  sectionHeading('Experience');

  resume.experience.forEach((job, index) => {
    checkPage(24);

    // Title (left) + Period (right) on same line
    style(13, 'bold', 25, 25, 25);
    doc.text(job.title, margin, y);
    style(11, 'normal', 130, 130, 130);
    const periodW = doc.getTextWidth(job.period);
    doc.text(job.period, pageWidth - margin - periodW, y);
    y += 6.5;

    style(12, 'normal', 90, 90, 90);
    doc.text(`${job.company} · ${job.location}`, margin, y);
    y += 10;

    style(12, 'normal', 65, 65, 65);
    job.description.forEach(item => {
      wrappedText(`• ${item}`, margin, contentWidth, 6);
      space(1.5);
    });

    if (index < resume.experience.length - 1) {
      space(5);
      doc.setDrawColor(225, 225, 225);
      doc.setLineWidth(0.2);
      doc.line(margin, y, pageWidth - margin, y);
      space(7);
    }
  });

  space(10);

  // ── Education ────────────────────────────────────────────────────────────
  sectionHeading('Education');

  resume.education.forEach((edu, index) => {
    checkPage(20);

    style(13, 'bold', 25, 25, 25);
    doc.text(edu.degree, margin, y);
    style(11, 'normal', 130, 130, 130);
    const periodW = doc.getTextWidth(edu.period);
    doc.text(edu.period, pageWidth - margin - periodW, y);
    y += 6.5;

    style(12, 'normal', 90, 90, 90);
    doc.text(edu.school, margin, y);
    y += 6;

    style(12, 'normal', 110, 110, 110);
    doc.text(edu.description, margin, y);

    if (index < resume.education.length - 1) {
      space(9);
    }
  });

  space(10);

  // ── Skills & expertise ───────────────────────────────────────────────────
  sectionHeading('Skills & expertise');
  style(12, 'normal', 65, 65, 65);
  wrappedText(bio.skills.map(s => s.name).join('  ·  '), margin, contentWidth, 6.2);
  space(10);

  // ── Tools & technologies ─────────────────────────────────────────────────
  sectionHeading('Tools & technologies');
  style(12, 'normal', 65, 65, 65);
  wrappedText(bio.tools.join('  ·  '), margin, contentWidth, 6.2);
  space(10);

  // ── Achievements ─────────────────────────────────────────────────────────
  sectionHeading('Achievements');
  style(12, 'normal', 65, 65, 65);
  resume.achievements.forEach(item => {
    wrappedText(`• ${item}`, margin, contentWidth, 6);
    space(1.5);
  });

  doc.save('Damilola_Odulesi_Resume.pdf');
}
