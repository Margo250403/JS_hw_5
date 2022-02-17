function wrapTags(str, tag) 
{
     return `<${tag}> ${str} </${tag}>`;
}
var res = wrapTags("Do not give up, the beginning is always the hardest", "mark");

console.log(res);
