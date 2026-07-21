const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const outputPath = path.join(__dirname, '..', 'public', 'resume-eisha-wahid.pdf');

const resume = {
  name: 'EISHA WAHID',
  contactLine: 'Islamabad, Pakistan',
  links: 'eishawahid25@gmail.com | linkedin.com/in/eisha-wahid | github.com/eshawahid',
  summary:
    'Fresh BS Artificial Intelligence graduate driven to build intelligent solutions for real-world problems — from facial recognition to phishing detection — using Python, Scikit-learn, TensorFlow, and PyTorch. Experienced across the full data science lifecycle, with a proven track record of taking models from experimentation to production in collaboration with cross-functional teams.',
  sections: [
    {
      title: 'TECHNICAL SKILLS',
      items: [
        'Programming: Python, JavaScript, TypeScript, C++, SQL',
        'Generative AI & LLMs: OpenAI APIs, RAG, Prompt Engineering, AI Agents, Vector Databases (FAISS)',
        'AI & Machine Learning: Machine Learning, Deep Learning, Computer Vision, NLP, Model Optimization, Predictive Modeling',
        'Frameworks & Libraries: TensorFlow, PyTorch, Scikit-learn, XGBoost, OpenCV, Hugging Face, Pandas, NumPy',
        'Backend & Frontend: Flask, REST APIs, React, Docker',
        'Data & Tools: Power BI, Git & GitHub, AWS, GCP, Streamlit, Google Colab',
      ],
    },
    {
      title: 'EDUCATION',
      blocks: [
        [
          'Air University, Islamabad 2022 – 2026',
          'BS Artificial Intelligence',
          'Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, NLP, AI Systems, Data Structures & Algorithms, Cloud Computing, Database Systems, Data Analytics',
        ],
      ],
    },
    {
      title: 'EXPERIENCE',
      entries: [
        {
          header: 'AI & Automation Intern 2024 (4 Months)',
          subheader: 'NexGen Guards Islamabad',
          bullets: [
            'Delivered 2 production AI systems for Siberkoza, collaborating in cross-functional teams to meet client requirements as a technical intern.',
            'Engineered and tested 5–8 Python-based AI automation workflows, reducing manual operational effort by approximately 40% and improving system efficiency across live enterprise operations.',
            'Built real-time AI task execution scripts and automated workflow monitoring tools, enabling intelligent decision pipelines with reduced human intervention.',
            'Optimized data pipelines for reliability and throughput, cutting processing latency and enabling faster ML model inference in real-time production environments.',
            'Performed end-to-end model testing, debugging, and deployment of AI-powered applications, ensuring performance consistency across production systems.',
          ],
        },
        {
          header: 'Facial Recognition Authentication System 2024',
          subheader: 'Siberkoza Islamabad (On-site)',
          bullets: [
            'Developed and tested a real-time ArcFace-based deep learning facial recognition system for enterprise identity verification, delivering a production-ready solution.',
            'Engineered secure backend APIs and access control workflows, integrating the recognition system into live infrastructure with robust authentication logic.',
            'Optimized model inference speed and accuracy through iterative testing and tuning, meeting reliability standards required for live deployment.',
          ],
        },
        {
          header: 'Anti-Phishing URL Detection System 2024',
          subheader: 'Siberkoza Islamabad (On-site)',
          bullets: [
            'Built and optimized ML classification models (Scikit-learn, XGBoost) for malicious URL detection, achieving approximately 93–95% accuracy through systematic feature engineering on domain and lexical attributes.',
            'Designed and deployed the model as a REST API with Flask and developed an interactive frontend testing interface, delivering a complete end-to-end AI-powered cybersecurity application.',
            'Performed rigorous model evaluation, data analysis, and optimization cycles to maximize detection precision and minimize false positives for real-world phishing threat scenarios.',
          ],
        },
      ],
    },
    {
      title: 'AI PROJECTS',
      entries: [
        {
          header: 'FitLens — AI-Powered Virtual Fashion Platform FYP – Deployed',
          subheader: 'React · OpenCV · Flask · REST APIs',
          bullets: [
            'Developed and deployed a full-stack computer vision-based virtual try-on system with body-shape detection and garment alignment, served live via a React frontend.',
            'Designed a real-time React UI for outfit mix-and-match previews, integrated with low-latency Flask backend APIs powering live model responses.',
            'Built an AI-driven styling recommendation engine trained on body type, skin tone, and preference data, and applied Generative AI techniques (reverse image search, garment alignment) for a production-grade product.',
          ],
        },
        {
          header: 'Mental Health Support Chatbot Deployed',
          subheader: 'Generative AI · RAG · OpenAI API · FAISS · Prompt Engineering',
          bullets: [
            'Developed a Generative AI conversational chatbot using the OpenAI API and a RAG pipeline with FAISS vector search, achieving context-aware, semantically accurate responses across multi-turn conversations.',
            'Applied advanced prompt engineering to reduce hallucinations and improve response relevance for sensitive, high-stakes conversations.',
            'Designed adaptive AI agent-style backend conversation logic for personalized, context-retaining dialogue flows.',
          ],
        },
        {
          header: 'Weather Prediction System Deployed',
          subheader: 'IoT · Arduino · Machine Learning · Streamlit',
          bullets: [
            'Collected and preprocessed real-time environmental sensor datasets via Arduino, engineered features, and trained ML prediction models — owning the full pipeline from raw data to deployment.',
            'Built and deployed an interactive Streamlit dashboard for live analytics and predictions, making model outputs accessible through a user-facing interface.',
          ],
        },
      ],
    },
    {
      title: 'ENTREPRENEURSHIP & INNOVATION',
      entries: [
        {
          header: 'Co-Founder — Carvo Ongoing',
          subheader: 'AI Automotive Platform',
          bullets: [
            'Leading technical development of an AI-powered application for predictive vehicle maintenance and diagnostics, designing backend AI agent workflows and recommendation systems connecting users with verified mechanics.',
            'Researching and applying emerging AI technologies for automotive diagnostics, driving continuous product iteration and real-world validation.',
          ],
        },
      ],
    },
    {
      title: 'LEADERSHIP & COLLABORATION',
      entries: [
        {
          header: 'Event Manager & Host 2022 – 2024',
          subheader: 'Air University, Islamabad',
          bullets: [
            'Organized and led national hackathons, AI competitions, and technical seminars, coordinating multidisciplinary teams of developers and stakeholders to deliver high-impact events.',
            'Also served as Deputy Director (Documentation) for one of the university\'s largest tech events and as a Core Member of the AUDAS Society (2024–Present), supporting event planning and student engagement.',
          ],
        },
      ],
    },
    {
      title: 'ACHIEVEMENTS',
      items: [
        'BizzTech 2025 — 3rd Position Nationwide',
        'Hult Prize 2025 — Top 50 Nationwide',
        'AI Wrapper Competition (Ignite x NIC) — Top 10 Nationwide',
        'SOFTEC — FAST Lahore — Data Visualization',
      ],
    },
    {
      title: 'CERTIFICATIONS',
      items: [
        'Generative AI Overview for Project Managers — PMI | PMI Essentials: Seven AI Project Patterns — PMI | Talking to AI: Prompt Engineering for Project Managers — PMI',
        'Machine Learning — DataCamp | Graphic Design — DigitalFlare',
      ],
    },
    {
      title: 'LANGUAGES',
      items: ['English (Professional) | Urdu (Native) | Turkish (Basic)'],
    },
  ],
};

