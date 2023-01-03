/**
 * CPX CLI
 * 
 * cpx {develop|discover|distribute} 
 */

import { parse } from "https://deno.land/x/std/flags/mod.ts";
// const modules = new Map([
//     ['component','https://raw.githubusercontent.com/chapeaux/cpx-components/main/tasks/serve.js'],
//     ['catalog',{serve:()=>console.log('Catalog Serve')}],
//     ['cdn',{serve:()=>console.log('CDN Serve')}]
// ]);
import config from "./cpx.json" assert { type: "json" };
const apps = config.apps;
async function main(args: string[]) {
    const {
        create, // create {component}
        type,
        name,
        build,
        template,
        path,
        test,
        serve,
        init,
        _
    } = parse(args, {
        collect:'type', 
        alias:{
            'p':'path',
            't':'template'
        }
    });
    const [app = 'chooser', command = 'help'] = _;
    console.dir({
        app,
        command,
        create,
        type,
        name,
        build,
        template,
        path,
        test,
        serve,
        init,
        _
    });

    if (apps[_[0]]) {
        const comp = await import(apps[_[0]]);

        if (typeof comp.start === 'function') {
            comp.start();
        }
    }
    /* 
    New CPX Component Project Template
        {project-shortname}/
            assets/
            components/
            data/
            docs/
            lib/
            plugins/
            tasks/
            deno.json

    New CPX Component Template
        {ns}-{component-shortname}/
            demo/
            src/
            test/

    */ 
}

main(Deno.args);