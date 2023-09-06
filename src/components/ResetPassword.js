import React, { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isRequestSent, setIsRequestSent] = useState(false);

    const handleResetPasswordRequest = () => {
        const resetData = {
            email: email,
        };

        const userAPI = "https://64e6bc0e09e64530d18031e6.mockapi.io/emanga/users";
        fetch("URL_API_DANH_SACH_RESET_PASSWORD", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(resetData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Lỗi khi gửi yêu cầu đặt lại mật khẩu");
                }
                return response.json();
            })
            .then((data) => {
                setIsRequestSent(true);
            })
            .catch((error) => {
                console.error("Lỗi khi gửi yêu cầu đặt lại mật khẩu:", error);
            });
    };

    return (
        <div>
            <h1>Quên mật khẩu</h1>
            {isRequestSent ? (
                <p>Yêu cầu đặt lại mật khẩu đã được gửi. Vui lòng kiểm tra email của bạn.</p>
            ) : (
                <>
                    <p>Nhập địa chỉ email để đặt lại mật khẩu của bạn.</p>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleResetPasswordRequest}>Gửi yêu cầu</button>
                </>
            )}
        </div>
    );
};

export default ForgotPassword;
