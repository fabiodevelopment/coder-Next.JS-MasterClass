export default function handler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Fabio ${codigo}`,
        email: `fabiohpaes${codigo}@gmail.com`
    })
}