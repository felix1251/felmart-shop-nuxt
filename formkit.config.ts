import { DefaultConfigOptions } from '@formkit/vue';
import { generateClasses } from '@formkit/themes';

const formkitThemeConfig:DefaultConfigOptions = {
    config: {
        classes: generateClasses(formkitThemeConfigConstant),
    },
}

export default formkitThemeConfig;