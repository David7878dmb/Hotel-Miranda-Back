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