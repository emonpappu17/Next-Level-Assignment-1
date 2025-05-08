# Union and Intersection Types in TypeScript (With Simple Examples)

---

---

## Introduction

As new TypeScript learners, we often get confused between **Union** and **Intersection** types. When we need to work with multiple types for a single variable, these two features are essential.

In this guide, we’ll explain:

- What union and intersection types are,
- When to use them,
- And how they work — with clear examples.

---

## What is a Union Type?

A **Union Type** allows a variable to hold **more than one type** of value.

### Example:

```tsx
let value: string | number;
value = "Hello";
value = 23;
// value = true; // ❌ Error: boolean is not allowed

```

> Here, we used the | symbol to separate types and tell TypeScript that the variable can be either a string or a number.
> 

### Real-World Example:

```tsx
function getMango(quantity: string | number) {
  console.log("Total mango is:", quantity);
}

getMango("213");
getMango(432);

```

> This is useful when your data might come in different formats (e.g., from user input or API responses).
> 

---

## What is an Intersection Type?

An **Intersection Type** combines **multiple types into one**. The resulting type must satisfy **all** of the combined types.

### Example:

```tsx
type Admin = {
  name: string;
  role: string;
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const user: AdminUser = {
  name: "Ronaldo",
  role: "SuperAdmin",
  email: "ronaldo@gmail.com"
};

```

> You use the & symbol to merge types. The resulting object must include all properties from both types.
> 

---

## Union vs Intersection: What’s the Difference?

| Feature     | Union (`|`)                     | Intersection (`&`)                  |

|-------------|----------------------------------|-------------------------------------|

| Meaning     | Either one or the other          | Must satisfy both/all types         |

| Use Case    | When input can vary              | When combining multiple behaviors   |

| Validation  | Accepts **any** of the types     | Requires **all** types' properties  |

---

## ✅ Summary

- **Union types** act like an **OR** operation.
- **Intersection types** act like an **AND** operation.
- Both are powerful tools for building safe and flexible APIs in TypeScript.

---


# any, unknown, and never in TypeScript (With Simple Examples)

---

## Introduction

As a beginner in TypeScript, you may come across three confusing types: (any), (unknown), and (never). They look similar at first but serve **very different purposes**.

In this blog post, we’ll explore:

- What these types mean,
- When to use each of them,
- And how they work — with clear examples.

---

## What is the (any) Type?

The any type basically tells TypeScript:

> "Turn off type checking. This can be anything."
> 

### Example:

```tsx
let data: any;

data = "hello";
data = 42;
data = true;
data = { name: "Messi" };

```

> With any, TypeScript won’t stop you from doing anything—even things that might cause runtime errors.
> 

```tsx
data.doSomething(); // ❌ No error, but may crash if doSomething doesn't exist

```

> Be careful — using any removes all type safety!
> 

---

## What is the (unknown)Type?

The (unknown) type is like a safer version of (any). It means:

> "This could be anything, but you must check its type before using it."
> 

### Example:

```tsx
let value: unknown;

value = "hello";
value = 10;
value = true;

// TypeScript won't allow direct usage:
value.toUpperCase(); // ❌ Error: Object is of type 'unknown'

```

To safely use it, you need to narrow the type first:

```tsx
if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Safe
}

```

> Use unknown when you’re working with external data (like APIs), and want to force a type check before usage.
> 

---

## What is the (never) Type?

The (never) type means:

> "This should never happen."
> 

It represents a value that **never exists** — often used when:

---

### 1. A function **never returns**:

```tsx
function throwError(message: string): never {
  throw new Error(message);
}
```

---

---

## ✅ Summary

- (any) disables TypeScript’s type checking — avoid unless necessary.
- (unknown) forces you to check the type before use — safer alternative to (any).
- (never) represents impossible cases or unreachable code — useful in control flow checks.

These three types may look similar but serve different and important roles in writing robust TypeScript code.

---