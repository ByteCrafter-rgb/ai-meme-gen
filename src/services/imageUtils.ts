export function fileToBase64(
    file: File
){

    return new Promise<string>(
        (resolve)=>{

            const reader =
                new FileReader();

            reader.onload =
                ()=>resolve(
                    reader.result as string
                );

            reader.readAsDataURL(
                file
            );

        }
    );

}