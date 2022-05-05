const productsController = {
    edit: (req, res) => {
        res.render("products");
    },
    mostrar: (req, res) => {
        res.render("otro")
    },
    create: (req, res) => {
        res.render("masProducts")
    }
}

module.exports = productsController;