module.exports = {
  create: (req, res) => {
    const db = req.app.get('db')
    const { name, description, price, image_url } = req.body

    db.create_product([name, description, price, image_url]).then(() => res.status(200))
      .catch(error => console.log(error)
      )
  },

  getAll: (req, res) => {
    const db = req.app.get('db')
    const { params, query } = req

    db.get_products([params.id, query.desc]).then((products) => res.status(200).send(products))
      .catch(error => console.log(error)
      )
  },

  getOne: (req, res) => {
    const db = req.app.get('db')
    const { params } = req

    db.get_product([params.id]).then((product) => res.status(200).send(product))
      .catch(error => console.log(error))



  },

  update: (req, res) => {
    const db = req.app.get('db')
    const { params, query } = req

    db.update_product([params.id, query.desc]).then((products) => res.status(200).send(products))
      .catch(error => console.log(error)
      )

  },

  delete: (req, res) => {
    const db = req.app.get('db')
    const { params } = req

    db.delete_product(params.id).then(() => res.status(200))
      .catch(error => console.log(error)
      )

  }
}