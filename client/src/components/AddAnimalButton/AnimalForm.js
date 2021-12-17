import React from 'react'

function AnimalForm({ setVariables, variables }) {



    return (
        <div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Slug</label>
                        <input type="text" className="form-control" value={variables.slug} onChange={(e) => setVariables({ ...variables, slug: e.target.value })} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Image</label>
                        <input type="text" class="form-control" value={variables.image} onChange={(e) => setVariables({ ...variables, image: e.target.value })} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Title</label>
                        <input type="text" class="form-control" value={variables.title} onChange={(e) => setVariables({ ...variables, title: e.target.value })} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Stock</label>
                        <input type="number" class="form-control" value={variables.stock} onChange={(e) => setVariables({ ...variables, stock: Number(e.target.value) })} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Category</label>
                        <input type="text" class="form-control" value={variables.category} onChange={(e) => setVariables({ ...variables, category: e.target.value })} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Price</label>
                        <input type="text" class="form-control" id="inputEmail4" value={variables.price} onChange={(e) => setVariables({ ...variables, price: e.target.value })} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Name</label>
                        <input type="text" class="form-control" id="inputEmail4" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Rating</label>
                        <input type="number" class="form-control" id="inputEmail4" value={variables.rating} onChange={(e) => setVariables({ ...variables, rating: Number(e.target.value) })} />
                    </div>


                </div>

            </form>
        </div>
    )
}

export default AnimalForm
