/**
 * NEXUSLABS Local Storage Database Engine
 * Persists all backend inquiries, project orders, internship applications, and user accounts.
 */

export interface StoredProjectOrder {
  id: string;
  projectTopic: string;
  domain: string;
  deadline: string;
  requirements?: string;
  studentName: string;
  contact: string;
  college?: string;
  createdAt: string;
}

export interface StoredInternshipApplication {
  id: string;
  roleName: string;
  applicantName: string;
  applicantEmail: string;
  applicantCollege?: string;
  applicantDuration: string;
  createdAt: string;
}

export interface StoredCustomInternship {
  id: string;
  customDomain: string;
  studentName: string;
  contact: string;
  college?: string;
  year?: string;
  workMode: string;
  duration: string;
  skills?: string;
  createdAt: string;
}

export interface StoredDirectInquiry {
  id: string;
  topic: string;
  name: string;
  contact: string;
  message?: string;
  createdAt: string;
}

export interface StoredUserSession {
  name: string;
  email: string;
  role: "student" | "professional";
  loginTime: string;
}

export interface StoredReview {
  id: string;
  name: string;
  collegeOrCompany: string;
  service: string;
  rating: number;
  title: string;
  comment: string;
  avatar?: string;
  createdAt: string;
}

const KEYS = {
  PROJECT_ORDERS: "nexus_project_orders",
  INTERNSHIP_APPLICATIONS: "nexus_internship_apps",
  CUSTOM_INTERNSHIPS: "nexus_custom_internships",
  DIRECT_INQUIRIES: "nexus_direct_inquiries",
  USER_SESSION: "nexus_user_session",
  USER_ACCOUNTS: "nexus_registered_users",
  REVIEWS: "nexus_user_reviews",
};

// Safe helper to read from LocalStorage
function getArray<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error(`Error reading ${key} from localStorage:`, e);
    return [];
  }
}

// Safe helper to write to LocalStorage
function saveArray<T>(key: string, items: T[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(items));
  } catch (e) {
    console.error(`Error saving ${key} to localStorage:`, e);
  }
}

// 1. Project Orders
export function saveProjectOrder(order: Omit<StoredProjectOrder, "id" | "createdAt">): StoredProjectOrder {
  const newOrder: StoredProjectOrder = {
    ...order,
    id: "proj_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
    createdAt: new Date().toISOString(),
  };
  const list = getArray<StoredProjectOrder>(KEYS.PROJECT_ORDERS);
  list.unshift(newOrder);
  saveArray(KEYS.PROJECT_ORDERS, list);
  return newOrder;
}

export function getProjectOrders(): StoredProjectOrder[] {
  return getArray<StoredProjectOrder>(KEYS.PROJECT_ORDERS);
}

// 2. Pre-defined Internship Applications
export function saveInternshipApplication(app: Omit<StoredInternshipApplication, "id" | "createdAt">): StoredInternshipApplication {
  const newApp: StoredInternshipApplication = {
    ...app,
    id: "intern_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
    createdAt: new Date().toISOString(),
  };
  const list = getArray<StoredInternshipApplication>(KEYS.INTERNSHIP_APPLICATIONS);
  list.unshift(newApp);
  saveArray(KEYS.INTERNSHIP_APPLICATIONS, list);
  return newApp;
}

export function getInternshipApplications(): StoredInternshipApplication[] {
  return getArray<StoredInternshipApplication>(KEYS.INTERNSHIP_APPLICATIONS);
}

// 3. Custom Desired Internship Requests
export function saveCustomInternship(req: Omit<StoredCustomInternship, "id" | "createdAt">): StoredCustomInternship {
  const newReq: StoredCustomInternship = {
    ...req,
    id: "custom_intern_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
    createdAt: new Date().toISOString(),
  };
  const list = getArray<StoredCustomInternship>(KEYS.CUSTOM_INTERNSHIPS);
  list.unshift(newReq);
  saveArray(KEYS.CUSTOM_INTERNSHIPS, list);
  return newReq;
}

export function getCustomInternships(): StoredCustomInternship[] {
  return getArray<StoredCustomInternship>(KEYS.CUSTOM_INTERNSHIPS);
}

// 4. Direct Contact / Mentorship Inquiries
export function saveDirectInquiry(inquiry: Omit<StoredDirectInquiry, "id" | "createdAt">): StoredDirectInquiry {
  const newInquiry: StoredDirectInquiry = {
    ...inquiry,
    id: "inq_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
    createdAt: new Date().toISOString(),
  };
  const list = getArray<StoredDirectInquiry>(KEYS.DIRECT_INQUIRIES);
  list.unshift(newInquiry);
  saveArray(KEYS.DIRECT_INQUIRIES, list);
  return newInquiry;
}

export function getDirectInquiries(): StoredDirectInquiry[] {
  return getArray<StoredDirectInquiry>(KEYS.DIRECT_INQUIRIES);
}

// 5. User Auth Session Management
export function saveUserSession(user: StoredUserSession | null): void {
  if (typeof window === "undefined") return;
  if (!user) {
    localStorage.removeItem(KEYS.USER_SESSION);
  } else {
    localStorage.setItem(KEYS.USER_SESSION, JSON.stringify(user));
  }
}

export function getUserSession(): StoredUserSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEYS.USER_SESSION);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

// 6. User Reviews
export function saveStoredReview(review: Omit<StoredReview, "id" | "createdAt">): StoredReview {
  const newReview: StoredReview = {
    ...review,
    id: "rev_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
    createdAt: new Date().toISOString(),
  };
  const list = getArray<StoredReview>(KEYS.REVIEWS);
  list.unshift(newReview);
  saveArray(KEYS.REVIEWS, list);
  return newReview;
}

export function getStoredReviews(): StoredReview[] {
  return getArray<StoredReview>(KEYS.REVIEWS);
}
