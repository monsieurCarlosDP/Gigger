import type { StackProps, TypographyProps } from "@mui/material";
import { Avatar, Stack, styled, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface MemberPillProps {
  size: "small" | "medium" | "large";
  title: string;
  subtitle: string;
  rightElement: ReactNode;
}

type MemberPillSizes = "small" | "medium" | "large";

const avatarSizeMap: Record<MemberPillSizes, number> = {
  small: 32,
  medium: 48,
  large: 64,
};
const titleSizeMap: Record<MemberPillSizes, TypographyProps["variant"]> = {
  small: "body1",
  medium: "h6",
  large: "h5",
};
const subtitleSizeMap: Record<MemberPillSizes, TypographyProps["variant"]> = {
  small: "caption",
  medium: "body1",
  large: "body2",
};
interface MemberPillWrapper extends StackProps {
  size: MemberPillSizes;
}

const StyledStack = styled(Stack)<MemberPillWrapper>(
  ({ theme, size = "medium" }) => {
    const sizeStyles = {
      small: {
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        fontSize: "0.875rem",
        gap: theme.spacing(1),
      },
      medium: {
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        fontSize: "1rem",
        gap: theme.spacing(1),
      },
      large: {
        padding: theme.spacing(2),
        fontSize: "1.125rem",
        gap: theme.spacing(2),
      },
    };
    return {
      backgroundColor: theme.palette.grey[200],
      borderRadius: 100,
      alignItems: "center",
      ...sizeStyles[size],
    };
  }
);

const getAvatarSize = (size: MemberPillProps["size"]) => {
  return avatarSizeMap[size];
};
const getTitleSize = (size: MemberPillProps["size"]) => {
  return titleSizeMap[size];
};
const getSubtitleSize = (size: MemberPillProps["size"]) => {
  return subtitleSizeMap[size];
};

const MemberPill = ({
  size,
  title,
  subtitle,
  rightElement,
}: MemberPillProps) => {
  return (
    <StyledStack size={size} flexDirection="row">
      <Avatar
        sx={{ width: getAvatarSize(size), height: getAvatarSize(size) }}
        src={
          "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
        }
      />
      <Stack>
        <Typography variant={getTitleSize(size)}>{title}</Typography>
        <Typography variant={getSubtitleSize(size)} color="gray">
          {subtitle}
        </Typography>
      </Stack>
      <Stack sx={{ marginLeft: "auto" }}>{rightElement}</Stack>
    </StyledStack>
  );
};

export default MemberPill;
