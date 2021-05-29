import React from "react"
import {useHistory} from "react-router-dom";

export default function Error404() {
    const history = useHistory()
    const goBackToHome = () => {
        history.push("/")
    }

    return (
        <>
            <div className="error">
                <div className="text-red logo">Netflix</div>
                <div className="error-label">
                    Page not found
                </div>
                <div className="error-404">
                    404
                </div>
                <div className="btn-wrapper btn-go-back">
                    <button className="btn btn-reset text-uppercase" onClick={goBackToHome}>
                        Go back to home
                    </button>
                </div>
            </div>
        </>
    )
}
