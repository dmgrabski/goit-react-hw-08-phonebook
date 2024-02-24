import { IconButton, useColorMode } from "@chakra-ui/react";
import {
  SunIcon,
  MoonIcon,
  ViewIcon,
  ViewOffIcon,
  WarningIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      marginLeft={"auto"}
      aria-label="Toggle theme"
      top={0}
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggler;