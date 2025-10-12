import type { Section, SectionsResponse } from "../types/section.type";
import { BaseCommand } from "./BaseCommand";

export class GetSectionsCommand extends BaseCommand<any> {
  async execute(): Promise<Section[]> {
    const response = await this.client.get<SectionsResponse>("/v1/react/sections");
    return response.data.data.sections;
  }
}
