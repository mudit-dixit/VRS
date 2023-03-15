export const buttonTheme = {
	// 1. We can update the base styles
	baseStyle: {
		fontWeight: "bold", // Normally, it is "semibold"
		color: "white",
	},
	// 2. We can add a new button size or extend existing
	sizes: {
		xl: {
			fontSize: "lg",
			px: "32px",
			py: "12px",
		},
	},
	// 3. We can add a new visual variant
	variants: {
		primary: {
			bg: "primary.400",
			color: "secondary.900",
		},
		secondary: {
			bg: "secondary.900",
			color: "primary.400",
			outline: "1px solid",
			outlineColor: " primary.50",
		},
		// 5. We can add responsive variants
		sm: {
			bg: "teal.500",
			fontSize: "md",
		},
	},
	// 6. We can overwrite defaultProps
	defaultProps: {
		size: "xl", // default is md
		variant: "secondary", // default is solid
	},
};
