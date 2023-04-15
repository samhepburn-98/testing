import "styled-components";

export type IPalettePairing = {
    color: string;
    contrastText: string;
};

export type IPaletteVariants = {
    lighter: IPalettePairing
    light: IPalettePairing
    main: IPalettePairing
    dark: IPalettePairing
    darker: IPalettePairing
};

type IPalette = {
    common: {
        black: string
        white: string
    }
    primary: IPaletteVariants
    secondary: IPaletteVariants
    red: IPaletteVariants
    green: IPaletteVariants
    success: IPaletteVariants
    info: IPaletteVariants
    error: IPaletteVariants
    warning: IPaletteVariants
};

export type IResponsiveValues = { sm: number; md: number; lg: number };

export type ITypographyRules = {
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: number;
    fontSize?: string;
    responsiveFontSizes?: IResponsiveValues;
    textTransform?: string
};

export type ITypography = {
    fontFamily: string;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    h1: ITypographyRules;
    h2: ITypographyRules;
    h3: ITypographyRules;
    h4: ITypographyRules;
    h5: ITypographyRules;
    h6: ITypographyRules;
    p: ITypographyRules;
    button: ITypographyRules;
};

export type IShadow = string;
export type IShadows = IShadow[];

declare module "styled-components" {
    export interface DefaultTheme {
        // borderRadius: string;
        palette?: IPalette;
        typography: ITypography;
        shadows: IShadows;
    }
}
