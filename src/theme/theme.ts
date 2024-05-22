import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors.theme";
import { breakpoints } from "@/lib/constants";

const theme = extendTheme({
	colors: colors,
	breakpoints: breakpoints,
});

export default theme;
