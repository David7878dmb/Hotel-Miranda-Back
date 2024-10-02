export interface User {
    id: number;
    name: string;
    picture: string;
    joined: string;  // Fecha de alta, se puede usar tipo `Date` si lo prefieres
    "job-desk": string; // Cambié "job-desk" a camelCase, lo correcto para TypeScript
    schedule: string[]; // Array de días de la semana
    contact: string;
    status: string; // Puedes restringir el estado a estos dos valores
  }

enum userStatus {
    Active = "Active",
    Inactive = "Inactive"
}
  