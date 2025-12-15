import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://TVUJ_PROJECT_ID.supabase.co";
const SUPABASE_ANON_KEY = "TVUJ_ANON_KEY";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const app = document.getElementById("app");

app.innerHTML = `
  <div class="container">
    <h1>RB SHIFT</h1>
    <p>Čistá funkční aplikace</p>
    <input id="email" placeholder="Email">
    <input id="password" type="password" placeholder="Heslo">
    <button id="login">Přihlásit</button>
  </div>
`;

document.getElementById("login").onclick = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert(error.message);
    return;
  }

  app.innerHTML = "<h2 style='color:white'>Přihlášeno ✅</h2>";
};
