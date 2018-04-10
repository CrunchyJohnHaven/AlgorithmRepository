// URLify: 
// .trim replaces whitespace from both sides of a string 
// .replace -> build-in javascript method. 's/' replaces white spaces, '/\s/g' replaces whitespaces globally with the 
// next parameter 
function URLify(string) {
    return string.trim().replace(/\s/g, '%20');
}
console.log(URLify("Mr John Smith"))

