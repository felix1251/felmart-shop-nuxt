import { DefaultConfigOptions } from '@formkit/vue';
import { generateClasses } from '@formkit/themes';

export default <DefaultConfigOptions>{
    config: {
        classes: generateClasses({
            text: {
                label: 'block mb-1 text-secondary font-medium',
                // inner: 'max-w-md mb-1 overflow-hidden',
                input: 'w-full px-3 py-2.5 border font-normal rounded-lg border-gray-400 text-gray-800 placeholder-gray-400 focus-within:outline-primary',
                help: 'text-xs text-gray-500 mt-1',
                messages: 'list-none p-0 mt-1 mb-0',
                message: 'text-red-500 mb-1 text-xs',
            },
            button: {
                input: 'bg-primary hover:bg-primary/[.9] text-white px-5 py-2.5 rounded-lg font-medium',
                help: 'text-xs text-gray-500',
            },
            submit: {
                input: 'bg-blue-700 text-white px-4 py-2 rounded-md',
            },
            form: {
                
            }
        }),
    },
};