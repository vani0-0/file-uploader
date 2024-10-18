import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  react: true,
  svelte: true,
}, {
  rules: {
    'eslint-comments/no-unlimited-disable': 'off'
  }
})
