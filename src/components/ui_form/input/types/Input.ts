export type InputProps = {
  placeholder: string;
  value: string;
  name: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};