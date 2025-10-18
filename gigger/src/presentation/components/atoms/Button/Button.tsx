import type { ButtonProps as MuiButtonProps } from "@mui/material";
import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * Tipos personalizados para el componente Button
 */
interface CustomButtonProps extends MuiButtonProps {
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
}

/**
 * Componente Button estilizado con Emotion (CSS-in-JS de Material UI)
 *
 * Personalización disponible:
 * - Cambiar colores
 * - Ajustar padding y tamaños
 * - Modificar bordes y transiciones
 * - Agregar hover effects
 */
const StyledButton = styled(MuiButton)<CustomButtonProps>(({ theme }) => ({
  // Estilos base
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 500,
  borderRadius: theme.spacing(1),
  transition: "all 0.3s ease",

  // Estado hover
  "&:hover": {
    boxShadow: theme.shadows[8],
  },

  // Estado activo/focus
  "&:active": {
    transform: "translateY(0)",
  },

  // Estado disabled
  "&:disabled": {
    opacity: 0.6,
  },
}));

/**
 * Componente Button
 *
 * @param props - Props estándar de MUI Button
 * @returns Componente Button personalizado
 *
 * @example
 * ```tsx
 * <Button variant="contained" color="primary">Click me</Button>
 * <Button variant="outlined" size="large">Large button</Button>
 * ```
 */
export const Button = (props: CustomButtonProps) => {
  return <StyledButton {...props} />;
};

export default Button;
