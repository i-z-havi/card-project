import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import ThemeProvider from "./providers/ThemeProvider";
import SnackbarProvider from "./providers/SnackBarProvider";
import UserProvider from "./users/providers/UserProvider";
import { MenuProvider } from "./layout/header/topNavBar/menu/MenuProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
        <SnackbarProvider>
          <ThemeProvider>
            <MenuProvider>
              <Layout>
                <Router />
              </Layout>
            </MenuProvider>
          </ThemeProvider>
        </SnackbarProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
