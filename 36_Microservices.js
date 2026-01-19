/**
 * 36. What are microservices.
 *
 * Architecture style where an application is structured as a collection of services that are:
 *
 * 1. Highly Maintainable and Testable:
 *    - Small codebases.
 *
 * 2. Loosely Coupled:
 *    - Separation of concerns (User Service, Order Service, Payment Service).
 *
 * 3. Independently Deployable:
 *    - Can update Payment Service without restarting User Service.
 *
 * 4. Organized around Business Capabilities:
 *    - Inventory, Billing, Shipping.
 *
 * Communication:
 * - Usually via HTTP/REST or Messaging Queues (RabbitMQ, Kafka).
 *
 * Comparison:
 * - Monolith: Single database, single repo, function calls between modules.
 * - Microservices: Each service HAS ITS OWN DATABASE (Database-per-service pattern), communicates via network.
 */
