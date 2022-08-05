import { phoneDirectory, Hospital } from "./models";

export function registerHospital(
  creatorId: string,
  name: string,
  phone: string
): string {
  const hospital = new Hospital(creatorId, name, phone);
  phoneDirectory.push(hospital);
  return "Hospital " + name + " has been registered! by " + creatorId;
}

export function getHospitalData(): Array<Hospital> {
  let companies = new Array<Hospital>(phoneDirectory.length);
  for (let i = 0; i < phoneDirectory.length; i++) {
    let company = phoneDirectory[i];
    companies[i] = company;
  }
  return companies;
}

export function getHospital(name: string): Hospital {
  for (let i = 0; i < phoneDirectory.length; i++) {
    let hospital = phoneDirectory[i];
    if (hospital.name == name) {
      return hospital;
    }
  }
  return new Hospital("", "", "");
}
