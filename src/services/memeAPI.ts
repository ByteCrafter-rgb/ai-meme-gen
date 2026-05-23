import { fileToBase64 }
from "./imageUtils";

import {
generateOneMeme
}
from "./openrouter";

export async function
generateMemes(
image: File
){

const base64 =

await fileToBase64(
image
);

const promises =

Array(6)

.fill(0)

.map(

(_,i)=>

generateOneMeme(
base64,
i
)

);

const results =

await Promise.allSettled(
promises
);

return results

.filter(

(r)=>

r.status
===

"fulfilled"

)

.map(

(r)=>

r.value

);

}