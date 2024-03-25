"use client"

import { CreatePostWizard } from "~/app/_components/create-post"
import { Modal } from "./modal"

export default function CreatePostModal(){
    return(
        <Modal>
            <CreatePostWizard />
        </Modal>
    )
}