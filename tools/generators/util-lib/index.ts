import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (host: Tree, schema: UtilSchema) {
  await libraryGenerator(host, {
    name: `util-${schema.name}`,
    directory: schema.directory,
    tags: `type:util, scope:${schema.directory}`
  });
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}


export interface UtilSchema {
  name: string;
  directory: 'store' | 'api' | 'shared';
}
