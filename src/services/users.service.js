function makeAuthService() {
  const baseUrl = '/api/users'
  const headers = {
    'Content-Type': 'application/json'
  }

  async function loginUser(phoneNumber, password) {
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          phone_number: phoneNumber,
          password: password
        })
      })

      const data = await response.json()
      return { ok: response.ok, data }
    } catch (error) {
      return { ok: false, message: 'Đã xảy ra lỗi khi gọi API đăng nhập' }
    }
  }

  return { loginUser }
}

export default makeAuthService()
