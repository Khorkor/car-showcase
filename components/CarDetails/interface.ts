import { CarProps } from "../CarCard/interface";

export interface CarDetailsProp {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}
