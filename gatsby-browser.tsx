import "@fontsource/montserrat/500.css"; // Weight 500.
import { GatsbyBrowser } from "gatsby";
import GlobalThemeProvider from "./src/theme";

// Wraps the whole app
// eslint-disable-next-line import/prefer-default-export -- Plugins must export known APIs from their gatsby-browser
export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => (
    <GlobalThemeProvider>
        {element}
    </GlobalThemeProvider>
);
