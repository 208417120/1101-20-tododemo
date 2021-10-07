import { useState } from 'react';
import Model_20 from '../components/Modal_20';
import Backdrop_20 from '../components/Backdrop_20'

function Todo_20(props) {
    const [showModal, setShowModal] = useState();

    function showModalHandler() {
        setShowModal(true)
    }

    function closeModalHandler() {
        setShowModal(false)
    }

    return (
        <div >
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={showModalHandler}>Delete</button>
                </div>
            </div>
            {showModal && <Backdrop_20 onClose={closeModalHandler} />}
            {showModal && <Model_20 text='Are you sure?' onClose={closeModalHandler} />}
        </div>
    );
}

export default Todo_20;