export function testImport(fuck) {
    import(`./inc/${fuck}.js`).then(function (_ref) {
        console.log(_ref.icon)
    });
}
