export class FileReaderEx extends FileReader {
    readAs(blob, ctx){
        return new Promise((res, rej)=>{
            super.addEventListener('load', ({target}) => res(target.result));
            super.addEventListener('error', ({target}) => rej(target.error));
            super[ctx](blob);
        });
    }

    readAsDataURL(blob){
        return this.readAs(blob, 'readAsDataURL');
    }
}