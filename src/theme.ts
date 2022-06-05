import { extendTheme } from "@chakra-ui/react";

const focusRing = {
  _focus: {
    ring: 1,
    ringColor: "blue.500",
  },
};

const errorRing = {
  ring: 1,
  ringColor: "red.500",
};

const theme = extendTheme({
  components: {
    Input: {
      variants: {
        filled: {
          field: {
            color: "gray.500",
            backgroundColor: "gray.100",
            border: 0,
            _placeholder: {
              color: "gray.500",
            },
            _focus: {
              backgroundColor: "gray.100",
              ...focusRing._focus,
            },
            _invalid: {
              ...errorRing,
              _focus: {
                ...errorRing,
              },
            },
          },
        },
      },
    },
    Button: {
      variants: {
        primary: {
          ...focusRing,
          color: "white",
          background:
            "linear-gradient(to right, var(--chakra-colors-red-400), var(--chakra-colors-pink-400))",
          fontWeight: "extrabold",
          _hover: {
            boxShadow: "xl",
          },
          _disabled: {
            pointerEvents: "none",
          },
        },
      },
    },
  },
});

export default theme;
