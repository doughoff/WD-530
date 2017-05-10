let variable = `a variable`;

let backtickedString = `This is a string.
This is another string.
variable: ${variable}
This is the end.
`;

console.log(backtickedString);

function wrapTextWithTag(text:string , tag: string) : string{
    return `<${tag}>
    ${text}
</${tag}>`;
}
console.log(wrapTextWithTag('A paragraph', 'p'));