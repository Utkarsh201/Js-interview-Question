/**
 * 12. Difference between PATCH and PUT
 *
 * Both are HTTP methods used to update resources, but they have different semantics.
 *
 * PUT (Replace):
 * - It is idempotent (calling it multiple times has the same effect).
 * - It REPLACES the entire resource at the target URL with the request payload.
 * - If you send a partial object, the fields missing in the payload might be set to null or default in the database (depending on backend implementation), effectively deleting them.
 *
 * Example:
 * Original User: { id: 1, name: "John", age: 30 }
 * PUT /users/1 with { name: "Jane" }
 * Result User: { id: 1, name: "Jane", age: null } (Age is lost if not handled specifically)
 *
 * PATCH (Modify):
 * - It is NOT necessarily idempotent (though often implemented as such).
 * - It applies PARTIAL updates to the resource.
 * - Used to modify only specific fields without affecting others.
 *
 * Example:
 * Original User: { id: 1, name: "John", age: 30 }
 * PATCH /users/1 with { name: "Jane" }
 * Result User: { id: 1, name: "Jane", age: 30 } (Age is preserved)
 */
