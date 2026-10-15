/**
 * Maverick Tech - WhatsApp Template Engine
 * Formats user inquiries into clean, emoji-free WhatsApp messages.
 * Format:
 * Maverick Tech
 * Title: ...
 * 
 * Message / Details
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

export type WhatsAppPayload =
  | string
  | {
      source?: string;
      details?: Record<string, string | number | undefined>;
      message?: string;
    };

/**
 * Strips all emojis, decorative border lines, and promotional footers
 */
export function sanitizeWhatsAppText(raw: string): string {
  return raw
    .replace(
      /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}\u{2B55}\u{2934}\u{2935}\u{25AA}\u{25AB}\u{25FE}\u{25FD}\u{25FB}\u{25FC}\u{25B6}\u{25C0}\u{FE0F}\u{200D}]/gu,
      ""
    )
    .replace(/[━─═-]{3,}/g, "")
    .replace(/_?Sent via[^_\n]*_?/gi, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Builds clean format for Direct Mentorship & General Inquiries
 */
export function buildDirectInquiryTemplate(data: DirectInquiryData): string {
  const lines = [
    "Maverick Tech",
    `Title: ${data.topic.trim() || "General Inquiry"}`,
    "",
    `Name: ${data.name.trim() || "Visitor"}`,
    `Contact: ${data.contact.trim() || "Not provided"}`,
  ];

  if (data.message && data.message.trim()) {
    lines.push(`Message: ${data.message.trim()}`);
  } else {
    lines.push(`Message: Ready to discuss project details.`);
  }

  return lines.join("\n");
}

/**
 * Builds clean format for College Project Requests
 */
export function buildCollegeProjectTemplate(data: CollegeProjectData): string {
  const lines = [
    "Maverick Tech",
    `Title: College Project - ${data.projectTitle.trim()}`,
    "",
    `Degree: ${data.degree || "B.Tech / MCA"}`,
    `Domain: ${data.domain || "Full-Stack / AI"}`,
    `Deadline: ${data.deadline || "Within 1-2 weeks"}`,
  ];

  if (data.addons && data.addons.length > 0) {
    lines.push(`Deliverables: ${data.addons.join(", ")}`);
  }

  if (data.details && data.details.trim()) {
    lines.push(`Message: ${data.details.trim()}`);
  }

  return lines.join("\n");
}

/**
 * Builds clean format for Internship Applications
 */
export function buildInternshipTemplate(data: InternshipData): string {
  const lines = [
    "Maverick Tech",
    `Title: Internship Application - ${data.customDomain.trim()}`,
    "",
    `Name: ${data.customName.trim()}`,
    `Contact: ${data.customContact.trim()}`,
    `College: ${data.customCollege || "Student"} (${data.customYear || "Current Year"})`,
    `Duration and Mode: ${data.customDuration} | ${data.customMode}`,
  ];

  if (data.customSkills && data.customSkills.trim()) {
    lines.push(`Message: ${data.customSkills.trim()}`);
  }

  return lines.join("\n");
}

/**
 * Builds clean format for Reviews
 */
export function buildReviewTemplate(data: ReviewData): string {
  const lines = [
    "Maverick Tech",
    `Title: Review - ${data.service}`,
    "",
    `Name: ${data.name.trim()}`,
    `College or Company: ${data.collegeOrCompany?.trim() || "Verified Client"}`,
    `Rating: ${data.rating} / 5 Stars`,
  ];

  if (data.title && data.title.trim()) {
    lines.push(`Subject: ${data.title.trim()}`);
  }

  lines.push(`Message: ${data.comment.trim()}`);

  return lines.join("\n");
}

/**
 * Opens WhatsApp with clean emoji-free format:
 * Top: "Maverick Tech"
 * Title: "Title: ..."
 * Message: clean message lines
 */
export function sendToWhatsApp(
  payload: WhatsAppPayload,
  phone: string = MAVERICK_WHATSAPP_NUMBER
): void {
  let messageText = "";

  if (typeof payload === "string") {
    let cleaned = sanitizeWhatsAppText(payload);
    // Ensure "Maverick Tech" is at the top
    if (!cleaned.toLowerCase().startsWith("maverick tech")) {
      cleaned = `Maverick Tech\n\n${cleaned}`;
    }
    messageText = cleaned;
  } else {
    const lines = [
      "Maverick Tech",
      `Title: ${payload.source || "Inquiry"}`,
      "",
    ];

    if (payload.details) {
      Object.entries(payload.details).forEach(([key, value]) => {
        if (value !== undefined && value !== "") {
          lines.push(`${key}: ${value}`);
        }
      });
    }

    if (payload.message) {
      lines.push(`Message: ${payload.message}`);
    }

    messageText = sanitizeWhatsAppText(lines.join("\n"));
  }

  const encoded = encodeURIComponent(messageText);
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const url = `https://wa.me/${cleanPhone}?text=${encoded}`;
  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }
}
