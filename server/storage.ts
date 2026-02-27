import type { InsertInquiry, Inquiry } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class MemStorage implements IStorage {
  private id: number = 1;

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const inquiry: Inquiry = { ...insertInquiry, id: this.id++ };
    return inquiry;
  }
}

export const storage = new MemStorage();
