export interface Section {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  icon: string;
  link: string;
  section_type: string;
  custom_data: {
    color: string;
    badge: string;
  };
}

export interface SectionsResponse {
  success: boolean;
  data: {
    sections: Section[];
    total_count: number;
  };
}
