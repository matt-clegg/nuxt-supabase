export default defineNuxtPlugin((nuxtApp) => {
  const errorState = useState<Error[]>("error", () => []);

  nuxtApp.hook("vue:error", (err: unknown) => {
    errorState.value.push(err as Error);
  });
});
