import { createContext, useContext, useState, ReactNode } from "react";

interface AlertState {
  isOpen: boolean;
  type: "success" | "error" | "";
  message: string;
}

interface AlertContextValue extends AlertState {
  onOpen: (type: "success" | "error", message: string) => void;
  onClose: () => void;
}

const AlertContext = createContext<AlertContextValue | undefined>(undefined);

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [state, setState] = useState<AlertState>({
    isOpen: false,
    type: "success",
    message: "",
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: "", message: "" }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }
  return context;
};
