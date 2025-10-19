export interface AddressResponse {
  region: string;
  city: string;
}
export interface PersonalInfoResponse {
  name: string;
  birthDate: string;
  phone: string;
  email: string;
  address: AddressResponse;
  photoUrl: string;
}
