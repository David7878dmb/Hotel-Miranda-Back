export interface Room extends Document {
    dateAdded: string;
    "room-type": string;
    number: number;
    picture: string;
    "bed-type": string;
    "room-floor": string;
    facilities: string[];
    rate: string;
    discount:number;
    status: string;
  }

  export const createTableRoom= `
  CREATE TABLE IF NOT EXISTS rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  room_type VARCHAR(255) NOT NULL,
  number INT NOT NULL,
  picture VARCHAR(255),
  bed_type VARCHAR(255),
  room_floor VARCHAR(255),
  facilities JSON,
  rate DECIMAL(10, 2),
  discount DECIMAL(5, 2),
  status ENUM('Available', 'Occupied', 'Maintenance') NOT NULL,
  date_added DATE
);
`