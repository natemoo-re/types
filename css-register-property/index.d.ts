export { }

declare global {
    /** 
     * This is a subset of accepted `syntax` values, used to provide more intelligent suggestions
     * 
     * See https://www.w3.org/TR/css-properties-values-api-1/#supported-syntax-strings 
     */
    type CustomPropertySyntax = "<angle>"
        | "<color>"
        | "<custom-ident>"
        | "<image>"
        | "<integer>"
        | "<length-percentage>"
        | "<length>"
        | "<number>"
        | "<percentage>"
        | "<resolution>"
        | "<time>"
        | "<transform-list>"
        | "<url>"
        | "*"
    /** Represents author-specified configuration options for a custom property */
    interface CustomPropertyDescriptorWithSyntax {
        /** The name of the custom property being defined */
        name: string;
        /** 
         * A string representing how this custom property is parsed
         * 
         * Defaults to `"*"`
         */
        syntax: CustomPropertySyntax;
        /**
         * Set to `true` if this custom property should inherit down the DOM tree 
         * 
         * Defaults to `false`
         */
        inherits: boolean;
        /** The initial value of this custom property */
        initialValue: string;
    }
    interface CustomPropertyDescriptor {
        name: string;
        syntax: string;
        inherits: boolean;
        initialValue: string;
    }
    interface CSS {
        /** 
         * The `registerProperty(descriptor)` method registers a custom property 
         * according to the configuration options provided in descriptor.
         * 
         * When it is called, it executes the register a custom property algorithm,
         * passing the options in its descriptor argument as arguments of the same names.
         */
        registerProperty: (descriptor: CustomPropertyDescriptorWithSyntax | CustomPropertyDescriptor) => void;
        
        /**
         * Properties can be unregistered using `unregisterProperty(name)`.
         * 
         * When it is called, it executes the unregister a custom property algorithm, with a name set to its sole argument.
         */
        unregisterProperty: (name: string) => void;
    }
    interface Window {
        CSS: CSS;
    }
}