export interface Contact extends Document{
    name: string;
    date: string;
    email: string;
    phone: string;
    subject: string;
    comment: string;
    archived: boolean;
}