function addText(doc, text, options = {}) {
  const {
    width = 500,
    font = 'Helvetica',
    size = 10,
    color = '#111111',
    indent = 0,
    lineGap = 2,
    align = 'left',
  } = options;
  doc.font(font).fontSize(size).fillColor(color);
  doc.text(text, doc.x + indent, doc.y, { width: width - indent, lineGap, align });
}

function ensureSpace(doc, height) {
  const bottom = doc.page.height - doc.page.margins.bottom;
  if (doc.y + height > bottom) {
    doc.addPage();
  }
}

function sectionHeading(doc, title) {
  ensureSpace(doc, 30);
  doc.moveDown(0.8);
  doc.font('Helvetica-Bold').fontSize(12).fillColor('#111111').text(title);
  doc.moveDown(0.25);
  doc.moveTo(doc.page.margins.left, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).strokeColor('#cccccc').lineWidth(0.7).stroke();
  doc.moveDown(0.45);
}

function bullet(doc, text) {
  const startY = doc.y;
  const x = doc.page.margins.left + 10;
  doc.circle(doc.page.margins.left + 3, doc.y + 5, 1.6).fill('#111111');
  doc.fillColor('#111111').font('Helvetica').fontSize(9.5).text(text, x, startY, {
    width: doc.page.width - doc.page.margins.right - x,
    lineGap: 2,
  });
  doc.moveDown(0.25);
}

const doc = new PDFDocument({ size: 'LETTER', margins: { top: 42, bottom: 42, left: 44, right: 44 } });
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Header
addText(doc, resume.name, { font: 'Helvetica-Bold', size: 18, align: 'center', width: 520 });
doc.moveDown(0.15);
addText(doc, resume.contactLine, { size: 10.5, align: 'center', width: 520 });
doc.moveDown(0.05);
addText(doc, resume.links, { size: 10.2, align: 'center', width: 520, color: '#444444' });
doc.moveDown(0.6);

sectionHeading(doc, 'PROFESSIONAL SUMMARY');
addText(doc, resume.summary, { size: 10.3, width: 520, lineGap: 3 });

doc.moveDown(0.35);
for (const section of resume.sections) {
  sectionHeading(doc, section.title);
  if (section.blocks) {
    for (const block of section.blocks) {
      for (const line of block) {
        addText(doc, line, { size: 10.2, width: 520, lineGap: 3 });
      }
      doc.moveDown(0.35);
    }
  }
  if (section.items) {
    for (const item of section.items) {
      bullet(doc, item);
    }
    doc.moveDown(0.15);
  }
  if (section.entries) {
    for (const entry of section.entries) {
      ensureSpace(doc, 72);
      doc.font('Helvetica-Bold').fontSize(10.6).fillColor('#111111').text(entry.header, { width: 520 });
      doc.font('Helvetica').fontSize(10).fillColor('#333333').text(entry.subheader, { width: 520 });
      doc.moveDown(0.15);
      for (const bulletText of entry.bullets) {
        bullet(doc, bulletText);
      }
      doc.moveDown(0.1);
    }
  }
}

doc.end();

stream.on('finish', () => {
  console.log(`Wrote ${outputPath}`);
});
