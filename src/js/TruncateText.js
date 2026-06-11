/**
 * Limits the amount of characters allowed.
 * If the string exceed the limit, will ignore the rest.
 *
 * @param {*} text 
 * @param {*} limit 
 * @returns 
 */
export default
function TruncateText(text = "", limit = 0)
{
    return text.length > limit ? text.substring(0, limit): text;
}