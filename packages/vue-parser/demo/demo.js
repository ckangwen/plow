const Parser = require('@babel/parser');
const generator = require('@babel/generator').default;

// const str = `
// const vue = {
//   methods: {
//     log(name) {
//       console.log('[name]', name)
//     },
//     table(obj) {
//       if (!obj) return
//       console.table(obj)
//     }
//   }
// }
// `;

// const res = Parser.parse(str);
// const body = res.program.body[0];
// const { properties } = body.declarations[0].init;
// const node = properties[0];

// const log = node.value.properties[0];
// console.log(log);
// const code = generator(log);
// console.log(code);

// const str = `
// const vue = ({ name }) => {}
// `;

// const res = Parser.parse(str);
// const body = res.program.body[0];
// const { init } = body.declarations[0];
// const rest = init.params[0];
// console.log(rest);
// const code = generator(rest);
// console.log(code);
