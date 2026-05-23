export type SavedMeme = {
    id:string;
    url:string;
};

const KEY = "history";

export function saveMeme(
    url:string
){

    const history =
    getHistory();

    history.unshift({

        id:
        crypto.randomUUID(),

        url

    });

    localStorage.setItem(

        KEY,

        JSON.stringify(
            history
        )

    );

}

export function
getHistory():
SavedMeme[] {

return JSON.parse(

localStorage.getItem(
KEY
)

||

"[]"

);

}

export function
clearHistory(){

localStorage.removeItem(
KEY
);

}