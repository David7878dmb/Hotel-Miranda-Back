export interface User extends Document{
    username: string;
    password: string;
    picture: string;
    position: string;
    email:string;
    joined: string;
    "job-desk": string; 
    schedule: string[];
    contact: string;
    status: string;
  }

enum userStatus {
    Active = "Active",
    Inactive = "Inactive"
}
  