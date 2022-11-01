import { useState, useEffect } from "preact/hooks";
import { Fragment } from "preact";

const Modal = () => {
    const [showModal, setShowModal] = useState(true);

    const resetModal = () => {
        setShowModal(false);
    }

    useEffect(() => {
        const stateData = window.sessionStorage.getItem("MODAL_STATE");
        if (stateData) {
            setShowModal(JSON.parse(stateData));
        }
    }, [])

    useEffect(() => {
        window.sessionStorage.setItem("MODAL_STATE", JSON.stringify(showModal));
    }, [showModal])

    return (
        <Fragment>
            {showModal ? (
                <section onClick={resetModal}>
                    <div class="terminal-alert terminal-alert-error">
                        This website has one <a href="https://github.com/umami-software/umami">open source</a> JavaScript analytics tracker completely independent 
                        of Google Analytics.  Please consider disabling your
                        ad blocker for this site so that I may see where traffic goes.
                    </div>
                </section>
            ) : (null)}
        </Fragment>
    )
}

export { Modal };