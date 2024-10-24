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
  
export const createTableUser= `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  picture VARCHAR(255),
  position VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  joined DATE,
  job_desk TEXT,
  schedule JSON,
  contact VARCHAR(255),
  status ENUM('ACTIVE', 'INACTIVE') NOT NULL
);`