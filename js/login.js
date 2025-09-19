// 連接後端
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault(); // 阻止表單自動跳轉

            const email = document.getElementById("loginAcc").value;
            const password = document.getElementById("loginPwd").value;

            try {
                const response = await fetch("http://104.199.223.185/api/v1/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
                    // JSON.stringify({ email, password }) // 把帳密送到後端
                });

                if (!response.ok) {
                    throw new Error("HTTP 錯誤：" + response.status);
                }

                const result = await response.json();
                console.log("後端回應:", result);

                if (result.access_token) {
                    // ✅ 登入成功
                    window.location.href = "member.html";
                } else {
                    // ❌ 登入失敗
                    alert(result.message || "帳號或密碼錯誤");
                }
            } catch (error) {
                console.error("登入請求失敗:", error);
                alert("伺服器錯誤，請稍後再試");
            }
        });
    }
});