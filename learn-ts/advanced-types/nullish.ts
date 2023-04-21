const userIn = null


/**
 * here it gonna return the fallback even if we have a ''
*/
const storedData = userIn || "FALLBACK"

/**
 * here it gonna return fallback only if the value null or undifined
*/
const nullishFallback = userIn ?? 'Fallback'

console.log(storedData);