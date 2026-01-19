/**
 * 14. How does the JavaScript Engine work
 *
 * The JS Engine (like V8 in Chrome, SpiderMonkey in Firefox) translates JS code into machine code that the processor can execute.
 *
 * Key steps:
 *
 * 1. Parsing:
 *    - The code is parsed into tokens (lexical analysis).
 *    - An Abstract Syntax Tree (AST) is generated.
 *
 * 2. Compilation (JIT - Just-In-Time):
 *    - Interpreter (Ignition in V8): Quickly converts AST to Bytecode and executes it. This starts the app fast.
 *    - Compiler (TurboFan in V8): While the code runs, the "Profiler" watches for "hot" (frequently used) code paths.
 *    - Optimization: The hot bytecode is compiled into highly optimized Machine Code.
 *
 * 3. Execution:
 *    - The machine code runs on the CPU.
 *    - If assumptions made during optimization fail (e.g., a variable type changes dynamically), the engine "Deoptimizes" back to bytecode.
 *
 * 4. Memory Management:
 *    - Call Stack: Stores execution context (primitives, function calls).
 *    - Heap: Stores objects and dynamic data.
 *    - Garbage Collector: Frees up memory (Mark and Sweep algorithm).
 */
