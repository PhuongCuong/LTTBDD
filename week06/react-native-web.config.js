const { withExpo } = require('@expo/next-adapter');
const withTM = require('next-transpile-modules')(['react-native-vector-icons']);

module.exports = withExpo(
    withTM({
        webpack: (config) => {
            // Thêm cấu hình để xử lý các font custom của react-native-vector-icons
            config.resolve.extensions = [...config.resolve.extensions, '.web.js', '.web.ts', '.web.tsx'];
            config.resolve.alias = {
                ...config.resolve.alias,
                'react-native-vector-icons': 'react-native-vector-icons/dist/MaterialIcons',
            };

            return config;
        },
    })
);
