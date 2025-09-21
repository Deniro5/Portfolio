import styled, { css } from "styled-components";
import { Colors } from "../../styles";

type ButtonVariant = "filled" | "outlined";
type ButtonSize = "sm" | "default" | "lg" | "icon";

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s;
  outline: none;
  cursor: pointer;
  text-decoration: none; /* remove underline */

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  svg {
    pointer-events: none;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
  }

  &:focus-visible {
    border-color: ${Colors.offBlack};
    box-shadow: 0 0 0 1px ${Colors.offBlack};
  }

  &[aria-invalid="true"] {
    border-color: var(--destructive);
    box-shadow: 0 0 0 3px var(--destructive);
  }
`;

const variantStyles = {
  filled: css`
    background: ${Colors.black};
    color: ${Colors.white};

    &:hover {
      background: ${Colors.offBlack};
    }
  `,
  outlined: css`
    background: ${Colors.white};
    color: ${Colors.black};
    border: 1px solid ${Colors.lightGrey};
    &:hover {
      background: ${Colors.offWhite};
      color: var(--accent-foreground);
    }
  `,
};

const sizeStyles = {
  default: css`
    height: 2.25rem;
    padding: 0 1rem;
  `,
  sm: css`
    height: 2rem;
    padding: 0 0.75rem;
    font-size: 0.875rem;
  `,
  lg: css`
    height: 2.5rem;
    padding: 0 1.5rem;
  `,
  icon: css`
    height: 2.25rem;
    width: 2.25rem;
    padding: 0;
  `,
};

export const ButtonLink = styled.a<ButtonLinkProps>`
  ${baseStyles}
  ${({ variant = "filled" }) => variantStyles[variant]}
  ${({ size = "default" }) => sizeStyles[size]}
`;
