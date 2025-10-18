import {
  Delete,
  Download,
  Edit,
  Favorite,
  Print,
  Save,
  Settings,
  Share,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import {
  RelativeSpeedDial,
  type RelativeSpeedDialProps,
} from "./RelativeSpeedDial";

const meta = {
  component: RelativeSpeedDial,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box sx={{ padding: 3, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof RelativeSpeedDial>;

export default meta;
type Story = StoryObj<typeof RelativeSpeedDial>;

/**
 * Ejemplo básico del RelativeSpeedDial con acciones comunes
 */
export const Default: Story = {
  args: {
    actions: [
      {
        icon: <Edit />,
        name: "Editar",
        onClick: () => console.log("Editar"),
      },
      {
        icon: <Save />,
        name: "Guardar",
        onClick: () => console.log("Guardar"),
      },
      {
        icon: <Delete />,
        name: "Eliminar",
        onClick: () => console.log("Eliminar"),
      },
    ],
  } as RelativeSpeedDialProps,
};

/**
 * Ejemplo con diferentes colores
 */
export const Colors: Story = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h5">Primary (por defecto)</Typography>
        <RelativeSpeedDial
          color="primary"
          actions={[
            {
              icon: <Edit />,
              name: "Editar",
              onClick: () => console.log("Editar"),
            },
            {
              icon: <Delete />,
              name: "Eliminar",
              onClick: () => console.log("Eliminar"),
            },
          ]}
        />
      </Box>

      <Box>
        <Typography variant="h5">Secondary</Typography>
        <RelativeSpeedDial
          color="secondary"
          actions={[
            {
              icon: <Share />,
              name: "Compartir",
              onClick: () => console.log("Compartir"),
            },
            {
              icon: <Favorite />,
              name: "Favorito",
              onClick: () => console.log("Favorito"),
            },
          ]}
        />
      </Box>

      <Box>
        <Typography variant="h5">Success</Typography>
        <RelativeSpeedDial
          color="success"
          actions={[
            {
              icon: <Save />,
              name: "Guardar",
              onClick: () => console.log("Guardar"),
            },
            {
              icon: <Download />,
              name: "Descargar",
              onClick: () => console.log("Descargar"),
            },
          ]}
        />
      </Box>

      <Box>
        <Typography variant="h5">Error</Typography>
        <RelativeSpeedDial
          color="error"
          actions={[
            {
              icon: <Delete />,
              name: "Eliminar",
              onClick: () => console.log("Eliminar"),
            },
            {
              icon: <Print />,
              name: "Imprimir",
              onClick: () => console.log("Imprimir"),
            },
          ]}
        />
      </Box>
    </Stack>
  ),
};

/**
 * Ejemplo con diferentes tamaños
 */
export const Sizes: Story = {
  render: () => (
    <Stack spacing={4} direction="row" sx={{ alignItems: "flex-start" }}>
      <Box>
        <Typography variant="h5">Small</Typography>
        <RelativeSpeedDial
          size="small"
          actions={[
            {
              icon: <Edit />,
              name: "Editar",
              onClick: () => console.log("Editar"),
            },
            {
              icon: <Delete />,
              name: "Eliminar",
              onClick: () => console.log("Eliminar"),
            },
          ]}
        />
      </Box>

      <Box>
        <Typography variant="h5">Medium (por defecto)</Typography>
        <RelativeSpeedDial
          size="medium"
          actions={[
            {
              icon: <Edit />,
              name: "Editar",
              onClick: () => console.log("Editar"),
            },
            {
              icon: <Delete />,
              name: "Eliminar",
              onClick: () => console.log("Eliminar"),
            },
          ]}
        />
      </Box>

      <Box>
        <Typography variant="h5">Large</Typography>
        <RelativeSpeedDial
          size="large"
          actions={[
            {
              icon: <Edit />,
              name: "Editar",
              onClick: () => console.log("Editar"),
            },
            {
              icon: <Delete />,
              name: "Eliminar",
              onClick: () => console.log("Eliminar"),
            },
          ]}
        />
      </Box>
    </Stack>
  ),
};

/**
 * Ejemplo con diferentes direcciones
 */
export const Directions: Story = {
  render: () => (
    <Stack spacing={8}>
      <Box>
        <Typography variant="h5">Direction: Up (por defecto)</Typography>
        <RelativeSpeedDial
          direction="up"
          actions={[
            {
              icon: <Edit />,
              name: "Editar",
              onClick: () => console.log("Editar"),
            },
            {
              icon: <Delete />,
              name: "Eliminar",
              onClick: () => console.log("Eliminar"),
            },
            {
              icon: <Save />,
              name: "Guardar",
              onClick: () => console.log("Guardar"),
            },
          ]}
        />
      </Box>

      <Box>
        <Typography variant="h5">Direction: Down</Typography>
        <RelativeSpeedDial
          direction="down"
          actions={[
            {
              icon: <Edit />,
              name: "Editar",
              onClick: () => console.log("Editar"),
            },
            {
              icon: <Delete />,
              name: "Eliminar",
              onClick: () => console.log("Eliminar"),
            },
            {
              icon: <Save />,
              name: "Guardar",
              onClick: () => console.log("Guardar"),
            },
          ]}
        />
      </Box>

      <Box>
        <Typography variant="h5">Direction: Left</Typography>
        <RelativeSpeedDial
          direction="left"
          actions={[
            {
              icon: <Edit />,
              name: "Editar",
              onClick: () => console.log("Editar"),
            },
            {
              icon: <Delete />,
              name: "Eliminar",
              onClick: () => console.log("Eliminar"),
            },
            {
              icon: <Save />,
              name: "Guardar",
              onClick: () => console.log("Guardar"),
            },
          ]}
        />
      </Box>

      <Box>
        <Typography variant="h5">Direction: Right</Typography>
        <RelativeSpeedDial
          direction="right"
          actions={[
            {
              icon: <Edit />,
              name: "Editar",
              onClick: () => console.log("Editar"),
            },
            {
              icon: <Delete />,
              name: "Eliminar",
              onClick: () => console.log("Eliminar"),
            },
            {
              icon: <Save />,
              name: "Guardar",
              onClick: () => console.log("Guardar"),
            },
          ]}
        />
      </Box>
    </Stack>
  ),
};

/**
 * Ejemplo con muchas acciones
 */
export const ManyActions: Story = {
  render: () => (
    <RelativeSpeedDial
      color="primary"
      actions={[
        {
          icon: <Edit />,
          name: "Editar",
          onClick: () => console.log("Editar"),
        },
        {
          icon: <Save />,
          name: "Guardar",
          onClick: () => console.log("Guardar"),
        },
        {
          icon: <Delete />,
          name: "Eliminar",
          onClick: () => console.log("Eliminar"),
        },
        {
          icon: <Download />,
          name: "Descargar",
          onClick: () => console.log("Descargar"),
        },
        {
          icon: <Share />,
          name: "Compartir",
          onClick: () => console.log("Compartir"),
        },
        {
          icon: <Print />,
          name: "Imprimir",
          onClick: () => console.log("Imprimir"),
        },
        {
          icon: <Settings />,
          name: "Configurar",
          onClick: () => console.log("Configurar"),
        },
        {
          icon: <Favorite />,
          name: "Favorito",
          onClick: () => console.log("Favorito"),
        },
      ]}
    />
  ),
};

/**
 * Ejemplo interactivo con controles
 */
export const Interactive: Story = {
  args: {
    color: "primary",
    size: "medium",
    direction: "up",
    actions: [
      {
        icon: <Edit />,
        name: "Editar",
        onClick: () => console.log("Editar"),
      },
      {
        icon: <Delete />,
        name: "Eliminar",
        onClick: () => console.log("Eliminar"),
      },
      {
        icon: <Save />,
        name: "Guardar",
        onClick: () => console.log("Guardar"),
      },
    ],
  } as RelativeSpeedDialProps,
};
