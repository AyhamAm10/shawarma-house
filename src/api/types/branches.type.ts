export interface Branch {
  id: string;
  name: string;
  ocims_site_id: string;
  address: string;
  is_active: boolean;
  latitude: number | null;
  longitude: number | null;
  delivery_charge: number;
}

export interface BranchResponse {
  status: string;
  data: Branch[];
}
