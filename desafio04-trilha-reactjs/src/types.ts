export interface IFood {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  available: boolean;
}

export interface IEditingFood {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface FormProps {
  ref: any;
  onSubmit: (data: object) => void;
  initialData?: IEditingFood;
};
