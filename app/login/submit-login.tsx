import { useFormStatus } from "react-dom"

export const SubmitLoginButton = () => {
    const {pending} = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            aria-disabled={pending}
            aria-description="submit login form"
            className="btn btn-submit btn-primary"
        >
            {pending ? "Processing" : "Submit"}
        </button>
    )
}