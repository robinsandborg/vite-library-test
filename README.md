# Vite library test

This is a test of how to use Vite to build a component library. It provides some different ways to work with the library:

## Styling

The library uses CSS Modules to style the components. This means that the styles are scoped to the component and won't affect the rest of the application. This should work well for micro-frontends and other use cases where you want to avoid style conflicts. The reason for using CSS Modules and not something like Tailwind is that all the CSS is "normal" css, and each component has its own styles. This makes it easier for other consumers of the library, who don't want to use React components, to use the styles.

## Lib

The lib folder contains the library code, meaning all the components and their styles should live here. This is what we would ship as a package to npm.

## Src

The src folder contains both a test application, where you can test the components, scratchpad stuff and play around as well as Storybook stories. The stories are used to document the components and their different states, as well as providing a place for the consumers of the library to get CSS code and examples of how to use the components.

## Testing

The library does not contain tests at the moment, but we should add them. With Storybook, we can also integrate with Chromatic in order to provide visual regression testing, which can prove essential to ensure that the library doesn't break when we make changes.
