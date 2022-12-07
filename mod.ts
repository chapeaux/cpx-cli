import { parse } from "https://deno.land/x/std/flags/mod.ts";

async function main(args: string[]) {
    const {
        create, // create {component}
        type,
        name,
        build,
        template,
        path,
        test
    } = parse(args, {
        collect:'type', 
        alias:{
            'p':'path',
            't':'template'
        }
    });
    console.dir({
        create,
        type,
        name,
        build,
        path,
        test
    });

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