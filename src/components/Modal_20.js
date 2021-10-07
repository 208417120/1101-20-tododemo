function Modal_20(props) {

    return (
        <div class="modal">
            <p>Are you sure?</p>
            <button class="btn btn--alt" onClick={props.onClose}>Cancel</button>
            <button class="btn" onClick={props.onClose}>Confirm</button>
        </div>
    )
}

export default Modal_20;