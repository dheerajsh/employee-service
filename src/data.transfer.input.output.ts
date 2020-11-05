export class Block {
    blockName: string;
    colName: string[];
    colValue: string[][];
}

export class RootObject {
    pkgName: string;
    procName: string;
    blocks: Block[];
}
