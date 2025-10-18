import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { useState, type ReactNode } from "react";

/**
 * Props para el componente RelativeSpeedDial
 */
export interface RelativeSpeedDialProps {
  /** Icono del botón principal (por defecto: SpeedDialIcon) */
  icon?: ReactNode;
  /** Acciones disponibles en el menú */
  actions: Array<{
    icon: ReactNode;
    name: string;
    onClick: () => void;
  }>;
  /** Dirección de apertura del menú */
  direction?: "up" | "down" | "left" | "right";
  /** Tamaño del botón principal */
  size?: "small" | "medium" | "large";
  /** Color del botón principal */
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
 * RelativeSpeedDial - Componente molécula de SpeedDial con posición relativa
 *
 * Un SpeedDial que se comporta como un elemento normal del flujo del documento,
 * en lugar de flotar sobre la pantalla.
 *
 * @param props - Props del componente
 * @returns Componente RelativeSpeedDial
 *
 * @example
 * ```tsx
 * <RelativeSpeedDial
 *   actions={[
 *     { icon: <Edit />, name: "Editar", onClick: () => {} },
 *     { icon: <Delete />, name: "Eliminar", onClick: () => {} },
 *   ]}
 * />
 * ```
 */

export const RelativeSpeedDial = ({
  icon,
  actions,
  direction = "up",
  size = "medium",
  color = "primary",
}: RelativeSpeedDialProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((value) => !value);
  };

  return (
    <SpeedDial
      ariaLabel="relative-speed-dial"
      icon={icon || <SpeedDialIcon />}
      direction={direction}
      open={isOpen}
      onClick={handleOpen}
      FabProps={{
        color: color,

        sx: {
          boxShadow: "none",
          width: size === "small" ? 40 : size === "large" ? 64 : 56,
          height: size === "small" ? 40 : size === "large" ? 64 : 56,
        },
      }}
      sx={{
        position: "relative !important",
        display: "inline-flex",
        margin: 0,

        "& .MuiSpeedDial-fab": {
          position: "relative",
          margin: 0,
        },

        "& .MuiSpeedDialAction-fab": {
          position: "relative",
        },

        "& .MuiSpeedDial-actions": {
          position: "relative",
          display: "flex",
          gap: 0,
          flexWrap: "wrap",
        },
      }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          sx={{
            boxShadow: "none",
            width: size === "small" ? 40 : size === "large" ? 64 : 56,
            height: size === "small" ? 40 : size === "large" ? 64 : 56,
          }}
          icon={action.icon}
          slotProps={{ tooltip: { title: action.name } }}
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
  );
};

export default RelativeSpeedDial;
