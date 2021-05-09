declare module 'module-props' {
  interface IBottomButtonProps {
    onClick?: () => void;
    cancelButton?: { text: string; onClick: () => void; disabled?: boolean };
    confirmButton?: { text: string; onClick: () => void; disabled?: boolean };
    children?: React.ReactNode;
  }

  interface IPopupHeaderProps {
    title: string;
    closeButton?: () => void;
  }
}
