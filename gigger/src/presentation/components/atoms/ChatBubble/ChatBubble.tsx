import { Avatar, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * Props personalizadas para el componente ChatBubble
 */
interface ChatBubbleProps {
  /** Avatar del usuario - puede ser URL de imagen o iniciales */
  avatar?: string;
  /** Nombre de la persona que escribe */
  senderName: string;
  /** Contenido del mensaje */
  content: string;
  /** Alineación del mensaje: 'left' para otros usuarios, 'right' para el usuario actual */
  align?: "left" | "right";
  /** Color de fondo del bubble */
  backgroundColor?: string;
  /** Color del texto */
  textColor?: string;
}

/**
 * Contenedor del bubble estilizado
 * Crece dinámicamente según el contenido
 */
const BubbleContainer = styled(Box)<{ align: "left" | "right" }>(
  ({ theme, align }) => ({
    display: "flex",
    flexDirection: align === "right" ? "row-reverse" : "row",
    alignItems: "flex-end",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
    maxWidth: "80%",
    marginLeft: align === "right" ? "auto" : 0,
    marginRight: align === "left" ? "auto" : 0,
  })
);

/**
 * Contenedor del avatar
 */
const AvatarWrapper = styled(Box)(() => ({
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

/**
 * Contenedor del contenido (nombre + mensaje)
 */
const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}));

/**
 * Papel estilizado para el bubble
 * Crece automáticamente con el contenido
 */
const StyledPaper = styled(Paper)<{
  align: "left" | "right";
  backgroundColor?: string;
  textColor?: string;
}>(({ theme, align, backgroundColor, textColor }) => ({
  padding: theme.spacing(1.5, 2),
  borderRadius: theme.spacing(2),
  backgroundColor:
    backgroundColor ||
    (align === "right" ? theme.palette.primary.main : theme.palette.grey[200]),
  color: textColor || (align === "right" ? "#fff" : "inherit"),
  wordWrap: "break-word",
  overflow: "hidden",
  textOverflow: "ellipsis",
  // Permite que el bubble crezca con el contenido
  maxWidth: "100%",
  width: "auto",
  boxShadow: theme.shadows[1],
  transition: "box-shadow 0.2s ease",

  "&:hover": {
    boxShadow: theme.shadows[3],
  },
}));

/**
 * Nombre del remitente estilizado
 */
const SenderNameTypography = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: "0.875rem",
  lineHeight: 1.2,
}));

/**
 * Contenido del mensaje estilizado
 */
const MessageContentTypography = styled(Typography)(() => ({
  fontSize: "1rem",
  lineHeight: 1.5,
  wordBreak: "break-word",
}));

/**
 * Componente ChatBubble
 *
 * Bocadillo de conversación para chat que incluye:
 * - Avatar del usuario
 * - Nombre del remitente
 * - Contenido del mensaje
 * - Crecimiento dinámico según el contenido
 *
 * @param props - Props del componente ChatBubble
 * @returns Componente ChatBubble personalizado
 *
 * @example
 * ```tsx
 * <ChatBubble
 *   senderName="Juan"
 *   avatar="https://example.com/avatar.jpg"
 *   content="¡Hola! ¿Cómo estás?"
 *   align="left"
 * />
 *
 * <ChatBubble
 *   senderName="Yo"
 *   avatar="JD"
 *   content="¡Bien! ¿Y tú?"
 *   align="right"
 * />
 * ```
 */
export const ChatBubble = ({
  avatar,
  senderName,
  content,
  align = "left",
  backgroundColor,
  textColor,
}: ChatBubbleProps) => {
  return (
    <BubbleContainer align={align}>
      <AvatarWrapper>
        <Avatar
          alt={senderName}
          src={avatar}
          sx={{
            width: 40,
            height: 40,
            fontSize: "0.875rem",
          }}
        >
          {avatar ? "" : senderName.charAt(0).toUpperCase()}
        </Avatar>
      </AvatarWrapper>

      <ContentWrapper>
        <SenderNameTypography variant="body2">
          {senderName}
        </SenderNameTypography>

        <StyledPaper
          align={align}
          backgroundColor={backgroundColor}
          textColor={textColor}
        >
          <MessageContentTypography variant="body2">
            {content}
          </MessageContentTypography>
        </StyledPaper>
      </ContentWrapper>
    </BubbleContainer>
  );
};

export default ChatBubble;
