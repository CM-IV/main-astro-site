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
                        This website uses one <a href="https://github.com/umami-software/umami">open source</a> JavaScript analytics cookie.
                    </div>
                </section>
            </Show>
        </>
    )
}

export { Modal };