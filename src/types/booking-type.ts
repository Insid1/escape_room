interface IBookingData {
  name: string;
  phone: string;
  peopleCount: number;
  isLegal: boolean;
}

interface IBookingInput {
  label: string,
  placeHolder: string,
  inputType?: React.HTMLInputTypeAttribute,
  rules?: React.InputHTMLAttributes<HTMLInputElement>
}

export type { IBookingData, IBookingInput };
