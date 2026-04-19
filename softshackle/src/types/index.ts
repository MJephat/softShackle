export type LeadType = "whatsapp" | "call" | "form";
export type LeadUrgency = "emergency" | "scheduled";
export type LeadStatus = "new" | "contacted" | "reviewed";

export interface Lead {
  id: string;
  name: string;
  phone: string;
  service: string;
  urgency: LeadUrgency;
  type: LeadType;
  status: LeadStatus;
  timestamp: string;
  rating?: number;
}

export interface ReviewRequest {
  leadId: string;
  leadName: string;
  sentAt: string;
  rating?: number;
  feedback?: string;
  redirectedToGoogle: boolean;
}

export type Tab = "leads" | "review" | "phases";
