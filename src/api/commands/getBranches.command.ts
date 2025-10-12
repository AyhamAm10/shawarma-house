
import type { Branch, BranchResponse } from "../types/branches.type";
import { BaseCommand } from "./BaseCommand";

export class GetBranchesCommand extends BaseCommand<any> {
  async execute(): Promise<Branch[]> {
    const response = await this.client.get<BranchResponse>("/ocims/branches");
    return response.data.data;
  }
}
