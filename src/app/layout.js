import StyledJsxRegistry from "./registry";
import Navbar from "@/components/Navbar";
import GlobalStyle from "../components/globalStyle";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <GlobalStyle />
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
        </main>
      </body>
    </html>
  );
}
