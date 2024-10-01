SupaAuth - Supabase Complete Authentication System

**SupaAuth** is a comprehensive authentication system built using [Supabase](https://supabase.com/) and [Next.js](https://nextjs.org/). This system offers secure and flexible authentication methods, providing support for modern authentication standards. It includes login and signup mechanisms with various options like email and password, OAuth, magic links, OTP, and multi-factor authentication (MFA) to enhance security.

---

## Features

- **Email and Password Authentication**: Users can create an account and login with their email and password.
- **OAuth Providers**: Integrated with third-party OAuth providers (e.g., Google, GitHub) to allow users to sign in using their existing accounts.
- **Magic Links**: Passwordless login via magic links sent to the user's email.
- **One-Time Passwords (OTP)**: Users can authenticate using one-time passwords sent to their email or phone.
- **Multi-Factor Authentication (MFA)**: Additional layer of security with MFA, enabling two-factor authentication to secure user accounts.

---

## Authentication Methods

1. **Email and Password Login/Signup**
2. **OAuth Providers (e.g., Google, GitHub)**
3. **Magic Links (Passwordless Authentication)**
4. **One-Time Passwords (OTP)**
5. **Multi-Factor Authentication (MFA)**

---

## Screenshots



### Home Page
![image](https://github.com/user-attachments/assets/eeca47e1-7f9f-4bb3-b330-fce6853a0595)


### Dashboard Settings Page
![image](https://github.com/user-attachments/assets/7de40637-8af1-494f-918c-c22ddd888606)


### MFA Setup Page
![image](https://github.com/user-attachments/assets/82154b2b-a015-48f6-a2ff-18ede1513a4d)


---

## How to Use

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/supaauth.git
    cd supaauth
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up your Supabase project and add the environment variables:
    - `NEXT_PUBLIC_SUPABASE_URL`
    - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. Run the project:
    ```bash
    npm run dev
    ```

5. Access the app in your browser at `http://localhost:3000`.

---

## Tech Stack

- **Frontend**: Next.js
- **Backend**: Supabase
- **Authentication**: Supabase Auth API

---

## Contributing

Feel free to submit issues or pull requests for improvements and fixes.

---

## License

This project is licensed under the MIT License.
