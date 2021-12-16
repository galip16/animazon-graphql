import React, { useState } from 'react'
import AnimalForm from './AnimalForm'

function AddAnimalButton({ addAnimal }) {

    const [variables, setVariables] = useState({
        variables: {
            slug: "ostrich",
            image: "ostrich",
            title: "This a very good animal",
            price: "33.5",
            description: ["that", "is", "perfekt"],
            stock: 12,
            category: "1",
            rating: 5.0
        }
    })
    return (
        <div>
            {/* Button trigger modal  */}
            <button type="button" data-target="#exampleModalCenter" data-toggle="modal" class="btn btn-primary btn-lg btn-block" >Add an Animal</button>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">New Animal Information</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <AnimalForm variables={variables} setVariables={setVariables} />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={() => addAnimal(variables)} >Add the Animal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAnimalButton
