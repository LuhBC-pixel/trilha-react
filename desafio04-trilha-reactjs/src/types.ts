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

export interface IPropsFood {
  food: IFood;
  handleDelete: (id: number) => void;
  handleEditFood: (food: IFood) => void;
}

export interface IPropsHeader {
  openModal: () => void;
}

interface IconProps {
  size: number;
}

export interface InputProps {
  name: string;
  icon?: React.ComponentType<IconProps>;
  placeholder?: string;
}

export interface FormProps {
  ref: any;
  onSubmit: (data: IFood) => void;
  initialData?: IEditingFood | {};
}

export interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode;
}
