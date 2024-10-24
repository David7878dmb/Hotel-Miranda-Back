export interface Contact extends Document{
    name: string;
    date: string;
    email: string;
    phone: string;
    subject: string;
    comment: string;
    archived: boolean;
}

export const createTableContact = `
CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255),
  comment TEXT,
  archived BOOLEAN NOT NULL DEFAULT FALSE
);
`