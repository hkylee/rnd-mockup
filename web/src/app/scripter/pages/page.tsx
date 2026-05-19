import { redirect } from "next/navigation";

// Page Run 메뉴는 Component Run (/scripter/library) 으로 통합됨.
export default function ScripterPagesRedirect() {
  redirect("/scripter/library");
}
