export type StudentType = {
  id: number;
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  birthday: Date;
  gender: string;
  photo_path: string;
  place_of_birth: string;
  place_of_residence: string;
  factual_residence: string;
  home_phone: string;
  mobile_phone: string;
  extra_mobile_phone: string;
  is_hostel: boolean;
  need_hostel: boolean;
  citizen: string;
  taxpayer_code: string;
  languages: string;
  study_place: string;
  created_at: Date;
  abit_id: number;
  cont_id: number;
  history: {
    firstname: StudentHistoryType[];
    middlename: StudentHistoryType[];
    lastname: StudentHistoryType[];
  };
  skud_card: string;
  snils: string;
  taxpayer_code_ru: string;
  eios_login: string;
  eios_password: string;
};

export type StudentHistoryType = {
  name: string;
  idOrder: number;
  nameOrder: string;
};
