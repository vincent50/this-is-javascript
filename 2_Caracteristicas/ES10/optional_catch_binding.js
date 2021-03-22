//-------------optional catch biding-------------/

try {
    funcionInexistente()
} catch /*(error) ya no es necesario colocarlo*/ {
    console.log(error)
}
