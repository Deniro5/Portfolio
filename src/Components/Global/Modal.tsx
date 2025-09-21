import React, { useRef } from "react";
import styled from "styled-components";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const StyledDialog = styled.dialog`
  border: none;
  border-radius: 0.5rem;
  padding: 1.5rem;
  max-width: 90%;
  background: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: fixed; /* changed from relative / default */
  z-index: 1001;

  ::backdrop {
    background: transparent;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid #3b82f6;
    border-radius: 0.25rem;
  }
`;

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (open) {
      document.body.style.overflow = "hidden";
      if (scrollBarWidth)
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      if (!dialog.open) dialog.showModal();
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      if (dialog.open) dialog.close();
    }

    const handleBackdropClick = (e: MouseEvent) => {
      if (e.target === dialog) {
        onClose();
      }
    };

    dialog.addEventListener("click", handleBackdropClick);

    return () => {
      dialog.removeEventListener("click", handleBackdropClick);
    };
  }, [open, onClose]);

  const handleClose = () => {
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  return (
    <>
      {open && <Overlay />}

      <StyledDialog ref={dialogRef} onKeyDown={handleKeyDown}>
        <CloseButton onClick={handleClose} aria-label="Close modal">
          &times;
        </CloseButton>
        {children}
      </StyledDialog>
    </>
  );
};
