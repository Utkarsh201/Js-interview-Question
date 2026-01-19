/**
 * 32. What is OAuth and how does it work.
 *
 * OAuth 2.0 (Open Authorization) is a standard protocol for authorization.
 * It allows a user to grant a third-party application access to their resources on another service (like Google, Facebook) without sharing their password.
 *
 * Roles:
 * 1. Resource Owner (User): You.
 * 2. Client (App): The website trying to access your data.
 * 3. Authorization Server (Google Auth): Verifies identity and issues tokens.
 * 4. Resource Server (Google Drive API): Holds the data.
 *
 * Flow (Authorization Code Flow):
 * 1. User clicks "Login with Google".
 * 2. App redirects user to Google's Authorization URL.
 * 3. User logs in to Google and consents ("Allow App to read contacts?").
 * 4. Google redirects back to App with an "Authorization Code".
 * 5. App sends this Code + Client Secret (server-side) to Google.
 * 6. Google validates and returns an "Access Token" (and Reference Token).
 * 7. App uses Access Token to request data from Resource Server.
 */
