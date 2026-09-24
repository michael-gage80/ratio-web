// Every fact the privacy notice and terms depend on, in one place.
//
// Anything left as null shows on the page as a highlighted [PLACEHOLDER]. While
// `ready` is false the pages carry a "not yet in force" banner and are hidden from
// search engines. Fill every null, have a solicitor review both documents, then set
// ready: true.

export const legal = {
  ready: false,

  // The company that will run Ratio (not yet incorporated).
  company: null as string | null, // e.g. "Ratio Learning Ltd"
  companyNumber: null as string | null, // Companies House number
  registeredOffice: null as string | null, // registered office address
  jurisdictionOfIncorporation: "England and Wales",

  // Contact points.
  privacyEmail: null as string | null, // e.g. "privacy@…"
  supportEmail: null as string | null, // e.g. "support@…"
  safetyEmail: null as string | null, // reports and online-safety complaints; can be the support inbox
  postalAddress: null as string | null, // for legal notices; can be the registered office

  // Regulatory.
  icoRegistration: null as string | null, // ICO data protection fee registration number

  // Suppliers you still need to choose.
  emailProvider: null as string | null, // who hosts the support/privacy inboxes, e.g. "Google Workspace"

  // Versioning.
  privacyVersion: "1.0",
  termsVersion: "1.0",
  effectiveDate: null as string | null, // e.g. "1 November 2026"
  lastReviewed: "24 September 2026",
};

export type LegalKey = keyof typeof legal;
