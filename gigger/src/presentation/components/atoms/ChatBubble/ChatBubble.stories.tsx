import type { Meta, StoryObj } from "@storybook/react";
import { ChatBubble } from "./ChatBubble";

const meta = {
  title: "presentation/components/atoms/ChatBubble",
  component: ChatBubble,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Mensaje de un usuario externo (alineado a la izquierda)
 */
export const LeftMessage: Story = {
  args: {
    senderName: "Juan García",
    avatar: "JG",
    content: "¡Hola! ¿Cómo estás?",
    align: "left",
  },
};

/**
 * Mensaje del usuario actual (alineado a la derecha, con color primario)
 */
export const RightMessage: Story = {
  args: {
    senderName: "Tú",
    avatar: "TD",
    content: "¡Bien! ¿Y tú qué tal?",
    align: "right",
  },
};

/**
 * Mensaje largo que demuestra el crecimiento dinámico del componente
 */
export const LongMessage: Story = {
  args: {
    senderName: "María Rodríguez",
    avatar: "MR",
    content:
      "Este es un mensaje mucho más largo para demostrar cómo el componente crece dinámicamente según el contenido del mensaje. Puede contener múltiples líneas y el bubble se ajustará automáticamente al tamaño del texto.",
    align: "left",
  },
};

/**
 * Mensaje con imagen como avatar (URL)
 */
export const WithImageAvatar: Story = {
  args: {
    senderName: "Carlos López",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos&scale=80",
    content: "¡Aquí estoy con mi avatar personalizado!",
    align: "left",
  },
};

/**
 * Conversación completa mostrando múltiples mensajes
 */
export const Conversation: Story = {
  args: {
    senderName: "Demo",
    content: "Demo",
    align: "left",
  },
  render: () => (
    <div>
      <ChatBubble
        senderName="Juan García"
        avatar="JG"
        content="¡Hola! ¿Cómo estás?"
        align="left"
      />
      <ChatBubble
        senderName="Tú"
        avatar="TD"
        content="¡Bien! ¿Y tú qué tal?"
        align="right"
      />
      <ChatBubble
        senderName="Juan García"
        avatar="JG"
        content="Muy bien, gracias por preguntar. ¿Quieres tomar un café?"
        align="left"
      />
      <ChatBubble
        senderName="Tú"
        avatar="TD"
        content="Claro, ¡me encantaría!"
        align="right"
      />
    </div>
  ),
};

/**
 * Mensaje con colores personalizados
 */
export const CustomColors: Story = {
  args: {
    senderName: "Evento especial",
    avatar: "ES",
    content: "Este mensaje tiene colores personalizados",
    align: "left",
    backgroundColor: "#FFE082",
    textColor: "#333",
  },
};

/**
 * Mensaje sin avatar (solo iniciales)
 */
export const WithoutImageAvatar: Story = {
  args: {
    senderName: "Alexandra Martínez",
    content: "Este mensaje usa solo mis iniciales como avatar",
    align: "left",
  },
};
