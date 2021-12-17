import React, { useState } from 'react'
import AnimalForm from './AnimalForm'

function AddAnimalButton({ addAnimal }) {

    const [variables, setVariables] = useState(
        {
            slug: "",
            image: "",
            title: "",
            price: "",
            description: ["that", "is", "perfekt"],
            stock: "",
            category: "",
            rating: ""


        })
    return (
        <div>
            {/* Button trigger modal  */}
            <button type="button" data-target="#exampleModalCenter" data-toggle="modal" className="btn btn-primary btn-lg btn-block" >Add an Animal</button>

            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">New Animal Information</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <AnimalForm variables={variables} setVariables={setVariables} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => {
                                console.log(variables);
                                addAnimal({ variables: variables })
                            }} >Add the Animal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAnimalButton
