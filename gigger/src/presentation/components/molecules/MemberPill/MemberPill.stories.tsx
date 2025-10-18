import { Delete, Edit } from "@mui/icons-material";
import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { RelativeSpeedDial } from "../../atoms/RelativeSpeedDial/RelativeSpeedDial";
import MemberPill from "./MemberPill";

const meta = {
  component: MemberPill,
  tags: ["autodocs"],
} satisfies Meta<typeof MemberPill>;

export default meta;
type Story = StoryObj<typeof MemberPill>;

/**
 * Componente MemberPill - Estado por defecto
 */
export const Default: Story = {
  args: {
    size: "medium",
    title: "John Doe",
    subtitle: "Guitarrista",
    rightElement: null,
  },
};

/**
 * MemberPill con RelativeSpeedDial para acciones
 */
export const WithActions: Story = {
  render: () => (
    <Box sx={{ display: "flex", gap: 2 }}>
      <MemberPill
        size="medium"
        title="John Doe"
        subtitle="Guitarrista"
        rightElement={
          <RelativeSpeedDial
            color="primary"
            size="small"
            direction="left"
            actions={[
              {
                icon: <Edit />,
                name: "Editar",
                onClick: () => console.log("Editar miembro"),
              },
              {
                icon: <Delete />,
                name: "Eliminar",
                onClick: () => console.log("Eliminar miembro"),
              },
            ]}
          />
        }
      />
    </Box>
  ),
};

/**
 * Diferentes tamaños
 */
export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <MemberPill
        size="small"
        title="Small Member"
        subtitle="Rol pequeño"
        rightElement={
          <RelativeSpeedDial
            color="primary"
            size="small"
            direction="left"
            actions={[
              {
                icon: <Edit />,
                name: "Editar",
                onClick: () => console.log("Editar"),
              },
            ]}
          />
        }
      />
      <MemberPill
        size="medium"
        title="Medium Member"
        subtitle="Rol mediano"
        rightElement={
          <RelativeSpeedDial
            color="primary"
            size="medium"
            direction="left"
            actions={[
              {
                icon: <Edit />,
                name: "Editar",
                onClick: () => console.log("Editar"),
              },
            ]}
          />
        }
      />
      <MemberPill
        size="large"
        title="Large Member"
        subtitle="Rol grande"
        rightElement={
          <RelativeSpeedDial
            color="primary"
            size="large"
            direction="left"
            actions={[
              {
                icon: <Edit />,
                name: "Editar",
                onClick: () => console.log("Editar"),
              },
            ]}
          />
        }
      />
    </Box>
  ),
};
