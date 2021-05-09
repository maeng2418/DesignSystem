declare module 'template-props' {
  interface IPopupProps {
    visible: boolean;
    title: string;
    closeButton?: () => void;
    cancelButton?: {
      text: string;
      onClick: () => void;
    };
    confirmButton?: {
      text: string;
      onClick: () => void;
    };
    backgroundClick?: () => void;
    selector?: string;
    children: React.ReactNode;
  }
}
