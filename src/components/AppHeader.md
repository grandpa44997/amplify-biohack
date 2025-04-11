# AppHeader.vue

This component is responsible for rendering the main header of the Amplify application. It is displayed across all pages and serves as a central navigation and branding element.

---

## Key Features

- Displays the name or logo of the application.
- Includes navigation links to various sections of the platform.
- Can conditionally show login/logout buttons based on the user's authentication state.

---

## File Location

`src/components/AppHeader.vue`

---

## Dependencies

This component may rely on:

- **Vue Router** for navigation via `<router-link>`.
- **Authentication logic** for conditional rendering (e.g., login/logout buttons).

---

## Example Usage

Here's a simple example of how `AppHeader` is used within a layout:

```vue
<template>
  <v-app>
    <div id="app">
      <app-header />
      <router-view />
      <app-footer />
    </div>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

---

## Props, Events, and Slots

Atualmente, este componente não expõe nenhuma `prop`, `event` ou `slot` personalizável. Qualquer customização deve ser feita diretamente no arquivo `AppHeader.vue`.

---

## Styling Information

Os estilos aplicados usam CSS global ou scoped (via `<style lang="less">`):

- Fonte: Avenir, Helvetica, Arial, sans-serif.
- Cor de texto: `#2c3e50`
- Cor do link ativo: `#42b983`

Você pode editar esses estilos diretamente no bloco `<style>` do componente.

---

## Accessibility Considerations

- Usa HTML semântico, como `<nav>` e listas (`<ul>`, `<li>`), quando aplicável.
- Garante contraste adequado entre o texto e o fundo.
- Botões e links interativos devem conter `aria-labels` ou outros atributos para melhorar a navegação com tecnologias assistivas.

---

## Related Components

- `AppFooter.vue`: geralmente usado em conjunto com o cabeçalho para layout consistente.
- `AuthNav.vue`: pode ser incluído no `AppHeader` para controlar autenticação (login/logout).

---

_Last updated: April 11, 2025_
