'use strict';

module.exports = {
    extends: 'airbnb',
    'rules': {
        'func-names': ['off', 'never'],
        'indent': ['error', 4],
        'newline-per-chained-call': 0,
        'space-unary-ops': 0,
        'prefer-template': 0,
        'object-shorthand': [2, 'methods'],
        'quotes': [2, 'single', {
            avoidEscape: true,
            allowTemplateLiterals: true
        }],
        'class-methods-use-this': 0,
    },
};
