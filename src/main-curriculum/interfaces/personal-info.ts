export interface Address {
  region: string;
  city: string;
}
export interface PersonalInfo {
  name: string;
  birthDate: string;
  phone: string;
  email: string;
  address: Address;
  photoUrl: string;
}
