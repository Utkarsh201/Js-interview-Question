/**
 * 33. How does SSO work.
 *
 * SSO (Single Sign-On) allows a user to log in once and access multiple applications without re-authenticating.
 *
 * Mechanism (CAS - Central Authentication Service):
 * 1. User visits App A. App A sees no session.
 * 2. App A redirects user to the IDP (Identity Provider, e.g., Okta, Auth0).
 * 3. IDP checks for its own cookie. If none, asks user to login.
 * 4. User logs in. IDP sets a cookie on its domain (idp.com).
 * 5. IDP redirects back to App A with a token. App A logs user in.
 *
 * 6. User visits App B. App B sees no session.
 * 7. App B redirects user to IDP.
 * 8. IDP sees its cookie exists (user is logged in).
 * 9. IDP immediately redirects back to App B with a token WITHOUT asking for credentials.
 *
 * Result: User access App A and App B but only typed password once.
 */
