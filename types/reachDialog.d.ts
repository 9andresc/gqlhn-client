declare module '@reach/dialog' {
  export type DialogProps = {
    isOpen?: boolean;
    onDismiss?: () => void;
    children?: React.ReactNode;
  } & React.HTMLProps<HTMLDivElement>;

  type DialogOverlayProps = {
    initialFocusRef?: React.RefObject<HTMLElement>;
  } & DialogProps;

  type DialogContentProps = {
    children?: React.ReactNode;
  } & React.HTMLProps<HTMLDivElement>;

  export const Dialog: React.FC<DialogProps>;
  export const DialogOverlay: React.FC<DialogOverlayProps>;
  export const DialogContent: React.FC<DialogContentProps>;
}
