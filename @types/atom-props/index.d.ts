declare module 'atom-props' {
  interface ITextButtonProps {
    onClick?: () => void;
    size?: 'large' | 'middle' | 'small';
    disabled?: boolean;
    children?: any;
  }

  interface IIconButtonProps {
    onClick?: () => void;
  }

  interface ITitleProps {
    onClick?: () => void;
    size: 'large' | 'middle' | 'small';
    title: string;
  }
}
