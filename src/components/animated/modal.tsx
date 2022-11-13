import { createSignal, Show, createEffect, on } from 'solid-js';


const Modal = () => {
    const [showModal, setShowModal] = createSignal(true);

    const disableModal = () => {
        setShowModal(false);
    }

    createEffect(() => {
        const stateData = window.sessionStorage.getItem("MODAL_STATE");
        if (stateData) {
            setShowModal(JSON.parse(stateData));
        }
    })

    createEffect(
        on(
            () => showModal(),
            () => window.sessionStorage.setItem("MODAL_STATE", JSON.stringify(showModal())),
            {
                defer: true
            }
        )
    )

    return (
        <>
            <Show
                when={showModal()}
                fallback={null}
            >
                <section onClick={disableModal}>
                    <div class="terminal-alert terminal-alert-error">
                        This website has one <a href="https://github.com/umami-software/umami">open source</a> JavaScript analytics tracker completely independent 
                        of Google Analytics.  Please consider disabling your
                        ad blocker for this site so that I may see where traffic goes.
                    </div>
                </section>
            </Show>
        </>
    )
}

export { Modal };