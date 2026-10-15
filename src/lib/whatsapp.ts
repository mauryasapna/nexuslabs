/**
 * Maverick Tech - WhatsApp Template Engine
 * Formats user form inputs into professional, clean WhatsApp messages.
 */

export const MAVERICK_WHATSAPP_NUMBER = "919142479986";

export interface DirectInquiryData {
  name: string;
  contact: string;
  topic: string;
  message?: string;
}

export interface CollegeProjectData {
  projectTitle: string;
  degree: string;
  domain: string;
  deadline: string;
  addons: string[];
  details?: string;
}

export interface InternshipData {
  customName: string;
  customContact: string;
  customDomain: string;
  customCollege?: string;
  customYear?: string;
  customMode: string;
  customDuration: string;
  customSkills?: string;
}

export interface ReviewData {
  name: string;
  collegeOrCompany?: string;
  service: string;
  rating: number;
  title?: string;
  comment: string;
}

/**
 * Builds formatted template for Direct Mentorship & General Inquiries
 */
export function buildDirectInquiryTemplate(data: DirectInquiryData): string {
  const lines = [
    "🚀 *NEW INQUIRY | MAVERICK TECH*",
    "━━━━━━━━━━━━━━━━━━━━",
    `👤 *Full Name:* ${data.name.trim() || "Visitor"}`,
    `📱 *Contact / WhatsApp:* ${data.contact.trim() || "Not provided"}`,
    `🎯 *Topic / Requirement:* ${data.topic.trim() || "General Inquiry"}`,
  ];

  if (data.message && data.message.trim()) {
    lines.push(`💬 *Message / Details:*`);
    lines.push(data.message.trim());
  } else {
    lines.push(`💬 *Message:* Ready to discuss project details.`);
  }

  lines.push("━━━━━━━━━━━━━━━━━━━━");
  lines.push("🌐 _Sent via Maverick Tech Official Website_");

  return lines.join("\n");
}

/**
 * Builds formatted template for College Project Requests
 */
export function buildCollegeProjectTemplate(data: CollegeProjectData): string {
  const lines = [
    "🎓 *COLLEGE PROJECT REQUEST | MAVERICK TECH*",
    "━━━━━━━━━━━━━━━━━━━━",
    `📌 *Project Title:* ${data.projectTitle.trim()}`,
    `🎯 *Degree / Year:* ${data.degree || "B.Tech / MCA"}`,
    `💻 *Domain:* ${data.domain || "Full-Stack / AI"}`,
    `⏳ *Deadline:* ${data.deadline || "Within 1-2 weeks"}`,
  ];

  if (data.addons && data.addons.length > 0) {
    lines.push(`📦 *Included Deliverables:* ${data.addons.join(", ")}`);
  }

  if (data.details && data.details.trim()) {
    lines.push(`📝 *Project Details / Requirements:*`);
    lines.push(data.details.trim());
  }

  lines.push("━━━━━━━━━━━━━━━━━━━━");
  lines.push("🌐 _Sent via Maverick Tech Official Website_");

  return lines.join("\n");
}

/**
 * Builds formatted template for Internship Applications
 */
export function buildInternshipTemplate(data: InternshipData): string {
  const lines = [
    "💼 *INTERNSHIP APPLICATION | MAVERICK TECH*",
    "━━━━━━━━━━━━━━━━━━━━",
    `👤 *Applicant Name:* ${data.customName.trim()}`,
    `📱 *WhatsApp Contact:* ${data.customContact.trim()}`,
    `🏫 *College / Year:* ${data.customCollege || "Student"} (${data.customYear || "Current Year"})`,
    `🎯 *Desired Domain:* ${data.customDomain.trim()}`,
    `⏱️ *Duration & Mode:* ${data.customDuration} | ${data.customMode}`,
  ];

  if (data.customSkills && data.customSkills.trim()) {
    lines.push(`💡 *Skills & Notes:*`);
    lines.push(data.customSkills.trim());
  }

  lines.push("━━━━━━━━━━━━━━━━━━━━");
  lines.push("🌐 _Sent via Maverick Tech Official Website_");

  return lines.join("\n");
}

/**
 * Builds formatted template for Reviews
 */
export function buildReviewTemplate(data: ReviewData): string {
  const lines = [
    "⭐ *CLIENT REVIEW | MAVERICK TECH*",
    "━━━━━━━━━━━━━━━━━━━━",
    `👤 *Client Name:* ${data.name.trim()}`,
    `🏢 *College / Company:* ${data.collegeOrCompany?.trim() || "Verified Client"}`,
    `🛠️ *Service Taken:* ${data.service}`,
    `🌟 *Rating:* ${"★".repeat(data.rating)}${"☆".repeat(5 - data.rating)} (${data.rating} / 5 Stars)`,
  ];

  if (data.title && data.title.trim()) {
    lines.push(`📝 *Title:* ${data.title.trim()}`);
  }

  lines.push(`💬 *Feedback / Experience:*`);
  lines.push(data.comment.trim());
  lines.push("━━━━━━━━━━━━━━━━━━━━");
  lines.push("🌐 _Sent via Maverick Tech Official Website_");

  return lines.join("\n");
}

/**
 * Opens WhatsApp with the formatted template
 */
export function sendToWhatsApp(messageText: string, phone: string = MAVERICK_WHATSAPP_NUMBER): void {
  const encoded = encodeURIComponent(messageText);
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const url = `https://wa.me/${cleanPhone}?text=${encoded}`;
  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }
}
