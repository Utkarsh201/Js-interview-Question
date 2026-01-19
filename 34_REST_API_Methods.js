/**
 * 34. What are REST API methods and their differences?
 *
 * REST (Representational State Transfer) uses HTTP verbs to perform CRUD operations.
 *
 * 1. GET:
 *    - Retrieve data.
 *    - Safe (no side effects).
 *    - Idempotent (multiple calls return same result).
 *    - Data in URL params.
 *
 * 2. POST:
 *    - Create new resource.
 *    - NOT Idempotent (calling twice creates two resources).
 *    - Data in Body.
 *
 * 3. PUT:
 *    - Replace/Update entire resource.
 *    - Idempotent.
 *
 * 4. PATCH:
 *    - Partial update.
 *    - Generally Idempotent (depending on implementation).
 *
 * 5. DELETE:
 *    - Remove resource.
 *    - Idempotent (deleting a deleted item is fine, result is same: it's gone).
 */
