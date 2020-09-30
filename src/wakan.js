
let compiler = null;

/* global Wakan */

export async function initCompiler(onPrint) {
    await new Promise((res) => {
        window.addEventListener('load', () => res());
        if (typeof(Wakan) !== 'undefined') {
            res();
        }
    });
    compiler = await Wakan({
        'print': function (text) { onPrint(text) },
        'printErr': function (text) { onPrint(text) },
    });
    await compiler.ready;
}

export function runProgram(program) {
    compiler.FS.writeFile('program.wk', program);
    compiler.callMain(['program.wk']);
}
