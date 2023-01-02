export interface ExpenseProps {
    expenses: {
      id: string,
      charge: string,
      amount: number}[],
    handleClearAll: () => void,
    handleDelete: (id: string) => void,
    handleEdit: (id: string) => void
  };
  
export interface FormProps {
    values: {
      charge: string,
      amount: number
    },
    handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    edit: boolean
  }

export interface ItemsProp {
    ItemProp:{
        id: string,
        charge: string,
        amount: number
    },
    handleDelete: (id: string) => void,
    handleEdit: (id: string) => void

}