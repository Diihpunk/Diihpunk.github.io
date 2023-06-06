// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,ts}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'custom-yellow': '#F7AF07', // Substitua pelo código de cor desejado
//       },
      
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#F7AF07',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
