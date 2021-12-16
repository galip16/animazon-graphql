import React from 'react'

function AnimalForm({ setVariables, variables }) {
    return (
        <div>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Slug</label>
                        <input type="text" class="form-control" value={variables.variables.slug} onChange={(e) => setVariables({ ...variables.variables, slug: e.target.value })} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Image</label>
                        <input type="text" class="form-control" value={variables.variables.image} onChange={(e) => setVariables({ ...variables.variables, image: e.target.value })} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Title</label>
                        <input type="text" class="form-control" value={variables.variables.title} onChange={(e) => setVariables({ ...variables.variables, title: e.target.value })} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Stock</label>
                        <input type="number" class="form-control" value={variables.variables.stock} onChange={(e) => setVariables({ ...variables.variables, stock: e.target.value })} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Category</label>
                        <input type="text" class="form-control" value={variables.variables.category} onChange={(e) => setVariables({ ...variables.variables, category: e.target.value })} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Price</label>
                        <input type="text" class="form-control" id="inputEmail4" value={variables.variables.price} onChange={(e) => setVariables({ ...variables.variables, price: e.target.value })} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Name</label>
                        <input type="text" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Rating</label>
                        <input type="number" class="form-control" id="inputEmail4" value={variables.variables.rating} onChange={(e) => setVariables({ ...variables.variables, rating: e.target.value })} />
                    </div>


                </div>

            </form>
        </div>
    )
}

export default AnimalForm
