"use server";

export async function submitForm(data: FormData) {
  "use server";
  const title = data.get("title");
  if (typeof title !== "string") return;
  return await createTodo(title);
}

function createTodo(title: string) {
  return wait({ id: crypto.randomUUID(), title }, 1000);
}

function wait<T>(value: T, duration: number) {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(value), duration);
  });
}
