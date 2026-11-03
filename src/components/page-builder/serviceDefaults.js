// Starting content of the Service / Page builder blocks (AVAILABLE_BLOCKS, SERVICE_BLOCKS,
// LocationsServed), so a new block shows in Live Preview straight away instead of rendering empty.
// Keys follow the editors in SectionRenderer.jsx. Photos are Unsplash CDN placeholders, meant to be
// replaced from Media. Form / Packages still need a form / package picked: they only get their texts.

const photo = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?w=${w}&q=70&auto=format&fit=crop`;

const DEFAULTS = {
  HeroBanner: {
    textMode: 'show',
    align: 'left',
    eyebrow: '⭐ 4.9/5 · 42,800+ customers',
    heading: 'Empower Your Business Compliance & Management',
    highlight: 'Compliance & Management',
    subHeading: 'One stop platform for company registration, trademark filing, GST registration, TDS filing, payroll, MSME registration and income tax filing in India.',
    imageMode: 'custom',
    backgroundImage: photo('1486406146926-c627a92ad1ab'),
    imageSide: 'right',
    imageStyle: 'wave',
    primaryButton: { text: 'Get Started', url: '#form' },
    secondaryButton: { text: 'Talk to an expert', url: '/contact' },
    showMeta: true,
    badges: [
      { icon: '✅', text: '100% online process' },
      { icon: '🧑‍💼', text: 'CA / CS experts' },
      { icon: '⚡', text: 'Fast turnaround' },
    ],
    stats: [
      { value: '42,800+', label: 'businesses served' },
      { value: '4.9/5', label: 'average rating' },
      { value: '7–10 days', label: 'typical timeline' },
    ],
    chips: [],
  },
  Overview: {
    heading: 'Service overview',
    content: '<p>This service helps you get registered and compliant without visiting any office. Our experts prepare your documents, file them on the government portal and keep you updated until the work is done.</p><h3>Who needs it</h3><ul><li>New businesses and startups</li><li>Existing businesses that are growing or changing structure</li><li>Anyone who wants the paperwork handled by professionals</li></ul><h3>What you get</h3><p>A dedicated expert, a clear checklist of documents, regular status updates and the final certificate delivered to your inbox.</p>',
  },
  WhyUs: {
    title: 'Why choose us',
    reasons: [
      { icon: '🧑‍💼', title: 'Real experts', description: 'Qualified CA, CS and lawyers handle every case end to end.' },
      { icon: '💰', title: 'Transparent pricing', description: 'One fixed fee with government charges shown upfront. No hidden costs.' },
      { icon: '⚡', title: 'Fast turnaround', description: 'Most filings are submitted within 48 hours of receiving documents.' },
      { icon: '🔒', title: 'Safe & confidential', description: 'Your documents are stored securely and never shared.' },
    ],
  },
  Faq: {
    title: 'Frequently asked questions',
    faqs: [
      { question: 'How long does the process take?', answer: 'Most applications are completed in 7–10 working days, depending on government processing time.' },
      { question: 'Which documents do I need?', answer: 'Usually PAN, Aadhaar, address proof and a photograph. Your expert shares the exact checklist after the first call.' },
      { question: 'Do I need to visit any office?', answer: 'No. The whole process is online: you upload documents and we file everything for you.' },
      { question: 'What happens after I pay?', answer: 'An expert calls you within one working day, collects the documents and starts the filing.' },
    ],
  },
  ServicesIncluded: {
    title: 'Services included',
    services: [
      { icon: '📞', title: 'Expert consultation', description: 'A free call to understand your business and pick the right option.' },
      { icon: '📂', title: 'Document preparation', description: 'We draft and check every form and declaration for you.' },
      { icon: '🏛️', title: 'Government filing', description: 'Application filed on the official portal and followed up until approval.' },
      { icon: '📜', title: 'Certificate delivery', description: 'Final certificate and documents delivered to your email.' },
    ],
  },
  OurProcess: {
    title: 'How it works',
    steps: [
      { title: 'Consultation', description: 'Tell us about your business. An expert explains the requirements and fees.', duration: 'Day 1' },
      { title: 'Documentation', description: 'Upload your documents. We prepare and verify all the forms.', duration: 'Day 1–2' },
      { title: 'Portal filing', description: 'We file the application on the government portal and track it.', duration: 'Day 3–7' },
      { title: 'Delivery', description: 'You receive the approved certificate and next-step guidance.', duration: 'Day 7–10' },
    ],
    button: { text: 'Get started', url: '#form' },
  },
  Form: {
    heading: 'Get a free consultation',
    subHeading: 'Share your details and our expert will call you within 24 hours.',
    note: '🔒 Your details are safe. We never spam.',
  },
  Packages: {
    heading: 'Choose your plan',
    subHeading: 'Transparent pricing, no hidden fees.',
    buttonText: 'Choose plan',
    buttonUrl: '#form',
    priceSuffix: '',
    bestValueLabel: 'BEST VALUE',
    featuresTitle: "What's included",
    includesTitle: 'Services included',
    recommendedLabel: 'POPULAR',
  },
  Highlights: {
    title: '',
    variant: 'cards',
    items: [
      { icon: '🔒', title: '100% confidential', text: 'Bank-grade data security' },
      { icon: '🧑‍💼', title: 'Expert assisted', text: 'Qualified CA / CS team' },
      { icon: '⚡', title: 'Quick filing', text: 'Filed within 48 hours' },
      { icon: '⭐', title: 'Rated 4.9/5', text: 'By 42,800+ customers' },
    ],
  },
  Checklist: {
    title: '✅ Why businesses trust us',
    items: [
      { icon: '✔️', text: 'Real CA / CS experts on every case' },
      { icon: '✔️', text: 'Fixed fees, government charges shown upfront' },
      { icon: '✔️', text: 'Status updates on WhatsApp and email' },
      { icon: '✔️', text: 'Free support after delivery' },
    ],
  },
  CallToAction: {
    variant: 'dark',
    icon: '🎧',
    title: 'Not sure which option is right for you?',
    text: 'Talk to an expert for free. Get a clear breakdown of requirements, timelines and government fees.',
    buttons: [
      { text: 'Request a callback', url: '#form' },
      { text: 'Call us', url: 'tel:+918800028794' },
    ],
    note: '📞 Mon–Sat, 10 am – 7 pm',
  },
  LocationsServed: {
    show: 'yes',
    showCount: 'yes',
    title: 'Locations We Serve',
    subHeading: 'Explore localized {service} across target cities & hubs',
    countLabel: '{count} Available',
  },
};

export const serviceDefaultPayload = (type) => JSON.parse(JSON.stringify(DEFAULTS[type] || {}));
